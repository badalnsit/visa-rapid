import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Digital Nomad Visa Portugal | Visa Rapid',
    description: 'Everything you need to know about the Portugal digital nomad visa (D8) in 2026 — income requirements, documents, step-by-step application, costs, taxes, and whether it is worth it.',
    alternates: {
        canonical: 'https://www.visarapid.com/blogs/digital-nomad-d8-visa-portugal',
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">Digital Nomad Visa Portugal</h1>
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

                        <p className="mb-8 text-lg">So you want to live in Lisbon, work remotely from the Algarve, or wake up to Atlantic views while on a Zoom call. The digital nomad visa Portugal offers  officially the Portugal D8 visa  is your clearest path there. In this guide, we cover everything about the D8 visa Portugal has created for remote workers in 2026: who qualifies, what it costs, how to apply, and whether it's worth it.</p>

                        {/* What Is */}
                        <h2 id="what-is" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What Is the Digital Nomad Visa Portugal (D8)?</h2>
                        <p className="mb-4">The digital nomad visa Portugal created  known as the Portugal D8 visa  is a long-stay visa specifically designed for remote workers, freelancers, and self-employed professionals who earn their income from clients or employers outside Portugal. Launched in 2022, the D8 visa Portugal was one of the first digital nomad visas in Europe and remains one of the most sought-after in 2026.</p>
                        <p className="mb-8">Unlike a tourist visa or a short-stay permit, the digital nomad visa Portugal gives you the legal right to reside in Portugal for up to two years, with the option to renew, and eventually apply for permanent residency or citizenship. The Portugal D8 visa is not a temporary workaround. It is a genuine, government-issued residency route for location-independent professionals.</p>

                        {/* Who Is It For */}
                        <h2 id="who" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Who Is the D8 Visa Portugal For?</h2>
                        <p className="mb-4">The D8 visa Portugal is open to non-EU, non-EEA, and non-Swiss nationals who work remotely for a foreign employer or foreign clients, are self-employed freelancers or independent contractors, run an online business with clients based outside Portugal, and earn a stable, provable monthly income above the income threshold.</p>
                        <p className="mb-4">EU citizens do not need the digital nomad visa Portugal  they have freedom of movement and can live and work in Portugal without any visa. The Portugal D8 visa is specifically for non-EU nationals who need a legal framework to base themselves in Portugal long-term.</p>
                        <p className="mb-4">If your income is passive  pensions, dividends, rental income  the D7 Passive Income Visa is more appropriate than the D8 visa Portugal. The digital nomad visa Portugal is for active remote earners. When in doubt: if you invoice clients or receive a salary from abroad, the Portugal D8 visa is your route.</p>
                        
                        {/* Requirements */}
                        <h2 id="requirements" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Digital Nomad Visa Portugal Income Requirements 2026</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">Income Threshold</h3>
                        <p className="mb-4">The income requirement is the most critical element of the digital nomad visa Portugal application. To qualify for the Portugal D8 visa in 2026, you must earn a minimum of €3,680 per month  four times Portugal's national minimum wage of €920.</p>
                        <p className="mb-3 text-sm text-gray-700">This is significantly higher than the D7 threshold, reflecting the fact that the D8 visa Portugal is aimed at working professionals rather than retirees. If you are earning below this amount, focus on scaling your remote income before applying for the digital nomad visa Portugal. The Portugal D8 visa income bar exists to ensure holders can genuinely sustain themselves in Portugal without relying on local employment.</p>
                        <p className="mb-3 text-sm text-gray-700"><strong>If you are bringing family members, the income requirement scales:</strong></p>
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
                                        { who: "Spouse / partner", extra: "+50% (≈ €1,840/month more)" },
                                        { who: "Each dependent child", extra: "+30% (≈ €1,104/month more)" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.who}</td>
                                            <td className="px-4 py-3 text-blue-700 font-semibold border border-gray-200">{row.extra}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-6">A couple with one child applying for the D8 visa Portugal together would need to demonstrate roughly €6,624/month in combined income.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">Proof of Savings</h3>
                        <p className="mb-6">In addition to monthly income, the Portugal D8 visa requires a bank statement showing at least €11,040 in savings  equivalent to 12 months of minimum wage. This gives Portuguese authorities confidence that you can support yourself even between contracts. Many digital nomad visa Portugal applicants hold 15–18 months of savings to present a stronger file.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">D8 Visa Portugal Document Checklist</h3>
                        <p className="mb-6">Preparing a complete, accurate application is the single most important factor in a smooth D8 visa Portugal approval. Here is everything you need: a valid passport (at least 6 months beyond your intended stay, 2 blank pages), completed national visa application form, proof of remote income (employment contracts, payslips, invoices, or client agreements), bank statements showing the required €11,040 savings balance, proof of accommodation in Portugal (signed 12-month lease or property title deed), health insurance valid in Portugal, criminal record certificate from your home country (apostilled and translated), cover letter explaining your remote work situation and reasons for choosing Portugal, passport-sized photos, and visa application fee payment.</p>
                        <p className="mb-6">Incomplete files are the number one reason digital nomad visa Portugal applications are delayed or rejected. Get every document right before you submit.</p>

                        {/* How to Apply */}
                        <h2 id="how-to-apply" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">How to Apply for the Digital Nomad Visa Portugal</h2>
                        <p className="mb-4 text-sm text-gray-700">The digital nomad visa Portugal application runs in two phases: the consulate application in your home country, and the residence permit process after you arrive in Portugal.</p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Step 1: Gather Your Documents",
                                    detail: "Start preparing your Portugal D8 visa documents at least 2–3 months before your target departure. Criminal background checks in particular take time to obtain, apostille, and translate. Organise everything into labelled folders  a tidy, complete file signals professionalism to the consulate."
                                },
                                {
                                    title: "Step 2 : Book Your Consulate Appointment",
                                    detail: "Apply for the D8 visa Portugal at the Portuguese consulate or embassy in your country of citizenship or legal residence. Appointment availability varies widely  some consulates offer slots within weeks, others are booked months in advance. Book as early as possible and do not wait until your documents are ready before checking availability."
                                },
                                {
                                    title: "Step 3 : Submit Your Portugal D8 Visa Application",
                                    detail: "Attend your appointment, submit all documents, pay the visa fee (~€90), and provide biometrics if required. The official processing time for the digital nomad visa Portugal is 60 business days  but real-world timelines often run to 90–120 days. Plan accordingly."
                                },
                                {
                                    title: "Step 4 : Enter Portugal on Your D8 Visa",
                                    detail: "Once your Portugal D8 visa is approved, you have a 120-day window to enter Portugal. Your entry visa allows you to stay while you complete the in-country residency process. Do not book one-way flights or hand in notice on your accommodation until the D8 visa Portugal stamp is in your passport."
                                },
                                {
                                    title: "Step 5 : Book Your AIMA Appointment",
                                    detail: "After arriving in Portugal, schedule your appointment with AIMA (Agência para a Integração, Migrações e Asilo, formerly SEF). This is the step that converts your digital nomad visa Portugal entry stamp into a full two-year residence permit. AIMA typically issues the permit within 2–12 weeks after your appointment."
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
                            <strong>Total Timeline:</strong> From first document to residence permit in hand, budget 4–7 months for the full D8 visa Portugal process. It is not fast  but it is predictable if you plan carefully.
                        </div>

                        {/* Costs */}
                        <h2 id="costs" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Portugal D8 Visa Costs</h2>
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
                                        { fee: "Consulate visa application fee", cost: "€90" },
                                        { fee: "AIMA residence permit", cost: "€320" },
                                        { fee: "Document apostilles", cost: "€30–€150" },
                                        { fee: "Health insurance (annual)", cost: "€500–€1,500" },
                                        { fee: "Legal / immigration assistance", cost: "€500–€2,000 (optional)" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-4 py-3 font-medium text-gray-900 border border-gray-200">{row.fee}</td>
                                            <td className="px-4 py-3 text-blue-700 font-semibold border border-gray-200">{row.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-8 text-sm text-gray-600 italic">The government fees for the Portugal D8 visa are modest. Most of the cost comes from document preparation, health insurance, and professional support. For most digital nomad visa Portugal applicants, the total first-year outlay is €1,500–€4,500 depending on location and whether you use an immigration adviser.</p>

                        {/* D8 vs D7 */}
                        <h2 id="d8-vs-d7" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Digital Nomad Visa Portugal vs. D7 Visa: Which Is Right for You?</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold"></th>
                                        <th className="px-4 py-3 text-left font-semibold">Digital Nomad Visa Portugal (D8)</th>
                                        <th className="px-4 py-3 text-left font-semibold">D7 Passive Income Visa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: "Best for", d8: "Remote employees, freelancers, online business owners", d7: "Retirees, investors, passive income earners" },
                                        { feature: "Income type", d8: "Active remote work income", d7: "Passive income (pensions, dividends, rental income)" },
                                        { feature: "Minimum income", d8: "€3,680/month", d7: "~€920/month" },
                                        { feature: "Work allowed", d8: "Yes, for foreign clients", d7: "Generally not (active work)" },
                                        { feature: "Path to residency", d8: "Yes", d7: "Yes" },
                                        { feature: "Citizenship timeline", d8: "5 years", d7: "5 years" },
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
                           If you are actively working remotely, the D8 visa Portugal is your route. If your income is passive  pension, rental, dividends  the D7 is more appropriate. The digital nomad visa Portugal (D8) and the D7 serve different profiles entirely. Choosing the wrong one is one of the most common and costly mistakes applicants make.
                        </div>

                        {/* Tax / IFICI */}
                        <h2 id="taxes" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Tax in Portugal on the D8 Visa Portugal: IFICI (NHR 2.0)</h2>
                        <p className="mb-4">Portugal's original Non-Habitual Resident (NHR) tax regime ended for new applicants after March 2025. In its place is the IFICI regime (NHR 2.0)  and it is highly relevant for digital nomad visa Portugal holders.</p>
                        <p className="mb-4">Here is what D8 visa Portugal holders need to know about IFICI: a flat 20% tax rate on qualifying Portuguese-sourced income for up to 10 years, most foreign-sourced income is exempt from Portuguese tax, eligibility is profession-dependent (focused on technology, research, engineering, innovation, and consulting), and pension income is excluded  IFICI targets active professionals, making it a natural fit for Portugal D8 visa holders.</p>
                        <p className="mb-4">Many digital nomad visa Portugal holders in tech, software development, consulting, design, and digital marketing will qualify for IFICI. If your work falls into an eligible high-value sector, the tax advantages of the D8 visa Portugal are genuinely compelling. The Portugal D8 visa combined with IFICI is one of the most tax-efficient setups available to non-EU remote workers anywhere in Europe. Speak to a Portuguese tax adviser before you arrive to confirm your eligibility and structure your affairs correctly.</p>
                        
                        {/* Why Apply */}
                        <h2 id="why-apply" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why Choose the Digital Nomad Visa Portugal Over Other Countries?</h2>
                        <p className="mb-4">Portugal consistently ranks as one of the world's top destinations for remote workers  and the D8 visa Portugal reflects that status. Here is why so many nomads choose the digital nomad visa Portugal over alternatives in Spain, Georgia, Thailand, or elsewhere.</p>
                        <p className="mb-4">Cost of living is significantly lower than Western Europe and the US, especially outside Lisbon. English is widely spoken, particularly in cities and among younger generations. Safety is outstanding  Portugal ranks in the top 5 of the Global Peace Index year after year. The WET/WEST time zone is compatible with European and East Coast US working hours. Lisbon and Porto have thriving, well-connected co-working communities. Five years of legal residency on the Portugal D8 visa leads to a Portuguese passport and full EU citizenship. Portugal allows you to keep your existing passport alongside your new one. Food, climate, culture, beaches, and people consistently win over new arrivals.</p>
                        <p className="mb-4">No other country in Europe offers the combination of accessibility, lifestyle, and long-term upside that the digital nomad visa Portugal delivers. The Portugal D8 visa is not just a visa  it is a five-year runway to an EU passport and one of the world's most coveted lifestyles.</p>
                        
                        {/* Who It's NOT For */}
                        <h2 id="not-for" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Who the D8 Visa Portugal Is NOT For</h2>
                        <p className="mb-4 text-sm text-gray-700">The Portugal D8 visa is a strong option  but not for everyone. If your income is below €3,680/month, you will not meet the threshold  build your remote income first. If you work for a Portuguese employer, the D8 visa Portugal does not apply  you need a standard work visa. If your income is passive (pensions, dividends, rental), the D7 is a better fit than the digital nomad visa Portugal. If you need a fast decision, the 4–7 month D8 visa Portugal timeline requires serious advance planning. If you want maximum tax efficiency but do not qualify for IFICI, Portugal may not be the cheapest base.</p>
                        
                        {/* Is It Worth It */}
                        <h2 id="worth-it" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Is the Digital Nomad Visa Portugal Worth It?</h2>
                        <p className="mb-4">For remote workers who meet the income threshold and want a stable, legal European base, the answer is almost always yes. The digital nomad visa Portugal offers legal certainty, a clear residency path, a welcoming international community, and a lifestyle that consistently converts first-time visitors into long-term residents.</p>
                        <p className="mb-4">The Portugal D8 visa is not the fastest or cheapest visa to obtain  but it opens the door to one of Europe's most liveable countries, with the possibility of an EU passport waiting at the end of five years.</p>
                        <p className="mb-4">If you are serious about making Portugal your base, the D8 visa Portugal is the right tool for the job  and the Portugal D8 visa is the most direct, legally solid way to get there.</p>
                        
                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions: Digital Nomad Visa Portugal</h2>
                        <div className="space-y-5 mb-10">
                            {[
                                {
                                    q: "What is the income requirement for the digital nomad visa Portugal?",
                                    a: "To qualify for the digital nomad visa Portugal in 2026, you need to earn a minimum of €3,680 per month — four times Portugal's national minimum wage. This applies to the main applicant. If you are bringing a spouse, the threshold increases by 50%, and each dependent child adds 30% more. The Portugal D8 visa income requirement is higher than the D7 because it targets active working professionals rather than retirees or passive income earners."
                                },
                                {
                                    q: "How long does the digital nomad visa Portugal take to process?",
                                    a: "From gathering your first documents to receiving your residence permit, the full D8 visa Portugal process typically takes 4–7 months. Consulate processing alone takes 60–120 days. The digital nomad visa Portugal is not a fast-track option  but the timeline is predictable if you plan ahead and submit a complete file. Book your consulate appointment as early as possible, as slots fill up quickly at many Portuguese embassies."
                                },
                                {
                                    q: "Can I bring my family on the Portugal D8 visa?",
                                    a: "Yes. The Portugal D8 visa allows family reunification. You can include your spouse or partner and dependent children in your application. Each additional family member increases the income threshold — 50% more for a spouse and 30% more per child. The digital nomad visa Portugal is a genuine long-term residency option for families, not just solo remote workers."
                                },
                                {
                                    q: "Does the digital nomad visa Portugal lead to citizenship?",
                                    a: "Yes. Five years of legal residency on the digital nomad visa Portugal qualifies you to apply for Portuguese citizenship and a Portuguese passport. Portugal permits dual citizenship, so you keep your existing passport alongside your new EU one. The D8 visa Portugal is not just a work permit  it is a five-year runway to one of the world's most powerful travel documents and full freedom of movement across all 27 EU member states."
                                },
                                {
                                    q: "What is the difference between the digital nomad visa Portugal and the D7 visa?",
                                    a: "The digital nomad visa Portugal (D8) is for people with active remote income  salaries from foreign employers, freelance invoices, or online business revenue. The D7 is for people with passive income  pensions, dividends, rental income, or investment returns. The income thresholds are very different: the D8 visa Portugal requires €3,680/month, while the D7 requires just €920/month. The key question is whether your income requires you to actively work for it. If yes, the Portugal D8 visa is your route."
                                },
                                {
                                    q: "Can I use the digital nomad visa Portugal if I am a freelancer?",
                                    a: "Yes. Freelancers are one of the primary target profiles for the digital nomad visa Portugal. You do not need to be employed by a foreign company  being self-employed and invoicing clients outside Portugal is sufficient. You will need to provide client contracts, invoices, and bank statements showing consistent income above the €3,680/month threshold. The D8 visa Portugal was specifically designed to accommodate location-independent professionals, including freelancers and independent contractors."
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
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Ready to Apply for the Digital Nomad Visa Portugal?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">Navigating the D8 visa Portugal process alone is doable  but having an expert in your corner makes it significantly faster, cleaner, and less stressful. The VisaRapid team specialises in Portugal D8 visa applications and handles digital nomad visa Portugal cases every day. We can guide you from document preparation all the way to your AIMA appointment and residence permit. The Portugal D8 visa process is straightforward when you have the right support.</p>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">Get in touch with the VisaRapid team:</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="https://calendly.com/nikita-visarapid/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white !text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Book a free 30-minute consultation on Calendly
                                </a>
                                <a
                                    href="https://wa.me/919910578099"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.571a.5.5 0 00.606.61l5.885-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a10 10 0 01-5.195-1.449l-.372-.22-3.862 1.013 1.033-3.772-.242-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                                    Chat with us on WhatsApp
                                </a>
                            </div><br />
                            <p>📧 Email us at <a href="mailto:info@visarapid.com" className="text-blue-600 hover:underline">info@visarapid.com</a> &nbsp; | &nbsp; 🔗 Connect with <a href="https://www.linkedin.com/in/nikita-20062a93/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nikita on LinkedIn</a></p>
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
                    <RelatedArticles currentPath="/blogs/digital-nomad-d8-visa-portugal" />
                </div>
            </div>
        </div>
    )
}

export default DigitalNomadVisaPortugal
