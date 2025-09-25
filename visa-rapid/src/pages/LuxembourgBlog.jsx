import React from 'react'
import { Link } from 'react-router-dom'

const LuxembourgBlog = () => {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Luxembourg to scrap Golden Visa as Portugal stands strong
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Published on September 18, 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="/Blog.webp"
            alt="Luxembourg Golden Visa termination"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600 mb-8 font-medium">
            Luxembourg is set to terminate its Golden Visa programme following seven years of limited success and uptake.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mt-10 mb-4">
            European investment migration landscape consolidates
            </h2>

            <p>
            The proposed Luxembourg termination follows similar decisions across Europe. Most recently, Spain discontinued its Golden Visa programme, with the closure taking effect in April 2025. <br />

Luxembourg's programme structure requires separate administrative tracks through the economy and finance ministries, creating operational complexities that have proven challenging given the limited uptake.    </p>



            <h2 className="text-4xl font-semibold text-gray-900 mt-8 mb-4">
            Market positioning and investment considerations
            </h2>

            <p>
            The consolidation of European investment migration options positions Portugal among a select group of EU jurisdictions maintaining active programmes. 
            <br />
            <br />

Portugal's programme provides pathways to permanent residency and Portuguese citizenship within five years. Eligible individuals can also benefit from the IFICI tax regime, which offers competitive fiscal advantages, such as flat 20% tax rates on Portugal-sourced income and a 0% tax on foreign-sourced income, such as capital gains and dividends.
<br />
<br />


The Golden Visa programme's family reunification provisions enable spouses and dependent children to obtain residence permits, addressing comprehensive relocation requirements for high-net-worth individuals seeking European residency solutions. </p>


            <h2 className="text-4xl font-semibold text-gray-900 mt-10 mb-4">
              What This Means for Investors
            </h2>

            <p>
              Luxembourg's decision to terminate its Golden Visa programme reflects the broader trend of European countries reassessing their investment migration offerings. However, this creates opportunities for well-established programmes like those in Portugal.
            </p>

            <p>
              For international investors, this development underscores the importance of choosing established, stable investment migration programmes with proven track records and clear regulatory frameworks.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mt-10 mb-4">
              Looking Forward
            </h2>

            <p>
              As the European investment migration landscape continues to evolve, Portugal's commitment to maintaining attractive and accessible investment visa programmes positions it as a leading destination for international investors seeking European residency.
            </p>

            <p>
              The termination of Luxembourg's programme serves as a reminder of the importance of due diligence when selecting an investment migration programme. Portugal's established infrastructure, experienced service providers, and stable regulatory environment continue to make it an attractive choice for discerning investors.
            </p>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in Portugal's Investment Visa Options?
          </h3>
          <p className="text-gray-600 mb-6">
            Our experts can help you navigate Portugal's investment visa programmes and find the right option for your needs.
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

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="/Blog2.webp"
                alt="Portugal Passport Power"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full mb-3">
                  Visa & Finance
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Portugal now outranks UK and US in passport power
                </h4>
                <a
                href="/blogs/Portugal-passport-power"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-4"
                style={{color: 'gray'}}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="/Blog3.webp"
                alt="LGBTQ+ Golden Visa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full mb-3">
                  Culture & Heritage
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  LGBTQ+ Americans choose Portugal's Golden Visa
                </h4>
                <a
                href="/blogs/Lgbtq-golden-visa"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-11"
                style={{color: 'gray'}}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LuxembourgBlog