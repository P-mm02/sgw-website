// src/app/(site)/services/drilling/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import './page.css'

export const metadata: Metadata = {
  title:
    'เจาะบ่อน้ำบาดาล | เจาะบ่อน้ำแร่ น้ำพุร้อน และบ่อสูบลดระดับน้ำ | Siam Groundwater',
  description:
    'บริการเจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน และบ่อสูบลดระดับน้ำ (Dewatering) พร้อมสูบทดสอบปริมาณน้ำ (Pumping Test) ติดตั้งเครื่องสูบ และอุดกลบบ่อที่เลิกใช้งานอย่างถูกต้องตามหลักวิชาการ',
  keywords: [
    'เจาะบ่อน้ำบาดาล',
    'เจาะบ่อน้ำแร่',
    'เจาะบ่อน้ำพุร้อน',
    'บ่อสูบลดระดับน้ำ',
    'dewatering',
    'pumping test',
    'สูบทดสอบปริมาณน้ำ',
    'ติดตั้งเครื่องสูบน้ำ',
    'อุดกลบบ่อน้ำบาดาล',
    'ก่อสร้างบ่อน้ำบาดาล',
  ],
  alternates: { canonical: '/services/drilling' },
  openGraph: {
    title: 'เจาะบ่อน้ำบาดาล | Siam Groundwater',
    description:
      'เจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน และบ่อสูบลดระดับน้ำ พร้อมสูบทดสอบ ติดตั้งเครื่องสูบ และอุดกลบอย่างถูกต้อง',
    url: '/services/drilling',
    type: 'article',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'บริการเจาะบ่อน้ำบาดาล บ่อน้ำแร่ น้ำพุร้อน และบ่อสูบลดระดับน้ำ',
  serviceType:
    'Groundwater Well Drilling, Mineral Water Well, Hot Spring Well, Dewatering Well',
  areaServed: 'TH',
  provider: {
    '@type': 'Organization',
    name: 'Siam Groundwater',
    url: 'https://siamgroundwater.com',
  },
  description:
    'บริการเจาะบ่อน้ำบาดาลและบ่อเฉพาะทาง พร้อมสูบทดสอบปริมาณน้ำ ติดตั้งเครื่องสูบ และอุดกลบบ่อที่เลิกใช้งานตามหลักวิชาการ',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ทำไมต้องสูบทดสอบปริมาณน้ำ (Pumping Test) หลังเจาะเสร็จ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'เพื่อทราบอัตราการให้น้ำสูงสุดและอัตราการสูบใช้งานที่เหมาะสม ช่วยเลือกขนาดเครื่องสูบได้ถูกต้อง และวางแผนการใช้น้ำให้เพียงพอกับโครงการ',
      },
    },
    {
      '@type': 'Question',
      name: 'บ่อสูบลดระดับน้ำ (Dewatering) เหมาะกับงานแบบไหน?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'เหมาะกับงานก่อสร้างที่ต้องลดระดับน้ำใต้ดิน เช่น อาคารใต้ดิน งานฐานราก หรือพื้นที่ขุดลึก เพื่อเพิ่มความปลอดภัยและความต่อเนื่องของงานก่อสร้าง',
      },
    },
    {
      '@type': 'Question',
      name: 'บ่อที่เลิกใช้งานต้องอุดกลบหรือไม่?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ควรอุดกลบตั้งแต่ก้นบ่อถึงปากบ่อด้วยวัสดุที่เหมาะสม (เช่น ซีเมนต์หรือดินเหนียวบริสุทธิ์) เพื่อป้องกันการปนเปื้อนชั้นน้ำบาดาล และลดความเสี่ยงด้านสิ่งแวดล้อม',
      },
    },
  ],
}

