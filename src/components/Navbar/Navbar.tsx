import Link from 'next/link'
import Image from 'next/image'
import './Navbar.css'

type SubNavItem = {
  label: string
  href: string
}

type NavItem = {
  label: string
  href: string
  subNav?: SubNavItem[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'หน้าแรก', href: '/home' },
  { label: 'เกี่ยวกับเรา', href: '/about' },

  {
    label: 'บริการของเรา',
    href: '#services',
    subNav: [
      {
        label: 'สำรวจศึกษาบ่อน้ำบาดาล น้ำแร่ น้ำพุร้อน และรายงาน EIA',
        href: '#service-1',
      },
      {
        label: 'เจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน และบ่อสูบลดระดับน้ำ',
        href: '#service-2',
      },
      {
        label: 'ซ่อมบำรุงรักษาบ่อน้ำบาดาล และเครื่องสูบน้ำ',
        href: '#service-3',
      },
      {
        label: 'แก้ไขโครงการที่เจาะน้ำบาดาลขึ้นมาใช้แล้วมีปัญหาและเสียหาย',
        href: '#service-4',
      },
    ],
  },

  {
    label: 'ผลงานของเรา',
    href: '#projects',
    subNav: [
      { label: 'งานรัฐบาล', href: '#projects-government' },
      { label: 'งานเอกชน', href: '#projects-private' },
    ],
  },

  { label: 'บรรษัทบริบาล', href: '#governance' },
  { label: 'ข่าวสารและกิจกรรม', href: '#news' },
  { label: 'ติดต่อเรา', href: '#contact' },
]

const LANG_FLAGS = [
  { code: 'th', src: '/icons/flags/th-Thailand.svg', alt: 'Thai' },
  { code: 'en', src: '/icons/flags/en-UK.svg', alt: 'English' },
  { code: 'zh', src: '/icons/flags/zh-China.svg', alt: 'Chinese' },
  { code: 'jp', src: '/icons/flags/ja-Japan.svg', alt: 'Japanese' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <Image
            src="/images/logo/logo_SGW_white.svg"
            alt="Siam Groundwater"
            width={72}
            height={72}
          />
        </Link>

        {/* Center nav items + sub nav */}
        <nav className="navbar-nav">
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

        {/* Language flags */}
        <div className="navbar-lang">
          {LANG_FLAGS.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className="navbar-lang-btn"
              aria-label={lang.alt}
            >
              <Image src={lang.src} alt={lang.alt} width={28} height={20} />
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
