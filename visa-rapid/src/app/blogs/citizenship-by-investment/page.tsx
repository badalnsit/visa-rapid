import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Citizenship by Investment | Visa Rapid',
    description: 'US EB-5 vs Portugal Golden Visa — an honest side-by-side on cost, timeline, passport strength, physical presence, and what you actually get at the end in 2026.',
}

const CitizenshipByInvestmentUSAvsPortugal = () => {
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
                        <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Investment Residency</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">
                        Citizenship by Investment
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on April 17, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>20 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog32.jpg"
                        alt="Citizenship by investment comparison: US EB-5 vs Portugal Golden Visa 2026"
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
                            You type "citizenship by investment" into Google and most of what you find is either Caribbean island programmes or confusing legal language. But the two programmes that serious investors from India, the Gulf, Nigeria, the Philippines, and beyond actually compare most often are the <strong>US EB-5 investor visa</strong> and the <strong>Portugal Golden Visa</strong>.
                        </p>
                        <p className="mb-4">
                            They are both real. They are both legitimate. They are both designed for people who want to secure residency and eventually citizenship through investment rather than through a job offer or points system. But they are very different in cost, timeline, what you get at the end, and what the current political climate looks like in 2026.
                        </p>
                        <p className="mb-8">Here is an honest side-by-side.</p>

                        {/* Why People Search */}
                        <h2 id="what-investors-want" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why People Search "Citizenship by Investment" — And What They Actually Want</h2>
                        <p className="mb-4">Most people searching this phrase are not looking to park money in a country they will never visit. They want one or more of the following things:</p>
                        <div className="space-y-2 mb-8">
                            {[
                                "A better passport that opens more doors for travel and business",
                                "The ability to give their children access to world-class education and a future outside their home country",
                                "A stable, predictable second base in a country with a strong rule of law",
                                "A hedge against political or economic instability at home",
                                "Access to a market or business environment that their current passport restricts",
                            ].map((point, i) => (
                                <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-lg px-4 py-3">
                                    <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="text-gray-700 text-sm">{point}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mb-8">The USA and Portugal both speak to these motivations — but in very different ways and at very different price points.</p>

                        {/* US EB-5 */}
                        <h2 id="eb5" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The USA Option: How the EB-5 Investor Visa Works</h2>
                        <p className="mb-4">
                            The EB-5 programme has been running since 1990. The basic deal: invest a minimum qualifying amount in a US business project that creates at least <strong>10 full-time jobs for US workers</strong> and you and your family qualify for a green card.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                <p className="font-semibold text-gray-900 text-sm mb-1">Standard Investment</p>
                                <p className="text-2xl font-bold text-gray-800 mb-1">$1,050,000</p>
                                <p className="text-xs text-gray-500">Into any eligible US business</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                                <p className="font-semibold text-blue-900 text-sm mb-1">TEA Investment (Most Popular)</p>
                                <p className="text-2xl font-bold text-blue-700 mb-1">$800,000</p>
                                <p className="text-xs text-blue-600">Rural area or high unemployment zone</p>
                            </div>
                        </div>
                        <p className="mb-4">
                            After your I-526E petition is approved you receive a conditional green card for 2 years. You then file to remove conditions (proving the jobs were created) and receive a permanent green card. After 5 years of permanent residency you can apply for US citizenship.
                        </p>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8">
                            <p className="text-amber-800 text-sm"><strong>The reality in 2026:</strong> Timelines vary enormously by country of birth, project type, and the USCIS backlog. For Indian and Chinese nationals, per-country visa caps cause significant retrogression delays extending timelines well beyond the baseline.</p>
                        </div>

                        {/* Portugal Golden Visa */}
                        <h2 id="golden-visa" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The Portugal Option: How the Golden Visa Works</h2>
                        <p className="mb-4">
                            Portugal's Golden Visa — officially the Residence Permit for Investment Activity (ARI) — launched in 2012 and became one of the most popular investment residency programmes in the world. Real estate investment was removed as a qualifying route in 2023. In 2026, the qualifying options are:
                        </p>
                        <div className="space-y-3 mb-8">
                            {[
                                { amount: "€500,000", route: "Investment funds or venture capital", note: "Most popular current route — into regulated funds focused on Portuguese companies", tag: "Most Popular" },
                                { amount: "€500,000", route: "Scientific research or technology development", note: "Into qualifying R&D activities in Portugal", tag: "" },
                                { amount: "€250,000", route: "Cultural heritage or arts projects", note: "Reduced to €200,000 in low-density areas", tag: "Lowest Entry" },
                                { amount: "€500,000", route: "Job creation projects", note: "Must create or maintain at least 5–10 permanent jobs", tag: "" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <div className="flex-shrink-0 text-right min-w-[80px]">
                                        <p className="font-bold text-blue-700 text-sm">{item.amount}</p>
                                        {item.tag && <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">{item.tag}</span>}
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <p className="font-medium text-gray-900 text-sm">{item.route}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{item.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cost Comparison */}
                        <h2 id="cost" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Cost Comparison: What You Are Actually Spending</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="border-2 border-red-200 rounded-xl overflow-hidden">
                                <div className="bg-red-600 text-white px-5 py-3">
                                    <p className="font-bold text-sm">🇺🇸 US EB-5 Total Cost</p>
                                </div>
                                <div className="p-5 space-y-2">
                                    {[
                                        { item: "Minimum investment (TEA)", cost: "$800,000" },
                                        { item: "Regional centre admin fees", cost: "$50,000–$80,000" },
                                        { item: "Legal and professional fees", cost: "$25,000–$60,000" },
                                        { item: "Realistic total", cost: "$900K–$1.2M", bold: true },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm border-b border-gray-100 pb-1 last:border-0 last:pb-0">
                                            <span className="text-gray-600">{row.item}</span>
                                            <span className={row.bold ? "font-bold text-red-700" : "font-medium text-gray-900"}>{row.cost}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-red-50 px-5 py-3">
                                    <p className="text-xs text-red-700"><strong>Note:</strong> The $800K investment is at risk. Money is not refunded if the project underperforms.</p>
                                </div>
                            </div>
                            <div className="border-2 border-green-200 rounded-xl overflow-hidden">
                                <div className="bg-green-600 text-white px-5 py-3">
                                    <p className="font-bold text-sm">🇵🇹 Portugal Golden Visa Total Cost</p>
                                </div>
                                <div className="p-5 space-y-2">
                                    {[
                                        { item: "Minimum investment (fund route)", cost: "€500,000" },
                                        { item: "Government application + card fees", cost: "~€6,800" },
                                        { item: "Legal fees", cost: "€6,000–€15,000" },
                                        { item: "Realistic total", cost: "~€520,000–€530,000", bold: true },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm border-b border-gray-100 pb-1 last:border-0 last:pb-0">
                                            <span className="text-gray-600">{row.item}</span>
                                            <span className={row.bold ? "font-bold text-green-700" : "font-medium text-gray-900"}>{row.cost}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-green-50 px-5 py-3">
                                    <p className="text-xs text-green-700"><strong>Note:</strong> €500,000 ≈ $540,000–$550,000. Significantly less than the EB-5 minimum.</p>
                                </div>
                            </div>
                        </div>
                        <p className="mb-8">
                            For investment funds there is a meaningful difference from the EB-5 — your capital goes into a regulated fund with defined return expectations rather than a single project with job creation conditions. Many funds have returned capital to investors after the 5-year lock-up period.
                        </p>

                        {/* Timeline */}
                        <h2 id="timeline" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Timeline Comparison: How Long Does It Take</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Stage</th>
                                        <th className="px-4 py-3 text-left font-semibold">🇺🇸 US EB-5</th>
                                        <th className="px-4 py-3 text-left font-semibold">🇵🇹 Portugal Golden Visa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { stage: "Initial approval", us: "5–36 months (varies by project & nationality)", pt: "12–18 months" },
                                        { stage: "Conditional residency", us: "2-year conditional green card", pt: "2-year renewable permit" },
                                        { stage: "Permanent residency", us: "Remove conditions after 2 years", pt: "Eligible after 5 years" },
                                        { stage: "Citizenship eligibility", us: "5 years after permanent green card", pt: "5 years from initial permit" },
                                        { stage: "Total end-to-end", us: "7–10+ years (longer for Indian nationals)", pt: "6–7 years" },
                                        { stage: "Physical presence", us: "Must live in the US", pt: "Just 7 days/year average" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.stage}</td>
                                            <td className="px-4 py-3 text-red-700 border border-gray-200 text-xs">{row.us}</td>
                                            <td className="px-4 py-3 text-green-700 border border-gray-200 text-xs">{row.pt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                            <p className="text-blue-800 text-sm"><strong>Key advantage for Portugal:</strong> You only need to spend an average of 7 days per year in Portugal to maintain your Golden Visa — one of the lowest physical presence thresholds of any investment residency programme in the world. You can keep living in Dubai, Singapore, Mumbai, or Lagos and maintain your legal status.</p>
                        </div>

                        {/* Passport Comparison */}
                        <h2 id="passport" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What You Get at the End: The Passport Comparison</h2>
                        <p className="mb-4">This is arguably the most important consideration and the one talked about least in investment migration circles.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                <p className="font-bold text-gray-800 text-sm mb-3">🇺🇸 US Passport</p>
                                <div className="space-y-2">
                                    {[
                                        { label: "Henley Rank", val: "~10th globally" },
                                        { label: "Destinations", val: "~179 countries" },
                                        { label: "EU freedom of movement", val: "No" },
                                        { label: "Global income taxation", val: "Yes — unique globally" },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm border-b border-gray-100 pb-1 last:border-0">
                                            <span className="text-gray-500">{row.label}</span>
                                            <span className="font-medium text-gray-900">{row.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                <p className="font-bold text-green-800 text-sm mb-3">🇵🇹 Portuguese Passport</p>
                                <div className="space-y-2">
                                    {[
                                        { label: "Henley Rank", val: "5th globally" },
                                        { label: "Destinations", val: "~184 countries" },
                                        { label: "EU freedom of movement", val: "Yes — all 27 states" },
                                        { label: "IFICI tax regime", val: "Flat 20% for 10 years" },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm border-b border-green-100 pb-1 last:border-0">
                                            <span className="text-green-700">{row.label}</span>
                                            <span className="font-bold text-green-800">{row.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-700 text-white rounded-xl p-5 mb-8">
                            <p className="font-semibold mb-1">On pure passport strength Portugal edges out the US.</p>
                            <p className="text-blue-100 text-sm">The Portuguese passport gives you the right to live in Germany, France, Spain, Italy, the Netherlands, or any of the other 23 EU member states indefinitely without any additional visa process. The US passport does not give you that.</p>
                        </div>

                        {/* Family Benefits */}
                        <h2 id="family" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Family Benefits: Who Else Is Included</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                <p className="font-semibold text-gray-900 mb-3 text-sm">🇺🇸 US EB-5 — Who Qualifies</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Spouse</li>
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Unmarried children under 21</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Children aged 21+</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Parents</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                <p className="font-semibold text-green-900 mb-3 text-sm">🇵🇹 Portugal Golden Visa — Who Qualifies</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Spouse</li>
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Dependent children (up to age 26)</li>
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Dependent parents of applicant</li>
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Dependent parents of spouse</li>
                                </ul>
                            </div>
                        </div>

                        {/* Physical Presence */}
                        <h2 id="presence" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Physical Presence Requirements</h2>
                        <p className="mb-4">This matters enormously for investors who run global businesses or are not ready to fully relocate immediately.</p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    flag: "🇺🇸",
                                    title: "US EB-5",
                                    requirement: "Must live in the US",
                                    detail: "Once you have your green card you are expected to maintain it by living in the US. Staying outside the US for more than 6 months at a time without a re-entry permit can raise abandonment concerns. Extended absences can result in the green card being questioned at the border — a significant constraint for globally mobile investors.",
                                    color: "border-red-200 bg-red-50"
                                },
                                {
                                    flag: "🇵🇹",
                                    title: "Portugal Golden Visa",
                                    requirement: "Just 7 days per year",
                                    detail: "You do not need to uproot your life to maintain your Portuguese residency. Keep living in Dubai, Singapore, Mumbai, or Lagos and spend a week or two in Portugal annually to maintain your legal status. After 5 years you apply for citizenship. Once you have the passport the physical presence requirement disappears entirely.",
                                    color: "border-green-200 bg-green-50"
                                },
                            ].map((item, i) => (
                                <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span>{item.flag}</span>
                                        <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                                        <span className="text-xs bg-white border border-gray-200 text-gray-700 px-2 py-0.5 rounded-full font-medium">{item.requirement}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Political Climate */}
                        <h2 id="stability" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Current Political Climate and Programme Stability</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <p className="font-semibold text-amber-900 mb-2 text-sm">🇺🇸 EB-5 in 2026</p>
                                <p className="text-gray-700 text-sm">The EB-5 Modernization Act of 2022 reformed the programme substantially. In the current Trump administration climate the broader US immigration environment is one of tightening even for legal and investment pathways. There is no indication the EB-5 programme itself is being cancelled — but the general direction of US immigration policy in 2026 is not welcoming.</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                                <p className="font-semibold text-blue-900 mb-2 text-sm">🇵🇹 Portugal Golden Visa in 2026</p>
                                <p className="text-gray-700 text-sm mb-2">The programme removed real estate as a qualifying investment in 2023, causing uncertainty. But fund and cultural investment routes continue. Portugal remains committed to attracting international capital and the 5-year citizenship pathway remains in place.</p>
                                <p className="text-gray-600 text-xs italic">Note: Portuguese citizenship law protects people already in the residency pathway. If rules change mid-process, the rules at the time you applied typically govern your case.</p>
                            </div>
                        </div>

                        {/* Which One Is Right */}
                        <h2 id="which-one" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Which One Is Right for You</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="border-2 border-gray-300 rounded-xl p-5">
                                <p className="font-bold text-gray-800 mb-3">Choose US EB-5 if you…</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {[
                                        "Specifically want to live in the United States",
                                        "Want your children to attend US universities as domestic students",
                                        "Have strong business ties to the US market",
                                        "Are comfortable with the higher investment and physical presence",
                                        "Are from a country without long EB-5 retrogression queues",
                                    ].map((point, i) => (
                                        <li key={i} className="flex gap-2"><span className="text-blue-600 flex-shrink-0">→</span>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-2 border-blue-400 rounded-xl p-5 bg-blue-50">
                                <p className="font-bold text-blue-800 mb-3">Choose Portugal Golden Visa if you…</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {[
                                        "Want a European base with access to 27 EU member states",
                                        "Need flexible physical presence (just 7 days/year)",
                                        "Want a stronger end passport by global rankings",
                                        "Want to include parents alongside spouse and children",
                                        "Are from India, Gulf, Nigeria, or the Philippines — a top-5 EU passport is transformational",
                                    ].map((point, i) => (
                                        <li key={i} className="flex gap-2"><span className="text-blue-600 flex-shrink-0">✓</span>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-5 py-2 mb-8">
                            <p className="text-gray-700 text-sm">For most internationally mobile investors and families from emerging markets the Portugal Golden Visa offers a stronger passport, a lower investment threshold, more flexible residency conditions, and access to the European market. The US remains appealing specifically for people who want to live in America.</p>
                        </div>

                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions</h2>
                        <div className="space-y-5 mb-10">
                            {[
                                {
                                    q: "Is the Portugal Golden Visa still available in 2026?",
                                    a: "Yes. The Portugal Golden Visa continues in 2026 with fund investments, scientific research, and cultural heritage as the main qualifying routes. Real estate was removed as a qualifying route in 2023. The 5-year citizenship pathway remains in place."
                                },
                                {
                                    q: "How much do I need to invest in the US EB-5 programme?",
                                    a: "The minimum is $800,000 for a Targeted Employment Area (TEA) project or $1,050,000 for a standard investment. Add regional centre admin fees of $50,000–$80,000 and legal fees of $25,000–$60,000 for a realistic total of $900,000 to $1,200,000."
                                },
                                {
                                    q: "Can I include my parents in a Portugal Golden Visa application?",
                                    a: "Yes. Dependent parents of both the main applicant and their spouse can be included in a Portugal Golden Visa application. This is broader than the US EB-5 which only includes spouses and dependent children under 21."
                                },
                                {
                                    q: "Do I have to live in Portugal to keep my Golden Visa?",
                                    a: "No. You need to spend an average of just 7 days per year in Portugal to maintain your Golden Visa residence permit. This makes it one of the most flexible investment residency programmes in the world for people who cannot or do not want to relocate immediately."
                                },
                                {
                                    q: "Which passport is stronger — US or Portuguese?",
                                    a: "Portugal currently ranks 5th on the Henley Passport Index with access to 184 countries and the right to live and work across all 27 EU member states. The US ranks approximately 10th with access to around 179 countries. Both are strong — but the EU freedom of movement that comes with a Portuguese passport is something a US passport cannot match."
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
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Thinking About Investment Residency in Portugal?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                If you are comparing your investment residency options and want to understand which route fits your financial situation and long-term goals, we can walk you through it.
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
                                    { href: "#what-investors-want", label: "What Investors Actually Want" },
                                    { href: "#eb5", label: "US EB-5: How It Works" },
                                    { href: "#golden-visa", label: "Portugal Golden Visa" },
                                    { href: "#cost", label: "Cost Comparison" },
                                    { href: "#timeline", label: "Timeline Comparison" },
                                    { href: "#passport", label: "Passport Comparison" },
                                    { href: "#family", label: "Family Benefits" },
                                    { href: "#presence", label: "Physical Presence" },
                                    { href: "#stability", label: "Political Climate" },
                                    { href: "#which-one", label: "Which One Is Right for You" },
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
                    <RelatedArticles currentPath="/blogs/citizenship-by-investment" />
                </div>
            </div>
        </div>
    )
}

export default CitizenshipByInvestmentUSAvsPortugal
