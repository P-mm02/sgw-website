// src/app/(site)/services/consult/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import './page.css'

export const metadata: Metadata = {
  title: 'บริการให้คำปรึกษาและแก้ไขปัญหาบ่อน้ำบาดาล | Siam Groundwater',
  description:
    'บริการให้คำปรึกษา ตรวจวิเคราะห์ และแก้ไขปัญหาบ่อน้ำบาดาลที่ใช้งานแล้วมีปัญหา เช่น น้ำขุ่น ทรายเข้าบ่อ ปริมาณน้ำลดลง บ่ออุดตัน เครื่องสูบเสียบ่อย พร้อมแนวทางซ่อมฟื้นฟูให้กลับมาใช้งานได้อย่างคุ้มค่า',
  keywords: [
    'แก้ไขปัญหาบ่อน้ำบาดาล',
    'ซ่อมบ่อน้ำบาดาล',
    'ฟื้นฟูบ่อน้ำบาดาล',
    'น้ำขุ่น ทรายเข้าบ่อ',
    'บ่ออุดตัน',
    'ปรับปรุงประสิทธิภาพบ่อ',
    'ตรวจวิเคราะห์บ่อน้ำบาดาล',
    'Siam Groundwater',
    'สยามกราวด์วอเตอร์',
  ],
  alternates: { canonical: '/services/consult' },
  openGraph: {
    title: 'บริการให้คำปรึกษาและแก้ไขปัญหาบ่อน้ำบาดาล | Siam Groundwater',
    description:
      'ตรวจวิเคราะห์สาเหตุและแก้ไขปัญหาบ่อน้ำบาดาลแบบครบวงจร ซ่อมฟื้นฟูให้คุ้มกว่าการเจาะใหม่ ลดความเสี่ยงและเพิ่มประสิทธิภาพการใช้งาน',
    url: '/services/consult',
    type: 'website',
  },
}

