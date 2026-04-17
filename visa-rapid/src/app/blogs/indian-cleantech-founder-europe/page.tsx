import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'How an Indian Cleantech Founder Transformed His Business by Moving to Europe | Visa Rapid',
    description: 'A real case study of how an Indian climate tech founder used Portugal\'s D2 Entrepreneur Visa to unlock EU funding, partnerships, and markets worth millions — while keeping his factories in India.',
}

const IndianCleantechFounderEurope = () => {
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
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Case Study</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-open-sans">
                        How an Indian Cleantech Founder Transformed His Business by Moving to Europe
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on April 10, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>20 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog27.jpg"
                        alt="Indian cleantech founder building European business from Lisbon, Portugal"
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
                            Vikram had been building climate tech products in India for nine years. Not software. Physical products. Storage tanks for liquid and compressed gas. Modular water treatment units for disaster relief. Solar-powered cold chain systems for farmers in Maharashtra and Rajasthan. Biogas micro plants for rural communities.
                        </p>
                        <p className="mb-4">
                            The kind of work that actually matters — but rarely gets the attention that consumer apps and fintech startups get.
                        </p>
                        <p className="mb-4">
                            By 2024, his company had 85 employees across two facilities in Pune and Ahmedabad. Revenue was strong by Indian standards — roughly ₹28 crore ($3.3 million). He was supplying to state governments, two UN agencies, and a handful of European NGOs using his disaster management equipment in East Africa.
                        </p>
                        <p className="mb-4">
                            But Vikram had a problem. The markets he needed to reach next, the funding he needed to scale, and the partnerships that would take his products from regional to global were all in Europe. And trying to access them from Pune was like trying to join a conversation happening in another room.
                        </p>
                        <p className="mb-8">
                            This is what happened when he walked into that room.
                        </p>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-800">
                            <strong>Note:</strong> The name and certain details have been changed to protect client privacy. The visa route, business structure, and timeline reflect a real case handled by VisaRapid in 2024–2025.
                        </div>

                        {/* What Vikram Had Built */}
                        <h2 id="what-he-built" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What Vikram Had Built</h2>
                        <p className="mb-4">
                            Vikram's company sat across multiple sectors that overlap in the climate and infrastructure space. The product lines were:
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Liquid and gas storage solutions",
                                    detail: "Industrial-grade tanks for LPG, LNG, compressed natural gas, and liquid oxygen. His Pune facility manufactured these for Indian oil and gas companies and had started exporting to East Africa and Southeast Asia."
                                },
                                {
                                    title: "Agritech cold chain systems",
                                    detail: "Solar-powered cold storage units designed for Indian farmers who lose 30–40% of their produce to spoilage. These units were modular, off-grid capable, and designed to work in 45-degree heat."
                                },
                                {
                                    title: "Disaster management equipment",
                                    detail: "Portable water purification systems, mobile sanitation units, and emergency shelter components. Two UN agencies had purchased these for humanitarian operations in Somalia and Mozambique."
                                },
                                {
                                    title: "Renewable energy products",
                                    detail: "Biogas micro plants for rural communities and small-scale solar thermal systems for agricultural processing — crop drying, water heating for dairy operations."
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mb-8">
                            On paper, this was a climate tech company doing meaningful work across multiple verticals. In practice, it was an Indian manufacturing business that had hit a ceiling.
                        </p>

                        {/* Why Europe */}
                        <h2 id="why-europe" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Why Europe Made Business Sense</h2>
                        <p className="mb-4">Three things were pushing Vikram toward Europe.</p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    label: "The customers were there",
                                    text: "His disaster management equipment was already being purchased by European NGOs and UN agencies headquartered in Geneva, Rome, and Copenhagen. But procurement decisions happen in person. Being 12 hours away by flight and 5.5 hours ahead in time zone meant he was always slightly out of the loop."
                                },
                                {
                                    label: "The funding was there",
                                    text: "The EU Green Deal had created a massive funding ecosystem for exactly the kind of technology Vikram was building. Horizon Europe, the Innovation Fund, and the European Innovation Council were writing cheques of €10M–€30M for cleantech scale-ups. None of this was accessible to a company headquartered in Pune."
                                },
                                {
                                    label: "The regulatory advantage was there",
                                    text: "EU Taxonomy regulations were forcing companies to meet green standards. The Common Agricultural Policy was pushing farms toward sustainable technology. European water treatment standards were opening doors for his purification systems."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-blue-50 border border-blue-100 rounded-xl p-5">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</div>
                                    <div>
                                        <p className="font-semibold text-blue-900 mb-1">{item.label}</p>
                                        <p className="text-gray-700 text-sm">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mb-8">
                            The business case was not about leaving India. It was about being physically present where the money, the customers, and the regulatory tailwinds were strongest.
                        </p>

                        {/* Choosing the Right Country */}
                        <h2 id="choosing-country" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Choosing the Right Country</h2>
                        <p className="mb-4">Vikram looked at four countries seriously.</p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Country</th>
                                        <th className="px-4 py-3 text-left font-semibold">Pros</th>
                                        <th className="px-4 py-3 text-left font-semibold">Cons</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { country: "Germany", pros: "Strongest industrial ecosystem, deepest cleantech market", cons: "Dense bureaucracy, slower setup, language barrier" },
                                        { country: "Netherlands", pros: "Excellent logistics, English-speaking business environment", cons: "High costs, funding skewed toward software vs hardware" },
                                        { country: "Estonia", pros: "Fast digital setup", cons: "Too small for industrial partnerships and supply chains" },
                                        { country: "Portugal ✓", pros: "Accessible D2 Visa, low setup costs, EU funding access, path to citizenship, African/LatAm market access", cons: "Slower AIMA processing" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className={`px-4 py-3 font-medium border border-gray-200 ${row.country.includes('✓') ? 'text-green-700' : 'text-gray-900'}`}>{row.country}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.pros}</td>
                                            <td className="px-4 py-3 text-gray-600 border border-gray-200">{row.cons}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-4">
                            Portugal was the answer. Not the obvious one for a cleantech hardware company — but the right one.
                        </p>
                        <p className="mb-8">
                            The plan was not to move manufacturing to Portugal. It was to establish a European headquarters that could handle sales, partnerships, EU funding applications, and regulatory compliance while the factories in Pune and Ahmedabad continued production.
                        </p>

                        {/* The Visa Route */}
                        <h2 id="visa-route" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The Visa Route That Worked</h2>
                        <p className="mb-4">
                            Vikram applied for the <strong>Portugal D2 Entrepreneur Visa</strong>. His profile was strong: nine years of company history, ₹28 crore in revenue, existing European clients, and a clear business plan for European expansion.
                        </p>
                        <p className="mb-4">
                            The business plan we helped him develop focused on establishing a Portuguese <em>Lda.</em> (Limitada) that would serve as the EU sales and partnership hub for his Indian manufacturing operations — projecting first-year European revenue of €400,000, scaling to €1.2 million by year three.
                        </p>
                        <div className="space-y-3 mb-8">
                            {[
                                { phase: "Document preparation", time: "~7 weeks", detail: "Indian documents (company registration, audited accounts, criminal background check) needed certified Portuguese translation and apostille." },
                                { phase: "Consulate appointment (Mumbai)", time: "8 weeks", detail: "Interview focused on existing European client relationships and planned Portuguese hiring timeline. Consulate asked specifically about EU funding programmes he intended to apply for." },
                                { phase: "Visa approval", time: "9 weeks", detail: "He flew to Lisbon in January 2025." },
                                { phase: "AIMA residence permit", time: "5 months for appointment + 3 weeks for permit", detail: "2-year residence permit issued." },
                                { phase: "Total timeline", time: "~14 months", detail: "From first consultation to residence permit in hand." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start border-l-4 border-blue-500 pl-4 py-2">
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900 text-sm">{item.phase}</p>
                                        <p className="text-blue-700 text-xs font-medium mb-1">{item.time}</p>
                                        <p className="text-gray-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Setting Up the Entity */}
                        <h2 id="setup" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Setting Up the European Entity</h2>
                        <p className="mb-4">Once in Portugal, Vikram moved fast.</p>
                        <div className="space-y-3 mb-8">
                            {[
                                { item: "Company registration", detail: "Portuguese Lda. incorporated through a local lawyer in ~3 weeks. Cost: ~€2,000 in legal fees. Share capital deposit: €5,000." },
                                { item: "Bank account", detail: "Opened with Millennium BCP. Took nearly 4 weeks — compliance team needed to verify the Indian parent company's financials. Audited accounts in English helped significantly." },
                                { item: "Office", detail: "Coworking space in Parque das Nações (near the old Expo site) — a hub for cleantech companies. Monthly cost: €450 for a dedicated desk and meeting room access." },
                                { item: "First hire", detail: "A Portuguese business development manager with EU procurement and sustainability experience. Salary: ~€2,800/month. She understood EU institutional procurement — entirely different from Indian government tenders." },
                                { item: "NIF and tax registration", detail: "Completed before arrival through a fiscal representative. Cost: €200." },
                                { item: "IFICI tax registration", detail: "Applied within 90 days of becoming a Portuguese tax resident. Qualified as a highly qualified professional in a strategic sector (renewable energy), giving him the flat 20% tax rate on Portuguese-sourced income for 10 years." },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.item}</p>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* EU Funding */}
                        <h2 id="eu-funding" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Unlocking EU Funding and Grants</h2>
                        <p className="mb-4">This is where the move paid for itself.</p>
                        <p className="mb-4">Within the first year of having a Portuguese entity, Vikram's company received:</p>
                        <div className="space-y-4 mb-6">
                            {[
                                {
                                    amount: "€180,000",
                                    label: "Horizon Europe consortium grant",
                                    detail: "Partner in a 4-country project developing modular water treatment systems for climate disaster response. This would have been impossible from India — EU-funded consortiums require at least one EU-based entity."
                                },
                                {
                                    amount: "€2.5M",
                                    label: "EIC Accelerator application (pending)",
                                    detail: "For his solar cold chain technology, targeting deployment in Southern Europe and North Africa. Decision pending — but the application was only possible because of the EU entity."
                                },
                                {
                                    amount: "€75,000",
                                    label: "Portuguese national grants",
                                    detail: "Via IAPMEI and Portugal 2030, for innovation in sustainable agriculture technology."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-green-50 border border-green-100 rounded-xl p-5 items-start">
                                    <div className="flex-shrink-0 text-2xl font-bold text-green-700 min-w-[80px]">{item.amount}</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                                        <p className="text-gray-700 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            He was also invited to the <strong>Cleantech for Europe</strong> network — connecting him to VCs, corporate partners, and policy makers across the EU. He met the head of procurement for a major European disaster relief agency at a network event in Brussels, just 6 months after arriving in Lisbon.
                        </p>
                        <div className="bg-blue-700 text-white rounded-xl p-6 mb-8">
                            <p className="text-lg font-semibold mb-1">None of this was available from Pune.</p>
                            <p className="text-blue-100 text-sm">EU funding programmes require EU-based entities. EU procurement favours EU-based suppliers. EU networks operate through physical presence and relationship. Being there changed everything.</p>
                        </div>

                        {/* What Changed */}
                        <h2 id="results" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">What Changed After the Move</h2>
                        <p className="mb-6">Eighteen months after arriving in Portugal, the numbers told the story.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                            {[
                                { stat: "€320,000", label: "European revenue, year 1" },
                                { stat: "€650,000", label: "Projected year 2 revenue" },
                                { stat: "€255,000", label: "EU grants secured" },
                                { stat: "€2.5M", label: "EIC application pending" },
                                { stat: "3", label: "New hires in Lisbon" },
                                { stat: "85", label: "Jobs still in India" },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-blue-700 mb-1">{item.stat}</p>
                                    <p className="text-gray-600 text-xs">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            New partnerships included a distribution agreement with a German industrial equipment company for his gas storage products in the EU market, and a pilot project with a Portuguese agricultural cooperative testing his solar cold chain units on Alentejo wine and olive farms.
                        </p>
                        <p className="mb-4">
                            His Indian operations continued. Vikram flew back every 6–8 weeks. The Indian revenue actually grew — the European credibility strengthened his position with Indian government clients too. Being "internationally present" changed how domestic buyers perceived the company.
                        </p>
                        <p className="mb-8">
                            His wife and two children (ages 8 and 11) joined him in Lisbon 4 months after his permit arrived. The children enrolled in an international school. His wife, a sustainability consultant, started building her own European client base.
                        </p>

                        {/* Challenges */}
                        <h2 id="challenges" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">The Challenges Nobody Warned Him About</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Banking was harder than expected",
                                    text: "European banks are cautious about companies with Indian parent entities. Compliance checks took weeks. Moving money between the Indian and Portuguese entities required careful documentation to satisfy both Indian RBI regulations and Portuguese banking compliance."
                                },
                                {
                                    title: "EU procurement cycles are slow",
                                    text: "Indian government tenders are slow. EU institutional procurement is slower. A contract that takes 3 months to close in India can take 9–12 months through EU channels. Cash flow planning needed to account for this."
                                },
                                {
                                    title: "Cultural adjustment in business",
                                    text: "Indian business relationships run on personal warmth and flexibility. Portuguese business culture is warmer than Northern Europe but still more formal than India. German partners expected precision in timelines and documentation that required Vikram to change how his Indian team communicated."
                                },
                                {
                                    title: "The AIMA wait",
                                    text: "Five months between submitting his residence permit application and getting an appointment. During this time he could live and work normally but could not easily travel outside the Schengen Area and return without complications."
                                },
                                {
                                    title: "Missing India",
                                    text: "He said it honestly. The food, the festivals, the chaos, the family Sunday lunches in Pune. Lisbon is wonderful. But it is not home. \"You build a life here. But you carry the other one with you.\""
                                },
                            ].map((item, i) => (
                                <div key={i} className="border-l-4 border-amber-400 pl-5 py-2">
                                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                                    <p className="text-gray-700 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Lessons */}
                        <h2 id="lessons" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Lessons for Indian Founders in Climate Tech</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    num: "01",
                                    title: "Europe's cleantech market is not optional for serious scale",
                                    text: "If you are building climate technology products — storage solutions, renewable energy systems, agritech, disaster management equipment — Europe is the largest addressable market with the strongest regulatory tailwinds. You cannot access the EU Green Deal ecosystem from India."
                                },
                                {
                                    num: "02",
                                    title: "A European entity unlocks funding you cannot get otherwise",
                                    text: "Horizon Europe, the EIC Accelerator, InvestEU, national innovation grants — all require an EU-based entity. Setting up a Portuguese or German company is not just about sales. It is about eligibility for capital that does not exist elsewhere."
                                },
                                {
                                    num: "03",
                                    title: "Portugal's D2 Visa is built for founders like you",
                                    text: "If you have an established Indian company with revenue, existing European clients, and a credible European expansion plan, the D2 is the most accessible route. The business plan needs to be real but the threshold is achievable for any serious founder."
                                },
                                {
                                    num: "04",
                                    title: "Do not move manufacturing — move the brain",
                                    text: "Keep your factories in India where costs are lower. Move your sales, partnerships, grants, and regulatory compliance to Europe where the market is. This is not relocation. It is strategic positioning."
                                },
                                {
                                    num: "05",
                                    title: "Start 12–18 months before you need to be there",
                                    text: "Document preparation, consulate appointments, AIMA processing, company registration, and bank setup all take time. Indian founders who wait until they 'need' to be in Europe are already late. Start while your Indian business is running well."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <span className="text-3xl font-bold text-gray-200 flex-shrink-0">{item.num}</span>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                                        <p className="text-gray-700 text-sm">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-6 mb-4 font-open-sans">Frequently Asked Questions</h2>
                        <div className="space-y-5 mb-10">
                            {[
                                {
                                    q: "Can an Indian founder get a European visa without closing their Indian company?",
                                    a: "Absolutely. There is no requirement to close or restructure your Indian business. The Portuguese D2 Visa is about establishing a new European business activity, not replacing your existing one. Most Indian founders maintain both entities, with the European company serving as the market access and partnership hub."
                                },
                                {
                                    q: "How much does it cost to set up a European entity from India?",
                                    a: "For a Portuguese Lda., budget approximately €3,000–€5,000 for legal fees, NIF registration, share capital, and initial bank setup. Add visa costs (~€110 consulate fee + ~€170 AIMA fee), document preparation (€500–€1,000 for translations and apostilles), and health insurance (€600–€1,200/year). Total first-year setup: roughly €8,000–€15,000 — a fraction of the EU funding you become eligible for."
                                },
                                {
                                    q: "Is Portugal the right choice for a hardware or manufacturing company?",
                                    a: "Portugal works well as a European headquarters for sales, partnerships, and EU funding access. It is not the best choice for heavy manufacturing (Germany or Poland are stronger for that). But if your manufacturing stays in India and your European entity handles market-facing activities, Portugal's lower operating costs, accessible visa system, and path to EU citizenship make it an excellent base."
                                },
                                {
                                    q: "What EU funding is available for cleantech and agritech companies?",
                                    a: "The main programmes are Horizon Europe (€600 million through the Clean Industrial Deal alone), the EIC Accelerator (€10–€30 million equity investments for scale-ups), the Innovation Fund (large-scale clean tech demonstrations), and national programmes like Portugal 2030. All require an EU-based entity to apply."
                                },
                                {
                                    q: "How long before an Indian founder can get EU citizenship through this route?",
                                    a: "Five years of legal residency in Portugal. You need A2 Portuguese and a clean criminal record. Portuguese citizenship gives you an EU passport with freedom to live and work across all 27 EU member states. Portugal allows dual citizenship, so you keep your Indian OCI card too."
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
                            <h2 className="text-2xl font-bold mb-3 font-open-sans">Building Climate Tech and Thinking About Europe?</h2>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                If you are an Indian founder in cleantech, agritech, renewable energy, or industrial technology and your next stage of growth runs through Europe — the question is not whether to go. It is when and how.
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
                                    { href: "#what-he-built", label: "What Vikram Built" },
                                    { href: "#why-europe", label: "Why Europe Made Sense" },
                                    { href: "#choosing-country", label: "Choosing the Right Country" },
                                    { href: "#visa-route", label: "The Visa Route" },
                                    { href: "#setup", label: "Setting Up the Entity" },
                                    { href: "#eu-funding", label: "Unlocking EU Funding" },
                                    { href: "#results", label: "What Changed After the Move" },
                                    { href: "#challenges", label: "Challenges Nobody Warned About" },
                                    { href: "#lessons", label: "Lessons for Indian Founders" },
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
                    <RelatedArticles currentPath="/blogs/indian-cleantech-founder-europe" />
                </div>
            </div>
        </div>
    )
}

export default IndianCleantechFounderEurope
