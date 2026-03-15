import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Germany EU Blue Card vs Germany Opportunity Card: Key Differences & Data Comparison | Visa Rapid',
    description: 'Germany offers several pathways for skilled professionals and entrepreneurs to live and work legally. Two of the most popular routes are the EU Blue Card and the Germany Opportunity Card.',
}

const BlueCardVsOpportunityCard = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Back to Blogs */}
                <div className="mb-8">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center hover:text-gray-900 transition-colors"
                        style={{ color: 'gray' }}
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Articles
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">
                        Germany EU Blue Card vs Germany Opportunity Card: Key Differences & Data Comparison
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on January 15, 2026</span>
                        <span className="mx-2">•</span>
                        <span>7 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/Blog4.webp"
                        alt="Germany EU Blue Card vs Germany Opportunity Card"
                        className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-xl shadow-sm"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <article className="lg:col-span-3 prose prose-lg max-w-none text-gray-800">

                        <h2 id="intro" className="text-3xl font-bold text-gray-900 mt-8 mb-4 font-open-sans">Introduction</h2>
                        <p className="mb-4">
                            Germany offers several pathways for skilled professionals and entrepreneurs to live and work legally. Two of the most popular routes are the <strong>EU Blue Card</strong> and the <strong>Germany Opportunity Card</strong>. While both lead toward residence and job opportunities in Germany, they serve different purposes, target different applicant profiles, and have distinct requirements.
                        </p>
                        <p className="mb-6">
                            This comparison helps you decide which option fits your background, career goals, or startup idea.
                        </p>

                        <h2 id="what-are-they" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">What Are They?</h2>

                        <div className="space-y-6 mb-8">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-open-sans">✅ EU Blue Card (Germany)</h3>
                                <p className="text-gray-700">
                                    The EU Blue Card is a work and residence permit for highly skilled professionals who have a job offer in Germany and meet specific salary and qualification criteria. It is mainly used by IT professionals, engineers, scientists, and specialists.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-open-sans">✅ Germany Opportunity Card (Chancenkarte)</h3>
                                <p className="text-gray-700">
                                    The Opportunity Card is a pathway for professionals to move to Germany first without a job offer and search for employment locally. It is ideal for graduates, experienced workers, and those without a confirmed German job contract.
                                </p>
                            </div>
                        </div>

                        <h2 id="differences" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Main Differences at a Glance</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Criteria</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">EU Blue Card</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Germany Opportunity Card</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Purpose</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Work & residence via job offer</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Move first, search for job</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Job offer</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">✅ Required</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">❌ Not required</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Education</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">✅ Degree or equivalent</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">✅ Flexible (experience valued)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Experience</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Recommended but not mandatory</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Valued to improve score</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Salary</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">High (e.g., €48,300+ in 2025)</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">❌ No threshold for entry</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Conversion</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Already work permit</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">After securing job</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="key-distinctions" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Key Distinctions Explained</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-open-sans">🔹 Job Offer Requirement</h3>
                                <ul className="space-y-4 text-gray-700 text-sm">
                                    <li><strong>Blue Card:</strong> You must already have a valid German job contract before applying.</li>
                                    <li><strong>Opportunity Card:</strong> You can relocate to Germany without a job offer and search locally.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-open-sans">🔹 Salary and Qualification</h3>
                                <ul className="space-y-4 text-gray-700 text-sm">
                                    <li><strong>Blue Card:</strong> Requires a high minimum salary threshold (e.g., €48,300+ in 2025) and a degree.</li>
                                    <li><strong>Opportunity Card:</strong> No fixed salary threshold; eligibility is points-based.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-open-sans">🔹 Work and Job Search</h3>
                                <ul className="space-y-4 text-gray-700 text-sm">
                                    <li><strong>Blue Card:</strong> You start working immediately in the role tied to the permit.</li>
                                    <li><strong>Opportunity Card:</strong> You search for work after arrival, often allowed part-time work.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-open-sans">🔹 Path to Residency</h3>
                                <ul className="space-y-4 text-gray-700 text-sm">
                                    <li>Both lead to long-term residence, but the Blue Card often allows faster access to PR.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 id="chart" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Example Comparison Chart (2025 Data)</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Feature</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">EU Blue Card (2025)</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Germany Opportunity Card (2025)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Minimum salary</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">€48,300 gross/year</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">❌ None</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Job offer needed</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">✅ Yes</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">❌ No</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Contract length</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">6 months</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">None initially</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900">Work while hunting</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">❌ Only after Blue Card job</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">✅ Part-time allowed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="choose" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Which One Should You Choose?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white border rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-open-sans">✅ Choose the EU Blue Card if:</h3>
                                <ul className="space-y-3 text-lg text-gray-700">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        You already have a job offer in Germany
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        You are a highly skilled professional
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        You want immediate work authorization
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white border rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-open-sans">✅ Choose the Opportunity Card if:</h3>
                                <ul className="space-y-3 text-lg text-gray-700">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        You don’t have a job offer yet
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        You want to move first and job search
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        You want local networking access
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Final Insights</h2>
                        <p className="mb-6 text-lg leading-loose">
                            Both the EU Blue Card and the Germany Opportunity Card are valuable pathways to live and work in Germany. Your best choice depends on your current situation:
                        </p>
                        <ul className="mb-6 space-y-4 text-lg text-gray-700">
                            <li><strong>Already hired?</strong> The Blue Card offers direct employment and a more structured route to residency.</li>
                            <li><strong>Still exploring opportunities?</strong> The Opportunity Card lets you relocate first and find the right job with local access and flexibility.</li>
                        </ul>

                    </article>

                    {/* Sidebar / Article Content */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 pl-8 border-l border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-open-sans">Article content</h3>
                            <nav className="space-y-4">
                                <a href="#intro" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">Introduction</a>
                                <a href="#what-are-they" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">What Are They?</a>
                                <a href="#differences" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">Main Differences</a>
                                <a href="#key-distinctions" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">Key Distinctions</a>
                                <a href="#chart" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">Comparison Chart</a>
                                <a href="#choose" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">Which to Choose</a>
                                <a href="#conclusion" className="block text-gray-600 hover:text-blue-500 transition-colors text-base cursor-pointer">Final Insights</a>
                            </nav>
                        </div>
                    </aside>
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-open-sans">
                        Need Guidance?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        If you want personalized guidance on choosing between the Blue Card and Opportunity Card based on your profile, job role, or experience level, feel free to reach out.
                    </p>
                    <a
                        href="https://calendly.com/nikita-visarapid/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors bg-red-600 text-white hover:bg-red-700"
                    >
                        Schedule a Consultation
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <RelatedArticles currentPath="/blogs/blue-card-vs-opportunity-card" />
            </div>
        </div>
    )
}

export default BlueCardVsOpportunityCard
