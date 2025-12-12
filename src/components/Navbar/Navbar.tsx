'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Navbar.css'
import { NAV_ITEMS, LANG_FLAGS } from './nav-config'

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeLang, setActiveLang] = useState(LANG_FLAGS[0])

  const toggleLang = () => setIsLangOpen((prev) => !prev)
  const handleSelectLang = (lang: (typeof LANG_FLAGS)[number]) => {
    setActiveLang(lang)
    setIsLangOpen(false)
    // later: plug real i18n switching here
  }

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo" aria-label="Siam Groundwater">
          <Image
            src="/images/logo/logo_SGW_white.svg"
            alt="Siam Groundwater"
            width={72}
            height={72}
          />
        </Link>

        {/* Center nav items + sub nav */}
        <nav className="navbar-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`navbar-item ${item.subNav ? 'has-subnav' : ''}`}
            >
              <Link href={item.href} className="navbar-link">
                <span className="navbar-text">{item.label}</span>
              </Link>

              {item.subNav && (
                <div className="navbar-subnav">
                  {item.subNav.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="navbar-subnav-link"
                    >
                      <span className="navbar-text">{sub.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Language dropdown (flag + code) */}
        <div className="navbar-lang" aria-label="Language selector">
          <button
            type="button"
            className="navbar-lang-btn"
            onClick={toggleLang}
            aria-expanded={isLangOpen}
          >
            <Image
              src={activeLang.src}
              alt={activeLang.alt}
              width={28}
              height={20}
            />
            <span className="navbar-lang-code">{activeLang.alt}</span>
            <span
              className={`navbar-lang-caret ${isLangOpen ? 'is-open' : ''}`}
            >
              ▾
            </span>
          </button>

          {isLangOpen && (
            <div className="navbar-lang-menu">
              {LANG_FLAGS.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  className="navbar-lang-menu-item"
                  onClick={() => handleSelectLang(lang)}
                >
                  <Image src={lang.src} alt={lang.alt} width={24} height={16} />
                  <span className="navbar-lang-menu-code">{lang.alt}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
