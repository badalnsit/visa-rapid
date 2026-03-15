'use client'

import { InlineWidget } from 'react-calendly'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function ContactContent() {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.1 })
  const [calendlyRef, calendlyVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className={`max-w-4xl mx-auto text-center fade-in-up ${heroVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your journey to Europe? Book a free consultation with our visa experts or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div
          ref={infoRef}
          className={`max-w-6xl mx-auto fade-in-up ${infoVisible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover-lift">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+919910578099" className="text-red-600 hover:text-red-700 font-medium text-lg">
                +91 9910578099
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:nikita@visarapid.com" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                nikita@visarapid.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover-lift">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.744-1.368A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.59.5.5 0 00-.42-.062l-3.108.896.96-2.946a.5.5 0 00-.075-.458A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919910578099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium text-lg"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div
          ref={calendlyRef}
          className={`max-w-5xl mx-auto fade-in-up ${calendlyVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Book a Free Consultation
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Schedule a 30-minute call with our visa experts to discuss your eligibility, timeline, and next steps.
          </p>
          <div style={{
            height: '680px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #e5e7eb'
          }}>
            <InlineWidget
              url="https://calendly.com/nikita-visarapid/30min"
              styles={{
                height: '110%',
                width: '100%',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
