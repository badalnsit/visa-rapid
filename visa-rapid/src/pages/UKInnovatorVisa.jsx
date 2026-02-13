import React from 'react'
import { InlineWidget } from "react-calendly"
import useScrollAnimation from '../hooks/useScrollAnimation'

const UKInnovatorVisa = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [stepsRef, stepsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [eligibilityRef, eligibilityVisible] = useScrollAnimation({ threshold: 0.1 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })

  const steps = [
    {
      title: "Strategy",
      description: "To begin your Innovator Founder Visa journey, you must first obtain an endorsement from a recognised UK endorsing body. We conduct an in-depth strategy session to fully understand your background, business idea, and commercial objectives. This allows us to shape a strong, endorsement-ready case strategy tailored to UK requirements."
    },
    {
      title: "Business Plan & Founder Profile Workshop",
      description: "We work closely with UK endorsing bodies and understand what they look for beyond written guidelines. Using our insight into organisations such as Tech Nation and other approved endorsing bodies, we refine your business plan and founder profile (CV) to position your application for success."
    },
    {
      title: "Endorsement & Case Preparation",
      description: "Once your endorsement is secured, we prepare a complete and compliant application bundle, ensuring that every document supports your business narrative and meets Home Office standards. This includes applications for dependent family members, where applicable."
    },
    {
      title: "Innovator Founder Visa Application",
      description: "We manage the end-to-end visa application process, from form submission to supporting documentation, ensuring accuracy, consistency, and compliance throughout. Our team remains engaged until a decision is issued."
    },
    {
      title: "UK Company Formation & Ongoing Support",
      description: "After your visa is granted, we assist with UK company incorporation, business bank account setup, and registered business address. You will also receive ongoing access to specialist immigration and founder-focused guidance, supporting you well beyond your arrival in the UK."
    }
  ]

  const eligibilityCards = [
    {
      title: "New",
      description: "You must establish a new UK business. Joining or investing in an existing trading company is not permitted under the Innovator Founder route.",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    {
      title: "Viable",
      description: "You must demonstrate that your business concept has a genuine and realistic prospect of success within the UK market.",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Innovative",
      description: "Your business must introduce a distinctive and original solution that addresses an identified market need or challenge.",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Scalable",
      description: "Your proposal must show clear potential for growth, including the ability to expand operations, revenue, and market reach over time.",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
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
                    Start a Business in the UK
                  </h1>
                  <p className="text-3xl font-semibold text-gray-900 tracking-wide mb-6 mt-6">
                    In 5 Proven Steps
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    The UK Innovator Founder Visa is a leading business immigration route for
                    international startup founders and experienced entrepreneurs.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-10">
                    This visa enables you to establish and scale an innovative business in the UK,
                    providing access to one of the world's most dynamic and globally connected
                    business ecosystems—helping you take your venture to the next level.
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
                    Our 5-Step Process
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
                  src="/uk-visa.jpg"
                  alt="UK Innovator Founder Visa"
                  className="w-full h-150 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div ref={stepsRef} className={`mb-12 fade-in-up ${stepsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center">
              Our 5-Step Innovator Founder Visa Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center mx-auto">
              Start your own business in the UK with an Innovator/Founder visa in 5 steps
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
                  {/* Number */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
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
                {/* Number */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">5</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {steps[4].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {steps[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Is Your Business Idea Eligible for the UK Innovator Founder Visa?
              </h2>
            </div>

            {/* Eligibility Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eligibilityCards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-blue-100 p-8 rounded-2xl hover-lift stagger-item h-80 flex flex-col ${eligibilityVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex-1">
                    <div className="mb-4 scale-on-hover">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-700">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div
            ref={ctaRef}
            className={`text-center fade-in-up ${ctaVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Join the UK's Global Talent Ecosystem
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We guide founders through a seamless and stress-free immigration journey.
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
                alt="UK business landscape"
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

export default UKInnovatorVisa
