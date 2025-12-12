'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import './page.css'
import Teams from './teams/teams'

const ABOUT_SLIDES = [
  {
    id: 'about-slide-1',
    src: '/images/about/slide/about-us.jpg',
    alt: 'ภาพรวมการทำงานของบริษัท สยามกราวด์วอเตอร์',
  },
  {
    id: 'about-slide-2',
    src: '/images/about/slide/csr.jpg',
    alt: 'ภาพทีมงานภาคสนามของบริษัท สยามกราวด์วอเตอร์',
  },
  {
    id: 'about-slide-3', // 🔧 fixed id (was about-slide-2)
    src: '/images/about/slide/csssr.jpg',
    alt: 'ภาพทีมงานภาคสนามของบริษัท สยามกราวด์วอเตอร์',
  },
]

const AWARDS = [
  {
    id: 'award-1',
    src: '/images/about/award/award-1.png',
    label: 'รางวัลคุณภาพยอดเยี่ยม',
  },
  {
    id: 'award-2',
    src: '/images/about/award/award-2.png',
    label: 'รางวัลสถานประกอบการดีเด่น',
  },
  {
    id: 'award-3',
    src: '/images/about/award/award-3.png',
    label: 'รางวัลคุณภาพยอดเยี่ยม',
  },
]

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return

    const { scrollLeft, clientWidth } = el
    if (!clientWidth) return

    const index = Math.round(scrollLeft / clientWidth)
    if (index !== activeIndex && index >= 0 && index < ABOUT_SLIDES.length) {
      setActiveIndex(index)
    }
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index)

    const el = sliderRef.current
    if (!el) return

    const targetX = index * el.clientWidth
    el.scrollTo({
      left: targetX,
      behavior: 'smooth',
    })
  }

  return (
    <main className="about-container">
      <section className="about-hero">
        <h1 className="about-title">เกี่ยวกับเรา</h1>
      </section>

      {/* 🔹 Hero image slider (public/images/about/slide) */}
      <section className="about-hero-slider">
        <div
          ref={sliderRef}
          className="about-hero-slider-track"
          onScroll={handleScroll}
        >
          {ABOUT_SLIDES.map((slide) => (
            <div key={slide.id} id={slide.id} className="about-hero-slide">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1440}
                height={810}
                className="about-hero-slide-image"
                priority
              />
            </div>
          ))}
        </div>

        <div className="about-hero-slider-dots">
          {ABOUT_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => handleDotClick(index)}
              className={
                'about-hero-slider-dot' +
                (index === activeIndex ? ' active' : '')
              }
              aria-label={`ไปยังสไลด์ที่ ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="about-content">
        <div className="about-content-Introduction">
          <h2>ความเป็นมา</h2>
          <p className="text-indent">
            บริษัท สยามกราวด์วอเตอร์ จำกัด ก่อตั้งเมื่อปี พ.ศ.2530
            โดยผู้เชี่ยวชาญ ด้านบริหารจัดการน้ำบาดาล
            เพื่อดำเนินธุรกิจด้านการเจาะพัฒนาน้ำบาดาล
            ขึ้นมาใช้อย่างถูกหลักวิชาการ ส่งเสริมให้ทุกโครงการ
            เจาะบ่อน้ำบาดาลคุณภาพดี ใช้น้ำบาดาลอย่างอนุรักษ์
            เพื่อให้เกิดประโยชน์สูงสุดกับ ผู้ใช้น้ำบาดาล ประชาชน และประเทศชาติ
            อย่างยั่งยืน
          </p>
          <p className="text-indent">
            จากประสบการณ์ และผลงานที่ผ่านมา ได้พัฒนาด้านคุณภาพ และประสิทธิภาพ
            การทำงานอย่างต่อเนื่อง โดยการนำเทคโนโลยี และวิทยาการสมัยใหม่
            มาประยุกต์ ใช้กับการทำงาน จนสามารถให้บริการ เจาะบ่อน้ำบาดาลคุณภาพดี
            ครอบคลุมทุกภูมิภาค ทั่วประเทศ
          </p>
        </div>
        {/* 🔹 Award slider (public/images/about/award) */}
        <section className="about-awards">
          <div className="about-awards-slider-track">
            {AWARDS.map((award) => (
              <article key={award.id} className="about-award-card">
                <div className="about-award-image-wrapper">
                  <Image
                    src={award.src}
                    alt={award.label}
                    width={480}
                    height={320}
                    className="about-award-image"
                  />
                </div>
                <p className="about-award-caption">{award.label}</p>
              </article>
            ))}
          </div>
        </section>
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
            <p className="text-indent">
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
      </section>
    </main>
  )
}
