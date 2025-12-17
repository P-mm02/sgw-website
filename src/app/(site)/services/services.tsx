// src/app/(site)/home/services.tsx
import Link from 'next/link'
import Image from 'next/image'
import './services.css'

const SERVICES = [
  {
    href: '/services/survey',
    label: 'สำรวจศึกษาน้ำบาดาล น้ำแร่ น้ำพุร้อน EIA',
    alt: 'สำรวจศึกษาน้ำบาดาล',
    image: '/images/logo/services/survey.png',
  },
  {
    href: '/services/drilling',
    label: 'เจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน บ่อสูบลดระดับน้ำ',
    alt: 'เจาะบ่อน้ำบาดาล',
    image: '/images/logo/services/well-drilling.png',
  },
  {
    href: '/services/maintenance',
    label: 'ซ่อมบำรุงรักษาบ่อน้ำบาดาล และเครื่องสูบน้ำ',
    alt: 'ซ่อมบำรุงรักษาบ่อน้ำบาดาล',
    image: '/images/logo/services/maintenance.png',
  },
  {
    href: '/services/consult',
    label: 'แก้ไขโครงการที่เจาะน้ำบาดาลขึ้นมาใช้แล้วมีปัญหาและเสียหาย',
    alt: 'แก้ไขปัญหาโครงการน้ำบาดาล',
    image: '/images/logo/services/consult.png',
  },
]

export default function Services() {
  return (
    <section className="home-services">
      <div className="home-services-illustration">
        <Image
          src="/services/services-BG.png"
          alt="บริการของเรา"
          width={800}
          height={600}
          className="home-services-illustration-image"
          priority
        />
      </div>

      <div className="home-services-content">
        <h2 className="home-services-title">บริการของเรา</h2>

        <div className="home-services-grid">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="home-service-card"
            >
              <div className="home-service-icon">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={120}
                  height={120}
                />
              </div>
              <div className="home-service-text">{service.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
