'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Navbar-mobile.css'
import { NAV_ITEMS, LANG_FLAGS } from '../nav-config'

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeLang, setActiveLang] = useState(LANG_FLAGS[0])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleLang = () => setIsLangOpen((prev) => !prev)
  const closeLang = () => setIsLangOpen(false)

  const handleSelectLang = (lang: (typeof LANG_FLAGS)[number]) => {
    setActiveLang(lang)
    setIsLangOpen(false)
    // later you can plug real i18n change here
  }

  return (
    <header className="navbar-mobile">
      {/* top bar */}
      <div className="navbar-mobile-bar">
        {/* left: logo */}
        <Link
          href="/"
          className="navbar-mobile-logo"
          aria-label="Siam Groundwater"
        >
          <Image
            src="/images/logo/logo_SGW_white.svg"
            alt="Siam Groundwater"
            width={40}
            height={40}
          />
        </Link>

        {/* center: menu trigger */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>

        {/* right: language dropdown */}
        <div className="navbar-mobile-lang">
          <button
            type="button"
            className="navbar-mobile-lang-btn"
            onClick={toggleLang}
            aria-expanded={isLangOpen}
          >
            <Image
              src={activeLang.src}
              alt={activeLang.alt}
              width={20}
              height={14}
            />
            <span className="navbar-mobile-lang-code">{activeLang.alt}</span>
            <span className="navbar-mobile-lang-caret">▾</span>
          </button>

          {isLangOpen && (
            <div
              className="navbar-mobile-lang-menu"
              onClick={(e) => e.stopPropagation()}
            >
              {LANG_FLAGS.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  className="navbar-mobile-lang-menu-item"
                  onClick={() => handleSelectLang(lang)}
                >
                  <Image src={lang.src} alt={lang.alt} width={18} height={12} />
                  <span className="navbar-mobile-lang-menu-code">
                    {lang.alt}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* simple dropdown nav under bar */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <nav aria-label="Mobile navigation">
            <ul className="navbar-mobile-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="navbar-mobile-link"
                    onClick={() => {
                      closeMenu()
                      closeLang()
                    }}
                  >
                    {item.label}
                  </Link>

                  {item.subNav && (
                    <ul className="navbar-mobile-subnav">
                      {item.subNav.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="navbar-mobile-subnav-link"
                            onClick={() => {
                              closeMenu()
                              closeLang()
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-mobile-footer">
            <Link
              href="/contact"
              className="navbar-mobile-contact"
              onClick={() => {
                closeMenu()
                closeLang()
              }}
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
