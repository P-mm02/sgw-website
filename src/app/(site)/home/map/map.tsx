'use client'

import { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import './map.css'
import 'leaflet/dist/leaflet.css' // ✅ add this
import projectsData from '../projects.json'

// ---- Types ----
export type HomeProject = (typeof projectsData)[number]

type HomeMapProps = {
  projects?: HomeProject[]
}

// Dynamically import react-leaflet parts (client only, no SSR)
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
})

// Fallback center (Thailand-ish)
const FALLBACK_CENTER: [number, number] = [15, 100]

export default function HomeMap({ projects }: HomeMapProps) {
  const [leafletReady, setLeafletReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      const L = await import('leaflet')

      const defaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })

      L.Marker.prototype.options.icon = defaultIcon

      setLeafletReady(true)
    })()
  }, [])

  const data: HomeProject[] = projects ?? projectsData

  const validProjects = useMemo(
    () =>
      data.filter(
        (p) =>
          typeof p.lat === 'number' &&
          !Number.isNaN(p.lat) &&
          typeof p.lng === 'number' &&
          !Number.isNaN(p.lng)
      ),
    [data]
  )

  const center: [number, number] = useMemo(() => {
    if (!validProjects.length) return FALLBACK_CENTER

    const latSum = validProjects.reduce((sum, p) => sum + p.lat, 0)
    const lngSum = validProjects.reduce((sum, p) => sum + p.lng, 0)

    return [latSum / validProjects.length, lngSum / validProjects.length]
  }, [validProjects])

  if (!leafletReady) {
    return (
      <section className="home-map-section">
        <div className="home-map-header">
          <div>
            <h2 className="home-map-title">Highlighted Projects Map</h2>
            <p className="home-map-subtitle">
              A selection of Siam Groundwater projects across Thailand and
              neighboring countries.
            </p>
          </div>
          <div className="home-map-stats">
            <div className="home-map-stat-item">
              <span className="home-map-stat-label">Projects shown</span>
              <span className="home-map-stat-value">
                {validProjects.length}
              </span>
            </div>
          </div>
        </div>

        <div className="home-map-wrapper">
          <div className="home-map-loading">Loading map…</div>
        </div>
      </section>
    )
  }

  return (
    <section className="home-map-section">
      <div className="home-map-header">
        <div>
          <h2 className="home-map-title">Highlighted Projects Map</h2>
        </div>
      </div>

      <div className="home-map-wrapper">
        <MapContainer
          center={center}
          zoom={6}
          scrollWheelZoom={true}
          className="home-map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {validProjects.map((p) => (
            <Marker key={p._id} position={[p.lat, p.lng]}>
              <Popup>
                <div className="home-map-popup">
                  <strong className="home-map-popup-title">{p.title}</strong>

                  <div className="home-map-popup-line">Year: {p.year}</div>

                  <div className="home-map-popup-line">
                    Type: {p.projectType}
                  </div>

                  {p.category?.length > 0 && (
                    <div className="home-map-popup-line">
                      Category: {p.category.join(', ')}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}
