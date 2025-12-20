// src/app/(site)/services/maintenance/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import './page.css'

export const metadata: Metadata = {
  title:
    'ซ่อมบำรุงรักษาบ่อน้ำบาดาลและเครื่องสูบ | เป่าล้างพัฒนาบ่อ | Siam Groundwater',
  description:
    'บริการซ่อมบำรุงรักษาบ่อน้ำบาดาลและเครื่องสูบน้ำ เป่าล้างพัฒนาบ่อ (Air Development) ตรวจเช็ค/ถอนเครื่องสูบ ล้างตะกรัน-สนิม เพิ่มประสิทธิภาพการสูบ ลดค่าไฟ และยืดอายุการใช้งาน',
  keywords: [
    'ซ่อมบำรุงรักษาบ่อน้ำบาดาล',
    'ซ่อมบำรุงเครื่องสูบน้ำบาดาล',
    'เป่าล้างพัฒนาบ่อ',
    'air development',
    'ล้างตะกรัน',
    'ถอนเครื่องสูบ',
    'ตรวจเช็คเครื่องสูบ',
    'บ่อน้ำบาดาลน้ำไหลน้อย',
    'เพิ่มปริมาณน้ำบาดาล',
    'ประหยัดไฟเครื่องสูบ',
  ],
  alternates: { canonical: '/services/maintenance' },
  openGraph: {
    title: 'ซ่อมบำรุงรักษาบ่อน้ำบาดาลและเครื่องสูบ | Siam Groundwater',
    description:
      'เป่าล้างพัฒนาบ่อ ตรวจเช็ค/ถอนเครื่องสูบ ล้างตะกรัน-สนิม เพิ่มประสิทธิภาพการสูบ ลดค่าไฟ และยืดอายุการใช้งาน',
    url: '/services/maintenance',
    type: 'article',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'บริการซ่อมบำรุงรักษาบ่อน้ำบาดาลและเครื่องสูบน้ำ',
  serviceType:
    'Groundwater Well Maintenance, Well Rehabilitation, Pump Maintenance',
  areaServed: 'TH',
  provider: {
    '@type': 'Organization',
    name: 'Siam Groundwater',
    url: 'https://siamgroundwater.com',
  },
  description:
    'บริการเป่าล้างพัฒนาบ่อ ตรวจเช็ค/ถอนเครื่องสูบ ทำความสะอาดตะกรันและสนิม ปรับตั้งการติดตั้งและอัตราการสูบ เพื่อให้บ่อและเครื่องสูบทำงานเต็มประสิทธิภาพและใช้งานได้ยาวนาน',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ทำไมบ่อน้ำบาดาลใช้งานไปนานๆ แล้วน้ำไหลน้อยลง?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'มักเกิดจากตะกอนดินทรายทับถม สนิมเหล็ก/ตะกรันอุดตันกรวดกรุ ท่อกรองน้ำ หรือรอยแตกในหิน ทำให้น้ำไหลเข้าบ่อน้อยลง จึงควรเป่าล้างพัฒนาบ่อเพื่อคืนประสิทธิภาพ',
      },
    },
    {
      '@type': 'Question',
      name: 'ควรเป่าล้างพัฒนาบ่อและตรวจเครื่องสูบบ่อยแค่ไหน?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'โดยทั่วไปแนะนำปีละ 1 ครั้ง หรือปรับตามสภาพการใช้งานจริง เช่น สูบน้ำหนักต่อเนื่อง น้ำมีตะกอนมาก หรือเริ่มเห็นอัตราการสูบลดลง',
      },
    },
    {
      '@type': 'Question',
      name: 'การบำรุงรักษาช่วยประหยัดค่าไฟได้อย่างไร?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'เมื่อบ่อสะอาด น้ำไหลเข้าบ่อดีขึ้น และเครื่องสูบไม่มีตะกรันอุดตัน ระบบจะสูบน้ำได้มีประสิทธิภาพขึ้น ลดการทำงานหนักของเครื่อง จึงช่วยลดพลังงานและค่าไฟ',
      },
    },
  ],
}

