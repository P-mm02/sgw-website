// src/app/(site)/home/map/map.tsx

export default function HomeMap() {
  return (
    <section className="home-map">
      <h2 className="SP-textHead2" style={{ textAlign: 'center' }}>
        ผลงาน ทุกภูมิภาค ทั่วประเทศ
      </h2>

      <div
        id="map"
        style={{
          height: '40vw',
          width: '80vw',
          maxWidth: '100%',
          margin: '0 auto',
          borderRadius: 10,
          background: '#e5edf0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#203b4c',
        }}
      >
        Map placeholder (Leaflet React component will go here)
      </div>
    </section>
  )
}
