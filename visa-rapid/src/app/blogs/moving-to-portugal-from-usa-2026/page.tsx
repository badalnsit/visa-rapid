import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Moving to Portugal from the USA: What It Actually Takes in 2026 | Visa Rapid',
    description: 'The honest guide for Americans moving to Portugal in 2026 — D7, D8, and D2 visas explained, real cost of living numbers, taxes, healthcare, schools, and what daily life actually feels like.',
}

const MovingToPortugalFromUSA2026 = () => {
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
                        Moving to Portugal from the USA: What It Actually Takes in 2026
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on March 31, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>20 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog25.jpg"
                        alt="Americans moving to Portugal — Lisbon streets and lifestyle"
                        className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-xl shadow-sm"
                        loading="lazy"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <article className="lg:col-span-3 prose prose-lg max-w-none text-gray-800">

                        <p className="mb-4 text-lg">
                            Portugal is not a secret anymore. Every year more Americans land in Lisbon with a one way ticket and a plan to stay. Some are retirees cashing out of expensive US cities. Some are remote workers who realized they can do their job from a cafe in Porto instead of a cubicle in Denver. Some are families who looked at the cost of healthcare, education, and housing in the US and decided to try something different.
                        </p>
                        <p className="mb-8">
                            The American community in Portugal has grown rapidly since 2020. But moving there is not as simple as booking a flight. Here is what it actually takes.
                        </p>

                        <h2 id="why-portugal" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why Americans Keep Choosing Portugal</h2>
                        <p className="mb-4">
                            It starts with the basics. Portugal is safe — consistently ranked in the top 10 of the Global Peace Index. The weather is excellent, 300 days of sunshine a year in Lisbon. English is spoken widely, especially in cities. The food is outstanding and affordable. And the cost of living is 40 to 50 percent lower than most major US cities.
                        </p>
                        <p className="mb-4">
                            The real pull is the combination of all of it together. You can live in a walkable European city with great food and beaches 20 minutes away, pay half what you paid in the US, and access universal healthcare. For Americans who have been grinding through expensive, car dependent, insurance driven life back home, Portugal feels like a reset.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {[
                                { stat: "Top 10", label: "Global Peace Index" },
                                { stat: "300", label: "Days of sunshine in Lisbon" },
                                { stat: "40–50%", label: "Lower cost of living vs US" },
                                { stat: "5 years", label: "To EU citizenship" },
                            ].map((item, i) => (
                                <div key={i} className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-orange-600 mb-1">{item.stat}</p>
                                    <p className="text-gray-600 text-xs">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <h2 id="which-visa" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Which Visa Do You Actually Need</h2>
                        <p className="mb-4">
                            Americans cannot just move to Portugal. You get 90 days as a tourist in the Schengen Area. After that you need a visa. Portugal offers three main options for Americans.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    visa: "D7 Visa",
                                    tag: "Passive Income & Retirees",
                                    color: "bg-blue-50 border-blue-200",
                                    badge: "bg-blue-600",
                                    detail: "If you have passive income — pensions, investments, rental income, dividends. The most popular route for American retirees."
                                },
                                {
                                    visa: "D8 Digital Nomad Visa",
                                    tag: "Remote Workers",
                                    color: "bg-green-50 border-green-200",
                                    badge: "bg-green-600",
                                    detail: "If you work remotely for a non-Portuguese employer or freelance for foreign clients. Income threshold: €3,480 per month."
                                },
                                {
                                    visa: "D2 Entrepreneur Visa",
                                    tag: "Business Owners",
                                    color: "bg-purple-50 border-purple-200",
                                    badge: "bg-purple-600",
                                    detail: "If you are starting or buying a business in Portugal. No fixed minimum investment — a viable business plan is what matters."
                                },
                            ].map((item, i) => (
                                <div key={i} className={`flex items-start gap-4 p-5 rounded-xl border ${item.color}`}>
                                    <span className={`flex-shrink-0 ${item.badge} !text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap mt-0.5`}>{item.tag}</span>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">{item.visa}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="d7" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">The D7 Visa: For Passive Income and Retirees</h2>
                        <p className="mb-4">
                            The D7 is the most popular route for American retirees and anyone living off investment income. You need to show recurring passive income of at least <strong>€920 per month</strong> for a single applicant as of 2026.
                        </p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-700 !text-white">
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Applicant</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Monthly Income Required</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { who: "Single applicant", amount: "€920" },
                                        { who: "+ Spouse", amount: "+€460 (50%)" },
                                        { who: "+ Each child", amount: "+€276 (30%)" },
                                        { who: "Family of four", amount: "~€1,932 total" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 text-sm text-gray-900">{row.who}</td>
                                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">{row.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-4">
                            Qualifying income includes pensions (Social Security counts), rental income, dividends, interest, royalties, and investment returns. You also need savings of at least €11,040 in a Portuguese bank account.
                        </p>
                        <p className="mb-8">
                            The D7 gives you a 4 month entry visa. Once in Portugal you apply for a 2 year residence permit through AIMA. After 5 years of legal residency you can apply for permanent residency or Portuguese citizenship.
                        </p>

                        <h2 id="d8" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">The D8 Visa: For Remote Workers</h2>
                        <p className="mb-4">
                            If you work for a US company remotely or freelance for foreign clients, the D8 Digital Nomad Visa is your route. The income threshold is <strong>€3,480 per month</strong> — four times the Portuguese minimum wage.
                        </p>
                        <p className="mb-8">
                            You need to prove that your employer or clients are based outside Portugal. A standard employment letter, payslips, and bank statements showing consistent income deposits are the core documents. For Americans earning $60,000 or more from a US employer, the D8 is straightforward. The income threshold is comfortably met and the documentation is standard.
                        </p>

                        <h2 id="d2" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">The D2 Visa: For Entrepreneurs</h2>
                        <p className="mb-4">
                            If you are starting a business in Portugal or buying an existing one, the D2 is your route. There is no fixed minimum investment amount. What matters is a viable business plan that demonstrates economic value to Portugal — job creation, innovation, or trade.
                        </p>
                        <p className="mb-8">
                            The business plan is reviewed by IAPMEI (a Portuguese government body). It needs to be credible, with revenue projections, market analysis, and your professional background. Many Americans who want to open a restaurant, consulting firm, or tech company in Portugal use this route.
                        </p>

                        <h2 id="costs" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">How Much Does It Cost to Move</h2>
                        <p className="mb-4">
                            The visa itself is cheap — about €110 in consulate fees. The real costs are everything around it.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    phase: "Before You Apply",
                                    color: "bg-yellow-50 border-yellow-200",
                                    items: [
                                        "NIF (Portuguese tax number) via fiscal rep: €150–€350",
                                        "Criminal background check + apostille: $50–$150",
                                        "Health insurance: €500–€1,500/year",
                                        "Document translations: €100–€400",
                                        "Portuguese bank account: €0–€200",
                                    ]
                                },
                                {
                                    phase: "When You Arrive",
                                    color: "bg-blue-50 border-blue-200",
                                    items: [
                                        "Lease deposit (first, last, security): €2,000–€5,000",
                                        "Furnishing if unfurnished: €1,500–€5,000",
                                        "Flights and shipping: €500–€3,000",
                                    ]
                                },
                                {
                                    phase: "Optional but Recommended",
                                    color: "bg-green-50 border-green-200",
                                    items: [
                                        "Immigration consultant: €1,500–€4,000",
                                        "Cross-border tax advisor: €500–€2,000 initial setup",
                                    ]
                                },
                            ].map((section, i) => (
                                <div key={i} className={`p-5 rounded-xl border ${section.color}`}>
                                    <p className="font-bold text-gray-900 mb-3">{section.phase}</p>
                                    <ul className="space-y-1">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="text-gray-700 text-sm flex items-start gap-2">
                                                <span className="text-gray-400 mt-0.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
                            <p className="font-semibold text-gray-900 mb-2">Total budget estimate:</p>
                            <p className="text-gray-700 text-sm">Single person doing it yourself: <strong>€3,000–€6,000</strong></p>
                            <p className="text-gray-700 text-sm">With professional support and family: <strong>€8,000–€15,000</strong></p>
                        </div>

                        <h2 id="cost-of-living" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Cost of Living: The Real Numbers</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-700 !text-white">
                                        <th className="px-4 py-3 text-left text-sm font-semibold">City</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Single Person/Month</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Family of Four/Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { city: "Lisbon", single: "€2,000–€2,500", family: "€3,500–€4,500" },
                                        { city: "Porto", single: "€1,600–€2,000", family: "€2,800–€3,600" },
                                        { city: "Braga / Coimbra / Faro", single: "€1,200–€1,500", family: "€2,500–€3,500" },
                                        { city: "San Francisco (USA)", single: "~$4,500", family: "~$7,000+" },
                                        { city: "New York (USA)", single: "~$4,000", family: "~$6,500+" },
                                        { city: "Austin (USA)", single: "~$2,800", family: "~$4,500+" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.city}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">{row.single}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">{row.family}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Taxes: The Part Nobody Gets Right</h2>
                        <p className="mb-4">
                            This is where Americans specifically need to pay attention because US tax rules follow you everywhere.
                        </p>
                        <div className="space-y-4 mb-6">
                            {[
                                {
                                    title: "You still file US taxes.",
                                    detail: "American citizens owe taxes on worldwide income regardless of where they live. You file with the IRS every year, report foreign bank accounts through FBAR (if over $10,000), and report foreign financial assets through FATCA. This does not change when you move to Portugal."
                                },
                                {
                                    title: "You also file Portuguese taxes.",
                                    detail: "Once you become a Portuguese tax resident — usually after spending 183+ days in Portugal in a calendar year — you owe Portuguese income tax."
                                },
                                {
                                    title: "The IFICI regime (NHR 2.0) can help.",
                                    detail: "Portugal's new IFICI tax programme replaced the old NHR regime. If you qualify, you pay a flat 20% on Portuguese sourced income and zero on most foreign dividends, royalties, and capital gains for 10 years. Requires a bachelor's degree plus 3 years of relevant experience, or a doctorate."
                                },
                                {
                                    title: "Double taxation treaties prevent paying twice.",
                                    detail: "The US and Portugal have a double taxation agreement. Foreign Tax Credits and the Foreign Earned Income Exclusion help reduce your US tax bill on income already taxed in Portugal."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-500 !text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-8">
                            <p className="text-gray-700 text-sm">
                                <strong>Bottom line:</strong> You will need a cross-border tax advisor. Budget €1,000–€3,000 per year for someone who understands both US and Portuguese tax systems. Getting it wrong costs far more.
                            </p>
                        </div>

                        <h2 id="healthcare" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Healthcare: SNS, Private Insurance, and What to Expect</h2>
                        <p className="mb-4">
                            Portugal has a universal public healthcare system called the SNS (Serviço Nacional de Saúde). Legal residents on D7, D8, and D2 visas are eligible to register.
                        </p>
                        <p className="mb-4">
                            The SNS works well for serious and emergency care. A GP visit costs €0–€5. Prescriptions are heavily subsidised. For everyday access, it can be slow — wait times for specialists can stretch weeks in busy areas.
                        </p>
                        <p className="mb-4">
                            Most American expats carry private health insurance alongside the SNS. A good policy runs €100–€200 per month for a family. Private insurance gives you fast access to private clinics for routine care while the SNS serves as your safety net.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
                            <p className="text-gray-700 text-sm">
                                One American family we worked with was paying $18,000 per year for health insurance in Texas with a high deductible. In Portugal they pay €1,800 per year for comprehensive private cover with no deductible. Same family. Same health needs. <strong>90% cost reduction.</strong>
                            </p>
                        </div>

                        <h2 id="schools" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Schools and Raising Kids</h2>
                        <p className="mb-4">
                            Portuguese public schools are free for residents from primary through secondary. International schools in Lisbon, Porto, and the Algarve offer British, American, or IB curricula at €8,000–€18,000 per year — still less than most US private schools.
                        </p>
                        <div className="space-y-3 mb-8">
                            {[
                                { label: "Public preschool / creche", portugal: "€100–€300/month", usa: "€1,200–€2,500/month" },
                                { label: "International school fees", portugal: "€8,000–€18,000/year", usa: "$25,000–$55,000/year" },
                                { label: "University tuition", portugal: "€1,000–€1,500/year", usa: "$40,000–$60,000/year" },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 gap-2 bg-gray-50 rounded-xl border border-gray-100 p-4">
                                    <p className="text-sm font-medium text-gray-900 col-span-1">{row.label}</p>
                                    <p className="text-sm text-green-700 font-semibold text-center">🇵🇹 {row.portugal}</p>
                                    <p className="text-sm text-red-600 text-center">🇺🇸 {row.usa}</p>
                                </div>
                            ))}
                        </div>

                        <h2 id="daily-life" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">What Daily Life Actually Feels Like</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                { theme: "The pace is slower.", detail: "Not in a frustrating way. In a 'you actually eat lunch sitting down' way. Shops close for lunch sometimes. Dinner starts at 8pm. Sundays are genuinely quiet. Most people grow to love it." },
                                { theme: "Walking replaces driving.", detail: "Lisbon and Porto are walkable cities with good public transport. Many Americans sell their car and never miss it. Metro passes cost €40 per month. Ubers are cheap." },
                                { theme: "The food changes your life.", detail: "Fresh fish, pastéis de nata, grilled sardines, cheap wine. Americans consistently say they cook more, eat out more affordably, and enjoy food more than they did at home." },
                                { theme: "Bureaucracy is real.", detail: "AIMA appointments take months. Government offices move slowly. Having a good immigration consultant or local fixer helps enormously." },
                                { theme: "The community is there.", detail: "American expat communities in Lisbon, Porto, and the Algarve are large and active. Coworking spaces, parent groups, social events. You will not feel isolated if you make an effort." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-blue-50 p-5 rounded-xl border border-blue-100">
                                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">{item.theme}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="downsides" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">The Honest Downsides</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                { issue: "Distance from family.", detail: "Lisbon to New York is about 7 hours by air. Not terrible, but visits require planning and money." },
                                { issue: "US tax obligations do not go away.", detail: "You file two returns forever. It costs money and creates paperwork." },
                                { issue: "Salaries in Portugal are low.", detail: "If you need local employment, Portuguese salaries average around €1,500 per month. The cost of living advantages only work if your income comes from outside Portugal." },
                                { issue: "Language matters eventually.", detail: "You can get by with English in cities. But for daily life, making friends, and truly integrating, you need Portuguese. A2 level is required for citizenship." },
                                { issue: "AIMA processing is slow.", detail: "Expect 4 to 6 months for your residence permit appointment after arriving. You can live normally during this time, but the wait creates administrative limbo." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-red-50 p-5 rounded-xl border border-red-100">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 !text-white text-xs font-bold flex items-center justify-center">!</span>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">{item.issue}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Frequently Asked Questions</h2>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Can I work for my US employer while living in Portugal?</h3>
                        <p className="mb-6">
                            Yes, on the D8 Digital Nomad Visa. You need to earn at least €3,480 per month from your US employer or foreign clients. Your employer does not need a Portuguese entity. You work remotely from Portugal and pay Portuguese taxes on your income. You also continue to file US taxes.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">How long can I stay in Portugal without a visa?</h3>
                        <p className="mb-6">
                            90 days within any 180 day period as a US citizen under the Schengen tourist allowance. After that you need a proper visa. Do not overstay — it creates problems for any future residency application.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Does Social Security count as income for the D7 Visa?</h3>
                        <p className="mb-6">
                            Yes. US Social Security payments count as qualifying passive income for the D7. If your monthly Social Security payment meets the €920 threshold (or the family adjusted amount), it qualifies. Many American retirees use Social Security as their primary D7 income proof.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Can I bring my family on my visa?</h3>
                        <p className="mb-6">
                            Yes. Spouse and dependent children can be included in your initial application or join through family reunification after your residence permit is issued. Each additional family member increases the income requirement (50% for a spouse, 30% per child).
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">How long until I can get Portuguese citizenship?</h3>
                        <p className="mb-6">
                            Five years of legal residency. You also need A2 Portuguese language proficiency and a clean criminal record. Portuguese citizenship gives you an EU passport with freedom to live and work across all 27 EU member states. Portugal allows dual citizenship, so you keep your US passport too.
                        </p>

                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 pl-8 border-l border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-open-sans">Article content</h3>
                            <nav className="space-y-4">
                                <a href="#why-portugal" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Why Portugal</a>
                                <a href="#which-visa" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Which Visa You Need</a>
                                <a href="#d7" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">D7 Visa</a>
                                <a href="#d8" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">D8 Digital Nomad Visa</a>
                                <a href="#d2" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">D2 Entrepreneur Visa</a>
                                <a href="#costs" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Move Costs</a>
                                <a href="#cost-of-living" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Cost of Living</a>
                                <a href="#taxes" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Taxes</a>
                                <a href="#healthcare" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Healthcare</a>
                                <a href="#schools" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Schools & Kids</a>
                                <a href="#daily-life" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Daily Life</a>
                                <a href="#downsides" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Honest Downsides</a>
                                <a href="#faq" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">FAQ</a>
                            </nav>
                        </div>
                    </aside>
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-open-sans">
                        Ready to Make the Move?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        If Portugal is on your radar and you want to know whether you actually qualify, which visa fits your situation, and what the realistic timeline and budget look like — we can give you a straight answer in 30 minutes.
                    </p>
                    <a
                        href="https://calendly.com/nikita-visarapid/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors bg-red-600 !text-white hover:bg-red-700"
                    >
                        Book a Free 30-Minute Consultation
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <RelatedArticles currentPath="/blogs/moving-to-portugal-from-usa-2026" />
            </div>
        </div>
    )
}

export default MovingToPortugalFromUSA2026
