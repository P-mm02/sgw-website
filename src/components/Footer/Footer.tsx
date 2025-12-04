'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="footer"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="footer-inner">
        <div className="footer-row">
          {/* Logo + company info */}
          <div className="footer-info">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/logo-sgw.png" // TODO: update path
                alt="Siam Groundwater logo"
                width={80}
                height={80}
              />
            </Link>

            <p>
              <strong>บริษัท สยามกราวด์วอเตอร์ จำกัด</strong>
              <br />
              75 ซอยรามคำแหง 60 (สวนสน) แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240
            </p>
          </div>

          {/* Contact + social */}
          <div className="footer-contact">
            <p>โทร 0-2735-0789</p>
            <p>โทรสาร 0-2375-0791-2</p>
            <p>
              อีเมล{' '}
              <a href="mailto:sgw_th@outlook.com" className="footer-link">
                sgw_th@outlook.com
              </a>
            </p>

            <div className="footer-social">
              <a
                href="https://line.me/R/ti/p/@sgw_th?from=page&searchId=sgw_th"
                className="footer-social-item"
                aria-label="Add LINE: sgw_th"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/line-icon.png" // TODO: update path
                  alt="LINE"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href="https://www.facebook.com/siamgroundwater"
                className="footer-social-item"
                aria-label="Visit Siam Groundwater on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/facebook-icon.png" // TODO: update path
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} SIAMGROUNDWATER CO., LTD.</p>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          className="footer-back-to-top"
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          <span className="sr-only">Back to top</span>
          <Image
            src="/images/back-to-top.png" // TODO: update path
            alt=""
            width={36}
            height={36}
          />
        </button>
      )}
    </footer>
  )
}
