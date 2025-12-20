'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import './slides.css'

type Slide = {
  src: string
  alt: string
  caption: string
  priority?: boolean
}

export default function SurveySlides() {
    const [isHovering, setIsHovering] = useState(false)
  const slides: Slide[] = useMemo(
    () => [
      {
        src: '/images/services/survey/services-survey-1.jpg',
        alt: 'สำรวจธรณีฟิสิกส์เพื่อกำหนดจุดเจาะ',
        caption: 'สำรวจธรณีฟิสิกส์เพื่อกำหนดจุดเจาะ',
        priority: true,
      },
      {
        src: '/images/services/survey/cover-2.jpg',
        alt: 'ตรวจสอบชั้นน้ำและคุณภาพน้ำด้วย Electric Log',
        caption: 'ตรวจสอบชั้นน้ำและคุณภาพน้ำด้วย Electric Log',
      },
      {
        src: '/images/services/survey/services-survey-1.jpg',
        alt: 'สำรวจเพื่อกำหนดความลึกชั้นน้ำเป้าหมาย',
        caption: 'สำรวจเพื่อกำหนดความลึกชั้นน้ำเป้าหมาย',
      },
      {
        src: '/images/services/survey/services-survey-1.jpg',
        alt: 'เก็บข้อมูลประกอบการออกแบบบ่อ (Well design)',
        caption: 'เก็บข้อมูลประกอบการออกแบบบ่อ (Well design)',
      },
    ],
    []
  )

  const total = slides.length
  const [index, setIndex] = useState(0)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const goTo = (nextIndex: number) => {
    const safe = ((nextIndex % total) + total) % total
    setIndex(safe)
  }

  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  // Keyboard: focus the slider and use ← → to navigate
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      }
    }

    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total])

  const trackStyle = {
    transform: `translate3d(${-index * 100}%, 0, 0)`,
  } as const

  useEffect(() => {
    // Respect reduced motion (no auto-slide)
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    if (reduce) return
    if (total <= 1) return
    if (isHovering) return

    const id = window.setInterval(() => {
      setIndex((prev) => (((prev + 1) % total) + total) % total)
    }, 3000)

    return () => window.clearInterval(id)
  }, [isHovering, total])

  return (
    <div
      ref={rootRef}
      className="sv-slides"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="ตัวอย่างภาพงานสำรวจ"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="sv-slides-viewport">
        <div className="sv-slides-track" style={trackStyle}>
          {slides.map((s, i) => (
            <div className="sv-slide" key={`${s.src}-${i}`}>
              <figure className="sv-slide-figure">
                <div className="sv-slide-media">
                  <Image
                    className="sv-slide-img"
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 720px"
                    priority={Boolean(s.priority)}
                  />
                </div>

                <figcaption className="sv-slide-caption">
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="sv-slide-btn sv-slide-btn-left"
          onClick={prev}
          aria-label="รูปก่อนหน้า"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="sv-slide-btn sv-slide-btn-right"
          onClick={next}
          aria-label="รูปถัดไป"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="sv-slide-dots" role="tablist" aria-label="นำทางสไลด์">
        {slides.map((s, i) => {
          const active = i === index
          return (
            <button
              key={`dot-${i}`}
              type="button"
              className={`sv-slide-dot ${active ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`ไปที่รูปที่ ${i + 1}: ${s.caption}`}
              aria-current={active ? 'true' : undefined}
              role="tab"
            />
          )
        })}
      </div>

      <p className="sv-slide-sr" aria-live="polite">
        แสดงรูปที่ {index + 1} จาก {total}
      </p>
    </div>
  )
}
