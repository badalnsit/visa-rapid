'use client'

import useScrollAnimation from '@/hooks/useScrollAnimation'

const WhyChooseUs = () => {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 })

  const points = [
    {
      number: '01',
      text: 'Start your career abroad — move to Europe without a job offer and find the right opportunity after arrival.'
    },
    {
      number: '02',
      text: 'Begin your immigration journey today with minimal investment and lasting benefits.'
    },
    {
      number: '03',
      text: 'Entrepreneurial mindset required — no prior company setup or external funding needed.'
    }
  ]

  return (
    <section className="pt-1 sm:pt-6 lg:pt-10 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Predictable Immigration - No Endless Waiting
          </h2>
        </div>

        {/* Main content */}
        <div ref={contentRef} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>

          {/* Serif heading */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            Don&apos;t wait, time is flying — start your application today!
          </h3>

          {/* 3 numbered points */}
          <div ref={cardsRef} className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 fade-in-up ${cardsVisible ? 'visible' : ''}`}>
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl font-bold text-gray-200 block mb-4">{point.number}</span>
                <p className="text-gray-700 text-lg leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-3xl sm:text-4xl text-gray-900 italic font-serif">
              Looks good?
            </p>
            <a
              href="https://calendly.com/nikita-visarapid/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-md font-medium text-lg transition-colors flex-shrink-0"
              style={{
                backgroundColor: 'rgb(111, 54, 2)',
                color: 'white',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(75, 37, 1)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(111, 54, 2)'}
            >
              Contact Us Today
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
