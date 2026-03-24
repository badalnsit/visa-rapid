'use client'

import useScrollAnimation from '@/hooks/useScrollAnimation'

const reasons = [
  {
    number: '01',
    title: 'Based in Europe — Not Advising From Outside',
    desc: 'We are Blade Hire Unipessoal LDA, legally incorporated in Portugal. We operate inside the European system, not around it.',
  },
  {
    number: '02',
    title: 'Qualified Legal Experts on Every Case',
    desc: 'Every application is reviewed and supported by licensed European immigration lawyers — not just consultants.',
  },
  {
    number: '03',
    title: '98%+ Application Success Rate',
    desc: 'Built on rigorous preparation, legal oversight, and zero shortcuts.',
  },
  {
    number: '04',
    title: 'Truly End-to-End',
    desc: 'From your first conversation to the day your residence card arrives, we are with you at every step.',
  },
  {
    number: '05',
    title: 'Business Incorporation + Immigration — Together',
    desc: 'Most firms do one or the other. We do both, in parallel, so nothing falls through the gaps.',
  },
  {
    number: '06',
    title: 'Transparent Pricing',
    desc: 'No hidden fees. No surprises. A clear cost breakdown before you commit to anything.',
  },
  {
    number: '07',
    title: 'Global Reach, European Presence',
    desc: 'We work with founders and entrepreneurs from Asia, the Middle East, Africa, and beyond — all moving into Europe.',
  },
]

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
      </svg>
    ),
    title: 'Immigration & Visa Support',
    desc: 'Full journey management from eligibility assessment to residence card. We cover Business Owner, Startup, Job Seeker, Passive Income, and Global Talent visa pathways across Europe.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Business Incorporation & Expansion',
    desc: 'Company registration in Portugal, NIF setup, bank account guidance, compliance registration, and ongoing regulatory advisory. Your business is operational in Europe from day one.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Relocation & Settlement Support',
    desc: 'Housing search, rental review, address registration, healthcare access, and practical onboarding — every administrative step handled until you are fully settled.',
  },
]

const steps = [
  { num: '01', title: 'Initial Consultation', desc: 'We assess your situation and identify the right path forward.' },
  { num: '02', title: 'Personalised Strategy', desc: 'Full roadmap: visa, business setup, timeline, costs.' },
  { num: '03', title: 'Document Preparation', desc: 'Every document prepared and verified by our team.' },
  { num: '04', title: 'Legal Review', desc: 'Licensed European lawyers review your full application.' },
  { num: '05', title: 'Submission & Case Management', desc: 'We manage the process and respond to all official queries.' },
  { num: '06', title: 'Business Incorporation', desc: 'Company registration handled in parallel with your visa.' },
  { num: '07', title: 'Relocation Support', desc: 'Housing, accounts, registration — all covered.' },
  { num: '08', title: 'Residence Card Issuance', desc: 'We close the case when your card is in your hands.' },
]

const AboutContent = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [reasonsRef, reasonsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [beliefRef, beliefVisible] = useScrollAnimation({ threshold: 0.1 })
  const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [processRef, processVisible] = useScrollAnimation({ threshold: 0.1 })
  const [commitRef, commitVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div
          ref={heroRef}
          className={`max-w-4xl mx-auto text-center fade-in-up ${heroVisible ? 'visible' : ''}`}
        >
          <span
            className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full"
            style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}
          >
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            We help founders build their <br className="hidden sm:block" />
            <span className="italic font-serif" style={{ color: '#ef4444' }}>futures in Europe.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From first step to residence card — entrepreneurs, founders, and professionals trust us to get them there the right way.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            ref={reasonsRef}
            className={`fade-in-up ${reasonsVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
              Why Founders & Entrepreneurs Choose Visa Rapid
            </h2>
            <p className="text-gray-500 mb-12 text-lg">Seven reasons our clients trust us with one of the biggest moves of their lives.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.slice(0, 6).map((r, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-7 hover:shadow-md transition-shadow"
                  style={{ borderColor: '#fee2e2', transitionDelay: `${i * 0.07}s` }}
                >
                  <span className="text-3xl font-bold block mb-3" style={{ color: '#fca5a5' }}>{r.number}</span>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* 7th reason — full width */}
            <div
              className="mt-6 border rounded-2xl p-7 hover:shadow-md transition-shadow"
              style={{ borderColor: '#fee2e2' }}
            >
              <span className="text-3xl font-bold block mb-3" style={{ color: '#fca5a5' }}>{reasons[6].number}</span>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{reasons[6].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reasons[6].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e293b' }}>
        <div className="max-w-4xl mx-auto">
          <div
            ref={beliefRef}
            className={`fade-in-up ${beliefVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">What We Believe</h2>
            <div className="rounded-3xl p-8 sm:p-12 border" style={{ backgroundColor: '#0f172a', borderColor: '#334155' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#ef4444' }}>The EU&apos;s €1 Trillion Green Deal</p>
              <p className="text-xl sm:text-2xl font-light leading-relaxed mb-6" style={{ color: '#e2e8f0' }}>
                The European Union is investing €1 trillion by 2030 in its Green Deal — an economic and climate strategy worth roughly one third of India&apos;s entire GDP.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                That is not a policy announcement. That is a procurement pipeline. Contracts, partnerships, and vendor opportunities on a scale most founders have never had access to before.
              </p>
              <p className="leading-relaxed font-medium" style={{ color: '#cbd5e1' }}>
                If your product touches sustainability, energy, infrastructure, technology, or supply chain — Europe is actively looking for what you are building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            ref={servicesRef}
            className={`fade-in-up ${servicesVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">What We Do</h2>
            <p className="text-gray-500 mb-12 text-lg">Three pillars. One seamless journey.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: i === 0 ? '#fef2f2' : i === 1 ? '#eff6ff' : '#f0fdf4',
                    transitionDelay: `${i * 0.1}s`
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                    style={{
                      backgroundColor: i === 0 ? '#ef4444' : i === 1 ? '#3b82f6' : '#22c55e',
                      color: '#ffffff'
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            ref={processRef}
            className={`fade-in-up ${processVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Our Process</h2>
            <p className="text-gray-500 mb-12 text-lg">Eight steps. Zero ambiguity.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <span className="text-2xl font-bold block mb-3" style={{ color: '#ef4444' }}>{s.num}</span>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            ref={commitRef}
            className={`fade-in-up ${commitVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">Our Commitment</h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed mb-12">
              <p>
                When you work with Visa Rapid, you are not just hiring a service. You are gaining a team of legally qualified professionals who are personally invested in your outcome.
              </p>
              <p>
                We will be honest about what is achievable. We will flag risks before they become problems. We will not consider our job done until you are settled, compliant, and ready to build what you came to Europe to build.
              </p>
              <p className="text-2xl sm:text-3xl font-light text-gray-900 font-serif italic">
                Europe is waiting. Let us help you get there — the right way.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-3xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ backgroundColor: '#1e293b' }}>
              <div>
                <p className="text-xl font-semibold text-white mb-1">Ready to start your journey?</p>
                <p className="text-sm" style={{ color: '#94a3b8' }}>Schedule a free consultation — no commitment required.</p>
              </div>
              <a
                href="https://calendly.com/nikita-visarapid/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-8 py-4 rounded-xl font-semibold text-base transition-colors"
                style={{ backgroundColor: '#ef4444', color: '#ffffff' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#dc2626'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#ef4444'}
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default AboutContent
