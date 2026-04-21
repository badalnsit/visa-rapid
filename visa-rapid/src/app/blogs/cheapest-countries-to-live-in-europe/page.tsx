import Link from 'next/link'
import RelatedArticles from '../../../components/RelatedArticles'

export const metadata = {
    title: 'Cheapest Countries to Live in Europe | Visa Rapid',
    description: 'Real monthly budgets for Portugal, Bulgaria, Hungary, Romania, Albania, Serbia, Georgia, and North Macedonia — what it actually costs to live in Europe as an expat in 2026.',
}

const CheapestCountriesEurope = () => {
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
                        Cheapest Countries to Live in Europe in 2026
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>Published on March 16, 2026</span>
                        <span className="mx-2">&bull;</span>
                        <span>14 min read</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10">
                    <img
                        src="/blog20.jpg"
                        alt="Cheapest countries to live in Europe 2026"
                        className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-xl shadow-sm"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <article className="lg:col-span-3 prose prose-lg max-w-none text-gray-800">

                        <p className="mb-4 text-lg">
                            Everyone wants the cheapest option. Fair enough. But the cheapest country to live in Europe depends on what kind of life you actually want to live. A studio apartment in rural Bulgaria for &euro;200 a month is technically cheap. But if you need an international school for your kids, reliable internet for remote work, and an airport that flies direct to London, that changes the math completely.
                        </p>
                        <p className="mb-6">
                            So instead of just ranking by rent prices, this is a breakdown of what it actually costs to live in each of these countries as an expat. Real budgets. Real trade-offs.
                        </p>

                        {/* Portugal */}
                        <h2 id="portugal" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Portugal: The Popular Pick</h2>
                        <p className="mb-4">
                            Portugal is not the cheapest country in Europe anymore. Lisbon has gotten expensive. But it keeps showing up on these lists because the overall package is hard to beat.
                        </p>
                        <p className="mb-4">
                            A single person can live comfortably in Lisbon on about <strong>&euro;2,000 to &euro;2,500 a month</strong>. That covers rent (&euro;900 to &euro;1,400 for a one-bedroom in a decent area), food, transport, health insurance, and some social life. Porto is cheaper. Braga and Coimbra are cheaper still. You can manage on <strong>&euro;1,200 to &euro;1,500 a month</strong> in a smaller Portuguese city without feeling like you are cutting corners.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-4">
                            <p className="font-semibold text-green-900 mb-2">Why Portugal is worth the higher price</p>
                            <ul className="list-disc pl-5 space-y-1 text-green-800 text-sm">
                                <li>300 days of sunshine in Lisbon</li>
                                <li>English spoken everywhere</li>
                                <li>Excellent and affordable food</li>
                                <li>Healthcare through the SNS available to residents</li>
                                <li>Clear visa options: D7 (passive income), D8 (remote workers), D2 (entrepreneurs)</li>
                                <li>Path to EU citizenship after 5 years</li>
                            </ul>
                        </div>
                        <p className="mb-6">
                            The catch is that Lisbon and Porto have seen sharp rent increases over the past three years. If you are on a tight budget, look at secondary cities. Faro, Aveiro, Funchal, and Set&uacute;bal all offer a great lifestyle at 30 to 40 percent less than Lisbon.
                        </p>

                        {/* Bulgaria */}
                        <h2 id="bulgaria" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Bulgaria: Genuinely Cheap and in the EU</h2>
                        <p className="mb-4">
                            Bulgaria is where the numbers get interesting. Sofia, the capital, costs about <strong>&euro;1,000 to &euro;1,100 a month</strong> for a comfortable single-person lifestyle. Rent for a one-bedroom apartment outside city centre can go below &euro;250. Dinner with a drink runs under &euro;10. Public transport is almost free compared to Western European cities.
                        </p>
                        <p className="mb-4">
                            Bulgaria is a full EU member state. That matters if you are an EU citizen already because you can just move there. For non-EU nationals, Bulgaria offers a few residence options though the visa infrastructure is less developed than Portugal or Germany.
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                            <p className="font-semibold text-gray-900 mb-2">Trade-offs</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                                <li>Infrastructure outside Sofia and the Black Sea coast is patchy</li>
                                <li>Language barrier is real — Bulgarian uses Cyrillic script, English less widespread</li>
                                <li>Healthcare quality varies a lot by region</li>
                                <li>Job market for English-speaking expats is limited</li>
                            </ul>
                        </div>
                        <p className="mb-6">
                            If you are earning remotely in euros, dollars, or pounds and just want your money to go further, Bulgaria is hard to argue with.
                        </p>

                        {/* Hungary */}
                        <h2 id="hungary" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Hungary: Budapest on a Budget</h2>
                        <p className="mb-4">
                            Budapest is one of Europe&apos;s most liveable cities and it still costs a fraction of what you would pay in Vienna or Munich. Monthly budget for a single person: <strong>&euro;1,000 to &euro;1,400</strong>. Rent in the city centre runs &euro;400 to &euro;600 for a one-bedroom. Hungarian food is hearty and cheap. Public transport is excellent.
                        </p>
                        <p className="mb-4">
                            Hungary has a flat 15 percent personal income tax rate which is attractive if you are earning locally. Budapest has a &ldquo;White Card&rdquo; for digital nomads too.
                        </p>
                        <p className="mb-6">
                            The flip side: Hungary&apos;s political environment has been unpredictable. Relations with the EU are tense. The language is notoriously difficult (unrelated to any neighbouring language). And while Budapest is cosmopolitan, smaller cities are far less accommodating for English speakers. For young professionals or remote workers who want a vibrant European city at half the price of Berlin, Budapest works well.
                        </p>

                        {/* Romania */}
                        <h2 id="romania" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Romania: Underrated and Getting Better</h2>
                        <p className="mb-4">
                            Romania gets overlooked constantly. That is a mistake. Bucharest and Cluj-Napoca (the country&apos;s tech hub) offer a solid quality of life at very low cost. Monthly budget: <strong>&euro;800 to &euro;1,200</strong> for a single person. Rent is cheap. Food is cheap. Internet speed is among the fastest in the world (seriously, Romania consistently ranks in the global top 10).
                        </p>
                        <p className="mb-4">
                            Romania is an EU member. The Carpathian mountains and Transylvanian countryside are genuinely beautiful. Cluj has a young, international tech community. English is spoken well by younger Romanians, especially in cities.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <p className="font-semibold text-blue-900 mb-2">Why Romania works for tech workers</p>
                            <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm">
                                <li>Top-10 global internet speeds</li>
                                <li>Growing tech scene in Cluj-Napoca</li>
                                <li>EU membership with freedom of movement</li>
                                <li>Private healthcare still cheap by Western standards</li>
                            </ul>
                        </div>
                        <p className="mb-6">
                            Trade-offs: Bucharest&apos;s infrastructure can feel rough compared to Western European capitals. Air quality in some areas is poor. Bureaucracy is slow. Healthcare is best accessed through the private system if you can afford it.
                        </p>

                        {/* Albania */}
                        <h2 id="albania" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Albania: Rock-Bottom Costs</h2>
                        <p className="mb-4">
                            Albania is as cheap as Europe gets. Monthly budget in Tirana: <strong>&euro;400 to &euro;800</strong>. Rent for a one-bedroom apartment: &euro;200 to &euro;350. Eating out is incredibly affordable. The Albanian coast (especially the Riviera near Saranda and Vlora) rivals anything in Greece or Croatia for a fraction of the price.
                        </p>
                        <p className="mb-6">
                            Albania is not in the EU yet. It is a candidate country, which means the visa situation for non-EU nationals is less structured. Infrastructure is developing rapidly but still rough in places. English is less widely spoken outside tourist areas and Tirana. If you are on a very tight budget and willing to adapt, Albania offers an incredibly cheap lifestyle in a Mediterranean climate. Just go in with your eyes open about the infrastructure.
                        </p>

                        {/* Serbia */}
                        <h2 id="serbia" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Serbia: The Quiet Contender</h2>
                        <p className="mb-4">
                            Belgrade has turned into a serious city for remote workers and entrepreneurs. Monthly costs: <strong>&euro;650 to &euro;1,000</strong>. Rent is low. Nightlife is legendary. The food scene is underrated. And there is a growing startup and tech ecosystem.
                        </p>
                        <p className="mb-4">
                            Serbia is not in the EU (it is a candidate country). The dinar is the local currency. For expats earning in euros or dollars, the exchange rate makes things even cheaper.
                        </p>
                        <p className="mb-6">
                            Serbia&apos;s downsides: political uncertainty, air quality issues in winter (Belgrade has some of the worst winter smog in Europe), and a less straightforward visa path for long-term residency compared to EU countries. For digital nomads who want a cheap, lively city with good internet and decent coffee, Belgrade punches way above its weight.
                        </p>

                        {/* Georgia */}
                        <h2 id="georgia" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Georgia: The Cheapest Option (With Caveats)</h2>
                        <p className="mb-4">
                            Georgia tops most affordability lists. You can live in Tbilisi on <strong>&euro;600 a month</strong>. Rent is absurdly cheap. Food is incredible. Wine is everywhere and costs nothing.
                        </p>
                        <p className="mb-4">
                            Georgia is not in Europe in the traditional sense. Geographically it sits between Asia and Europe. It is not in the EU and joining anytime soon is unlikely given current politics. The language and alphabet are completely unique and difficult. And the political situation near the Russian border is a genuine concern.
                        </p>
                        <div className="bg-green-50 p-5 rounded-xl border border-green-100 mb-6">
                            <p className="font-semibold text-gray-900 mb-1">Key Benefit</p>
                            <p className="text-gray-700 text-sm">Georgia offers a <strong>one-year remote work visa with zero tax on foreign income</strong>. For a freelancer or remote worker who wants to stretch their money as far as possible, it is hard to beat on pure affordability.</p>
                        </div>

                        {/* North Macedonia */}
                        <h2 id="north-macedonia" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">North Macedonia: The Dark Horse</h2>
                        <p className="mb-4">
                            Skopje, the capital, might be the most affordable proper European city most people have never considered. Rent: &euro;300 to &euro;500 for a one-bedroom. Personal income tax: flat 10 percent. Monthly budget for a single person: <strong>&euro;600 to &euro;900</strong>.
                        </p>
                        <p className="mb-6">
                            North Macedonia is an EU candidate country. The infrastructure is basic compared to Western Europe. The country is small and the job market for English speakers is very limited. But for someone working remotely and looking for low costs in a Mediterranean-adjacent climate, it works.
                        </p>

                        {/* Comparison Table */}
                        <h2 id="comparison" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Quick Comparison Table</h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Country</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Monthly Budget (Single)</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">EU Member?</th>
                                        <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider font-open-sans">Visa Options for Non-EU</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-green-50">
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Portugal</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;1,200 to &euro;2,500</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Yes</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">D7, D8, D2</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Bulgaria</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;800 to &euro;1,100</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Yes</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Limited options</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Hungary</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;1,000 to &euro;1,400</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Yes</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">White Card for nomads</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Romania</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;800 to &euro;1,200</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Yes</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Limited options</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Albania</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;400 to &euro;800</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">No (candidate)</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Basic residency options</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Serbia</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;650 to &euro;1,000</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">No (candidate)</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Freelancer visa</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">Georgia</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;600 to &euro;900</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">No</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">1-year remote work visa</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">North Macedonia</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">&euro;600 to &euro;900</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">No (candidate)</td>
                                        <td className="py-4 px-6 text-sm text-gray-700">Limited options</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Which Country Fits */}
                        <h2 id="which-fits" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Which Country Actually Fits Your Life?</h2>
                        <p className="mb-4">
                            Cheapest is not always best. Pick based on what you actually need.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <p className="font-semibold text-gray-900 mb-1">Want the whole package?</p>
                                <p className="text-gray-700 text-sm"><strong>Portugal.</strong> You pay more, but you get weather, English, clear visa routes, a path to EU citizenship, and solid healthcare. If you are serious about building a long-term European life, it is hard to beat.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <p className="font-semibold text-gray-900 mb-1">Want EU membership on a budget?</p>
                                <p className="text-gray-700 text-sm"><strong>Bulgaria or Romania.</strong> Both are EU member states where your money goes genuinely far. Romania edges ahead for tech workers thanks to Cluj&apos;s growing scene and the internet speeds.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <p className="font-semibold text-gray-900 mb-1">Want rock-bottom costs and you don&apos;t care about EU membership?</p>
                                <p className="text-gray-700 text-sm"><strong>Albania or Georgia.</strong> Just go in knowing the infrastructure and visa situations are less developed.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <p className="font-semibold text-gray-900 mb-1">Want a vibrant city that is still cheap?</p>
                                <p className="text-gray-700 text-sm"><strong>Budapest or Belgrade.</strong> Both offer excellent food, nightlife, and culture at prices that feel almost unfair compared to Paris or Amsterdam.</p>
                            </div>
                        </div>
                        <p className="mb-6">
                            The right answer depends on your income source, your family situation, and whether you need a structured visa pathway or can be more flexible.
                        </p>

                        {/* FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-10 mb-4 font-open-sans">Frequently Asked Questions</h2>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Can I actually live in Europe on &euro;1,000 a month?</h3>
                        <p className="mb-6">
                            Yes, but only in certain countries. Bulgaria, Romania, Albania, Serbia, North Macedonia, and Georgia all allow a comfortable single-person lifestyle at or below &euro;1,000. You will not manage that in Lisbon, Budapest, or any Western European city. The trick is earning in a stronger currency (euros, dollars, pounds) while spending locally.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Which is the cheapest EU country to live in?</h3>
                        <p className="mb-6">
                            Bulgaria. Monthly costs in Sofia start around &euro;800 to &euro;1,000 for a single person living comfortably. Romania is a close second. Both are full EU members, which matters for freedom of movement if you hold an EU passport.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Is Portugal still affordable for expats?</h3>
                        <p className="mb-6">
                            It depends where. Lisbon and Porto have gotten significantly more expensive over the past few years. But secondary cities like Braga, Coimbra, Faro, and Aveiro are still affordable. You can live well on &euro;1,200 to &euro;1,500 a month outside the two big cities. Portugal&apos;s real value is the combination of lifestyle, weather, safety, and immigration options rather than pure cheapness.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">What is the cheapest country in Europe with good visa options?</h3>
                        <p className="mb-6">
                            Portugal offers the best combination of affordability and visa infrastructure. The D7 Visa (passive income), D8 Digital Nomad Visa (remote workers), and D2 Entrepreneur Visa all have clear requirements and well-established processes. Georgia is cheaper but has fewer long-term options. Hungary and Serbia have digital nomad programmes but they are less mature than Portugal&apos;s system.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 font-open-sans">Do I need to speak the local language?</h3>
                        <p className="mb-6">
                            In Portugal, no. English is widely spoken in cities and the expat infrastructure is strong. In Bulgaria, Hungary, Romania, and the Balkans, English works in major cities but you will struggle in smaller towns without some local language. Georgia uses a unique alphabet and language that most newcomers find challenging. Learning basics of the local language always helps with daily life, regardless of where you go.
                        </p>

                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 pl-8 border-l border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-open-sans">Article content</h3>
                            <nav className="space-y-4">
                                <a href="#portugal" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Portugal</a>
                                <a href="#bulgaria" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Bulgaria</a>
                                <a href="#hungary" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Hungary</a>
                                <a href="#romania" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Romania</a>
                                <a href="#albania" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Albania</a>
                                <a href="#serbia" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Serbia</a>
                                <a href="#georgia" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Georgia</a>
                                <a href="#north-macedonia" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">North Macedonia</a>
                                <a href="#comparison" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Comparison Table</a>
                                <a href="#which-fits" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">Which Fits You?</a>
                                <a href="#faq" className="block text-gray-600 hover:text-red-500 transition-colors text-base cursor-pointer">FAQ</a>
                            </nav>
                        </div>
                    </aside>
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-open-sans">
                        Thinking About Making the Move?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        If you know Europe is where you want to be but you are not sure which country fits your budget and situation, we can help you figure it out. We&apos;ll look at your income, your family situation, and what matters to you, and tell you honestly which country and visa route makes the most sense. No fluff. Just straight answers.
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

                <RelatedArticles currentPath="/blogs/cheapest-countries-to-live-in-europe" />
            </div>
        </div>
    )
}

export default CheapestCountriesEurope
