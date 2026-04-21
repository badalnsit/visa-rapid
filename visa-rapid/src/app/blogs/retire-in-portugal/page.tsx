import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Retire in Portugal | Visa Rapid',
    description: 'The complete guide for American retirees moving to Portugal in 2026 — D7 visa requirements, income thresholds, cost of living, healthcare, taxes, and the 5-year path to a Portuguese passport.',
}

const USCitizensRetirePortugal2026 = () => {
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
                    <div className="mb-4">
                        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Retirement Abroad</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">
                        How U.S. Citizens Can Retire in Portugal and Get Residency in 2026
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on April 17, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>22 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog33.jpg"
                        alt="American retirees enjoying life in Portugal — D7 visa guide for US citizens in 2026"
                        className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-xl shadow-sm"
                        width={1200}
                        height={400}
                        loading="lazy"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <article className="lg:col-span-3 prose prose-lg max-w-none text-gray-800">

                        <p className="mb-4 text-lg">
                            Portugal has been at the top of nearly every "best places to retire abroad" list for the better part of a decade. Warm weather. Affordable cost of living. English widely spoken. Safe cities. World-class food. Easy access to the rest of Europe. And a genuine, straightforward legal pathway for Americans to move there and stay.
                        </p>
                        <p className="mb-4">
                            Every year thousands of Americans make the move. Some are drawn by the lifestyle. Some by the economics. Some by the healthcare system. And an increasing number by the longer-term prize: a Portuguese passport that puts them at the 5th strongest in the world with the right to live across all 27 EU member states.
                        </p>
                        <p className="mb-8">This is the complete guide to how it works in 2026.</p>

                        {/* Why Portugal */}
                        <h2 id="why-portugal" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why American Retirees Are Choosing Portugal</h2>
                        <div className="space-y-3 mb-8">
                            {[
                                {
                                    title: "Cost of living",
                                    detail: "Portugal runs 28–39% cheaper than the average cost of living in the United States. A couple living comfortably in Lisbon on €2,000/month would need $4,000–$5,000 to maintain the same lifestyle in most mid-tier American cities."
                                },
                                {
                                    title: "Social Security goes much further",
                                    detail: "The average US Social Security benefit in 2026 is around $1,900/month. In most American cities that does not cover rent. In Portugal it covers rent, food, utilities, and leaves something over for leisure and travel."
                                },
                                {
                                    title: "Safety",
                                    detail: "Portugal consistently ranks in the top 5 of the Global Peace Index. American retirees report feeling genuinely safe walking home at night in cities like Porto, Coimbra, and the Algarve coast towns."
                                },
                                {
                                    title: "English is widely spoken",
                                    detail: "Portugal has among the highest English proficiency rates in Southern Europe. In Lisbon and Porto you can navigate daily life entirely in English while you learn Portuguese. Healthcare providers in major cities regularly have English-speaking staff."
                                },
                                {
                                    title: "Climate",
                                    detail: "The Algarve has over 300 days of sunshine per year. Even Lisbon and Porto are mild year-round compared to much of the United States."
                                },
                                {
                                    title: "The EU passport at the end of 5 years",
                                    detail: "After 5 years of legal residency and a basic Portuguese language test you can apply for citizenship — a Portuguese passport with visa-free access to 184 countries and the right to live and work anywhere in the EU."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                                        <p className="text-gray-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* D7 Visa */}
                        <h2 id="d7-visa" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The D7 Visa: Portugal's Official Retirement Route</h2>
                        <p className="mb-4">
                            The visa designed for American retirees and people with passive income is called the <strong>D7</strong>. It is Portugal's "passive income visa" and the main legal entry route for Americans who want to live in Portugal without working for a Portuguese employer.
                        </p>
                        <p className="mb-4">
                            The D7 is designed for people whose income comes from <em>outside Portugal</em> — Social Security, US pension income, rental income from US properties, dividends, interest, investment returns, or any other stable passive source. You do not need to give up your income streams or sell American assets.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                            <p className="text-blue-800 text-sm">
                                The D7 is not a tourist visa. It is a genuine residency permit that eventually leads to permanent residency and citizenship. It gives you the right to live in Portugal indefinitely as long as you renew it and meet the conditions.
                            </p>
                        </div>

                        {/* Income Requirements */}
                        <h2 id="income" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Income Requirements: What You Need to Qualify</h2>
                        <p className="mb-4">As of 2026, the minimum monthly income requirement is <strong>€920/month</strong> for the primary applicant, pegged to the Portuguese minimum wage.</p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Household</th>
                                        <th className="px-4 py-3 text-left font-semibold">Monthly (EUR)</th>
                                        <th className="px-4 py-3 text-left font-semibold">Annual (EUR)</th>
                                        <th className="px-4 py-3 text-left font-semibold">Approx. (USD/mo)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { household: "Single applicant", monthly: "€920", annual: "€11,040", usd: "~$1,000" },
                                        { household: "Couple (2 adults)", monthly: "€1,380", annual: "€16,560", usd: "~$1,500" },
                                        { household: "Couple + 1 child", monthly: "€1,656", annual: "€19,872", usd: "~$1,800" },
                                        { household: "Couple + 2 children", monthly: "€1,932", annual: "€23,184", usd: "~$2,100" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.household}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.monthly}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.annual}</td>
                                            <td className="px-4 py-3 text-blue-700 font-medium border border-gray-200">{row.usd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-3 font-semibold text-gray-900 text-sm">What counts as qualifying income:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                            {[
                                "Social Security payments",
                                "US government or military pension",
                                "Private pension distributions",
                                "Rental income from US properties",
                                "Dividend income from investment portfolios",
                                "Interest income",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 items-center text-sm bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
                            You need <strong>12 months of bank statements</strong> demonstrating regular receipt of this income, plus evidence of funds covering at least 12 months of the required minimum (~€11,040 for a single applicant).
                        </div>

                        {/* Step by Step */}
                        <h2 id="application" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Step by Step: How to Apply</h2>
                        <p className="mb-4">The D7 application has two main phases — before you leave the US, and after you arrive in Portugal.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Phase 1: Applying at the Portuguese Consulate (USA)</h3>
                        <p className="mb-3 text-sm text-gray-600">Apply at the Portuguese consulate in your jurisdiction. Main US consulates: Washington DC, New York, San Francisco, Boston, Newark.</p>
                        <div className="space-y-2 mb-6">
                            {[
                                "Valid US passport (6+ months beyond planned entry date)",
                                "Completed D7 visa application form",
                                "Two passport photos",
                                "Proof of passive income — bank statements, Social Security award letter, pension statements",
                                "Proof of accommodation in Portugal — rental agreement or property deed",
                                "Travel health insurance covering Portugal",
                                "FBI criminal background check (for stays over 1 year)",
                                "NIF (Portuguese tax ID) — obtainable remotely through a fiscal representative",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start text-sm">
                                    <span className="flex-shrink-0 bg-blue-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 font-bold">{i + 1}</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 text-sm">
                            <span className="font-semibold text-gray-900">Consulate processing time:</span> <span className="text-gray-700">Budget 4–8 weeks after submission.</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Phase 2: After You Arrive in Portugal</h3>
                        <p className="mb-4 text-sm text-gray-700">
                            Your D7 visa is issued for 4 months initially. Within those 4 months you must book and attend an AIMA appointment to receive your official residency permit card.
                        </p>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-6">
                            <p className="font-semibold text-amber-900 mb-2 text-sm">AIMA Backlog Warning</p>
                            <p className="text-amber-800 text-sm">AIMA faces a significant backlog — over 400,000 cases nationally. In Lisbon and Porto the wait for an appointment can be <strong>3–4 months</strong>. In smaller cities and the Algarve it can be as little as <strong>2–4 weeks</strong>. This is why many American retirees are advised to consider settling outside Lisbon and Porto initially.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {[
                                { label: "Initial residence permit", val: "2 years" },
                                { label: "Renewal period", val: "3 years" },
                                { label: "Citizenship eligibility", val: "After 5 years" },
                            ].map((item, i) => (
                                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
                                    <p className="text-lg font-bold text-blue-700 mb-1">{item.val}</p>
                                    <p className="text-xs text-gray-600">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Cost of Living */}
                        <h2 id="cost-of-living" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Cost of Living in Portugal for American Retirees</h2>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Expense</th>
                                        <th className="px-4 py-3 text-left font-semibold">Lisbon / Porto</th>
                                        <th className="px-4 py-3 text-left font-semibold">Algarve / Smaller Cities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { item: "Rent (1–2 bed apartment)", lisbon: "€1,000–€1,500/mo", algarve: "€600–€900/mo" },
                                        { item: "Groceries (couple)", lisbon: "€300–€400/mo", algarve: "€250–€350/mo" },
                                        { item: "Utilities", lisbon: "€100–€150/mo", algarve: "€80–€130/mo" },
                                        { item: "Eating out, leisure, transport", lisbon: "€500–€700/mo", algarve: "€350–€500/mo" },
                                        { item: "Total (couple, comfortable)", lisbon: "€2,200–€2,800/mo", algarve: "€1,500–€2,000/mo" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.item}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.lisbon}</td>
                                            <td className="px-4 py-3 text-green-700 font-medium border border-gray-200">{row.algarve}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-700 text-white rounded-xl p-5 mb-8">
                            <p className="font-semibold mb-1">For an American couple drawing combined Social Security of $3,000–$4,000/month</p>
                            <p className="text-blue-100 text-sm">This is a comfortable life that would be genuinely difficult to sustain on the same income in the United States.</p>
                        </div>

                        {/* Healthcare */}
                        <h2 id="healthcare" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Healthcare: What Americans Need to Know</h2>
                        <p className="mb-4">
                            Portugal has a national health service called the <strong>SNS (Serviço Nacional de Saúde)</strong>. Once you are a legal resident you have access to the SNS — covering GP visits, specialist referrals, hospital care, emergency treatment, and most medications at subsidised rates.
                        </p>
                        <div className="space-y-3 mb-6">
                            {[
                                { label: "SNS co-payments (moderating fees)", detail: "Small fees for some appointments — a fraction of US out-of-pocket costs." },
                                { label: "Private health insurance", detail: "Many American retirees supplement SNS with private insurance. Typical cost: €100–€200/month for a couple. Private hospitals like Hospital da Luz have English-speaking staff." },
                                { label: "D7 visa requirement", detail: "You need private health insurance at the time of application. Once you are a resident and accessing SNS you can adjust your coverage." },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.label}</p>
                                    <p className="text-gray-600 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
                            <p className="font-semibold text-red-800 text-sm mb-1">Medicare does not work outside the United States</p>
                            <p className="text-red-700 text-sm">You continue to accrue Medicare benefits and can use them if you return to the US for treatment — but you cannot use Medicare in Portugal. Plan accordingly.</p>
                        </div>

                        {/* Taxes */}
                        <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Taxes: The Honest Picture for US Citizens in Portugal</h2>
                        <p className="mb-4">
                            Tax is the area where American retirees need the most careful advice — and where the situation changed significantly in 2024.
                        </p>
                        <div className="space-y-4 mb-6">
                            {[
                                {
                                    title: "End of NHR for new applicants",
                                    color: "border-amber-300 bg-amber-50",
                                    titleColor: "text-amber-900",
                                    detail: "The Non Habitual Resident tax regime (flat 20% rate + pension exemptions for 10 years) ended for new applications on January 1 2024. Its replacement, IFICI (NHR 2.0), targets qualifying professionals and researchers and does not extend the same pension income exemptions."
                                },
                                {
                                    title: "Portuguese income tax for 2026 retirees",
                                    color: "border-gray-200 bg-gray-50",
                                    titleColor: "text-gray-900",
                                    detail: "Portugal's standard progressive income tax runs from 12.5% up to 48% with a solidarity surtax at the highest levels. For most retirees living on Social Security and modest pension income the effective rate will be considerably lower than the top rate."
                                },
                                {
                                    title: "US–Portugal double taxation treaty",
                                    color: "border-green-200 bg-green-50",
                                    titleColor: "text-green-900",
                                    detail: "The US–Portugal tax treaty prevents pure double taxation. Most Americans in Portugal owe little or no additional US federal tax because Portuguese taxes paid offset US tax liability through the Foreign Tax Credit. However Americans must still file a US federal tax return every year regardless of where they live."
                                },
                                {
                                    title: "FBAR reporting requirement",
                                    color: "border-blue-200 bg-blue-50",
                                    titleColor: "text-blue-900",
                                    detail: "If you hold foreign bank accounts exceeding $10,000 you must file an FBAR report annually with FinCEN. This is a reporting requirement, not an additional tax — but the penalties for non-filing are significant."
                                },
                            ].map((item, i) => (
                                <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                                    <p className={`font-semibold text-sm mb-2 ${item.titleColor}`}>{item.title}</p>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 text-sm text-amber-800">
                            <strong>Strongly recommended:</strong> Work with a tax advisor who understands both US expat tax rules and Portuguese tax before you make the move.
                        </div>

                        {/* Where to Retire */}
                        <h2 id="where" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Where in Portugal Should You Retire</h2>
                        <div className="space-y-3 mb-8">
                            {[
                                {
                                    area: "Lisbon",
                                    profile: "Cosmopolitan, walkable, culturally rich",
                                    pros: "Best international connections, direct US flights, large expat community, English everywhere",
                                    cons: "Most expensive, longest AIMA wait (3–4 months)",
                                    color: "bg-blue-700"
                                },
                                {
                                    area: "Porto",
                                    profile: "Characterful, smaller than Lisbon",
                                    pros: "Cheaper than Lisbon, river setting, strong local identity, growing expat scene",
                                    cons: "Fewer direct US connections",
                                    color: "bg-indigo-700"
                                },
                                {
                                    area: "The Algarve",
                                    profile: "Classic retirement choice — sun, beach, established expat community",
                                    pros: "300+ days of sunshine, large British/German expat community, lower costs, fast AIMA (2–4 weeks)",
                                    cons: "More seasonal in some areas, tourist-heavy in summer",
                                    color: "bg-orange-600"
                                },
                                {
                                    area: "Silver Coast",
                                    profile: "Quieter coastal option north of Lisbon",
                                    pros: "Towns like Nazaré and Óbidos — very Portuguese, lower costs, slower pace",
                                    cons: "Less international infrastructure",
                                    color: "bg-teal-700"
                                },
                                {
                                    area: "Alentejo / Interior",
                                    profile: "Rural, truly affordable, stunning landscapes",
                                    pros: "Lowest costs, large properties, places like Évora and Marvão, a genuinely different pace of life",
                                    cons: "Less English spoken, further from international airports",
                                    color: "bg-green-700"
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-0 rounded-xl overflow-hidden border border-gray-200">
                                    <div className={`${item.color} text-white px-4 py-4 flex items-center justify-center min-w-[90px] text-center`}>
                                        <p className="font-bold text-sm">{item.area}</p>
                                    </div>
                                    <div className="p-4 flex-1">
                                        <p className="text-xs text-gray-500 mb-1 italic">{item.profile}</p>
                                        <p className="text-sm text-gray-700"><span className="text-green-600 font-medium">✓ </span>{item.pros}</p>
                                        <p className="text-sm text-gray-600 mt-0.5"><span className="text-amber-600 font-medium">⚠ </span>{item.cons}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Citizenship Path */}
                        <h2 id="citizenship" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">From Residency to Citizenship: The 5-Year Path</h2>
                        <p className="mb-4">
                            Many American retirees move to Portugal thinking of it primarily as a lifestyle choice. But after a few years the opportunity to apply for Portuguese citizenship becomes increasingly real and appealing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-0 mb-6 rounded-xl overflow-hidden border border-gray-200">
                            {[
                                { step: "Year 1–2", label: "Initial 2-year residence permit", color: "bg-blue-100 text-blue-800" },
                                { step: "Year 3–5", label: "3-year renewal", color: "bg-blue-200 text-blue-900" },
                                { step: "Year 5", label: "Apply for citizenship (A2 Portuguese + clean record)", color: "bg-blue-600 text-white" },
                                { step: "+12–18 mo", label: "Portuguese passport issued", color: "bg-blue-800 text-white" },
                            ].map((item, i) => (
                                <div key={i} className={`flex-1 px-4 py-4 text-center ${item.color}`}>
                                    <p className="font-bold text-sm">{item.step}</p>
                                    <p className="text-xs mt-1 opacity-90">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-700 text-white rounded-xl p-5 mb-8">
                            <p className="font-semibold mb-2">What you get: A top-5 global passport</p>
                            <p className="text-blue-100 text-sm">The Portuguese passport gives you visa-free access to 184 countries and the right to live and work anywhere in the EU — spend winters in the Algarve, summers in Italy or France, and travel to 184 countries without booking a visa appointment for any of them. Portugal allows dual citizenship so you keep your US passport too.</p>
                        </div>

                        {/* Common Mistakes */}
                        <h2 id="mistakes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Common Mistakes Americans Make</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    mistake: "Underestimating the AIMA appointment wait",
                                    fix: "Arriving in Lisbon and expecting a quick AIMA appointment is a common mistake. Plan for 3–4 months in Lisbon and Porto. Consider settling outside major cities initially to get a faster appointment."
                                },
                                {
                                    mistake: "Not getting an NIF before arriving",
                                    fix: "Your Portuguese tax ID (NIF) is needed for almost everything — opening a bank account, signing a lease. You can get this remotely before you arrive through a Portuguese fiscal representative. Do it early."
                                },
                                {
                                    mistake: "Assuming NHR still applies",
                                    fix: "The NHR tax benefit for pensioners ended in 2024. Retirees who relied on old information about a 10% flat tax on pensions are in for a surprise. Get current tax advice before you move."
                                },
                                {
                                    mistake: "Not planning for healthcare continuity",
                                    fix: "Medicare does not work in Portugal. Sort out private health insurance before you travel and have a plan for managing ongoing US prescriptions or specialist care."
                                },
                                {
                                    mistake: "Not budgeting for legal and administrative costs",
                                    fix: "Between visa fees, AIMA fees, NIF setup, bank account opening, and consultant fees, expect to spend €2,000–€5,000 in setup costs beyond your travel and accommodation."
                                },
                            ].map((item, i) => (
                                <div key={i} className="border border-gray-200 rounded-xl p-5">
                                    <p className="font-semibold text-red-700 text-sm mb-2">✗ {item.mistake}</p>
                                    <p className="text-gray-700 text-sm"><span className="text-green-600 font-medium">✓ Fix: </span>{item.fix}</p>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions</h2>
                        <div className="space-y-5 mb-10">
                            {[
                                {
                                    q: "Can US citizens retire in Portugal?",
                                    a: "Yes. US citizens can retire in Portugal using the D7 passive income visa. This visa is designed specifically for people with stable passive income like Social Security, pensions, rental income, and investment returns. After 5 years of residency you can apply for Portuguese citizenship."
                                },
                                {
                                    q: "How much income do I need to retire in Portugal as an American?",
                                    a: "As of 2026 the minimum is €920/month for a single applicant (around $1,000). For a couple the combined minimum is around €1,380/month. In practice living comfortably in Portugal costs €1,500 to €2,500/month for a couple depending on location."
                                },
                                {
                                    q: "Do I pay US taxes if I retire in Portugal?",
                                    a: "Yes — you still need to file a US tax return every year. Americans are taxed on worldwide income regardless of where they live. However the US–Portugal tax treaty and the Foreign Tax Credit mean most retirees in Portugal owe little or no additional US federal tax after accounting for taxes paid in Portugal. You also need to file an FBAR if your Portuguese bank accounts exceed $10,000."
                                },
                                {
                                    q: "Does Medicare work in Portugal?",
                                    a: "No. US Medicare does not cover healthcare outside the United States. You will need private health insurance in Portugal. Once you are a legal resident you can also access the Portuguese national health service (SNS) which provides affordable care with small co-payments."
                                },
                                {
                                    q: "How long does it take to get Portuguese citizenship after moving to Portugal?",
                                    a: "You become eligible to apply after 5 years of legal residency. The citizenship application itself takes approximately 12–18 months to process in 2026. Total end-to-end from first arrival to Portuguese passport is typically 6.5 to 7 years."
                                },
                            ].map((item, i) => (
                                <div key={i} className="border border-gray-200 rounded-xl p-5">
                                    <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-blue-700 rounded-2xl p-8 text-white text-center mt-10">
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Ready to Start Your Portugal Retirement Journey?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                Moving to a new country in retirement is one of the most significant decisions you can make. The paperwork, the tax planning, the visa process, and the AIMA system can feel overwhelming. We have helped dozens of American retirees and families navigate this exact process.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="https://calendly.com/nikita-visarapid/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white !text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Book a Free 30-Min Consultation
                                </a>
                                <a
                                    href="https://wa.me/919910578099"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.571a.5.5 0 00.606.61l5.885-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a10 10 0 01-5.195-1.449l-.372-.22-3.862 1.013 1.033-3.772-.242-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                                    Chat on WhatsApp
                                </a>
                            </div>
                            <p className="mt-4 text-blue-200 text-xs">
                                📧 info@visarapid.com &nbsp;|&nbsp; 🔗 Connect with Nikita on LinkedIn
                            </p>
                        </div>

                    </article>

                    {/* Sidebar TOC */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">In This Article</p>
                            <nav className="space-y-2">
                                {[
                                    { href: "#why-portugal", label: "Why Americans Choose Portugal" },
                                    { href: "#d7-visa", label: "The D7 Visa Explained" },
                                    { href: "#income", label: "Income Requirements" },
                                    { href: "#application", label: "Step-by-Step Application" },
                                    { href: "#cost-of-living", label: "Cost of Living" },
                                    { href: "#healthcare", label: "Healthcare for Americans" },
                                    { href: "#taxes", label: "Tax Obligations" },
                                    { href: "#where", label: "Where to Retire in Portugal" },
                                    { href: "#citizenship", label: "The 5-Year Citizenship Path" },
                                    { href: "#mistakes", label: "Common Mistakes" },
                                    { href: "#faq", label: "FAQ" },
                                ].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1 border-b border-gray-100 last:border-0"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>

                {/* Related Articles */}
                <div className="mt-16">
                    <RelatedArticles currentPath="/blogs/retire-in-portugal" />
                </div>
            </div>
        </div>
    )
}

export default USCitizensRetirePortugal2026
