import React from 'react'
import { InlineWidget } from "react-calendly"
import useScrollAnimation from '../hooks/useScrollAnimation'

const GlobalTalentVisa = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [whoRef, whoVisible] = useScrollAnimation({ threshold: 0.1 })
  const [endorsementRef, endorsementVisible] = useScrollAnimation({ threshold: 0.1 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [stepsRef, stepsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })

  const steps = [
    {
      title: "Eligibility & Profile Assessment",
      description: "We evaluate your background, achievements, and career trajectory to determine the most suitable endorsing body and category (Exceptional Talent or Exceptional Promise)."
    },
    {
      title: "Evidence Strategy & Personal Statement",
      description: "We help structure your evidence portfolio, recommendation letters, and personal statement to clearly demonstrate your impact, recognition, and future contribution to the UK."
    },
    {
      title: "Endorsement Application",
      description: "We prepare and submit a strong, well-positioned endorsement application, aligned with the endorsing body's expectations and assessment criteria."
    },
    {
      title: "Global Talent Visa Application",
      description: "Once endorsed, we manage the full visa application process, including dependent applications where required."
    },
    {
      title: "Post-Approval Support",
      description: "After visa approval, we provide guidance on UK relocation, compliance and renewals, and settlement (ILR) planning."
    }
  ]

  const endorsingBodies = [
    {
      name: "Tech Nation",
      field: "Digital technology professionals",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Arts Council England",
      field: "Arts and culture",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      name: "Royal Society",
      field: "Science and research",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "UK Research and Innovation",
      field: "Academic and research talent",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  const keyBenefits = [
    { text: "No job offer or sponsorship required" },
    { text: "Freedom to work, freelance, or build a business" },
    { text: "Flexible visa length (up to 5 years)" },
    { text: "Faster route to Indefinite Leave to Remain (ILR)" },
    { text: "Ability to bring dependent family members" },
    { text: "Recognised as one of the UK's most flexible elite visa routes" }
  ]

  const whoIsThisFor = [
    "Recognised leaders or rising talents in their field",
    "Looking for freedom from sponsorship restrictions",
    "Seeking a long-term future in the UK",
    "Interested in fast-track settlement opportunities"
  ]

  return (
    <>
      <style>
        {`
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          }
          .scale-on-hover {
            transition: transform 0.3s ease;
          }
          .scale-on-hover:hover {
            transform: scale(1.05);
          }
          .stagger-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
          }
          .stagger-item.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={heroRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center fade-in-up ${heroVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1">
              <div className="space-y-1">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-600 leading-tight mb-4">
                    Global Talent Visa (UK)
                  </h1>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    The UK Global Talent Visa is a prestigious immigration route for exceptional and emerging leaders in fields such as technology, science, arts, culture, and academia.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    This visa is designed for individuals who have demonstrated outstanding talent or exceptional promise and wish to live and work in the UK without employer sponsorship.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-10">
                    The Global Talent Visa provides maximum flexibility, allowing you to work for any employer, run your own business, or pursue independent projects while contributing to the UK's global innovation ecosystem.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="px-8 py-3 rounded-lg font-medium transition-colors"
                    style={{ backgroundColor: '#ef4444', color: 'white' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onClick={() => {
                      stepsRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    Our Process
                  </button>
                  <a
                    href="https://calendly.com/nikita-visarapid/30min?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center"
                    style={{ borderColor: '#d1d5db', color: '#374151', backgroundColor: 'white', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.target.style.borderColor = '#9ca3af'}
                    onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}
                  >
                    Talk to our experts
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                <img
                  src="/gtv.jpg"
                  alt="UK Global Talent Visa"
                  className="w-full h-130 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Visa For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={whoRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start fade-in-up ${whoVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Heading */}
            <div className={`fade-in-up ${whoVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 leading-tighter">
                Who Is This <br/>
                <span className="bg-purple-100 text-gray-900 px-1 rounded transition-all duration-300 inline-block">Visa For?</span>
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className={`fade-in-up ${whoVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="space-y-10">
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  The Global Talent Visa is suitable for professionals who are:
                </p>
                {whoIsThisFor.map((item, index) => (
                  <div key={index} className={`flex items-start gap-3 fade-in-up ${whoVisible ? 'visible' : ''}`} style={{ transitionDelay: `${(index + 2) * 0.1}s` }}>
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-black rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
                <p className="text-base text-gray-600 leading-relaxed mt-6">
                  Applicants are assessed based on merit, track record, and future potential, rather than salary thresholds or job offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsement Requirement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            ref={endorsementRef}
            className={`fade-in-up ${endorsementVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Endorsement Requirement
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                To qualify, applicants must obtain an endorsement from an approved UK endorsing body. Each endorsing body assesses applications based on field-specific criteria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {endorsingBodies.map((body, index) => (
                <div
                  key={index}
                  className={`bg-purple-50 p-6 rounded-2xl hover-lift stagger-item h-44 flex flex-col ${endorsementVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex-1">
                    <div className="mb-4 scale-on-hover">
                      {body.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {body.name}
                    </h3>
                    <p className="text-gray-700">
                      {body.field}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={benefitsRef}
            className={`fade-in-up ${benefitsVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Key Benefits of the Global Talent Visa
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-purple-50 p-6 rounded-2xl hover-lift stagger-item flex items-center gap-4 ${benefitsVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div ref={stepsRef} className={`mb-12 fade-in-up ${stepsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center">
              Our Global Talent Visa Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center mx-auto">
              A clear, strategic, and stress-free journey to your UK Global Talent Visa
            </p>
          </div>

          <div className={`fade-in-up ${stepsVisible ? 'visible' : ''}`}>
            {/* First 4 steps in 2-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {steps.slice(0, 4).map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-purple-600">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Last step centered */}
            <div className="flex justify-center">
              <div
                className="bg-white rounded-lg p-8 max-w-lg w-full"
                style={{ transitionDelay: `${4 * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-600">5</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {steps[4].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {steps[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            ref={ctaRef}
            className={`text-center fade-in-up ${ctaVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Be Part of the UK's World-Class Talent Ecosystem
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We ensure your Global Talent Visa journey is clear, strategic, and stress-free.
            </p>
            <a
              href="https://calendly.com/nikita-visarapid/30min?back=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#ef4444', color: 'white', textDecoration: 'none' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            ref={contactRef}
            className={`relative rounded-3xl overflow-hidden fade-in-up ${contactVisible ? 'visible' : ''}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/Visa2.webp"
                alt="UK landscape"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 lg:p-16">
              <div className="max-w-5xl mx-auto">
                {/* Calendly Widget */}
                <div style={{
                  height: "680px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e5e7eb"
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GlobalTalentVisa
