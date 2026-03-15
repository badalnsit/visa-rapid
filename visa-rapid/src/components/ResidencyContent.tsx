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
                    What is the D7 Visa?
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    The Portugal D7 visa is also commonly known as the Portugal Passive Income visa, or in many cases, the Retirement Visa.
                    This visa acts as a route to permanent residency in Portugal and is aimed at non-EU and non-EEA citizens who do
                    not need to rely on an active, salaried income.
                    <br />
                    Portugal has so much to offer; a vibrant culture, exquisite cuisine, and diverse landscapes provide an enriching
                    experience for investors, business people looking for improved financial security or retirees and individuals seeking a fulfilling overseas lifestyle.
                    <br />
                    Under the D7 Visa, holders also have the option of &apos;family reunification&apos; where family members will be granted a residence visa that is valid for one year.
                    After one year, they can apply for permanent residency.
                  </p>
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
                  Discover the advantages of living in Portugal
                </h2>
                <div className="space-y-3">
                  {[
                    "Visa-free travel to anywhere in the Schengen area.",
                    "Access to the Portuguese National Health Service.",
                    "Access to Portuguese National Education Services, professional training, schools, and vocational training.",
                    "Full protection via Portuguese law and legal system.",
                    "Exemptions or otherwise reduced tax rates should the applicant sign up for the NHR (Non-Habitual Residency) programme.",
                    "Being able to work in Portugal.",
                    "Being able to pass on Portuguese citizenship to any newborn children after a year of permanent residency.",
                    "The ability to obtain citizenship in Portugal and acquire a Portuguese passport after 5 years of permanent residency.",
                    "A fast application process in comparison to other routes."
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
          </div>
        </div>
      </section>
    </>
  )
}
