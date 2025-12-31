import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const JobSeekerVisa = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [oppCardRef, oppCardVisible] = useScrollAnimation({ threshold: 0.1 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [eligibilityRef, eligibilityVisible] = useScrollAnimation({ threshold: 0.1 })
  const [whoCanApplyRef, whoCanApplyVisible] = useScrollAnimation({ threshold: 0.1 })
  const [stepByStepRef, stepByStepVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })
  const [currentStep, setCurrentStep] = useState(0)

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    currentLocation: '',
    profession: '',
    experience: '',
    education: '',
    preferredDestination: '',
    budget: '',
    timeframe: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
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
      country: '',
      currentLocation: '',
      profession: '',
      experience: '',
      education: '',
      preferredDestination: '',
      budget: '',
      timeframe: '',
      message: ''
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate email
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate phone
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)'
    }

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }
    if (!formData.profession.trim()) {
      newErrors.profession = 'Profession is required'
    }

    setErrors(newErrors)

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData)
      closeModal()
    }
  }

  const steps = [
    {
      title: "Prepare Required Documents",
      description: "Gather your CV, passport, academic qualifications, and proof of financial resources to support yourself during your job search in Portugal."
    },
    {
      title: "Submit Job Seeker Visa Application",
      description: "Apply at the Portuguese embassy or consulate in your home country with all required documents and application forms."
    },
    {
      title: "Enter Portugal and Register",
      description: "Upon approval, enter Portugal and register with local authorities within the specified timeframe."
    },
    {
      title: "Search for Employment",
      description: "Actively search for employment opportunities in your field while maintaining legal status in Portugal."
    },
    {
      title: "Secure Job Offer",
      description: "Obtain a job offer from a Portuguese employer that meets the visa requirements and salary thresholds."
    },
    {
      title: "Apply for Work Permit",
      description: "Convert your job seeker visa to a work permit once you have secured employment with a Portuguese employer."
    },
    {
      title: "Obtain Residence Permit",
      description: "Apply for a residence permit that allows you to live and work in Portugal long-term, renewable based on employment status."
    }
  ]

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

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
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
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
              <div className="space-y-3">
                <div>
                  <p className="text-5xl font-medium text-gray-900 tracking-wide mb-6">
                    The Opportunity Card: The ticket to Germany

                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">

                 The German government introduced the “Opportunity Card”
                  (Chancenkarte) to its arsenal of residence permits. This permit came to
                  replace the job seeker visa, by opening it to further candidates. When the
                  former job seeker visa was only open to university graduates, the
                  opportunity card introduced a point-based system, rewarding different
                  qualifications and paths of life to give more people the chance to come to
                  Germany.

                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    className="px-8 py-3 rounded-lg font-medium transition-colors"
                    style={{ backgroundColor: '#ef4444', color: 'white' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onClick={() => {
                      benefitsRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    What are the benefits?
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
                  src="/Jsv.webp"
                  alt="Portugal Job Seeker Visa"
                  className="w-full h-140 object-cover rounded-xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Opportunity Card Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={oppCardRef}
            className={`fade-in-up ${oppCardVisible ? 'visible' : ''}`}
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg border border-amber-200">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/30 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200/30 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-500 rounded-xl shadow-md">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                    What is the Opportunity Card?
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  The Opportunity Card is a residence permit in the form of a D-visa for Germany issued by the German missions abroad responsible in the jurisdiction of the applicant. It is issued for a maximum of <span className="font-semibold text-amber-600">1 year</span> and for 2 purposes:
                </p>

                {/* Purpose Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Search</h3>
                        <p className="text-gray-600">To look for a job in Germany</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualification Recognition</h3>
                        <p className="text-gray-600">To look for a program for the recognition of one's foreign professional qualifications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            ref={benefitsRef}
            className={`fade-in-up ${benefitsVisible ? 'visible' : ''}`}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                What are the key features?

              </h2>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Temporary residence permit Card */}
              <div className={`bg-blue-100 p-10 rounded-2xl hover-lift stagger-item flex flex-col ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <div className="flex-1">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Temporary residence permit (valid up to 1 year)
                  </h3>
                  <p className="text-gray-700">
                    With the Germany Opportunity Card, you can move to Germany for up to 12 months to explore job opportunities or get your qualifications recognized. You are allowed to stay in Germany for the entire period, and once you secure a job or admission, the card can be upgraded to a long-term residence permit without the hassle of traveling back to your home country.
                  </p>
                </div>
              </div>

              {/* Option to work part-time Card */}
              <div className={`bg-blue-100 p-10 rounded-2xl hover-lift stagger-item flex flex-col ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <div className="flex-1">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 12h.01M12 12h4m-4 0H8m4 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Option to work part-time while job searching
                  </h3>
                  <p className="text-gray-700">
                    The Opportunity Card introduces a major advantage over the earlier Job Seeker Visa it allows applicants to work. Holders can take up part-time employment for up to 20 hours per week while looking for a job or completing qualification recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Processing Time Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            {/* Eligibility Criteria Container*/}
            <div className={`bg-gray-300 p-8 rounded-2xl fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left Column - Text Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="scale-on-hover">
                      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 ">
                      Who can apply?
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6">
                    There are two main pathways to obtain the Germany Opportunity Card.
                  </p>

                  <div className="space-y-6">
                    {/* Pathway 1 */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        1. Opportunity Card for University Graduates
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Applicants who hold a university degree that is recognized in Germany may qualify directly for the Opportunity Card, provided all general eligibility criteria are met.
                      </p>
                    </div>

                    {/* Pathway 2 */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        2. Opportunity Card – Points-Based System
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Applicants without a university degree may still be eligible through the points-based system introduced by the German government. To qualify, candidates must score at least 6 points based on factors such as professional experience, language skills, age, and other criteria.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image and Button */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative">
                    <img
                      src="/Job1.webp"
                      alt="Job Application Accepted"
                      className="w-90 h-95 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  {/* Get Expert Advice Button - Centered below Image */}
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://calendly.com/nikita-visarapid/30min?back=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center"
                      style={{ backgroundColor: '#ef4444', color: 'white', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                    >
                      Get expert advice
                    </a>
                  </div>
                </div>
              </div>

              {/* Note - Full Width at Bottom */}
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg md:ml-0 md:mr-12">
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Note:</span> If the qualifications are not yet recognized, the applicant must complete the ZAB recognition process in order to have them officially recognized in Germany.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-5xl w-full max-h-[92vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="bg-blue-600 text-white px-4 sm:px-6 py-4 rounded-t-lg relative">
              <h2 className="text-lg sm:text-xl font-semibold text-center">Apply for Job Seeker Visa</h2>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 transition-colors p-1"
                style={{
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e5e7eb';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} style={{color: 'inherit'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="p-4 sm:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">Personal Information</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.country ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    </div>
                  </div>
                </div>

                {/* Professional Information Section */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">Professional Background</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                      <input
                        type="text"
                        value={formData.currentLocation}
                        onChange={(e) => handleInputChange('currentLocation', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Profession <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="text"
                        value={formData.profession}
                        onChange={(e) => handleInputChange('profession', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.profession ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                      <select
                        value={formData.education}
                        onChange={(e) => handleInputChange('education', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select education</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Immigration Preferences Section */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">Job Search Preferences</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Job Location</label>
                      <select
                        value={formData.preferredDestination}
                        onChange={(e) => handleInputChange('preferredDestination', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select location preference</option>
                        <option value="lisbon">Lisbon</option>
                        <option value="porto">Porto</option>
                        <option value="coimbra">Coimbra</option>
                        <option value="braga">Braga</option>
                        <option value="any">Any city in Portugal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select salary expectation</option>
                        <option value="under-30k">Under €30,000</option>
                        <option value="30k-50k">€30,000 - €50,000</option>
                        <option value="50k-80k">€50,000 - €80,000</option>
                        <option value="above-80k">Above €80,000</option>
                      </select>
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Search Timeline</label>
                      <select
                        value={formData.timeframe}
                        onChange={(e) => handleInputChange('timeframe', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">When do you plan to start your job search?</option>
                        <option value="immediate">Immediately (0-3 months)</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="1year+">1+ years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your specific job search goals, industry preferences, or any questions about the Portugal Job Seeker Visa..."
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
                  style={{
                    backgroundColor: '#0d9488',
                    color: '#ffffff',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0d9488'}
                >
                  Submit Job Seeker Visa Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default JobSeekerVisa