export default function ConsultServicePage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการให้คำปรึกษาและแก้ไขปัญหาบ่อน้ำบาดาล',
    provider: {
      '@type': 'Organization',
      name: 'Siam Groundwater',
      url: 'https://siamgroundwater.com',
    },
    areaServed: 'TH',
    serviceType: [
      'ตรวจวิเคราะห์ปัญหาบ่อน้ำบาดาล',
      'ซ่อมและฟื้นฟูบ่อน้ำบาดาล',
      'ปรับปรุงประสิทธิภาพบ่อและระบบสูบน้ำ',
    ],
    description:
      'ให้คำปรึกษา ตรวจวิเคราะห์ และแก้ไขปัญหาบ่อน้ำบาดาลที่ใช้งานแล้วมีปัญหา เช่น น้ำขุ่น ทรายเข้าบ่อ บ่ออุดตัน ปริมาณน้ำลดลง น้ำเค็ม/น้ำเสียปนเปื้อน และเครื่องสูบเสียบ่อย',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://siamgroundwater.com/services/consult',
    },
  }

  return (
    <main className="consult-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      <header className="consult-hero">
        <div className="consult-container consult-hero-inner">
          <nav className="consult-breadcrumb" aria-label="breadcrumb">
            <Link href="/services" className="consult-breadcrumb-link">
              บริการของเรา
            </Link>
            <span className="consult-breadcrumb-sep" aria-hidden="true">
              ›
            </span>
            <span className="consult-breadcrumb-current">
              ให้คำปรึกษาและแก้ไขปัญหาบ่อน้ำบาดาล
            </span>
          </nav>

          <div className="consult-hero-grid">
            <div className="consult-hero-copy">
              <p className="consult-eyebrow">บริการให้คำปรึกษา</p>
              <h1 className="consult-title">
                แก้ไขปัญหาบ่อน้ำบาดาลที่ใช้งานแล้วมีปัญหา
              </h1>
              <p className="consult-lead">
                วิเคราะห์สาเหตุแบบเป็นระบบ
                พร้อมแนวทางซ่อมฟื้นฟูและปรับปรุงประสิทธิภาพ
                เพื่อให้บ่อกลับมาใช้งานได้ “คุ้มค่า” และ “ลดความเสี่ยง”
                ในระยะยาว
              </p>

              <div className="consult-cta">
                <Link
                  href="/contact"
                  className="consult-btn consult-btn-primary"
                >
                  ขอคำปรึกษา / นัดสำรวจหน้างาน
                </Link>
                <Link
                  href="/projects"
                  className="consult-btn consult-btn-ghost"
                >
                  ดูตัวอย่างผลงาน
                </Link>
              </div>

              <ul
                className="consult-bullets"
                aria-label="ประเด็นสำคัญของบริการ"
              >
                <li>ตรวจสภาพบ่อและระบบสูบน้ำแบบครบจบในครั้งเดียว</li>
                <li>เสนอทางเลือกซ่อม/ฟื้นฟูเทียบกับการเจาะใหม่อย่างโปร่งใส</li>
                <li>เน้นความปลอดภัย มาตรฐานงาน และผลลัพธ์ที่วัดได้</li>
              </ul>
            </div>

            <div className="consult-hero-media" aria-label="ภาพประกอบบริการ">
              <div className="consult-hero-image">
                <Image
                  src="/images/services/consult-hero.jpg"
                  alt="ทีมช่างและผู้เชี่ยวชาญกำลังตรวจวิเคราะห์ปัญหาบ่อน้ำบาดาลเพื่อวางแผนแก้ไข"
                  width={1200}
                  height={800}
                  priority
                />
              </div>
              <p className="consult-media-note">
                *เปลี่ยนรูปภาพได้ที่{' '}
                <code>/public/images/services/consult-hero.jpg</code>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="consult-section">
        <div className="consult-container">
          <h2 className="consult-h2">อาการที่พบบ่อยของบ่อน้ำบาดาลที่มีปัญหา</h2>
          <p className="consult-text">
            หากพบอาการเหล่านี้ แนะนำให้ตรวจวิเคราะห์ก่อนตัดสินใจลงทุน
            เพราะหลายกรณี “ซ่อมฟื้นฟูบ่อใหญ่คุ้มกว่าการเจาะบ่อใหม่”
          </p>

          <div className="consult-card-grid">
            <article className="consult-card">
              <h3 className="consult-h3">น้ำขุ่น / ทรายเข้าบ่อ</h3>
              <p className="consult-text">
                มักเกิดจากชั้นกรองเสื่อม สภาพบ่อชำรุด หรือการพัฒนาบ่อไม่เหมาะสม
              </p>
            </article>

            <article className="consult-card">
              <h3 className="consult-h3">ปริมาณน้ำลดลง / สูบได้น้ำน้อย</h3>
              <p className="consult-text">
                เกิดได้จากการอุดตัน การตกตะกอน
                หรือการเปลี่ยนแปลงสภาพชั้นน้ำใต้ดิน
              </p>
            </article>

            <article className="consult-card">
              <h3 className="consult-h3">บ่ออุดตัน / น้ำไหลเข้าบ่อไม่ดี</h3>
              <p className="consult-text">
                ต้องใช้วิธีล้างและฟื้นฟูที่เหมาะสมกับชนิดตะกอนและโครงสร้างบ่อ
              </p>
            </article>

            <article className="consult-card">
              <h3 className="consult-h3">น้ำเค็ม / น้ำเสียปนเปื้อน</h3>
              <p className="consult-text">
                ต้องตรวจสาเหตุเชิงธรณีและโครงสร้างบ่อก่อนเลือกแนวทางแก้ไข
              </p>
            </article>

            <article className="consult-card">
              <h3 className="consult-h3">
                เครื่องสูบเสียบ่อย / ใช้งานไม่เสถียร
              </h3>
              <p className="consult-text">
                อาจเกี่ยวข้องกับคุณภาพน้ำ เศษตะกอน ปัญหากระแสไฟ
                หรือการเลือกขนาดปั๊ม
              </p>
            </article>

            <article className="consult-card">
              <h3 className="consult-h3">เสียง/แรงสั่นผิดปกติ</h3>
              <p className="consult-text">
                เป็นสัญญาณเสี่ยงต่อความเสียหาย ควรหยุดประเมินก่อนบานปลาย
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="consult-section consult-section-alt">
        <div className="consult-container">
          <h2 className="consult-h2">แนวทางบริการของเรา</h2>

          <div className="consult-steps">
            <div className="consult-step">
              <p className="consult-step-num">1</p>
              <div>
                <h3 className="consult-h3">เก็บข้อมูลและตรวจหน้างาน</h3>
                <p className="consult-text">
                  ตรวจสภาพบ่อ ระบบสูบน้ำ ประวัติการใช้งาน อาการปัญหา
                  และข้อจำกัดหน้างาน
                </p>
              </div>
            </div>

            <div className="consult-step">
              <p className="consult-step-num">2</p>
              <div>
                <h3 className="consult-h3">วิเคราะห์สาเหตุแบบเป็นระบบ</h3>
                <p className="consult-text">
                  แยกสาเหตุหลัก/รอง เช่น โครงสร้างบ่อ ตะกอน คุณภาพน้ำ
                  หรือการทำงานของปั๊ม
                </p>
              </div>
            </div>

            <div className="consult-step">
              <p className="consult-step-num">3</p>
              <div>
                <h3 className="consult-h3">เสนอแผนแก้ไขพร้อมตัวเลือก</h3>
                <p className="consult-text">
                  สรุปแนวทางซ่อม/ฟื้นฟู เปรียบเทียบค่าใช้จ่าย ระยะเวลา
                  และผลลัพธ์ที่คาดหวัง
                </p>
              </div>
            </div>

            <div className="consult-step">
              <p className="consult-step-num">4</p>
              <div>
                <h3 className="consult-h3">ดำเนินการและตรวจผลหลังงาน</h3>
                <p className="consult-text">
                  ตรวจสอบความใส ปริมาณน้ำ และความเสถียรของระบบ
                  เพื่อให้ใช้งานได้จริง
                </p>
              </div>
            </div>
          </div>

          <div className="consult-split">
            <div className="consult-split-card">
              <h3 className="consult-h3">เหมาะกับใคร</h3>
              <ul className="consult-list">
                <li>โรงงาน/นิคมอุตสาหกรรมที่ต้องการน้ำใช้อย่างต่อเนื่อง</li>
                <li>โรงแรม รีสอร์ท สปา ที่ต้องการคุณภาพน้ำเสถียร</li>
                <li>หน่วยงานรัฐ/โครงการขนาดใหญ่ที่ต้องการมาตรฐานงาน</li>
                <li>เจ้าของบ่อที่ต้องการลดความเสี่ยงก่อนลงทุนเจาะใหม่</li>
              </ul>
            </div>

            <div className="consult-split-card">
              <h3 className="consult-h3">ผลลัพธ์ที่ลูกค้าคาดหวังได้</h3>
              <ul className="consult-list">
                <li>น้ำใสขึ้น ลดทรายและตะกอน</li>
                <li>น้ำไหลเข้าบ่อดีขึ้น เพิ่มประสิทธิภาพการสูบ</li>
                <li>ลดการเสียหายของเครื่องสูบและค่าใช้จ่ายซ่อมบำรุง</li>
                <li>ได้แผนงานและเหตุผลเชิงวิศวกรรมก่อนตัดสินใจ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="consult-section">
        <div className="consult-container">
          <h2 className="consult-h2">คำถามที่พบบ่อย</h2>

          <div className="consult-faq">
            <details className="consult-faq-item">
              <summary className="consult-faq-q">
                ควรซ่อมฟื้นฟูบ่อหรือเจาะบ่อใหม่ดีกว่า?
              </summary>
              <p className="consult-faq-a">
                ขึ้นอยู่กับสภาพโครงสร้างบ่อ สาเหตุของปัญหา และความคุ้มค่าโดยรวม
                เราจะประเมินแล้วเสนอทางเลือกพร้อมข้อดี-ข้อจำกัดให้ตัดสินใจได้ชัดเจน
              </p>
            </details>

            <details className="consult-faq-item">
              <summary className="consult-faq-q">
                ต้องหยุดใช้น้ำระหว่างตรวจ/ซ่อมไหม?
              </summary>
              <p className="consult-faq-a">
                บางงานอาจต้องหยุดชั่วคราวเพื่อความปลอดภัยและความแม่นยำในการตรวจ
                แต่สามารถวางแผนช่วงเวลาดำเนินการให้กระทบการผลิตน้อยที่สุดได้
              </p>
            </details>

            <details className="consult-faq-item">
              <summary className="consult-faq-q">
                มีบริการตรวจระบบปั๊มและอุปกรณ์ประกอบด้วยไหม?
              </summary>
              <p className="consult-faq-a">
                มี เราตรวจทั้งบ่อและระบบสูบน้ำ
                เพราะปัญหาหลายอย่างเกิดจากการทำงานร่วมกัน เช่น
                ขนาดปั๊มไม่เหมาะสม ตะกอนทำให้สึกหรอ หรือคุณภาพน้ำกระทบอุปกรณ์
              </p>
            </details>
          </div>

          <div className="consult-quote">
            <p className="consult-quote-text">
              “พัฒนาน้ำบาดาลขึ้นมาใช้อย่างชาญฉลาด
              ทรัพยากรน้ำบาดาลของชาติจะมีใช้อย่างยั่งยืน”
            </p>
          </div>

          <div className="consult-bottom-cta">
            <h2 className="consult-h2">พร้อมเริ่มตรวจวิเคราะห์หน้างาน?</h2>
            <p className="consult-text">
              ส่งอาการปัญหาและพื้นที่โครงการ
              เพื่อรับคำแนะนำเบื้องต้นและนัดหมายสำรวจ
            </p>
            <div className="consult-cta">
              <Link href="/contact" className="consult-btn consult-btn-primary">
                ติดต่อทีมงาน
              </Link>
              <Link href="/services" className="consult-btn consult-btn-ghost">
                ดูบริการทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
