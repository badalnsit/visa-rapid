import React from 'react'
import { Link } from 'react-router-dom'
import RelatedArticles from '../components/RelatedArticles'

const OpportunityCard = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back to Blogs */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center hover:text-gray-900 transition-colors"
            style={{color: 'gray'}}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
          The Opportunity Card: The Ticket to Germany
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Published on December 31, 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="/Jsv.webp"
            alt="The Opportunity Card"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-12">
            {/* Introduction */}
            <div>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium leading-relaxed">
                The German government introduced the “Opportunity Card” (Chancenkarte) to its arsenal of residence permits.
                This permit came to replace the Job Seeker Visa, by opening it to further candidates.
              </p>
              <p className="text-lg text-gray-700 leading-loose">
                When the former Job Seeker Visa was only open to university graduates, the Opportunity Card introduced a point-based system, rewarding different qualifications and paths of life to give more people the chance to come to Germany.
              </p>
            </div>

            {/* What Is the Opportunity Card? */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans tracking-tight">What Is the Opportunity Card?</h2>
              <p className="mb-6 text-lg leading-loose">
                The Opportunity Card is a residence permit in the form of a D-visa for Germany, issued by the German missions abroad responsible for the applicant’s jurisdiction.
                It is issued for a maximum of 1 year and for two purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li>To look for a job in Germany</li>
                <li>To look for a program for the recognition of one’s foreign professional qualifications</li>
              </ul>
            </section>

            {/* Opportunity Card vs Job Seeker Visa */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Opportunity Card vs Job Seeker Visa</h2>
              <p className="mb-6 text-lg leading-loose">
                When the Job Seeker Visa was only open to those looking for a job, the Opportunity Card opens the chance to foreign graduates from apprenticeships to come to Germany.
              </p>
              <p className="mb-4 font-medium text-lg">These applicants can:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                <li>Get their qualifications recognized, or</li>
                <li>Look for an institution that can recognize their qualifications</li>
              </ul>
              <p className="text-lg leading-loose">
                Germany usually does not recognize foreign apprenticeships as equivalent to German ones, and applicants must go through a recognition process.
                The Opportunity Card allows them to come to Germany first, complete this process, and then look for a job.
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Key Features of the Opportunity Card</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Valid for up to 1 year",
                  "Stay in Germany for the entire validity period",
                  "Convertible to long-term residence permit",
                  "No need to return home to change status"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <svg className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-medium text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Part-Time Work */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Option to Work Part-Time While Job Searching</h2>
              <p className="mb-6 text-lg leading-loose">
                This is a new feature of the Opportunity Card. Unlike the former Job Seeker Visa, the Opportunity Card:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                <li>Allows part-time work up to 20 hours per week</li>
                <li>The job does not need to be related to the applicant’s field</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-900 text-lg">
                  <strong className="font-bold">Note:</strong> A side job can help prove secured livelihood, even before leaving the country of origin.
                </p>
              </div>
            </section>

             {/* Who Can Apply? */}
             <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Who Can Apply? – General Eligibility Criteria</h2>
              <p className="mb-6 text-lg leading-loose">There are two mandatory criteria for all Opportunity Card applicants:</p>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Secured Livelihood</h3>
                  <p className="mb-6 text-lg leading-loose">Applicants must prove sufficient financial resources to cover their stay:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-3xl font-bold text-gray-900 mb-1">€1,027</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">per month (2025)</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-3xl font-bold text-gray-900 mb-1">€6,162</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">for 6 months</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-3xl font-bold text-gray-900 mb-1">€12,324</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">for 1 year</div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Ways to Prove Secured Livelihood:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
                      <li>Blocked Account (Sperrkonto) in Germany</li>
                      <li>Formal Obligation Letter (Verpflichtungserklärung) from a sponsor in Germany</li>
                      <li>Current bank account statements</li>
                      <li>Job offer for a side job (up to 20 hours/week)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Health Insurance</h3>
                   <p className="mb-3 text-lg leading-loose">Before receiving the visa, applicants must prove health insurance coverage in Germany.</p>
                   <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
                      <li>Travel insurance is not sufficient</li>
                      <li>Most applicants use incoming health insurance</li>
                      <li>Costs can be several hundred euros per month (must be included in budget planning)</li>
                    </ul>
                </div>
              </div>
            </section>

             {/* Special Eligibility Criteria */}
             <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Special Eligibility Criteria</h2>
              <p className="mb-8 text-lg leading-loose">There are two types of Opportunity Cards:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Option 1 */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-300 transition-colors">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full font-bold text-lg mr-4 shadow-md">1</span>
                    <h3 className="text-2xl font-bold text-gray-900">Recognized Qualifications</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">This option is for university graduates.</p>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>If qualifications are already recognized in Germany, this is sufficient.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      <span>If not recognized, applicants must go through the ZAB recognition process (approx 600 EURO total).</span>
                    </li>
                  </ul>
                </div>

                {/* Option 2 */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-300 transition-colors">
                 <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full font-bold text-lg mr-4 shadow-md">2</span>
                    <h3 className="text-2xl font-bold text-gray-900">Points-Based System</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">For applicants without a university degree (Min. 6 points required).</p>
                  
                  <div className="space-y-3 mb-6">
                     <p className="text-sm font-bold uppercase tracking-wide text-gray-500">Categories:</p>
                     <div className="flex flex-wrap gap-3">
                        {["Professional Qualifications", "Work Experience", "Language Skills", "Age", "Connection to Germany"].map((cat) => (
                           <span key={cat} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">{cat}</span>
                        ))}
                     </div>
                  </div>
                  <p className="text-lg italic text-gray-500 border-t border-gray-200 pt-4 mt-4">
                    Applicants must score in Professional qualifications AND Work experience.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in the Opportunity Card?
          </h3>
          <p className="text-gray-600 mb-6">
            Our experts can help you assess your eligibility and guide you through the application process.
          </p>
          <a
            href="https://calendly.com/nikita-visarapid/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors"
            style={{ backgroundColor: '#ef4444', color: 'white', textDecoration: 'none' }}
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <RelatedArticles currentPath="/blogs/opportunity-card" />
      </div>
    </div>
  )
}

export default OpportunityCard
