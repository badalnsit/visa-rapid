import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Digital Nomad Visa Portugal | Visa Rapid',
    description: 'Everything you need to know about the Portugal digital nomad visa (D8) in 2026 — income requirements, documents, step-by-step application, costs, taxes, and whether it is worth it.',
    alternates: {
        canonical: 'https://www.visarapid.com/blogs/digital-nomad-visa-portugal',
    },
}

const DigitalNomadVisaPortugal = () => {
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
                        Digital Nomad Visa Portugal: The Complete D8 Guide for 2026
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on April 20, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>18 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog35.jpg"
                        alt="Digital Nomad Visa Portugal D8 — Complete Guide 2026"
                        className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-xl shadow-sm"
                        width={1200}
                        height={400}
                        loading="lazy"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <article className="lg:col-span-3 prose prose-lg max-w-none text-gray-800">

                        <p className="mb-8 text-lg">
                            So you want to live in Lisbon, work remotely from the Algarve, or wake up to Atlantic views while on a Zoom call. The digital nomad visa Portugal offers — officially the D8 visa — is your clearest path there. In this guide, we cover everything you need to know about the digital nomad visa Portugal has created for remote workers in 2026: who qualifies, what it costs, how to apply, and whether it is worth it.
                        </p>

                        {/* What Is */}
                        <h2 id="what-is" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What Is the Digital Nomad Visa Portugal Offers (D8)?</h2>
                        <p className="mb-4">
                            The digital nomad visa Portugal created — known as the D8 — is a long-stay visa specifically designed for remote workers, freelancers, and self-employed professionals who earn their income from clients or employers outside Portugal. Launched in 2022, it was one of the first digital nomad visas in Europe and remains one of the most sought-after.
                        </p>
                        <p className="mb-8">
                            Unlike a tourist visa or a short-stay permit, the D8 digital nomad visa gives you the right to legally reside in Portugal for up to two years, with the option to renew — and eventually apply for permanent residency or citizenship.
                        </p>

                        {/* Who Is It For */}
                        <h2 id="who" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Who Is the Digital Nomad Visa Portugal For?</h2>
                        <p className="mb-4">The D8 visa is open to non-EU/EEA/Swiss nationals who:</p>
                        <div className="space-y-2 mb-4">
                            {[
                                "Work remotely for a foreign employer or foreign clients",
                                "Are self-employed freelancers or independent contractors",
                                "Run an online business with clients based outside Portugal",
                                "Earn a stable, provable monthly income above the threshold",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center text-sm bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
                            EU citizens do not need the D8 visa — they have freedom of movement and can live and work in Portugal without a visa.
                        </div>

                        {/* Requirements */}
                        <h2 id="requirements" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Digital Nomad Visa Portugal Requirements 2026</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">Income Threshold</h3>
                        <p className="mb-4">
                            This is the most critical requirement. To qualify for the digital nomad visa Portugal offers in 2026, you must earn a minimum of <strong>€3,680 per month</strong> — four times Portugal's current national minimum wage of €920.
                        </p>
                        <p className="mb-3 text-sm text-gray-700">If you are bringing family members, the income requirement scales up:</p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Applicant</th>
                                        <th className="px-4 py-3 text-left font-semibold">Additional Income Required</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { who: "Main applicant", extra: "€3,680/month (baseline)" },
                                        { who: "Spouse / partner", extra: "+50% (≈ €1,840/month more)" },
                                        { who: "Each dependent child", extra: "+30% (≈ €1,104/month more)" },
                                        { who: "Couple with one child", extra: "≈ €6,624/month combined" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.who}</td>
                                            <td className="px-4 py-3 text-blue-700 font-semibold border border-gray-200">{row.extra}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">Proof of Savings</h3>
                        <p className="mb-6">
                            In addition to monthly income, you will need to show a bank statement with at least <strong>€11,040 in savings</strong> (equivalent to 12 months of minimum wage). This reassures Portuguese authorities that you can support yourself even between contracts.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">Full D8 Digital Nomad Visa Document Checklist</h3>
                        <div className="space-y-2 mb-8">
                            {[
                                "Valid passport (at least 6 months beyond your intended stay)",
                                "Completed national visa application form",
                                "Proof of remote income — employment contracts, payslips, invoices, or client agreements",
                                "Bank statements showing the required savings balance",
                                "Proof of accommodation in Portugal (signed lease or property title deed with your name, address, and dates)",
                                "Health insurance valid in Portugal",
                                "Criminal record certificate from your home country (apostilled)",
                                "A cover letter explaining your remote work situation and why you are choosing Portugal",
                                "Passport-sized photos",
                                "Visa application fee payment",
                            ].map((doc, i) => (
                                <div key={i} className="flex gap-3 items-start text-sm bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                                    <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <span className="text-gray-700">{doc}</span>
                                </div>
                            ))}
                        </div>

                        {/* How to Apply */}
                        <h2 id="how-to-apply" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">How to Apply for the Digital Nomad Visa Portugal</h2>
                        <p className="mb-4 text-sm text-gray-700">
                            The digital nomad visa Portugal application process has two phases: applying at the consulate in your home country, then completing your residence permit in Portugal.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Step 1 — Gather Your Documents",
                                    detail: "Start at least 2–3 months before your target departure date. Many documents (especially criminal background checks) take time to obtain and apostille. Organise everything into clear folders — consulates appreciate a tidy, well-labelled application."
                                },
                                {
                                    title: "Step 2 — Book a Consulate Appointment",
                                    detail: "Apply at the Portuguese consulate or embassy in your country of citizenship or legal residence. Appointment availability varies widely — some consulates have slots within weeks, others are booked out for months. Book as early as possible."
                                },
                                {
                                    title: "Step 3 — Submit Your Application",
                                    detail: "Attend your appointment, submit your documents, pay the visa fee, and provide biometrics if required. The official processing time is 60 business days, though real-world timelines often run longer. Budget for 90–120 days to be safe."
                                },
                                {
                                    title: "Step 4 — Enter Portugal",
                                    detail: "Once your D8 visa is approved, you have a window to enter Portugal (typically 120 days). Your initial entry visa allows you to stay while you complete the residency permit process in-country."
                                },
                                {
                                    title: "Step 5 — Appointment with AIMA",
                                    detail: "After arriving, you will schedule an appointment with AIMA (the Portuguese immigration authority, formerly SEF) to submit your biometric data and formally apply for your residence permit. AIMA typically issues the permit within 2–12 weeks after your appointment."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">{i + 1}</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                                        <p className="text-gray-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 text-sm text-amber-800">
                            <strong>Total Timeline:</strong> From first document to residence card in hand, expect the full process to take <strong>4–7 months</strong>. Plan your life accordingly — do not hand in notice on your apartment or book one-way flights until your visa is approved.
                        </div>

                        {/* Costs */}
                        <h2 id="costs" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">D8 Digital Nomad Visa Costs</h2>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Fee</th>
                                        <th className="px-4 py-3 text-left font-semibold">Approx. Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { fee: "Visa application fee", cost: "€90" },
                                        { fee: "Residence permit (AIMA)", cost: "€320" },
                                        { fee: "Document apostilles", cost: "€30–€150 (varies by country)" },
                                        { fee: "Health insurance (annual)", cost: "€500–€1,500" },
                                        { fee: "Legal / immigration assistance", cost: "€500–€2,000 (optional but recommended)" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.fee}</td>
                                            <td className="px-4 py-3 text-blue-700 font-semibold border border-gray-200">{row.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-8 text-sm text-gray-600 italic">
                            The direct government fees are modest. Most costs come from document preparation, health insurance, and — if you use an immigration lawyer or service — professional support.
                        </p>

                        {/* D8 vs D7 */}
                        <h2 id="d8-vs-d7" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Digital Nomad Visa Portugal vs. D7 Visa: What's the Difference?</h2>
                        <p className="mb-4 text-sm text-gray-700">A common question: should you get the digital nomad visa Portugal (D8) or the D7 passive income visa?</p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold"></th>
                                        <th className="px-4 py-3 text-left font-semibold">Digital Nomad Visa D8</th>
                                        <th className="px-4 py-3 text-left font-semibold">D7 Passive Income Visa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: "Best for", d8: "Remote employees, freelancers, online business owners", d7: "Retirees, investors, those with passive income" },
                                        { feature: "Income type", d8: "Active remote work income", d7: "Passive income (pensions, dividends, rental income)" },
                                        { feature: "Minimum income", d8: "€3,680/month", d7: "~€920/month" },
                                        { feature: "Work allowed", d8: "Yes, for foreign clients", d7: "Generally not (active work)" },
                                        { feature: "Path to residency", d8: "Yes", d7: "Yes" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-semibold text-gray-900 border border-gray-200">{row.feature}</td>
                                            <td className="px-4 py-3 text-blue-700 font-medium border border-gray-200 bg-blue-50">{row.d8}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.d7}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
                            If you are actively working remotely, the digital nomad visa Portugal (D8) is the right fit. The D7 is better suited to retirees or those living off investments.
                        </div>

                        {/* Tax / IFICI */}
                        <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Tax in Portugal as a Digital Nomad: IFICI (NHR 2.0)</h2>
                        <p className="mb-4">
                            Portugal's original Non-Habitual Resident (NHR) tax regime — which gave a flat 20% income tax rate for 10 years — ended for new applicants after March 2025. In its place, Portugal introduced the <strong>IFICI regime</strong> (also called NHR 2.0). Here is what digital nomads need to know:
                        </p>
                        <div className="space-y-3 mb-6">
                            {[
                                { point: "Flat 20% tax rate on qualifying Portuguese-sourced income for up to 10 years", highlight: true },
                                { point: "Most foreign-sourced income remains exempt from Portuguese tax", highlight: false },
                                { point: "Eligibility is now profession-dependent, not just residency-based", highlight: false },
                                { point: "Designed for professionals in high-value sectors: technology, research, engineering, innovation, and consulting", highlight: false },
                                { point: "Pension income is excluded from benefits — Portugal is now targeting active professionals, not retirees", highlight: false },
                            ].map((item, i) => (
                                <div key={i} className={`flex gap-3 items-start text-sm rounded-xl px-4 py-3 border ${item.highlight ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.highlight ? 'text-green-600' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                    <span className={item.highlight ? 'text-green-800 font-medium' : 'text-gray-700'}>{item.point}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 text-sm text-amber-800">
                            Many digital nomads in tech, software, consulting, and digital services will qualify for IFICI. If your work falls into an eligible category, the tax advantages of the digital nomad visa Portugal provides remain very attractive. <strong>Speak to a Portuguese tax advisor to confirm your eligibility before you arrive.</strong>
                        </div>

                        {/* Why Apply */}
                        <h2 id="why-apply" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why Apply for the Digital Nomad Visa Portugal? The Case for the D8</h2>
                        <p className="mb-4">Portugal consistently ranks among the best countries in the world for digital nomads — and for good reason:</p>
                        <div className="space-y-3 mb-8">
                            {[
                                { title: "Cost of living", detail: "Significantly lower than Western Europe and the US, especially outside Lisbon." },
                                { title: "English is widely spoken", detail: "Particularly in cities and among younger generations." },
                                { title: "Safety", detail: "Portugal regularly ranks in the top 5 of the Global Peace Index." },
                                { title: "Time zone", detail: "WET/WEST is compatible with both European and East Coast US working hours." },
                                { title: "Infrastructure", detail: "Fast internet, co-working spaces, and a well-developed nomad community." },
                                { title: "Path to citizenship", detail: "After 5 years of legal residency, you can apply for Portuguese citizenship — and an EU passport." },
                                { title: "Quality of life", detail: "Food, climate, culture, beaches, and people consistently win over new arrivals." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <div>
                                        <span className="font-semibold text-gray-900 text-sm">{item.title}</span>
                                        <span className="text-gray-600 text-sm"> — {item.detail}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Who It's NOT For */}
                        <h2 id="not-for" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Who the Digital Nomad Visa Portugal Is NOT For</h2>
                        <p className="mb-4 text-sm text-gray-700">The D8 visa is a strong option, but it is not for everyone:</p>
                        <div className="space-y-3 mb-8">
                            {[
                                { point: "Income below €3,680/month", detail: "You will not meet the threshold — consider building your income first or looking at other countries." },
                                { point: "You work for a Portuguese employer", detail: "The D8 does not apply — you would need a standard work visa." },
                                { point: "Maximum tax efficiency without IFICI qualification", detail: "Portugal may not be the cheapest tax base." },
                                { point: "You need a quick decision", detail: "The 4–7 month process requires advance planning." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm">
                                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    <div>
                                        <span className="font-semibold text-red-800">{item.point}:</span>
                                        <span className="text-red-700"> {item.detail}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Is It Worth It */}
                        <h2 id="worth-it" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Is the Digital Nomad Visa Portugal Worth It?</h2>
                        <p className="mb-4">
                            For remote workers who meet the income requirement and want a stable European base, the answer is almost always yes. Portugal offers legal certainty, a clear path to permanent residency, a welcoming expat community, and a lifestyle that is genuinely hard to beat.
                        </p>
                        <p className="mb-4">
                            The digital nomad visa Portugal offers is not the fastest or cheapest process in the world — but it opens the door to one of Europe's most liveable countries, with the possibility of an EU passport at the end.
                        </p>
                        <div className="bg-blue-700 text-white rounded-xl p-5 mb-10">
                            <p className="font-semibold mb-1">If you are serious about making Portugal your base, the digital nomad visa Portugal (D8) is the right tool for the job.</p>
                            <p className="text-blue-100 text-sm">Legal certainty, Schengen access, IFICI tax benefits, and a 5-year runway to an EU passport — all from a €90 visa application.</p>
                        </div>

                        {/* CTA */}
                        <div className="bg-blue-700 rounded-2xl p-8 text-white text-center mt-10">
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Ready to Apply for the Digital Nomad Visa Portugal?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                Navigating the D8 visa process alone is doable — but having an expert in your corner makes it significantly faster, cleaner, and less stressful. The VisaRapid team specialises in Portugal visa applications and can guide you from document prep to AIMA appointment.
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
                                    { href: "#what-is", label: "What Is the D8 Visa?" },
                                    { href: "#who", label: "Who Is It For?" },
                                    { href: "#requirements", label: "Requirements 2026" },
                                    { href: "#how-to-apply", label: "How to Apply" },
                                    { href: "#costs", label: "Costs & Fees" },
                                    { href: "#d8-vs-d7", label: "D8 vs D7 Visa" },
                                    { href: "#taxes", label: "Tax & IFICI (NHR 2.0)" },
                                    { href: "#why-apply", label: "Why Choose Portugal?" },
                                    { href: "#not-for", label: "Who It Is NOT For" },
                                    { href: "#worth-it", label: "Is It Worth It?" },
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
                    <RelatedArticles currentPath="/blogs/digital-nomad-visa-portugal" />
                </div>
            </div>
        </div>
    )
}

export default DigitalNomadVisaPortugal
