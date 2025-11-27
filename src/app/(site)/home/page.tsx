'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from './projects.json'
import './page.css'

type ProjectCategory = 'all' | 'government-project' | 'private-organization'

type Project = (typeof projectsData)[number]

export default function HomePage() {
  return (
    <main className="page-content">
      {/* === HERO / HEADER TEXT === */}
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

      {/* === SERVICES TEASER === */}
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

      {/* === MAP SECTION === */}
      <section className="home-map">
        <h2 className="SP-textHead2" style={{ textAlign: 'center' }}>
          ผลงาน ทุกภูมิภาค ทั่วประเทศ
        </h2>

        <div
          id="map"
          style={{
            height: '40vw',
            width: '80vw',
            maxWidth: '100%',
            margin: '0 auto',
            borderRadius: 10,
            background: '#e5edf0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#203b4c',
          }}
        >
          Map placeholder (Leaflet React component will go here)
        </div>
      </section>

      {/* === TEAM SECTION === */}
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
              <h6>
                ช่างเจาะผ่านการอบรม และมีใบอนุญาตเจาะจากกรมทรัพยากรน้ำบาดาล
              </h6>
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
                เครื่องสูบน้ำบาดาล งานสูบทดสอบปริมาณน้ำ
                ผ่านการอบรมด้านความปลอดภัย
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* === PROJECTS SECTION === */}
      <ProjectsSection />
    </main>
  )
}

function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory>('all')

  const filteredProjects: Project[] =
    category === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === category)

  return (
    <section className="home-projects thirdBackground">
      <div className="projects-header">
        <h2 className="elementor-heading-title elementor-size-default">
          ตัวอย่าง โครงการของเรา
        </h2>

        <div className="projects-filter-buttons">
          <button
            className={`filter-button ${
              category === 'all' ? 'active' : ''
            } filter-all`}
            onClick={() => setCategory('all')}
            data-category="all"
          >
            ทั้งหมด
          </button>

          <button
            className={`filter-button ${
              category === 'government-project' ? 'active' : ''
            }`}
            onClick={() => setCategory('government-project')}
            data-category="government-project"
          >
            งานรัฐบาล
          </button>

          <button
            className={`filter-button ${
              category === 'private-organization' ? 'active' : ''
            }`}
            onClick={() => setCategory('private-organization')}
            data-category="private-organization"
          >
            งานเอกชน
          </button>
        </div>
      </div>

      <div className="projects-grid display-posts-listing">
        {filteredProjects.map((project) => (
          <article key={project.id} className="listing-item project-card">
            <div className="image">
              <Link href={project.url} className="removeUnderLine">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={600}
                  style={{ borderRadius: 10, width: '100%', height: 'auto' }}
                />
              </Link>
            </div>

            <Link href={project.url} className="removeUnderLine">
              <h4
                className="Project-Title title SP-textHead5 removeUnderLine"
                style={{ textAlign: 'center', marginBottom: 0 }}
              >
                {project.title}
              </h4>
            </Link>

            <h5 className="project-date SP-textHead4">{project.year}</h5>

            <p
              className="project-location SP-textHead6"
              style={{ textAlign: 'center' }}
            >
              {project.location}
            </p>

            <p
              className="project-type-of-work SP-textHead6"
              style={{ textAlign: 'center' }}
            >
              {project.typeOfWork}
            </p>

            {project.businessType && (
              <p
                className="project-business-type SP-hidden"
                style={{ textAlign: 'center' }}
              >
                ประเภทธุรกิจ: {project.businessType}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
