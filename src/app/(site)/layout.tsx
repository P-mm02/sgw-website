import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'สยามกราวด์วอเตอร์ SIAM GROUNDWATER',
  description:
    'เชี่ยวชาญ สำรวจ เจาะบ่อ น้ำบาดาล น้ำแร่ น้ำพุร้อน ซ่อมบำรุงบ่อ และแก้ไขปัญหา สำหรับโครงการภาครัฐ และเอกชนทั่วประเทศไทย – Siam Groundwater, professional groundwater services in Thailand.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
