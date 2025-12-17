// src/components/Navbar/nav-config.ts

export type SubNavItem = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  subNav?: SubNavItem[]
}

export type LangFlag = {
  code: string
  src: string
  alt: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'หน้าแรก', href: '/home' },
  { label: 'เกี่ยวกับเรา', href: '/about' },

  {
    label: 'บริการของเรา',
    href: '/services',
    subNav: [
      {
        label: 'สำรวจศึกษาบ่อน้ำบาดาล น้ำแร่ น้ำพุร้อน และรายงาน EIA',
        href: '/services/survey',
      },
      {
        label: 'เจาะบ่อน้ำบาดาล บ่อน้ำแร่ บ่อน้ำพุร้อน และบ่อสูบลดระดับน้ำ',
        href: '/services/drilling',
      },
      {
        label: 'ซ่อมบำรุงรักษาบ่อน้ำบาดาล และเครื่องสูบน้ำ',
        href: '/services/maintenance',
      },
      {
        label: 'แก้ไขโครงการที่เจาะน้ำบาดาลขึ้นมาใช้แล้วมีปัญหาและเสียหาย',
        href: '/services/consult',
      },
    ],
  },

  {
    label: 'ผลงานของเรา',
    href: '/projects',
  },
  { label: 'บรรษัทบริบาล', href: '/governance' },
  {
    label: 'ศูนย์การเรียนรู้',
    href: '/groundwater-learning',
    subNav: [
      {
        label: 'เครื่องมือคำนวณ',
        href: '/learn/groundwater-calculator-tools',
      },
      {
        label: 'ความรู้พื้นฐาน เรื่องน้ำบาดาล',
        href: '/learn/groundwater-basics-thailand',
      },
      {
        label: 'กรณีศึกษา ใช้น้ำบาดาล แล้วเกิดความเสียหาย',
        href: '/learn/groundwater-case-studies-problems',
      },
      {
        label: 'กฎหมายน้ำบาดาล',
        href: '/learn/groundwater-law-regulation-thailand',
      },
      {
        label: 'คำถามที่พบบ่อย (FAQ)',
        href: '/learn/groundwater-faq-thailand',
      },
      {
        label: 'คู่มือสำหรับโรงงาน / โรงแรม / รีสอร์ท',
        href: '/learn/groundwater-guide-factory-hotel-resort',
      },
    ],
  },
  { label: 'ติดต่อเรา', href: '/contact' },
]

export const LANG_FLAGS: LangFlag[] = [
  { code: 'th', src: '/icons/flags/th-Thailand.svg', alt: 'TH' },
  { code: 'en', src: '/icons/flags/en-UK.svg', alt: 'EN' },
  { code: 'zh', src: '/icons/flags/zh-China.svg', alt: 'ZH' },
  { code: 'jp', src: '/icons/flags/ja-Japan.svg', alt: 'JP' },
]