export default function MaintenanceServicePage() {
  return (
    <main className="servicePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="serviceBreadcrumbs" aria-label="breadcrumb">
        <ol className="serviceBreadcrumbsList">
          <li>
            <Link href="/services" className="serviceBreadcrumbsLink">
              บริการของเรา
            </Link>
          </li>
          <li aria-current="page" className="serviceBreadcrumbsCurrent">
            ซ่อมบำรุงรักษา
          </li>
        </ol>
      </nav>

      <header className="serviceHero">
        <p className="serviceHeroEyebrow">บริการของเรา</p>
        <h1 className="serviceHeroTitle">
          ซ่อมบำรุงรักษาบ่อน้ำบาดาล และเครื่องสูบน้ำ
        </h1>
        <p className="serviceHeroLead">
          เพื่อให้บ่อน้ำบาดาลและเครื่องสูบมีอายุการใช้งานยาวนาน
          ควรบำรุงรักษาอย่างถูกต้อง ด้วยการ <strong>เป่าล้างพัฒนาบ่อ</strong>{' '}
          และ <strong>ตรวจเช็ค/ซ่อมเครื่องสูบ</strong>{' '}
          ช่วยเพิ่มประสิทธิภาพการสูบ ลดปัญหาน้ำไหลน้อย และลดค่าไฟในระยะยาว
        </p>

        <div className="serviceHeroCtas">
          <Link href="/contact" className="serviceButtonPrimary">
            นัดตรวจหน้างาน / ขอใบเสนอราคา
          </Link>
          <Link href="/projects" className="serviceButtonGhost">
            ดูตัวอย่างโครงการ
          </Link>
        </div>
      </header>

      <section className="serviceSection" aria-labelledby="why">
        <h2 id="why" className="serviceSectionTitle">
          ทำไมต้องซ่อมบำรุงบ่อและเครื่องสูบ?
        </h2>
        <div className="serviceProse">
          <p>
            เมื่อใช้งานไปนานๆ มักเกิด <strong>ตะกอนดินทราย</strong> ทับถมก้นบ่อ
            หรือมี <strong>สนิมเหล็ก/ตะกรัน</strong> อุดตันกรวดกรุ ท่อกรองน้ำ
            รวมถึงการสึกกร่อนของชิ้นส่วนเครื่องสูบ
            ทำให้สูบน้ำได้น้อยลงและกินไฟมากขึ้น
            การบำรุงรักษาเชิงป้องกันช่วยให้ระบบกลับมาทำงานเต็มประสิทธิภาพและลดความเสี่ยงเสียหายใหญ่
          </p>
        </div>
      </section>

      <section className="serviceSection" aria-labelledby="work">
        <h2 id="work" className="serviceSectionTitle">
          งานบริการซ่อมบำรุงหลัก
        </h2>

        <div className="serviceGrid">
          <article className="serviceCard">
            <h3 className="serviceCardTitle">
              เป่าล้างพัฒนาบ่อ (Air Development)
            </h3>
            <p className="serviceCardText">
              เป่าล้างด้วยเครื่องอัดลมเพื่อกำจัดตะกอน สนิม และตะกรันที่สะสมในบ่อ
              ช่วยให้น้ำไหลเข้าบ่อได้ดีขึ้น เหมาะกับบ่อที่เริ่มมีอาการน้ำไหลน้อย
            </p>
            <ul className="serviceList">
              <li>คืนประสิทธิภาพการให้น้ำของบ่อ</li>
              <li>ลดการอุดตันบริเวณท่อกรองและกรวดกรุ</li>
              <li>
                แนะนำทำเป็นรอบ (โดยทั่วไปปีละ 1 ครั้ง หรือตามการใช้งานจริง)
              </li>
            </ul>
          </article>

          <article className="serviceCard">
            <h3 className="serviceCardTitle">
              ตรวจเช็ค/ถอนเครื่องสูบขึ้นมาตรวจซ่อม
            </h3>
            <p className="serviceCardText">
              ตรวจสภาพเครื่องสูบ ท่อส่งน้ำ บูช เพลา ใบพัด
              และทำความสะอาดตะกรัน/สนิม
              เพื่อให้สูบน้ำได้มากขึ้นและทำงานได้เสถียร
            </p>
            <ul className="serviceList">
              <li>ลดปัญหาสูบน้ำได้น้อยลงจากการอุดตัน</li>
              <li>ลดความเสี่ยงเครื่องสูบเสียหายฉับพลัน</li>
              <li>ยืดอายุการใช้งานและลดค่าใช้จ่ายระยะยาว</li>
            </ul>
          </article>

          <article className="serviceCard">
            <h3 className="serviceCardTitle">
              ติดตั้ง/ปรับตั้งเครื่องสูบให้เหมาะสม
            </h3>
            <p className="serviceCardText">
              ช่วยเลือกขนาดเครื่องสูบและปรับตั้งการติดตั้ง/อัตราการสูบให้เหมาะกับปริมาณน้ำและการใช้งานจริง
              ลดการทำงานหนักเกินไปของระบบ
            </p>
            <ul className="serviceList">
              <li>สูบน้ำได้เหมาะสมกับศักยภาพของบ่อ</li>
              <li>ลดการสึกหรอและลดการกินไฟ</li>
              <li>ช่วยให้โครงการมีน้ำใช้เพียงพอและต่อเนื่อง</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="serviceSection" aria-labelledby="benefits">
        <h2 id="benefits" className="serviceSectionTitle">
          ประโยชน์ที่ได้จากการบำรุงรักษา
        </h2>

        <div className="serviceHighlights">
          <div className="serviceHighlight">
            <p className="serviceHighlightTitle">บ่อน้ำบาดาล</p>
            <ul className="serviceList">
              <li>หลังเป่าล้าง บ่อสะอาด น้ำไหลเข้าบ่อได้ดีขึ้น</li>
              <li>ดูแลต่อเนื่องช่วยยืดอายุการใช้งานบ่อได้ยาวนาน</li>
              <li>ลดความเสี่ยงบ่อเสื่อมสภาพจากการอุดตันสะสม</li>
            </ul>
          </div>

          <div className="serviceHighlight">
            <p className="serviceHighlightTitle">เครื่องสูบ</p>
            <ul className="serviceList">
              <li>ประสิทธิภาพดีขึ้น สูบน้ำได้มากขึ้น</li>
              <li>ช่วยประหยัดไฟ เพราะเครื่องทำงานไม่หนักเกินจำเป็น</li>
              <li>ยืดอายุการใช้งาน คุ้มค่ากับการลงทุน</li>
            </ul>
          </div>
        </div>

        <div className="serviceProse" style={{ marginTop: '1rem' }}>
          <p>
            เรามีผู้เชี่ยวชาญและทีมซ่อมบำรุงที่มีความชำนาญและประสบการณ์สูง
            ให้บริการตรวจซ่อมและบำรุงรักษาบ่อน้ำบาดาล/เครื่องสูบน้ำได้ทั่วประเทศ
          </p>
        </div>
      </section>

      <section className="serviceSection" aria-labelledby="faq">
        <h2 id="faq" className="serviceSectionTitle">
          คำถามที่พบบ่อย
        </h2>

        <div className="serviceFaq">
          <details className="serviceFaqItem">
            <summary className="serviceFaqQ">
              ทำไมบ่อใช้งานไปนานๆ แล้วน้ำไหลน้อยลง?
            </summary>
            <div className="serviceFaqA">
              มักเกิดจากตะกอนทับถม สนิม/ตะกรันอุดตันท่อกรองหรือกรวดกรุ
              ทำให้น้ำไหลเข้าบ่อน้อยลง ควรเป่าล้างพัฒนาบ่อเพื่อคืนประสิทธิภาพ
            </div>
          </details>

          <details className="serviceFaqItem">
            <summary className="serviceFaqQ">
              ควรเป่าล้างพัฒนาบ่อและตรวจเครื่องสูบบ่อยแค่ไหน?
            </summary>
            <div className="serviceFaqA">
              โดยทั่วไปปีละ 1 ครั้ง หรือปรับตามสภาพการใช้งานจริง
              หากเริ่มเห็นอัตราการสูบลดลง ควรตรวจเช็คทันที
            </div>
          </details>

          <details className="serviceFaqItem">
            <summary className="serviceFaqQ">
              การบำรุงรักษาช่วยประหยัดค่าไฟได้จริงไหม?
            </summary>
            <div className="serviceFaqA">
              ช่วยได้ เพราะบ่อสะอาด น้ำไหลเข้าบ่อดีขึ้น และเครื่องสูบไม่อุดตัน
              ทำให้ระบบสูบทำงานมีประสิทธิภาพ ลดภาระเครื่องและลดการใช้พลังงาน
            </div>
          </details>
        </div>
      </section>

      <section className="serviceCta" aria-labelledby="cta">
        <h2 id="cta" className="serviceCtaTitle">
          อยากให้บ่อกลับมาน้ำแรง สูบได้เต็ม และประหยัดไฟ?
        </h2>
        <p className="serviceCtaText">
          ติดต่อเพื่อประเมินอาการ วางแผนเป่าล้างพัฒนาบ่อ
          และตรวจเช็คเครื่องสูบให้เหมาะกับการใช้งานจริง
        </p>
        <div className="serviceHeroCtas">
          <Link href="/contact" className="serviceButtonPrimary">
            ติดต่อเรา
          </Link>
          <Link href="/services" className="serviceButtonGhost">
            กลับไปหน้าบริการทั้งหมด
          </Link>
        </div>
      </section>
    </main>
  )
}
