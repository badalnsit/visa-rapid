import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Portugal D7 Visa for UK Expats | Visa Rapid',
    description: 'UK rental income qualifies for Portugal\'s D7 Passive Income Visa. Here\'s how British families with buy-to-let properties can use rental income to move to Portugal after Brexit.',
}

const PortugalD7VisaUKRentalIncome = () => {
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
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Visa Guide</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">
                        Portugal D7 Visa for UK Expats
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on April 12, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>18 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog28.jpg"
                        alt="British family with UK rental property considering Portugal D7 Visa after Brexit"
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
                            A lot of British families have rental properties. A house they bought years ago that they rent out, a flat they held onto after moving, a second property they inherited. For many, that rental income just ticks along in the background while they get on with their lives.
                        </p>
                        <p className="mb-4">
                            But that income is also exactly what Portugal's D7 Visa is designed for. And for British families thinking about Portugal since Brexit, rental income from UK properties is one of the cleanest qualifying routes available.
                        </p>
                        <p className="mb-8">
                            Here is how it works in practice.
                        </p>

                        {/* Can You Use UK Rental Income */}
                        <h2 id="qualifying" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Can You Use UK Rental Income for the D7?</h2>
                        <p className="mb-4">
                            Yes. Straightforwardly.
                        </p>
                        <p className="mb-4">
                            Portugal's D7 Passive Income Visa was built for people with stable, recurring income from sources outside their own labour. Rental income fits that definition perfectly. The Portuguese consulate and AIMA (the immigration authority) both accept rental income from properties located outside Portugal — including UK properties — as qualifying passive income.
                        </p>
                        <p className="mb-4">
                            What they want to see is that the income is <strong>real, consistent, and documented</strong>. A lease agreement showing the property is rented. Bank statements showing the rent arriving regularly. Tax declarations confirming you are reporting it.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
                            <p className="text-green-800 font-semibold text-sm">
                                If you own a UK property that is tenanted and generating income every month, you are likely in a stronger position than you realise.
                            </p>
                        </div>

                        {/* Income Thresholds */}
                        <h2 id="income" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">How Much Income Does a British Family Need?</h2>
                        <p className="mb-4">
                            The D7 income threshold is based on Portugal's national minimum wage, which in 2026 stands at <strong>€920 per month</strong>.
                        </p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Household</th>
                                        <th className="px-4 py-3 text-left font-semibold">Monthly (EUR)</th>
                                        <th className="px-4 py-3 text-left font-semibold">Annual (EUR)</th>
                                        <th className="px-4 py-3 text-left font-semibold">Approx. (GBP/mo)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { household: "Single applicant", monthly: "€920", annual: "€11,040", gbp: "~£785" },
                                        { household: "Couple (2 adults)", monthly: "€1,380", annual: "€16,560", gbp: "~£1,180" },
                                        { household: "Couple + 1 child", monthly: "€1,656", annual: "€19,872", gbp: "~£1,415" },
                                        { household: "Couple + 2 children", monthly: "€1,932", annual: "€23,184", gbp: "~£1,650" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.household}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.monthly}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.annual}</td>
                                            <td className="px-4 py-3 text-blue-700 font-medium border border-gray-200">{row.gbp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-4">
                            You also need savings in a Portuguese bank account. The minimum is €11,040 for the main applicant plus proportional amounts for family members. <strong>For a family of four, budget approximately €18,000–€20,000</strong> in a Portuguese account.
                        </p>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
                            <p className="text-amber-800 text-sm"><strong>Important:</strong> The income threshold is a minimum, not a target. Consulate and AIMA officers look at your overall financial picture. Having income meaningfully above the threshold makes the application stronger and reduces scrutiny.</p>
                        </div>

                        {/* Proving Rental Income */}
                        <h2 id="documents" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Proving Rental Income: The Documents That Actually Work</h2>
                        <p className="mb-4">
                            This is where British applicants often get tripped up. The consulate wants specific documents. Bringing the wrong ones — or the right ones in the wrong format — causes delays.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Tenancy agreement (AST or equivalent)",
                                    detail: "Your UK lease agreement showing the property address, tenant, monthly rent, and duration. Should be signed and current. If you have multiple properties, a copy of each lease."
                                },
                                {
                                    title: "Bank statements showing rental deposits",
                                    detail: "3–6 months of statements from the account where rent is paid, clearly showing rental payments arriving consistently. If rent arrives from a letting agent, include statements showing agent payments plus a letter from the agent confirming the rental income."
                                },
                                {
                                    title: "UK Self Assessment tax return (SA100 and SA105)",
                                    detail: "The most important document for proving rental income to Portuguese authorities. The SA105 is specifically the UK supplementary form for property income. Your most recent filed return showing declared rental income is strong evidence that the income is real."
                                },
                                {
                                    title: "HMRC tax calculation letter",
                                    detail: "If you have this from HMRC, include it. It confirms your declared income in a format that looks authoritative to overseas officials."
                                },
                                {
                                    title: "Property ownership proof",
                                    detail: "Land Registry title document or mortgage statement confirming you own the property you are renting out."
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mb-8 text-sm text-gray-600 italic">
                            All documents not already in English need certified Portuguese translation. UK documents are in English which is fine for initial consulate purposes, but some offices request certified translations at the AIMA stage.
                        </p>

                        {/* Gross vs Net */}
                        <h2 id="gross-net" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The UK Property Twist: Gross vs Net</h2>
                        <p className="mb-4">
                            Here is something that catches British landlords off guard.
                        </p>
                        <p className="mb-4">
                            <strong>Portugal looks at gross rental income, not net profit.</strong> This matters because many UK landlords with mortgages on their rental properties think of their "rental income" as the profit after the mortgage payment. That is not how the Portuguese consulate sees it.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                            <p className="text-blue-900 font-semibold mb-2 text-sm">Example</p>
                            <p className="text-blue-800 text-sm">Your property rents for <strong>£1,500/month</strong>. Your buy-to-let mortgage costs <strong>£900/month</strong>. Your net is £600 — but for D7 purposes, Portugal counts the full <strong>£1,500</strong> as your passive income.</p>
                        </div>
                        <p className="mb-4">
                            This is actually good news for most British landlords. A couple with one rental property generating £1,800/month gross easily meets the family of four threshold even if a mortgage eats most of that net.
                        </p>
                        <p className="mb-8">
                            The income declared on your SA105 (the UK property income supplementary page) is typically the gross rental income before mortgage interest deductions — which aligns well with what Portugal wants to see.
                        </p>

                        {/* Step by Step */}
                        <h2 id="steps" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Step by Step: How the Application Works</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    step: "Step 1",
                                    title: "Get your NIF (Portuguese Tax Number)",
                                    detail: "You need a NIF before you can open a Portuguese bank account. As a non-resident, you get it through a fiscal representative in Portugal — a lawyer or accountant who acts as your point of contact with Portuguese tax authorities. Cost: €150–€350. Timeline: 1–2 weeks."
                                },
                                {
                                    step: "Step 2",
                                    title: "Open a Portuguese bank account and transfer funds",
                                    detail: "Popular choices for British expats include Millennium BCP, Novo Banco, and Caixa Geral de Depósitos. Transfer your savings (at least €18,000–€20,000 for a family of four). The account needs to be open and funded before your consulate appointment."
                                },
                                {
                                    step: "Step 3",
                                    title: "Sort your Portuguese accommodation",
                                    detail: "You need a confirmed address in Portugal before applying. A signed 12-month rental contract or property purchase. For the consulate appointment, a proper 12-month contract is stronger than short-term alternatives."
                                },
                                {
                                    step: "Step 4",
                                    title: "Gather your documents",
                                    detail: "For each adult: valid UK passport, ACRO criminal record certificate + apostille, proof of rental income (tenancy agreement, bank statements, SA100 + SA105), proof of Portuguese bank account and funds, proof of Portuguese accommodation, health insurance (min. €30,000 coverage), two passport photos. For children: apostilled birth certificates, passports."
                                },
                                {
                                    step: "Step 5",
                                    title: "Book your consulate appointment",
                                    detail: "British nationals apply at the Portuguese Consulate in London (or Manchester for northern England). Wait times have ranged from 6–14 weeks in recent years. Book as early as possible."
                                },
                                {
                                    step: "Step 6",
                                    title: "Attend the appointment",
                                    detail: "A document submission and verification meeting lasting 20–40 minutes. A consular officer reviews your documents and asks basic questions about your income, accommodation, and plans. Visa fee: approximately €110 per adult."
                                },
                                {
                                    step: "Step 7",
                                    title: "Wait for visa approval",
                                    detail: "Typically 8–12 weeks from the appointment. The D7 entry visa is valid for 4 months and allows entry to Portugal."
                                },
                                {
                                    step: "Step 8",
                                    title: "Arrive and apply for your residence permit",
                                    detail: "Within the 4-month visa validity, travel to Portugal and submit your AIMA residence permit application. AIMA issues a 2-year residence permit that is renewable."
                                },
                                {
                                    step: "Step 9",
                                    title: "Wait for your AIMA appointment",
                                    detail: "As of 2026, AIMA appointment wait times range from 4–6 months after submitting online. During this time you can live normally in Portugal. Your 2-year residence permit card arrives approximately 3–4 weeks after the AIMA appointment."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded-md min-w-[56px] text-center">{item.step}</div>
                                    <div className="border-b border-gray-100 pb-4 flex-1">
                                        <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* After You Arrive */}
                        <h2 id="after-arrival" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What Happens After You Arrive</h2>
                        <p className="mb-4">
                            Life in Portugal starts from day one of arrival on your D7 entry visa. You do not need to wait for the residence permit to begin living normally.
                        </p>
                        <p className="mb-3 font-semibold text-gray-900">In your first few weeks, prioritise:</p>
                        <div className="space-y-3 mb-8">
                            {[
                                { item: "Register your address at the local Junta de Freguesia (parish council)", detail: "Required for AIMA and for accessing public services." },
                                { item: "Enrol children in school", detail: "Portuguese public schools are free for residents. Bring the children's passports, birth certificates, and proof of address. Most schools in Lisbon and Porto have experience with English-speaking children." },
                                { item: "Register with a local health centre (Centro de Saúde)", detail: "For SNS access you will need your NIF and proof of address." },
                                { item: "File your AIMA application online as soon as possible", detail: "Start the queue clock immediately — the sooner you apply, the sooner your appointment comes." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                                    <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-sm">{item.item}</p>
                                        <p className="text-gray-600 text-xs mt-0.5">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Taxes */}
                        <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Taxes: UK Property, Portugal Residency, and Double Taxation</h2>
                        <p className="mb-4">
                            Once you become a Portuguese tax resident (after spending 183+ days in Portugal in a calendar year), Portugal can tax your worldwide income — including your UK rental income.
                        </p>
                        <p className="mb-4">
                            But the <strong>UK and Portugal have a double taxation treaty</strong>. Under this treaty, rental income from UK property is generally taxed in the UK first. Portugal then credits the UK tax paid against any Portuguese liability. In most cases this prevents true double taxation.
                        </p>
                        <div className="space-y-3 mb-6">
                            {[
                                "You will need to declare your UK rental income on your Portuguese tax return as well as your UK return.",
                                "The treaty provisions are not simple to apply — the interaction between UK landlord rules and Portuguese tax law requires specialist advice.",
                                "If you qualify for Portugal's IFICI (NHR 2.0) tax regime, some foreign-sourced income may be exempt from Portuguese tax for up to 10 years.",
                                "You still file a UK self assessment every year for your UK rental income. Moving to Portugal does not remove your UK tax obligations on UK property.",
                            ].map((point, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className="flex-shrink-0 text-blue-600 font-bold text-sm mt-0.5">→</span>
                                    <p className="text-gray-700 text-sm">{point}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-8">
                            <p className="font-semibold text-amber-900 mb-1 text-sm">Strongly recommended</p>
                            <p className="text-amber-800 text-sm">Speak with a cross-border tax adviser before you move — someone who understands both HMRC rules and Portuguese tax (AT). Budget €500–€1,500 for proper setup advice in your first year. The cost of getting this right is far lower than the cost of getting it wrong.</p>
                        </div>

                        {/* Real Example */}
                        <h2 id="example" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Real Example: A British Family of Four with Two UK Rentals</h2>
                        <p className="mb-4">
                            James and Sarah are from Bristol. They own their family home and two buy-to-let properties they bought in 2014 and 2018. Their children are 9 and 13.
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                            <p className="font-semibold text-gray-900 mb-4">Their rental income situation:</p>
                            <div className="space-y-3 mb-4">
                                {[
                                    { label: "Property 1 – 3-bed semi in Bristol", gross: "£1,400/month gross", mortgage: "£600/month BTL mortgage" },
                                    { label: "Property 2 – 2-bed flat in Cardiff", gross: "£950/month gross", mortgage: "Mortgage-free" },
                                ].map((row, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-white border border-gray-200 rounded-lg p-4">
                                        <span className="font-medium text-gray-900 text-sm flex-1">{row.label}</span>
                                        <span className="text-green-700 font-semibold text-sm">{row.gross}</span>
                                        <span className="text-gray-500 text-xs">{row.mortgage}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                    { stat: "£2,350", label: "Total gross monthly rental" },
                                    { stat: "~€2,750", label: "At current exchange rate" },
                                    { stat: "€1,932", label: "D7 threshold for family of 4" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
                                        <p className="text-xl font-bold text-blue-700">{item.stat}</p>
                                        <p className="text-xs text-gray-600 mt-0.5">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            Their Portuguese bank savings: £18,000 transferred across (approximately €21,000) — comfortably above the €20,000 needed for a family of four.
                        </p>
                        <p className="mb-4">
                            Their application was straightforward. Both SA105 forms, tenancy agreements, 6 months of bank statements, ACRO criminal record certificates, apostilled birth certificates, health insurance, and a signed 12-month lease on a 4-bedroom house in Cascais.
                        </p>
                        <div className="border-l-4 border-green-500 pl-5 py-2 mb-8">
                            <p className="text-gray-700 text-sm">Visa approved. Arrived in Portugal in September 2025. Children enrolled in local school. AIMA appointment came in February 2026. Residence permits issued in March 2026. James kept his UK properties rented. Sarah started a freelance consultancy. The children are now bilingual.</p>
                            <p className="mt-2 font-semibold text-gray-900 text-sm">Total time from first consultation to residence permits: 14 months.</p>
                        </div>

                        {/* Common Mistakes */}
                        <h2 id="mistakes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Common Mistakes British Applicants Make</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    mistake: "Using net rental income instead of gross",
                                    fix: "Portugal counts gross rent. Include the full figure on your application — not the profit after mortgage payments."
                                },
                                {
                                    mistake: "Not apostilling UK documents",
                                    fix: "Birth certificates, marriage certificates, and criminal record certificates all need apostilles. ACRO issues the certificate but you need a separate apostille from the FCDO. Allow 2–4 weeks and budget £30–£75 per document."
                                },
                                {
                                    mistake: "Leaving the bank account too late",
                                    fix: "You need a Portuguese bank account funded before your consulate appointment. Opening a Portuguese account from the UK takes longer than most expect. Start 8–10 weeks before your appointment."
                                },
                                {
                                    mistake: "Booking a short rental instead of a proper lease",
                                    fix: "A holiday let or Airbnb booking is not accepted as proof of accommodation. You need a signed 12-month rental contract or evidence of property ownership."
                                },
                                {
                                    mistake: "Forgetting health insurance",
                                    fix: "Mandatory for the D7. Must cover at least €30,000 in medical expenses and be active before the visa is issued. Budget €500–€1,500 per year for a family."
                                },
                                {
                                    mistake: "Underestimating the AIMA wait",
                                    fix: "The AIMA appointment queue is 4–6 months long. This is normal and does not mean anything is wrong. But plan financially for this period before your residence card arrives."
                                },
                            ].map((item, i) => (
                                <div key={i} className="border border-red-100 rounded-xl p-5">
                                    <p className="font-semibold text-red-700 text-sm mb-2">✗ {item.mistake}</p>
                                    <p className="text-gray-700 text-sm"><span className="font-medium text-green-700">✓ Fix: </span>{item.fix}</p>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions</h2>
                        <div className="space-y-5 mb-10">
                            {[
                                {
                                    q: "Does UK rental income definitely qualify for the D7 Visa?",
                                    a: "Yes. Rental income from UK properties is explicitly accepted as qualifying passive income for the D7 Visa. You need to document it properly with a tenancy agreement, bank statements showing regular deposits, and your UK self assessment tax return. The income figure used is gross rental, not net after mortgage payments."
                                },
                                {
                                    q: "Do we need to sell our UK rental properties to move to Portugal?",
                                    a: "No. You keep them. You remain the UK landlord and continue receiving rent from UK tenants. You still file UK self assessment tax returns for the rental income. What changes is that you now also become a Portuguese tax resident and need to declare this income in Portugal too — subject to the UK–Portugal double taxation treaty."
                                },
                                {
                                    q: "Can both spouses combine their income for the D7?",
                                    a: "Yes. If a couple applies jointly, their combined passive income is assessed together. The total household rental income is what matters, not each person individually. If the rental is in one spouse's name, the other spouse is included as a family member with the 50% supplement applied."
                                },
                                {
                                    q: "What happens to the UK rental income when we become Portuguese tax residents?",
                                    a: "You continue to pay UK tax on UK rental income as normal. But you will also need to declare it on your Portuguese tax return. The UK–Portugal double taxation treaty prevents you paying tax twice on the same income. A cross-border tax adviser will help you structure this correctly. The IFICI (NHR 2.0) tax regime may offer additional benefits depending on your situation."
                                },
                                {
                                    q: "How long before we can get Portuguese citizenship?",
                                    a: "Five years of legal residency. You need A2 Portuguese language proficiency (basic conversational level) and a clean criminal record. Portugal allows dual citizenship, so you keep your British passports. Your children can also apply for Portuguese citizenship after 5 years of residency. As dual British and Portuguese nationals they would have full EU freedom of movement — which many British families see as one of the most valuable long-term benefits of the move."
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
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Ready to Start Your D7 Application?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                If your UK rental income covers the threshold and you are thinking seriously about Portugal, the next step is getting a clear picture of what your specific application looks like — which documents you need, what your timeline is, and whether your income is structured in a way the consulate will accept.
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
                            <p className="mt-2 text-blue-200 text-xs italic">
                                VisaRapid specialises in Portugal D7, D8, and D2 visa applications for British families since Brexit.
                            </p>
                        </div>

                    </article>

                    {/* Sidebar TOC */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">In This Article</p>
                            <nav className="space-y-2">
                                {[
                                    { href: "#qualifying", label: "Can You Use UK Rental Income?" },
                                    { href: "#income", label: "How Much Income You Need" },
                                    { href: "#documents", label: "Documents That Work" },
                                    { href: "#gross-net", label: "Gross vs Net Income" },
                                    { href: "#steps", label: "Step-by-Step Application" },
                                    { href: "#after-arrival", label: "After You Arrive" },
                                    { href: "#taxes", label: "Taxes & Double Taxation" },
                                    { href: "#example", label: "Real Family Example" },
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
                    <RelatedArticles currentPath="/blogs/portugal-d7-visa-for-uk-expats" />
                </div>
            </div>
        </div>
    )
}

export default PortugalD7VisaUKRentalIncome
