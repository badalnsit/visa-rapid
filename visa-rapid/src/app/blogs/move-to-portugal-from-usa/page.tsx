import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Move to Portugal from USA | Visa Rapid',
    description: 'Move to Portugal from USA — D7, D8, and D2 visas explained, real cost of living numbers, taxes, healthcare, schools, and what daily life actually feels like in 2026.',
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
                    <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Relocation Guide</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">
                        Move to Portugal from USA in 2026: The Complete Guide for Americans
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on March 28, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>22 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog25.jpg"
                        alt="Americans moving to Portugal from USA — complete visa and relocation guide 2026"
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
                            Moving to Portugal from USA has become one of the most popular relocation stories of the decade. Every year, more Americans land in Lisbon with a one-way ticket and a plan to stay. Some are retirees cashing out of expensive US cities. Some are remote workers who realised they can do their job from a café in Porto instead of a cubicle in Denver. Some are families who looked at the cost of healthcare, education, and housing in the US and decided to try something different.
                        </p>
                        <p className="mb-4">
                            The American community in Portugal has grown rapidly since 2020, and moving to Portugal from USA is no longer a fringe idea — it is a mainstream choice. But it is not as simple as booking a flight. Here is what it actually takes in 2026.
                        </p>

                        {/* Why Americans Choose Portugal */}
                        <h2 id="why-portugal" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why Americans Keep Choosing to Move to Portugal from USA</h2>
                        <p className="mb-4">
                            It starts with the basics. Portugal is safe — consistently ranked in the top 10 of the Global Peace Index. The weather is excellent, with roughly 300 days of sunshine a year in Lisbon. English is spoken widely, especially in cities. The food is outstanding and affordable. And the cost of living is 40 to 50 percent lower than most major US cities.
                        </p>
                        <p className="mb-4">
                            The real pull is the combination of all of it together. You can live in a walkable European city with great food and beaches 20 minutes away, pay half of what you paid in the US, and access universal healthcare. For Americans who have been grinding through expensive, car-dependent, insurance-driven life back home, moving to Portugal feels like a reset.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {[
                                { stat: "Top 10", label: "Global Peace Index" },
                                { stat: "300", label: "Days of sunshine/year in Lisbon" },
                                { stat: "40–50%", label: "Lower cost of living vs US cities" },
                                { stat: "5 years", label: "To EU citizenship via residency" },
                            ].map((item, i) => (
                                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                                    <p className="text-xl font-bold text-blue-700 mb-1">{item.stat}</p>
                                    <p className="text-xs text-gray-600">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Which Visa */}
                        <h2 id="visas" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Which Visa Do You Need to Move to Portugal from USA?</h2>
                        <p className="mb-4">
                            Americans cannot simply move to Portugal — you get 90 days as a tourist in the Schengen Area. After that you need a visa. There are three main routes.
                        </p>

                        {/* D7 */}
                        <h3 id="d7" className="text-xl font-bold text-gray-900 mt-5 mb-3">The D7 Visa — For Passive Income and Retirees</h3>
                        <p className="mb-4">
                            The D7 is the most popular route for Americans with passive income — pensions, investments, rental income, dividends, or Social Security. You need to show recurring passive income of at least <strong>€920/month</strong> for a single applicant as of 2026.
                        </p>
                        <div className="overflow-x-auto mb-5">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Applicant</th>
                                        <th className="px-4 py-3 text-left font-semibold">Monthly Income Required</th>
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
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.who}</td>
                                            <td className="px-4 py-3 text-blue-700 font-semibold border border-gray-200">{row.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-4 text-sm text-gray-600">
                            Qualifying income includes US Social Security, pensions, rental income, dividends, interest, royalties, and investment returns. You also need savings of at least €11,040 in a Portuguese bank account.
                        </p>
                        <p className="mb-6 text-sm text-gray-700">
                            The D7 gives you a 4-month entry visa. Once in Portugal you apply for a <strong>2-year residence permit</strong> through AIMA. After 5 years of legal residency, you can apply for permanent residency or Portuguese citizenship.
                        </p>

                        {/* D8 */}
                        <h3 id="d8" className="text-xl font-bold text-gray-900 mt-5 mb-3">The D8 Digital Nomad Visa — For Remote Workers</h3>
                        <p className="mb-4">
                            If you work remotely for a US employer or freelance for foreign clients, the D8 Digital Nomad Visa is your route. The income threshold is <strong>€3,480/month</strong> — four times the Portuguese minimum wage.
                        </p>
                        <p className="mb-6 text-sm text-gray-700">
                            You must prove that your employer or clients are based outside Portugal. A standard employment letter, payslips, and bank statements showing consistent income deposits are the core documents. For Americans earning $60,000 or more from a US employer, the D8 is straightforward — the income threshold is comfortably met and the documentation is standard.
                        </p>

                        {/* D2 */}
                        <h3 id="d2" className="text-xl font-bold text-gray-900 mt-5 mb-3">The D2 Visa — For Entrepreneurs</h3>
                        <p className="mb-6 text-sm text-gray-700">
                            If you are moving to Portugal to start or buy a business, the D2 is your route. There is no fixed minimum investment amount. What matters is a viable business plan demonstrating economic value to Portugal — job creation, innovation, or trade. The plan is reviewed by IAPMEI, a Portuguese government body. Many Americans who want to open a restaurant, consulting firm, or tech company use the D2.
                        </p>

                        {/* Visa comparison cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            {[
                                { visa: "D7", label: "Passive Income / Retirees", threshold: "€920/mo min.", color: "bg-blue-700" },
                                { visa: "D8", label: "Remote Workers / Nomads", threshold: "€3,480/mo min.", color: "bg-indigo-700" },
                                { visa: "D2", label: "Entrepreneurs / Founders", threshold: "Business plan required", color: "bg-purple-700" },
                            ].map((item, i) => (
                                <div key={i} className={`${item.color} text-white rounded-xl p-5 text-center`}>
                                    <p className="text-3xl font-bold mb-1">{item.visa}</p>
                                    <p className="text-sm opacity-90 mb-2">{item.label}</p>
                                    <p className="text-xs bg-white/20 rounded-lg px-3 py-1">{item.threshold}</p>
                                </div>
                            ))}
                        </div>

                        {/* Cost to Move */}
                        <h2 id="move-costs" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">How Much Does It Cost to Move to Portugal from USA?</h2>
                        <p className="mb-4">The visa itself is cheap — about €110 in consulate fees. The real costs are everything around it.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                <p className="font-semibold text-gray-900 mb-3 text-sm">Before you apply</p>
                                <div className="space-y-2">
                                    {[
                                        { item: "NIF via fiscal representative", cost: "€150–€350" },
                                        { item: "Criminal background + apostille", cost: "$50–$150" },
                                        { item: "Health insurance", cost: "€500–€1,500/yr" },
                                        { item: "Document translations", cost: "€100–€400" },
                                        { item: "Portuguese bank account", cost: "€0–€200" },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm border-b border-gray-100 pb-1 last:border-0">
                                            <span className="text-gray-600">{row.item}</span>
                                            <span className="font-medium text-gray-900">{row.cost}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                <p className="font-semibold text-gray-900 mb-3 text-sm">When you arrive</p>
                                <div className="space-y-2">
                                    {[
                                        { item: "Lease deposit (first + last + security)", cost: "€2,000–€5,000" },
                                        { item: "Furnishing if unfurnished", cost: "€1,500–€5,000" },
                                        { item: "Flights and shipping", cost: "€500–€3,000" },
                                        { item: "Immigration consultant (optional)", cost: "€1,500–€4,000" },
                                        { item: "Cross-border tax advisor", cost: "€500–€2,000" },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm border-b border-gray-100 pb-1 last:border-0">
                                            <span className="text-gray-600">{row.item}</span>
                                            <span className="font-medium text-gray-900">{row.cost}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {[
                                { label: "Single person, DIY", cost: "€3,000–€6,000 total" },
                                { label: "Family with professional support", cost: "€8,000–€15,000 total" },
                            ].map((item, i) => (
                                <div key={i} className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 flex justify-between items-center">
                                    <span className="text-blue-900 font-medium text-sm">{item.label}</span>
                                    <span className="font-bold text-blue-700 text-sm">{item.cost}</span>
                                </div>
                            ))}
                        </div>

                        {/* Cost of Living */}
                        <h2 id="cost-of-living" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Cost of Living After Moving to Portugal from USA</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">City</th>
                                        <th className="px-4 py-3 text-left font-semibold">Single / Month</th>
                                        <th className="px-4 py-3 text-left font-semibold">Family of Four / Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { city: "Lisbon", single: "€2,000–€2,500", family: "€3,500–€4,500", highlight: false },
                                        { city: "Porto", single: "€1,600–€2,000", family: "€2,800–€3,600", highlight: false },
                                        { city: "Braga / Coimbra / Faro", single: "€1,200–€1,500", family: "€2,500–€3,500", highlight: false },
                                        { city: "San Francisco (USA)", single: "~$4,500", family: "~$7,000+", highlight: true },
                                        { city: "New York (USA)", single: "~$4,000", family: "~$6,500+", highlight: true },
                                        { city: "Austin (USA)", single: "~$2,800", family: "~$4,500+", highlight: true },
                                    ].map((row, i) => (
                                        <tr key={i} className={row.highlight ? 'bg-red-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className={`px-4 py-3 font-medium border border-gray-200 ${row.highlight ? 'text-red-700' : 'text-gray-900'}`}>{row.city}</td>
                                            <td className={`px-4 py-3 border border-gray-200 ${row.highlight ? 'text-red-600' : 'text-gray-700'}`}>{row.single}</td>
                                            <td className={`px-4 py-3 border border-gray-200 ${row.highlight ? 'text-red-600' : 'text-gray-700'}`}>{row.family}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-700 text-white rounded-xl p-5 mb-8">
                            <p className="font-semibold mb-1">The math is the reason this move has become so popular.</p>
                            <p className="text-blue-100 text-sm">You trade a $7,000/month New York family budget for a €4,000/month Lisbon family budget — while gaining universal healthcare and European mobility.</p>
                        </div>

                        {/* Taxes */}
                        <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Taxes When Moving to Portugal from USA: The Part Nobody Gets Right</h2>
                        <p className="mb-4">This is where Americans specifically need to pay attention — US tax rules follow you everywhere.</p>
                        <div className="space-y-4 mb-6">
                            {[
                                {
                                    num: "1",
                                    title: "You still file US taxes",
                                    detail: "American citizens owe taxes on worldwide income regardless of where they live. You file with the IRS every year, report foreign bank accounts through FBAR (if over $10,000), and report foreign financial assets through FATCA. Moving to Portugal does not change any of this.",
                                    color: "border-red-200 bg-red-50",
                                    numColor: "bg-red-600"
                                },
                                {
                                    num: "2",
                                    title: "You also file Portuguese taxes",
                                    detail: "Once you become a Portuguese tax resident — usually after spending 183+ days in Portugal in a calendar year — you owe Portuguese income tax on your income.",
                                    color: "border-amber-200 bg-amber-50",
                                    numColor: "bg-amber-600"
                                },
                                {
                                    num: "3",
                                    title: "The IFICI regime (NHR 2.0) can help",
                                    detail: "Portugal's IFICI programme replaced the old NHR regime. If you qualify, you pay a flat 20% on Portuguese-sourced income and zero on most foreign dividends, royalties, and capital gains for 10 years. It requires a bachelor's degree plus 3 years of relevant experience, or a doctorate.",
                                    color: "border-green-200 bg-green-50",
                                    numColor: "bg-green-600"
                                },
                                {
                                    num: "4",
                                    title: "Double taxation treaties prevent paying twice",
                                    detail: "The US and Portugal have a double taxation agreement. The Foreign Tax Credit and the Foreign Earned Income Exclusion help reduce your US tax bill on income already taxed in Portugal.",
                                    color: "border-blue-200 bg-blue-50",
                                    numColor: "bg-blue-600"
                                },
                            ].map((item, i) => (
                                <div key={i} className={`flex gap-4 border-2 rounded-xl p-5 ${item.color}`}>
                                    <div className={`flex-shrink-0 w-7 h-7 ${item.numColor} text-white rounded-full flex items-center justify-center text-sm font-bold`}>{item.num}</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 text-sm text-amber-800">
                            <strong>Bottom line:</strong> You will need a cross-border tax advisor. Budget €1,000–€3,000/year for someone who understands both US and Portuguese tax systems. Getting it wrong costs far more than getting it right.
                        </div>

                        {/* Healthcare */}
                        <h2 id="healthcare" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Healthcare After Moving to Portugal from USA</h2>
                        <p className="mb-4">
                            Portugal has a universal public healthcare system called the <strong>SNS (Serviço Nacional de Saúde)</strong>. Legal residents on D7, D8, and D2 visas are eligible to register. The SNS works well for serious and emergency care — a GP visit costs €0–€5, and prescriptions are heavily subsidised.
                        </p>
                        <p className="mb-4">
                            Most American expats carry private health insurance alongside the SNS. A good private policy runs €100–€200/month for a family — giving you fast access to private clinics for routine care while the SNS serves as your safety net.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
                            <p className="font-semibold text-green-900 mb-1 text-sm">Real example from a family we worked with</p>
                            <p className="text-green-800 text-sm">One American family was paying <strong>$18,000/year</strong> for health insurance in Texas with a high deductible. After moving to Portugal, they pay <strong>€1,800/year</strong> for comprehensive private cover with no deductible. Same family. Same health needs. <strong>90% cost reduction.</strong></p>
                        </div>

                        {/* Schools */}
                        <h2 id="schools" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Schools and Raising Kids After Moving to Portugal from USA</h2>
                        <p className="mb-4">
                            Portuguese public schools are free for residents from primary through secondary. International schools in Lisbon, Porto, and the Algarve offer British, American, or IB curricula at €8,000–€18,000/year — still less than most US private schools.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Education Stage</th>
                                        <th className="px-4 py-3 text-left font-semibold">Portugal</th>
                                        <th className="px-4 py-3 text-left font-semibold">USA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { stage: "Public preschool / creche", pt: "€100–€300/month", us: "$1,200–$2,500/month" },
                                        { stage: "International school", pt: "€8,000–€18,000/year", us: "$25,000–$55,000/year" },
                                        { stage: "University tuition", pt: "€1,000–€1,500/year", us: "$40,000–$60,000/year" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.stage}</td>
                                            <td className="px-4 py-3 text-green-700 font-medium border border-gray-200">{row.pt}</td>
                                            <td className="px-4 py-3 text-red-600 border border-gray-200">{row.us}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Daily Life */}
                        <h2 id="daily-life" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What Daily Life Feels Like After Moving to Portugal from USA</h2>
                        <div className="space-y-3 mb-8">
                            {[
                                { point: "The pace is slower", detail: "In a 'you actually eat lunch sitting down' way, not a frustrating way." },
                                { point: "Walking replaces driving", detail: "Lisbon and Porto are walkable cities with good public transport. Metro passes cost €40/month." },
                                { point: "The food changes your life", detail: "Fresh fish, pastéis de nata, grilled sardines, cheap wine. You stop eating sad desk lunches forever." },
                                { point: "Bureaucracy is real", detail: "AIMA appointments take months. A good immigration consultant helps enormously with the paperwork." },
                                { point: "The community is there", detail: "American expat networks in Lisbon, Porto, and the Algarve are large, active, and welcoming." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <span className="text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">→</span>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">{item.point}</p>
                                        <p className="text-gray-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Downsides */}
                        <h2 id="downsides" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The Honest Downsides of Moving to Portugal from USA</h2>
                        <div className="space-y-2 mb-8">
                            {[
                                { point: "Distance from family", detail: "Lisbon to New York is about 7 hours by air. Visits require planning and money." },
                                { point: "US tax obligations do not go away", detail: "You file two returns forever — IRS and Portuguese tax authority." },
                                { point: "Salaries in Portugal are low", detail: "Portuguese local salaries average around €1,500/month. This move only works financially if your income comes from outside Portugal." },
                                { point: "Language matters eventually", detail: "A2 Portuguese is required for citizenship after 5 years." },
                                { point: "AIMA processing is slow", detail: "Expect 4 to 6 months for your residence permit appointment after arriving in Lisbon or Porto." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start border-l-4 border-amber-400 pl-4 py-2">
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">{item.point}</p>
                                        <p className="text-gray-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions</h2>
                        <div className="space-y-5 mb-10">
                            {[
                                {
                                    q: "Can I work for my US employer while living in Portugal?",
                                    a: "Yes — on the D8 Digital Nomad Visa. You need to earn at least €3,480/month from your US employer or foreign clients."
                                },
                                {
                                    q: "How long can I stay in Portugal without a visa?",
                                    a: "90 days within any 180-day period as a US citizen under the Schengen tourist allowance. After that you need a D7, D8, or D2 visa for longer stays."
                                },
                                {
                                    q: "Does Social Security count as income for the D7 Visa?",
                                    a: "Yes. US Social Security payments count as qualifying passive income for the D7 Visa. The amount received needs to meet the monthly minimum threshold (€920 for a single applicant in 2026)."
                                },
                                {
                                    q: "Can I bring my family?",
                                    a: "Yes. Your spouse and dependent children can be included in your initial application or join through family reunification. Each additional family member adds to the income threshold requirement."
                                },
                                {
                                    q: "How long until Portuguese citizenship?",
                                    a: "Five years of legal residency, plus A2 Portuguese language proficiency and a clean criminal record. Portugal allows dual citizenship — so you keep your US passport."
                                },
                            ].map((item, i) => (
                                <div key={i} className="border border-gray-200 rounded-xl p-5">
                                    <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* Final Word */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Final Word</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Moving to Portugal from USA is one of the most rewarding relocations an American can make — if you pick the right visa, plan the tax side early, and set realistic expectations for the first 12 months. The D7, D8, and D2 each open the same door: five years to Portuguese permanent residency and EU citizenship. The difference is which door fits your income and lifestyle.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-blue-700 rounded-2xl p-8 text-white text-center mt-10">
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Want to Know If You Actually Qualify?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                If Portugal is on your radar and you want to know which visa fits your situation, what the realistic timeline and budget look like — we can give you a straight answer in 30 minutes.
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
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.571a.5.5 0 00.606.61l5.885-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a10 10 0 01-5.195-1.449l-.372-.22-3.862 1.013 1.033-3.772-.242-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
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
                                    { href: "#visas", label: "Which Visa Do You Need?" },
                                    { href: "#d7", label: "D7 — Passive Income" },
                                    { href: "#d8", label: "D8 — Remote Workers" },
                                    { href: "#d2", label: "D2 — Entrepreneurs" },
                                    { href: "#move-costs", label: "Cost to Move" },
                                    { href: "#cost-of-living", label: "Cost of Living" },
                                    { href: "#taxes", label: "Tax Obligations" },
                                    { href: "#healthcare", label: "Healthcare" },
                                    { href: "#schools", label: "Schools & Kids" },
                                    { href: "#daily-life", label: "Daily Life" },
                                    { href: "#downsides", label: "Honest Downsides" },
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
                    <RelatedArticles currentPath="/blogs/move-to-portugal-from-usa" />
                </div>
            </div>
        </div>
    )
}

export default MovingToPortugalFromUSA2026
