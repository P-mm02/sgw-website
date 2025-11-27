// src/app/(site)/home/services.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  return (
    <section className="home-services">
      <div className="services-title-wrapper">
        <h2 className="elementor-heading-title elementor-size-default">
          บริการของเรา
        </h2>
      </div>

      <div className="services-grid">
        <Link href="/survey" className="OurServicesLink clickBtn nowrap">
          <div className="service-icon">
            <Image
              src="/images/logo/logo_SGW_white.svg"
              alt="สำรวจศึกษาน้ำบาดาล"
              width={150}
              height={150}
            />
          </div>
          <div className="service-text">
            สำรวจศึกษาน้ำบาดาล น้ำแร่ น้ำพุร้อน EIA
          </div>
        </Link>

        <Link href="/drilling" className="OurServicesLink clickBtn nowrap">
          <div className="service-icon">
            <Image
              src="/images/logo/logo_SGW_white.svg"
              alt="เจาะบ่อน้ำบาดาล"
              width={150}
              height={150}
            />
          </div>
          <div className="service-text">
            เจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน บ่อสูบลดระดับน้ำ
          </div>
        </Link>

        <Link href="/maintenance" className="OurServicesLink clickBtn nowrap">
          <div className="service-icon">
            <Image
              src="/images/logo/logo_SGW_white.svg"
              alt="ซ่อมบำรุง"
              width={80}
              height={80}
            />
          </div>
          <div className="service-text">
            ซ่อมบำรุงรักษาบ่อน้ำบาดาล และเครื่องสูบน้ำ
          </div>
        </Link>

        <Link
          href="/solving-problem"
          className="OurServicesLink clickBtn nowrap"
        >
          <div className="service-icon">
            <Image
              src="/images/logo/logo_SGW_white.svg"
              alt="แก้ปัญหาโครงการ"
              width={150}
              height={150}
            />
          </div>
          <div className="service-text">
            แก้ไขโครงการที่เจาะน้ำบาดาลขึ้นมาใช้แล้วมีปัญหาและเสียหาย
          </div>
        </Link>
      </div>
    </section>
  )
}
