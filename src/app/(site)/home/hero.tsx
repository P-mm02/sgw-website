// src/app/(site)/home/hero.tsx

import Link from 'next/link'
import './hero.css'

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner headerText homeHead">
        <Link href="/governance" className="home-hero-pill">
          โครงการรักษ์น้ำบาดาล
        </Link>

        <p className="home-hero-tagline">
          • เจาะบ่อคุณภาพดี ทำความดีตอบแทนแผ่นดิน •
        </p>

        <h1 className="home-hero-heading">WE KNOW GROUNDWATER</h1>

        <p className="home-hero-body">
          เราจะเป็นผู้นำด้านการเจาะบ่อน้ำบาดาลคุณภาพดี
          และสูบพัฒนาน้ำบาดาลขึ้นมาใช้ อย่างถูกหลักวิชาการ
        </p>
        <p className="home-hero-body">
          ป้องกัน ไม่ทำให้ชั้นน้ำเสียหาย ไม่ทำลายสิ่งแวดล้อม ดูแลรักษา
          ทุกโครงการให้มีน้ำคุณภาพดี ใช้ได้อย่างยั่งยืน คุ้มค่าการลงทุน
        </p>

        <div className="home-hero-divider" />

        <p className="home-hero-company">บริษัท สยามกราวด์วอเตอร์ จำกัด</p>
      </div>
    </section>
  )
}