export default function DrillingServicePage() {
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
            เจาะบ่อน้ำบาดาล
          </li>
        </ol>
      </nav>

      <header className="serviceHero">
        <p className="serviceHeroEyebrow">บริการของเรา</p>
        <h1 className="serviceHeroTitle">
          เจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน และบ่อสูบลดระดับน้ำ
        </h1>
        <p className="serviceHeroLead">
          รับก่อสร้างบ่อน้ำบาดาลตามหลักวิชาการ พร้อม{' '}
          <strong>Pumping Test</strong> เพื่อกำหนดอัตราการสูบที่เหมาะสม
          ติดตั้งเครื่องสูบอย่างถูกต้อง และอุดกลบบ่อที่เลิกใช้งาน
          เพื่อการใช้น้ำอย่างยั่งยืน
        </p>

        <div className="serviceHeroCtas">
          <Link href="/contact" className="serviceButtonPrimary">
            ขอคำปรึกษา / ขอใบเสนอราคา
          </Link>
          <Link href="/projects" className="serviceButtonGhost">
            ดูตัวอย่างโครงการ
          </Link>
        </div>
      </header>

      <section className="serviceSection" aria-labelledby="scope">
        <h2 id="scope" className="serviceSectionTitle">
          ขอบเขตงานบริการเจาะบ่อน้ำบาดาล
        </h2>

        <div className="serviceGrid">
          <article className="serviceCard">
            <h3 className="serviceCardTitle">ก่อสร้างบ่อน้ำบาดาลมาตรฐาน</h3>
            <p className="serviceCardText">
              รองรับการเจาะได้หลายสภาพชั้นดิน/ชั้นหิน
              และหลายขนาดตามความต้องการของโครงการ
              โดยคำนึงถึงความปลอดภัยและคุณภาพบ่อเป็นหลัก
            </p>
            <ul className="serviceList">
              <li>บ่อในชั้นกรวดทราย (Gravel Packed Well)</li>
              <li>บ่อในหินแข็ง (Cased Well / เจาะหิน)</li>
              <li>งานบ่อเฉพาะทางตามวัตถุประสงค์การใช้น้ำ</li>
            </ul>
          </article>

          <article className="serviceCard">
            <h3 className="serviceCardTitle">บ่อสูบลดระดับน้ำ (Dewatering)</h3>
            <p className="serviceCardText">
              ก่อสร้างบ่อเพื่อช่วยลดระดับน้ำใต้ดินในพื้นที่ก่อสร้าง
              ลดความเสี่ยงน้ำดัน/น้ำซึม เพิ่มความต่อเนื่องของงานขุดและงานฐานราก
            </p>
            <ul className="serviceList">
              <li>งานอาคารใต้ดิน / งานขุดลึก</li>
              <li>งานฐานรากและงานโครงสร้างในพื้นที่น้ำสูง</li>
            </ul>
          </article>

          <article className="serviceCard">
            <h3 className="serviceCardTitle">
              บ่อสังเกตการณ์ (Monitoring Well)
            </h3>
            <p className="serviceCardText">
              ก่อสร้างบ่อเพื่อเฝ้าระวังระดับน้ำและคุณภาพน้ำ
              ช่วยติดตามผลกระทบของการใช้น้ำ และลดความเสี่ยง เช่น น้ำเค็มรุกล้ำ
              หรือการปนเปื้อน
            </p>
            <ul className="serviceList">
              <li>ติดตามระดับน้ำและแนวโน้มการเปลี่ยนแปลง</li>
              <li>สนับสนุนการบริหารจัดการน้ำในโครงการระยะยาว</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="serviceSection" aria-labelledby="test">
        <h2 id="test" className="serviceSectionTitle">
          สูบทดสอบปริมาณน้ำ (Pumping Test)
        </h2>
        <div className="serviceProse">
          <p>
            หลังการก่อสร้างบ่อเสร็จ ควรทำ <strong>Pumping Test</strong>{' '}
            เพื่อทราบ
            <strong>อัตราการให้น้ำสูงสุด</strong> และ{' '}
            <strong>อัตราการสูบใช้งานที่เหมาะสม</strong>{' '}
            ทำให้สามารถเลือกขนาดเครื่องสูบได้ถูกต้อง
            และวางแผนการใช้น้ำให้พอเพียงกับความต้องการจริง
          </p>
        </div>
      </section>

      <section className="serviceSection" aria-labelledby="pump">
        <h2 id="pump" className="serviceSectionTitle">
          เลือกขนาดและติดตั้งเครื่องสูบ
        </h2>
        <div className="serviceProse">
          <p>
            ให้คำแนะนำการเลือกขนาดเครื่องสูบและอัตราการสูบที่เหมาะสมกับศักยภาพของบ่อและการใช้งาน
            เพื่อให้ระบบน้ำทำงานเสถียร ลดการสึกหรอ
            และยืดอายุการใช้งานของบ่อและเครื่องสูบ
          </p>
        </div>

        <div className="serviceHighlights">
          <div className="serviceHighlight">
            <p className="serviceHighlightTitle">ข้อดี</p>
            <ul className="serviceList">
              <li>ได้บ่อคุณภาพดี ใช้งานยาวนาน</li>
              <li>คุ้มค่ากับการลงทุนในระยะยาว</li>
              <li>
                กำหนดอัตราการสูบโดยผู้เชี่ยวชาญ ช่วยลดความเสี่ยงบ่อเสียหาย
              </li>
            </ul>
          </div>

          <div className="serviceHighlight">
            <p className="serviceHighlightTitle">อุดกลบบ่อที่เลิกใช้งาน</p>
            <p className="serviceCardText">
              บ่อที่เลิกใช้ควรอุดกลบอย่างถูกต้องเพื่อป้องกันการปนเปื้อนชั้นน้ำบาดาล
              ลดความเสี่ยงด้านสาธารณสุข
              และช่วยอนุรักษ์ทรัพยากรน้ำของประเทศให้ยั่งยืน
            </p>
          </div>
        </div>
      </section>

      <section className="serviceSection" aria-labelledby="faq">
        <h2 id="faq" className="serviceSectionTitle">
          คำถามที่พบบ่อย
        </h2>

        <div className="serviceFaq">
          <details className="serviceFaqItem">
            <summary className="serviceFaqQ">ทำไมต้องทำ Pumping Test?</summary>
            <div className="serviceFaqA">
              เพื่อทราบอัตราการให้น้ำและอัตราการสูบที่เหมาะสม
              ช่วยเลือกเครื่องสูบได้ถูกต้อง และใช้น้ำได้อย่างมีประสิทธิภาพ
            </div>
          </details>

          <details className="serviceFaqItem">
            <summary className="serviceFaqQ">Dewatering ใช้กับงานอะไร?</summary>
            <div className="serviceFaqA">
              ใช้ลดระดับน้ำใต้ดินในงานก่อสร้าง เช่น อาคารใต้ดิน งานขุดลึก
              งานฐานราก เพื่อเพิ่มความปลอดภัยและลดปัญหาน้ำซึม
            </div>
          </details>

          <details className="serviceFaqItem">
            <summary className="serviceFaqQ">
              บ่อเลิกใช้งานต้องอุดกลบไหม?
            </summary>
            <div className="serviceFaqA">
              ควรอุดกลบตั้งแต่ก้นบ่อถึงปากบ่อด้วยวัสดุที่เหมาะสม
              เพื่อป้องกันการปนเปื้อนชั้นน้ำบาดาล และลดผลกระทบต่อสิ่งแวดล้อม
            </div>
          </details>
        </div>
      </section>

      <section className="serviceCta" aria-labelledby="cta">
        <h2 id="cta" className="serviceCtaTitle">
          ต้องการเจาะบ่อให้ได้ปริมาณน้ำเหมาะสมและใช้งานได้ยาวนาน?
        </h2>
        <p className="serviceCtaText">
          ติดต่อเพื่อประเมินหน้างาน วางแนวทางก่อสร้างบ่อ
          และออกแบบการสูบใช้งานให้เหมาะกับโครงการของคุณ
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
