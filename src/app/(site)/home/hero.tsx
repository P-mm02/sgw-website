// src/app/(site)/home/hero.tsx

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="headerText homeHead">
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          โครงการรักษ์น้ำบาดาล
        </h2>
        <h4 style={{ textAlign: 'center' }}>
          เจาะบ่อคุณภาพดี ติดเครื่องสูบคุณภาพดี สูบน้ำขึ้นมาใช้ถูกวิธี
        </h4>
        <h4 style={{ textAlign: 'center' }}>•ทำความดีตอบแทนแผ่นดิน•</h4>
        <h5 style={{ textAlign: 'center' }}>
          เราจะเป็นผู้นำด้านการเจาะบ่อน้ำบาดาลคุณภาพดี
          และสูบพัฒนาน้ำบาดาลขึ้นมาใช้ อย่างถูกหลักวิชาการ
        </h5>
        <h5 style={{ textAlign: 'center' }}>
          ป้องกัน ไม่ทำให้ชั้นน้ำเสียหาย ไม่ทำลายสิ่งแวดล้อม ดูแลรักษา
          ทุกโครงการให้มีน้ำคุณภาพดี ใช้ได้อย่างยั่งยืน คุ้มค่าการลงทุน
        </h5>
      </div>

      <div className="home-company">
        <h5>บริษัท สยามกราวด์วอเตอร์ จำกัด</h5>
      </div>
    </section>
  )
}
