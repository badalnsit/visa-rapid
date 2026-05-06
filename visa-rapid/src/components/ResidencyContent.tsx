'use client'

import { useState } from 'react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function ResidencyContent() {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [eligibilityRef, eligibilityVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
    return phoneRegex.test(phone)
  }

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
    setErrors({})
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)'
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
      closeModal()
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={heroRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center fade-in-up ${heroVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/Residency.webp"
                  alt="Portugal D2 Visa Documentation"
                  className="w-full h-160 object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-600 leading-tight mb-4">
                    Maximise your wealth, visa, tax status,
                    property & investments in Portugal
                  </h1>
                  <p className="text-4xl font-semibold text-gray-900 tracking-wide mb-6 mt-6">
                    What Is the Portugal D7 Visa?
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">The Portugal D7 Visa is one of Europe's most popular and accessible residency routes, and for good reason. Also commonly known as the Portugal Passive Income Visa and, in many cases, the Retirement Visa, the D7 Visa for Portugal is a long-stay residency permit designed for non-EU and non-EEA citizens who do not need to rely on an active, salaried income to support themselves. Whether you are a retiree living off a pension, an investor drawing dividends, or a landlord with rental income, the Portugal D7 Visa gives you the legal right to live in one of Europe's most desirable countries, with a clear five-year path to permanent residency and a Portuguese passport.</p>
                </div>
              </div>
              <a
                href="https://calendly.com/nikita-visarapid/30min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center"
                style={{ borderColor: '#d1d5db', color: '#374151', backgroundColor: 'white', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#9ca3af'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#d1d5db'}
              >
                Talk to our experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            <div className={`bg-gray-300 p-8 rounded-2xl fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="scale-on-hover">
                      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">What Makes the Portugal D7 Visa Different?</h2>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">The D7 Visa for Portugal stands apart from other European residency options because of its low barrier to entry. Unlike the Golden Visa, which requires a minimum investment of €250,000 to €500,000, the Portugal Passive Income Visa asks only that you demonstrate stable, recurring passive income. No business plan. No major capital outlay. Just proof that you can support yourself financially without working in Portugal.</p>
                  <p className="text-gray-700 text-lg mb-6">This makes the Portugal D7 Visa the most accessible and affordable route to legal residency in Portugal for millions of retirees, investors, and passive income earners worldwide.</p>
                  <p className="text-gray-700 text-lg mb-6">Portugal itself has a great deal to offer. A vibrant culture, exquisite cuisine, and diverse landscapes, from the golden beaches of the Algarve to the historic cobblestones of Lisbon, provide an enriching experience for investors, business people seeking improved financial security, and retirees looking for a fulfilling overseas lifestyle. The D7 Visa for Portugal is the most direct way to make Portugal your legal home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            {/* Advantages Content Container - 60% (3/5) */}
            <div className={`lg:col-span-3 bg-green-100 p-8 rounded-2xl fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="mb-1">
                <h2 className="text-5xl font-medium font-serif text-gray-900 mb-8">
                  Who Is the Portugal Passive Income Visa For?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">The Portugal Passive Income Visa is designed for non-EU, non-EEA nationals whose income does not depend on active employment in Portugal. Typical qualifying profiles include:</p>
                <div className="space-y-3">
                  {[
                    "Retirees, US Social Security, UK State Pension, private pensions, and annuities all qualify for the Portugal D7 Visa.",
                    "Landlords, rental income from property held outside Portugal is fully accepted as qualifying income for the D7 Visa for Portugal.",
                    "Investors, dividends from stocks, ETFs, and mutual funds, as well as bond interest, count toward the Portugal Passive Income Visa threshold.",
                    "Royalty and IP holders, authors, musicians, patent holders, and content creators with passive royalty income.",
                    "Those combining multiple passive streams, the Portugal D7 Visa accepts blended income from several sources, provided each stream is clearly documented.",
                    "If your primary income comes from active remote employment, a salary paid by a foreign employer, the D8 Digital Nomad Visa is the more appropriate route. The D7 Visa for Portugal is specifically for those whose money arrives without clocking in."
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3"></div>
                      <p className="text-gray-700">{advantage}</p>
                    </div>
                  ))}
                </div>

                {/* Get Expert Advice Button */}
                <div className="mt-8">
                  <a
                    href="https://calendly.com/nikita-visarapid/30min?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center"
                    style={{ backgroundColor: '#ef4444', color: 'white', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#dc2626'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#ef4444'}
                  >
                    Arrange a call
                  </a>
                </div>
              </div>
            </div>

            {/* Image Container - 40% (2/5) */}
            <div className={`lg:col-span-2 flex items-center justify-center fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="relative">
                <img
                  src="/residency2.webp"
                  alt="Portugal Residency Documentation"
                  className="w-full h-171 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Taxes */}
          <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Key Advantages of the D7 Visa for Portugal</h2>
          <p className="mb-4">Holding the D7 Visa for Portugal unlocks a comprehensive set of rights and benefits that make it one of the most rewarding residency programmes in Europe:</p>
          <div className="space-y-4 mb-6">
            {[
              {
                num: "1",
                detail: "Access to the Portuguese National Health Service (SNS), universal public healthcare available to all legal residents.",
                color: "border-blue-200 bg-blue-50",
                numColor: "bg-blue-600"
              },
              {
                num: "2",
                detail: "Once you become a Portuguese tax resident usually after spending 183+ days in Portugal in a calendar year, you owe Portuguese income tax.",
                color: "border-amber-200 bg-amber-50",
                numColor: "bg-amber-600"
              },
              {
                num: "3",
                detail: "Access to Portuguese National Education Services, public schools, professional training, and vocational programmes for you and your family.",
                color: "border-green-200 bg-green-50",
                numColor: "bg-green-600"
              },
              {
                num: "4",
                detail: "Full legal protection under Portuguese law and the EU legal framework.",
                color: "border-blue-200 bg-blue-50",
                numColor: "bg-blue-600"
              },
              {
                num: "5",
                detail: "Reduced or exempt tax rates under the IFICI regime (NHR 2.0), the Portugal Passive Income Visa makes you eligible to apply for significant tax advantages on qualifying income.",
                color: "border-amber-200 bg-amber-50",
                numColor: "bg-amber-600"
              },
              {
                num: "6",
                detail: "The right to work in Portugal, the Portugal D7 Visa does not prevent you from taking employment in Portugal if you choose.",
                color: "border-green-200 bg-green-50",
                numColor: "bg-green-600"
              },
              {
                num: "7",
                detail: "Family reunification, under the D7 Visa for Portugal, family members are granted a residence visa valid for one year, after which they can apply for permanent residency. Spouses, children, and dependent parents are all eligible.",
                color: "border-blue-200 bg-blue-50",
                numColor: "bg-blue-600"
              },
              {
                num: "8",
                detail: "Portuguese citizenship for children, children born in Portugal after one year of permanent residency can acquire Portuguese citizenship.",
                color: "border-amber-200 bg-amber-50",
                numColor: "bg-amber-600"
              },
              {
                num: "9",
                detail: "Full Portuguese citizenship and passport after five years of legal residency, available to every Portugal Passive Income Visa holder. Portugal allows dual citizenship, so you keep your original passport.",
                color: "border-green-200 bg-green-50",
                numColor: "bg-green-600"
              },
              {
                num: "10",
                detail: "A faster, simpler application process compared to other European residency routes, the Portugal D7 Visa has a clear, structured process from consulate application to residence card.",
                color: "border-blue-200 bg-blue-50",
                numColor: "bg-blue-600"
              },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 border-2 rounded-xl p-5 ${item.color}`}>
                <div className={`flex-shrink-0 w-7 h-7 ${item.numColor} text-white rounded-full flex items-center justify-center text-sm font-bold`}>{item.num}</div>
                <div>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Portugal D7 Visa Income Requirements */}
          <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Portugal D7 Visa Income Requirements</h2>
          <p className="mb-4">The income threshold for the Portugal D7 Visa is tied to the Portuguese national minimum wage. In 2026:</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Applicant</th>
                  <th className="px-4 py-3 text-left font-semibold">Minimum Monthly Passive Income</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { who: "Main applicant", amount: "€920/month" },
                  { who: "+ Spouse / partner", amount: "+€460/month (50%)" },
                  { who: "+ Each dependent child", amount: "+€276/month (30%)" },
                  { who: "Couple with no children", amount: "~€1,380/month" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.who}</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold border border-gray-200">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">In addition to monthly income, the D7 Visa for Portugal requires a savings buffer of €11,040 (12 months of minimum wage) held in a Portuguese bank account. Many applicants hold 15 to 24 months of savings to present a stronger file.</p>
          <p className="mb-6">For most American retirees, US Social Security alone is sufficient to meet the Portugal Passive Income Visa income threshold, making it one of the most reachable European residency routes available.</p>
          {/* Path to Citizenship on the Portugal D7 Visa */}
          <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Path to Citizenship on the Portugal D7 Visa</h2>
          <p className="mb-4">One of the most compelling reasons to pursue the D7 Visa for Portugal is what it leads to: a Portuguese passport and full EU citizenship. Here is the timeline:</p>
          <div className="space-y-4 mb-6">
            {[
              {
                num: "1",
                title: "Year 0",
                detail: "apply for and receive the Portugal D7 Visa (initial 2-year residence permit)",
                color: "border-blue-200 bg-blue-50",
                numColor: "bg-blue-600"
              },
              {
                num: "2",
                title: "Year 2",
                detail: "renew for a further 3 years",
                color: "border-amber-200 bg-amber-50",
                numColor: "bg-amber-600"
              },
              {
                num: "3",
                title: "Year 5",
                detail: "apply for permanent residency or Portuguese citizenship",
                color: "border-green-200 bg-green-50",
                numColor: "bg-green-600"
              },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 border-2 rounded-xl p-5 ${item.color}`}>
                <div className={`flex-shrink-0 w-7 h-7 ${item.numColor} text-white rounded-full flex items-center justify-center text-sm font-bold`}>{item.num}</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-4">Portuguese citizenship gives you freedom of movement across all 27 EU member states, a powerful travel document recognised worldwide, and the right to live, work, and study anywhere in the European Union. Portugal permits dual citizenship, your original passport is not surrendered. For most Portugal Passive Income Visa holders, this is the most valuable long-term outcome of choosing the Portugal D7 Visa.</p>

          {/* Is the Portugal Passive Income Visa Right for You? */}
          <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Is the Portugal Passive Income Visa Right for You?</h2>
          <p className="mb-4">The Portugal D7 Visa is the right choice if your income is passive, pension, rental income, dividends, interest, or royalties. If you want to actually live in Portugal, the D7 Visa for Portugal requires physical presence of at least 16 months in the first 2-year permit period. If you want a clear, affordable path to EU residency and citizenship, access to Portugal's public healthcare, education, and Schengen travel, and the ability to bring family members with you, the Portugal D7 Visa delivers on all of these.</p>
          <p className="mb-4">The Portugal Passive Income Visa is not a visa you hold at arm's length. It is a residency route for people who want to genuinely make Portugal their home, and it rewards that commitment with full residency rights, tax advantages, and eventually a Portuguese passport.</p>
          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions: Portugal D7 Visa</h2>
          <div className="space-y-5 mb-10">
            {[
              {
                q: "What is the Portugal D7 Visa and who is it for?",
                a: "The Portugal D7 Visa is a long-stay residency visa for non-EU nationals who earn passive income, meaning income that arrives without active employment. Also known as the Portugal Passive Income Visa, it is designed for retirees, landlords, investors, and anyone living off pensions, dividends, rental income, or royalties. The D7 Visa for Portugal is not available to people whose primary income is an active salary, those individuals should look at the D8 Digital Nomad Visa instead. If your money comes in without clocking in, the Portugal D7 Visa is built for you."
              },
              {
                q: "How much income do I need for the Portugal Passive Income Visa?",
                a: "The minimum income threshold for the Portugal Passive Income Visa in 2026 is €920 per month for a single applicant. This is tied to the Portuguese national minimum wage. For a couple, the D7 Visa for Portugal requires approximately €1,380 per month, and each dependent child adds a further €276 per month. In addition to monthly income, the Portugal D7 Visa requires a savings buffer of €11,040 held in a Portuguese bank account. US Social Security alone is enough for most Americans to meet the income requirement for the Portugal Passive Income Visa."
              },
              {
                q: "Does the D7 Visa for Portugal lead to citizenship?",
                a: "Yes. The D7 Visa for Portugal is a direct five-year path to Portuguese citizenship and an EU passport. After five years of legal residency on the Portugal D7 Visa, you can apply for permanent residency or full Portuguese citizenship. Portugal allows dual citizenship, so you keep your original passport alongside your new one. For most applicants, the long-term value of the Portugal Passive Income Visa lies precisely here, an EU passport granting freedom of movement across all 27 member states."
              },
              {
                q: "What documents do I need for the Portugal D7 Visa?",
                a: "A complete Portugal D7 Visa application requires a valid passport, proof of passive income (pension letters, bank statements, dividend records covering 6 to 12 months), a Portuguese bank account showing the €11,040 savings buffer, a signed 12-month lease or property deed in Portugal, health insurance valid in Portugal, a criminal background check (apostilled and translated), a NIF (Portuguese tax number), and a motivation letter. Incomplete files are the most common reason D7 Visa for Portugal applications are delayed. The Portugal Passive Income Visa process rewards thorough preparation above all else."
              },
              {
                q: "Can I work in Portugal on the Portugal Passive Income Visa?",
                a: "Yes. Despite the name, the Portugal Passive Income Visa does not prohibit work in Portugal. The Portugal D7 Visa permits holders to take up employment in Portugal if they choose. However, the visa is primarily designed for passive income earners. If active remote work is your main income source, the D7 Visa for Portugal may not be the right fit and the D8 Digital Nomad Visa would be more appropriate. The Portugal Passive Income Visa gives you optionality: you can work if you want, but you are not required to."
              },
              {
                q: "How long does the Portugal D7 Visa process take?",
                a: "From first document to residence permit in hand, the Portugal D7 Visa process typically takes 6 to 10 months. Consulate processing alone takes 60 to 120 days after you submit your application. Once approved, your D7 Visa for Portugal entry stamp gives you a 4-month window to travel to Portugal and attend your AIMA appointment. After the AIMA appointment, the Portugal Passive Income Visa residence card is typically issued within 2 to 3 weeks. Starting early and submitting a complete file are the two biggest factors in a smooth, on-time Portugal D7 Visa approval."
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
