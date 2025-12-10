'use client'

import type { FormEvent } from 'react'
import './page.css'

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log('Contact form submitted:', data)
    // TODO: connect to EmailJS or your own API route here
  }

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1 className="contact-title-main">ติดต่อเรา</h1>
        <h2 className="contact-title-sub">บริษัท สยามกราวด์วอเตอร์ จำกัด</h2>
        <p className="contact-address">
          75 ซอยรามคำแหง 60 (สวนสน) แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240
        </p>
      </section>

      {/* Contacts + Map */}
      <section className="contact-main">
        <div className="contact-layout">
          {/* Contact methods */}
          <div className="contact-methods">
            <a href="tel:027350789" className="contact-card">
              <div className="contact-card-icon">
                <img
                  src="/images/logo/contact/phone-call.png"
                  alt="โทรศัพท์สำนักงาน"
                />
              </div>
              <div className="contact-card-text">
                <h3 className="contact-card-title">ติดต่อสำนักงาน</h3>
                <p className="contact-card-detail">โทร : 0-2735-0789</p>
              </div>
            </a>

            <a href="tel:023750791" className="contact-card">
              <div className="contact-card-icon">
                <img src="/images/logo/contact/fax.png" alt="แฟกซ์" />
              </div>
              <div className="contact-card-text">
                <h3 className="contact-card-title">แฟกซ์</h3>
                <p className="contact-card-detail">FAX : 0-2375-0791-2</p>
              </div>
            </a>

            <a href="mailto:sgw_th@outlook.com" className="contact-card">
              <div className="contact-card-icon">
                <img src="/images/logo/contact/email.png" alt="อีเมล" />
              </div>
              <div className="contact-card-text">
                <h3 className="contact-card-title">อีเมล</h3>
                <p className="contact-card-detail">
                  Email : sgw_th@outlook.com
                </p>
              </div>
            </a>

            <a href="tel:0898954757" className="contact-card">
              <div className="contact-card-icon">
                <img
                  src="/images/logo/contact/phone-call.png"
                  alt="โทรศัพท์คุณวศิน"
                />
              </div>
              <div className="contact-card-text">
                <h3 className="contact-card-title">ติดต่อคุณวศิน</h3>
                <p className="contact-card-detail">โทร : 089-895-4757</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/siamgroundwater"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <img
                  src="/images/logo/contact/Facebook_icon.png"
                  alt="Facebook Siamgroundwater"
                />
              </div>
              <div className="contact-card-text">
                <h3 className="contact-card-title">Facebook</h3>
                <p className="contact-card-detail">SIAMGROUNDWATER CO.,LTD</p>
              </div>
            </a>

            <a
              href="https://line.me/R/ti/p/@sgw_th?from=page&searchId=sgw_th"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <img
                  src="/images/logo/contact/LINE_icon.png"
                  alt="LINE Official"
                />
              </div>
              <div className="contact-card-text">
                <h3 className="contact-card-title">LINE Official</h3>
                <p className="contact-card-detail">LINE OA ID : @SGW_TH</p>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="contact-map-wrapper">
            <div className="contact-map">
              <iframe
                className="contact-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0692563652375!2d100.649723!3d13.761439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61912fc83d53%3A0xbd830b6c1e753fd9!2z4LiV4Lin4Lix4LiXIOC5guC4reC5gOC4meC4oiDguK3guLLguLDguKXguLLguJfguK3guKPguLTguKXguKrguJQ!5e0!3m2!1sen!2sth!4v1699868492717!5m2!1sen!2sth"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="contact-form-section">
        <h2 className="contact-form-heading">Contact Form</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <div className="contact-form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="first_name">First Name</label>
              <input id="first_name" name="first_name" type="text" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="last_name">Last Name</label>
              <input id="last_name" name="last_name" type="text" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>

            <div className="contact-form-field">
              <label htmlFor="state">State / Province</label>
              <input id="state" name="state" type="text" required />
            </div>

            <div className="contact-form-field contact-form-field-full">
              <label htmlFor="details">More Details</label>
              <textarea id="details" name="details" required rows={4} />
            </div>
          </div>

          <div className="contact-form-actions">
            <button type="submit" className="contact-form-submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
