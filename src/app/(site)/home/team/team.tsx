// src/app/(site)/home/team/team.tsx
import Image from 'next/image'

export default function HomeTeam() {
  return (
    <section className="home-team secondBackground">
      <h2 className="SP-textHead2" style={{ textAlign: 'center' }}>
        ทีมงาน สยามกราวด์วอเตอร์
      </h2>

      <div className="team-grid">
        <div className="team-card">
          <Image
            src="/images/logo/logo_SGW_white.svg"
            alt="ทีมสำรวจ"
            width={180}
            height={180}
          />
          <p className="team-title">ทีมสำรวจ</p>
          <div className="team-desc">
            <h6>ใช้เครื่อง Resistivity Meter</h6>
            <h6>สามารถสำรวจได้ลึก 300 เมตร</h6>
            <h6>สำรวจและแปลผลโดยทีมที่มีประสบการณ์ และมีความชำนาญ</h6>
          </div>
        </div>

        <div className="team-card">
          <Image
            src="/images/logo/logo_SGW_white.svg"
            alt="ทีมเจาะ"
            width={180}
            height={180}
          />
          <p className="team-title">ทีมเจาะ</p>
          <div className="team-desc">
            <h6>ช่างเจาะผ่านการอบรม และมีใบอนุญาตเจาะจากกรมทรัพยากรน้ำบาดาล</h6>
            <h6>มีประสบการณ์ และความชำนาญ ทั้งพื้นที่หินแข็งเจาะยาก</h6>
          </div>
        </div>

        <div className="team-card">
          <Image
            src="/images/logo/logo_SGW_white.svg"
            alt="ทีมซ่อมบำรุง"
            width={180}
            height={180}
          />
          <p className="team-title">ทีมซ่อมบำรุง</p>
          <div className="team-desc">
            <h6>มีประสบการณ์ และความชำนาญงานซ่อมบำรุงรักษาบ่อน้ำบาดาล</h6>
            <h6>
              เครื่องสูบน้ำบาดาล งานสูบทดสอบปริมาณน้ำ ผ่านการอบรมด้านความปลอดภัย
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}
