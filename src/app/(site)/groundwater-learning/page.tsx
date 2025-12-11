import Link from 'next/link'
import './page.css'

type LearningSection = {
  id: string
  label: string
  href: string
  tag: string
  description: string
}

const LEARNING_SECTIONS: LearningSection[] = [
  {
    id: 'tools',
    label: 'เครื่องมือคำนวณ',
    href: '/learn/groundwater-calculator-tools',
    tag: 'สำหรับวิศวกร / ช่างเทคนิค / เจ้าของกิจการ',
    description:
      'ชุดเครื่องมือช่วยคำนวณปริมาณน้ำ ค่าใช้จ่าย เทียบกับน้ำประปา รถขนน้ำ ขนาดถังพัก ขนาดปั๊มน้ำ แรงดัน และตัวแปรต่าง ๆ ที่เกี่ยวกับการใช้น้ำบาดาลในโรงงาน โรงแรม และโครงการขนาดใหญ่',
  },
  {
    id: 'basics',
    label: 'ความรู้พื้นฐาน เรื่องน้ำบาดาล',
    href: '/learn/groundwater-basics-thailand',
    tag: 'สำหรับผู้บริหาร / ผู้เริ่มศึกษาน้ำบาดาล',
    description:
      'อธิบายหลักการพื้นฐานของน้ำบาดาลในประเทศไทย: ชั้นหินอุ้มน้ำ ระดับน้ำบาดาล คุณภาพน้ำ การเลือกจุดเจาะ การออกแบบบ่อ และหลักคิดสำคัญก่อนตัดสินใจลงทุนเจาะบ่อบาดาล',
  },
  {
    id: 'cases',
    label: 'กรณีศึกษา ใช้น้ำบาดาล แล้วเกิดความเสียหาย',
    href: '/learn/groundwater-case-studies-problems',
    tag: 'สำหรับผู้บริหาร / ฝ่ายวิศวกรรม / ฝ่ายสิ่งแวดล้อม',
    description:
      'รวมกรณีศึกษาจริงของโครงการที่ใช้น้ำบาดาลแล้วเกิดปัญหา เช่น น้ำไม่พอใช้ บ่อเสื่อมสภาพ น้ำเค็ม น้ำกรด หรือมีสารปนเปื้อน พร้อมบทวิเคราะห์สาเหตุ และข้อแนะนำในการป้องกันไม่ให้เกิดซ้ำ',
  },
  {
    id: 'law',
    label: 'กฎหมายน้ำบาดาล',
    href: '/learn/groundwater-law-regulation-thailand',
    tag: 'สำหรับฝ่ายกฎหมาย / จป.วิชาชีพ / ผู้ขอใบอนุญาต',
    description:
      'สรุปกฎหมายและระเบียบที่เกี่ยวข้องกับการใช้น้ำบาดาลในประเทศไทย เช่น การขอใบอนุญาตเจาะ การขอใบอนุญาตใช้น้ำ การต่ออายุ การรายงานปริมาณการใช้น้ำ รวมถึงโทษและความเสี่ยงหากฝ่าฝืนกฎหมาย',
  },
  {
    id: 'faq',
    label: 'คำถามที่พบบ่อย (FAQ)',
    href: '/learn/groundwater-faq-thailand',
    tag: 'สำหรับทุกคนที่สนใจใช้น้ำบาดาล',
    description:
      'รวบรวมคำถามยอดฮิต เช่น “บ่อบาดาล 1 บ่อ ใช้น้ำได้กี่ลูกบาศก์ต่อวัน?” “ถ้าน้ำไม่พอใช้ควรทำอย่างไร?” “โรงงานควรใช้น้ำบาดาลหรือใช้น้ำประปาดี?” พร้อมคำตอบที่อธิบายทั้งเชิงเทคนิคและเชิงธุรกิจ',
  },
  {
    id: 'guide',
    label: 'คู่มือสำหรับโรงงาน / โรงแรม / รีสอร์ท',
    href: '/learn/groundwater-guide-factory-hotel-resort',
    tag: 'สำหรับเจ้าของกิจการ / ผู้อำนวยการโรงงาน / ผู้จัดการโรงแรม',
    description:
      'แนวทางวางแผนระบบน้ำบาดาลสำหรับโรงงาน โรงแรม และรีสอร์ท ตั้งแต่การประเมินความต้องการใช้น้ำ การออกแบบระบบ การเลือกผู้รับเหมา การควบคุมคุณภาพงานเจาะ ไปจนถึงการดูแลบ่อในระยะยาวให้คุ้มค่าการลงทุน',
  },
]

export default function GroundwaterLearningPage() {
  return (
    <main className="groundwater-learning-page">
      <section className="groundwater-learning-hero">
        <div className="groundwater-learning-hero-inner">
          <h1 className="groundwater-learning-title-th">
            ศูนย์การเรียนรู้ เรื่องน้ำบาดาล
          </h1>

          <p className="groundwater-learning-title-en">
            Groundwater Learning Center – Thailand
          </p>

          <p className="groundwater-learning-intro">
            รวมความรู้และเครื่องมือที่เกี่ยวข้องกับ{' '}
            <strong>การเจาะบ่อน้ำบาดาล การใช้น้ำบาดาล และกฎหมายน้ำบาดาล</strong>{' '}
            สำหรับโรงงาน โรงแรม รีสอร์ท โครงการอสังหาริมทรัพย์ และหน่วยงานภาครัฐ
            เพื่อช่วยให้ตัดสินใจด้านน้ำบาดาลอย่างรอบคอบ ปลอดภัย
            และคุ้มค่าการลงทุน
          </p>

          <div className="groundwater-learning-audience">
            <p className="groundwater-learning-audience-label">เหมาะสำหรับ</p>
            <ul>
              <li>เจ้าของโรงงาน / โรงแรม / รีสอร์ท</li>
              <li>ฝ่ายวิศวกรรม / ฝ่ายซ่อมบำรุง / ฝ่ายจัดซื้อ</li>
              <li>ที่ปรึกษาโครงการ และวิศวกรผู้ออกแบบระบบน้ำ</li>
              <li>ผู้ที่สนใจเริ่มศึกษาน้ำบาดาลในประเทศไทย</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="groundwater-learning-sections">
        <header className="groundwater-learning-sections-header">
          <h2 className="groundwater-learning-sections-title">
            หัวข้อหลักในศูนย์การเรียนรู้
          </h2>
          <p className="groundwater-learning-sections-description">
            เลือกหัวข้อที่คุณสนใจ เพื่อเข้าไปอ่านรายละเอียดเชิงลึก
            ดูตัวอย่างการคำนวณ
            หรือศึกษากรณีจริงจากโครงการที่ใช้น้ำบาดาลทั่วประเทศ
          </p>
        </header>

        <div className="groundwater-learning-grid">
          {LEARNING_SECTIONS.map((section) => (
            <article key={section.id} className="groundwater-learning-card">
              <div className="groundwater-learning-card-body">
                <p className="groundwater-learning-card-tag">{section.tag}</p>

                <h3 className="groundwater-learning-card-title">
                  <Link href={section.href}>{section.label}</Link>
                </h3>

                <p className="groundwater-learning-card-description">
                  {section.description}
                </p>
              </div>

              <div className="groundwater-learning-card-footer">
                <Link
                  href={section.href}
                  className="groundwater-learning-card-link"
                >
                  อ่านเพิ่มเติม
                  <span aria-hidden="true" className="card-link-arrow">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
