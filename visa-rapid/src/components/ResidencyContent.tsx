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
        </div>
      </section>

      {/* Step by Step Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div ref={contentRef} className={`mb-12 fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
              <div className="pl-8">
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  How to Apply for the Portugal <span className="bg-blue-300 text-gray-900 px-1 rounded transition-all duration-300 inline-block">D7 Visa?</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Follow our comprehensive guide to obtain your Portugal D7 Visa
                </p>
              </div>
            </div>
          </div>

          <div className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: 1,
                  title: "Prepare your documents",
                  desc: "Check that you meet the eligibility criteria (such as minimum passive income). Gather supporting documents: passport, photos, proof of income, proof of accommodation, health insurance, criminal record certificate, and bank statements."
                },
                {
                  num: 2,
                  title: "Submit your application",
                  desc: "File your completed application form and documents at your local Portuguese consulate/embassy. Pay the required fees. In some cases, the embassy may keep your passport while the application is processed."
                },
                {
                  num: 3,
                  title: "Receive your visa",
                  desc: "If approved, your visa (valid for 120 days) will be stamped in your passport."
                },
                {
                  num: 4,
                  title: "Travel to Portugal & book SEF appointment",
                  desc: "Enter Portugal within the 120-day visa period. You must then attend an appointment with SEF (AIMA) to convert your D7 visa into a residence permit."
                },
                {
                  num: 5,
                  title: "SEF appointment",
                  desc: "At SEF, bring all supporting documents: proof of funds, proof of accommodation, health insurance, NIF, and your visa. You\u2019ll also fill out forms for residency and a criminal record check. The appointment usually takes around 20 minutes."
                },
                {
                  num: 6,
                  title: "Obtain your residence permit",
                  desc: "Once approved, you\u2019ll receive your residence card within about 2-3 weeks. The first permit is typically valid for 2 years, with options for renewal and eventual permanent residency or citizenship."
                }
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-gray-50 rounded-lg p-8"
                  style={{ transitionDelay: `${step.num * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
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
        </div>
      </section>
    </>
  )
}
