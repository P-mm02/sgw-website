import Image from 'next/image'
import './page.css'
import Teams from './teams/teams'

export default function AboutPage() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1 className="about-title">เกี่ยวกับเรา</h1>
        <p className="about-subtitle">
          Delivering reliable deep wells and groundwater solutions for
          industrial, infrastructure, and public sector clients.
        </p>
      </section>

      <section className="about-content">
        <h2>แนะนำบริษัท</h2>
        <p>
          บริษัท สยามกราวด์วอเตอร์ จำกัด ก่อตั้งเมื่อปี พ.ศ.2530 โดยผู้เชี่ยวชาญ
          ด้านบริหารจัดการน้ำบาดาล เพื่อดำเนินธุรกิจด้านการเจาะพัฒนาน้ำบาดาล
          ขึ้นมาใช้อย่างถูกหลักวิชาการ ส่งเสริมให้ทุกโครงการ
          เจาะบ่อน้ำบาดาลคุณภาพดี ใช้น้ำบาดาลอย่างอนุรักษ์
          เพื่อให้เกิดประโยชน์สูงสุดกับ ผู้ใช้น้ำบาดาล ประชาชน และประเทศชาติ
          อย่างยั่งยืน
        </p>
        <p>
          จากประสบการณ์ และผลงานที่ผ่านมา ได้พัฒนาด้านคุณภาพ และประสิทธิภาพ
          การทำงานอย่างต่อเนื่อง โดยการนำเทคโนโลยี และวิทยาการสมัยใหม่
          มาประยุกต์ ใช้กับการทำงาน จนสามารถให้บริการ เจาะบ่อน้ำบาดาลคุณภาพดี
          ครอบคลุมทุกภูมิภาค ทั่วประเทศ
        </p>

        <div className="about-founder">
          <div className="about-founder-image-wrapper">
            <Image
              src="/images/personnel/MD.jpg"
              alt="ผู้ก่อตั้ง บริษัท สยามกราวด์วอเตอร์ จำกัด"
              width={320}
              height={400}
              className="about-founder-image"
            />
          </div>
          <div className="about-founder-text">
            <h2 className="about-founder-header">ผู้ก่อตั้ง</h2>
            <p>
              บริษัท สยามกราวด์วอเตอร์ จำกัด ก่อตั้งเมื่อปี พ.ศ. 2530
              จากการรวมตัวของคณะผู้เชี่ยวชาญ
              ที่เคยปฏิบัติงานในหน่วยงานด้านน้ำบาดาลของภาครัฐหลายหน่วยงาน
              ทั้งผู้เชี่ยวชาญด้านการเจาะ การสำรวจ การซ่อมบำรุงรักษา
              และการควบคุมการใช้น้ำบาดาล
              พวกเรามีเจตนารมณ์ร่วมในการก่อตั้งบริษัทฯ
              เพื่อยกระดับมาตรฐานงานเจาะบ่อน้ำบาดาลให้มีคุณภาพ
              สามารถรองรับความต้องการใช้น้ำของโครงการขนาดใหญ่ได้อย่างมั่นคง
            </p>
          </div>
        </div>

        {/* ทีมงาน สยามกราวด์วอเตอร์ (moved to its own component) */}
        <Teams />

        <h2>Why Groundwater Matters</h2>
        <p>
          Groundwater is a critical resource for industrial production and urban
          development in Thailand. A properly designed and constructed well can
          provide stable, high-quality water, reduce operating costs, and
          support business continuity even when surface water sources are
          limited or unreliable.
        </p>
        <p>
          By partnering with a specialized groundwater engineering team, owners
          and developers gain not only a water source, but a long-term
          infrastructure asset that is aligned with technical standards and
          regulatory requirements.
        </p>
      </section>
    </main>
  )
}
