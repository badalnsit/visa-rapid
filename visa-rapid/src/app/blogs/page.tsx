import Link from 'next/link'

export const metadata = {
    title: 'Blogs | Visa Rapid',
    description: 'Expert articles on lifestyle, tax, visas, investment, healthcare, as well as finances for an affluent expat\'s life in Portugal',
    alternates: {
        canonical: 'https://www.visarapid.com/blogs/',
    },
}

const Blogs = () => {
    const blogPosts = [
        {
            title: "Best Countries for Americans to Retire",
            description: "The best countries for Americans to retire in 2026, covering costs, visa options, healthcare, and what life actually looks like on the ground.",
            image: "/blog36.jpg",
            link: "/blogs/best-countries-for-americans-to-retire",
            category: "Retirement Abroad"
        },
        {
            title: "Digital Nomad Visa Portugal (D8)",
            description: "Everything you need to know about the Portugal digital nomad visa (D8) in 2026 — income requirements, documents, step-by-step application, costs, taxes, and whether it is worth it.",
            image: "/blog35.jpg",
            link: "/blogs/digital-nomad-visa-portugal",
            category: "Visa Guide"
        },
        {
            title: "Portugal Retirement Visa",
            description: "How to retire in Portugal on the D7 Retirement Visa — income requirements, step-by-step application, healthcare, taxes, best places to retire, and the 5-year path to EU citizenship.",
            image: "/blog34.jpg",
            link: "/blogs/portugal-retirement-visa",
            category: "Retirement Abroad"
        },
        {
            title: "Retire in Portugal",
            description: "The complete guide for American retirees moving to Portugal — D7 visa requirements, income thresholds, cost of living, healthcare, taxes, and the 5-year path to a Portuguese passport.",
            image: "/blog33.jpg",
            link: "/blogs/retire-in-portugal",
            category: "Retirement Abroad"
        },
        {
            title: "Citizenship by Investment",
            description: "US EB-5 vs Portugal Golden Visa — an honest side-by-side on cost, timeline, passport strength, physical presence, and what you actually get at the end in 2026.",
            image: "/blog32.jpg",
            link: "/blogs/citizenship-by-investment",
            category: "Investment Residency"
        },
        {
            title: "Europe vs USA",
            description: "The US is restricting both legal and illegal immigration. Europe is cracking down on irregular migrants while expanding routes for skilled workers. Here is what changed in 2026.",
            image: "/blog31.jpg",
            link: "/blogs/europe-vs-usa",
            category: "Immigration Trends"
        },
        {
            title: "Strongest Passports in the World",
            description: "Singapore leads with 195 destinations. Where India, the US, and every major passport ranks on the Henley Index in 2026 — and how European residency can change your ranking.",
            image: "/blog30.jpg",
            link: "/blogs/strongest-passports-in-the-world",
            category: "Passport Index"
        },
        {
            title: "You Are 21 Doing an MBA. Here Is How You Actually Move to Europe.",
            description: "The complete guide for MBA graduates and young professionals who want to move to Europe — student visas, job seeker visas, EU Blue Card, Opportunity Card, and startup routes explained.",
            image: "/blog29.jpg",
            link: "/blogs/mba-graduate-move-to-europe",
            category: "Career & Education"
        },
        {
            title: "Portugal D7 Visa for UK Expats",
            description: "UK rental income qualifies for Portugal's D7 Passive Income Visa. Here's how British families with buy-to-let properties can use rental income to move to Portugal after Brexit.",
            image: "/blog28.jpg",
            link: "/blogs/portugal-d7-visa-for-uk-expats",
            category: "Visa Guide"
        },
        {
            title: "How an Indian Cleantech Founder Transformed His Business by Moving to Europe",
            description: "A real case study of how an Indian climate tech founder used Portugal's D2 Entrepreneur Visa to unlock €255,000 in EU grants, new partnerships, and markets worth millions — while keeping his factories in India.",
            image: "/blog27.jpg",
            link: "/blogs/indian-cleantech-founder-europe",
            category: "Case Study"
        },
        {
            title: "European Citizenship for Filipinos",
            description: "Filipinos can get Spanish citizenship in just 2 years — plus Portugal, Germany, and Italy routes explained. The complete guide to European citizenship for Filipinos in 2026.",
            image: "/blog26.jpg",
            link: "/blogs/european-citizenship-for-filipinos",
            category: "Citizenship"
        },
        {
            title: "Move to Portugal from USA",
            description: "D7, D8, and D2 visas explained, full move cost breakdown, cost of living table, taxes, healthcare, schools, and what daily life actually feels like for Americans in Portugal.",
            image: "/blog25.jpg",
            link: "/blogs/move-to-portugal-from-usa",
            category: "Relocation Guide"
        },
        {
            title: "Emigration from Russia: Where Russians Are Moving and What It Takes in 2026",
            description: "Where are Russians emigrating in 2026, which countries still accept them, and what visa and residency routes actually work — the complete guide for Russian citizens.",
            image: "/blog24.jpg",
            link: "/blogs/russia-emigration-2026",
            category: "Immigration Trends"
        },
        {
            title: "Easiest Countries to Get Citizenship",
            description: "The complete guide to the easiest citizenship routes in 2026 — naturalization, investment, and descent. Timelines, costs, and the fastest paths to an EU passport.",
            image: "/blog23.jpg",
            link: "/blogs/easiest-countries-to-get-citizenship",
            category: "Citizenship"
        },
        {
            title: "Dual Citizenship Countries",
            description: "Full 2026 breakdown of which countries allow dual citizenship, which ban it, and the conditions in between — plus the fastest paths to a second passport in Europe.",
            image: "/blog22.jpg",
            link: "/blogs/dual-citizenship-countries",
            category: "Citizenship"
        },
        {
            title: "Why Is Dual Citizenship Bad",
            description: "Before chasing a second passport, understand the real downsides — double taxation, military service obligations, banking headaches, security clearance issues, and more.",
            image: "/blog21.jpg",
            link: "/blogs/why-is-dual-citizenship-bad",
            category: "Citizenship"
        },
        {
            title: "Cheapest Countries to Live in Europe",
            description: "Real monthly budgets for Portugal, Bulgaria, Hungary, Romania, Albania, Serbia, Georgia, and North Macedonia — what it actually costs to live in Europe as an expat.",
            image: "/blog20.jpg",
            link: "/blogs/cheapest-countries-to-live-in-europe",
            category: "Cost of Living"
        },
        {
            title: "How an Indian Software Engineer Obtained a Residence Permit in Portugal",
            description: "A real case study — documents, timeline, costs, and lessons learned from an Indian backend engineer who moved from Bangalore to Lisbon on the Portugal D8 Digital Nomad Visa.",
            image: "/blog19.jpg",
            link: "/blogs/indian-software-engineer-portugal",
            category: "Case Study"
        },
        {
            title: "European Immigration",
            description: "From remote work visas to tax-driven relocation — discover the 9 major trends reshaping who is moving to Europe in 2026 and why applications are hitting record highs.",
            image: "/Blog18.jpg",
            link: "/blogs/european-immigration",
            category: "Immigration Trends"
        },
        {
            title: "Move to Europe from America",
            description: "The most practical guide for Americans moving to Europe in 2026 — visa options, real cost comparisons, healthcare, FATCA taxes, and the best countries for every American profile.",
            image: "/blog16.jpg",
            link: "/blogs/move-to-europe-from-america",
            category: "Relocation Guide"
        },
        {
            title: "Portugal D2 Visa 2026: The Complete Entrepreneur's Guide",
            description: "The full 2026 guide to the Portugal D2 Visa — eligibility, business plan requirements, documents, step-by-step process, costs, and the 5-year path to Portuguese citizenship.",
            image: "/blog17.jpg",
            link: "/blogs/portugal-d2-visa-entrepreneur-guide-2026",
            category: "Startup Visa"
        },
        {
            title: "Portugal D7 Visa",
            description: "Everything you need to know about the Portugal D7 Visa in 2026 — income requirements, documents, step-by-step application, costs, and the 5-year path to Portuguese citizenship.",
            image: "/blog15.jpg",
            link: "/blogs/portugal-d7-visa",
            category: "Retirement & Visa"
        },
        {
            title: "Retiring in Portugal",
            description: "The complete guide to retiring in Portugal — Golden Visa investment options, D7 Retirement Visa income requirements, NHR tax benefits, and the 5-year path to Portuguese citizenship.",
            image: "/blog14.jpg",
            link: "/blogs/retiring-in-portugal",
            category: "Retirement & Visa"
        },
        {
            title: "Best Countries for Software Engineers to Move: Visas, Salaries & Where to Actually Go",
            description: "Compare visas, salaries, taxes, and citizenship timelines across Portugal, USA, Germany, Canada, Spain and more — and find the best country for your software engineering career.",
            image: "/blog13.jpg",
            link: "/blogs/best-countries-software-engineers",
            category: "Visa & Career"
        },
        {
            title: "How to Get French Citizenship, Spanish Citizenship, and EU Residency: The Founder's Guide",
            description: "A practical comparison of French citizenship, Spanish citizenship, and Portugal's D2 Visa for entrepreneurs. Discover the fastest route to an EU passport based on your background.",
            image: "/blog12.jpg",
            link: "/blogs/eu-citizenship-entrepreneur-guide",
            category: "Citizenship"
        },
        {
            title: "Benefits of Portugal for Entrepreneurs: Why Founders Are Moving to Lisbon",
            description: "From the NHR tax regime and Schengen access to an affordable cost of living and a clear path to EU citizenship — here’s why Portugal is Europe’s top destination for startup founders.",
            image: "/blog11.png",
            link: "/blogs/portugal-benefits-entrepreneurs",
            category: "Startup Visa"
        },
        {
            title: "Portugal D2 Visa: The Complete Guide for Entrepreneurs & Startup Founders",
            description: "The Portugal D2 Visa is the primary immigration pathway for non-EU founders and freelancers. Learn the requirements, costs, and why it’s the go-to startup visa in Europe.",
            image: "/blog10.png",
            link: "/blogs/portugal-d2-visa",
            category: "Startup Visa"
        },
        {
            title: "Europe Startup Visa",
            description: "If you’re an early-stage founder with an innovative idea or MVP, choosing the right country can save you years of time, huge costs, and unnecessary complexity.",
            image: "/Blog5.webp",
            link: "/blogs/europe-startup-visa",
            category: "Startup Visa"
        },
        {
            title: "Germany EU Blue Card vs Germany Opportunity Card: Key Differences & Data Comparison",
            description: "Germany offers several pathways for skilled professionals and entrepreneurs to live and work legally. Two of the most popular routes are the EU Blue Card and the Germany Opportunity Card.",
            image: "/Blog4.webp",
            link: "/blogs/blue-card-vs-opportunity-card",
            category: "Visa Comparison"
        },
        {
            title: "Portugal Startup Visa",
            description: "The 2025 Startup Ecosystem Report highlights a major milestone: active startups in Portugal have crossed the 5,000 mark. What does this mean for visa approvals?",
            image: "/Img3.png",
            link: "/blogs/portugal-startup-visa",
            category: "Ecosystem Report"
        },
        {
            title: "Best Founder Visa",
            description: "For entrepreneurs looking to move abroad, startup visas have become one of the most realistic pathways. However, not all startup visa programs are created equal.",
            image: "/Img2.png",
            link: "/blogs/best-founder-visa",
            category: "Startup Visa"
        },
        {
            title: "How to Move Abroad",
            description: "Today, there are several pathways to move abroad. Among the most commonly considered options are Work Visa, Business Visa, Job Seeker Visa, and Study Abroad. But which one is right for you?",
            image: "/Img1.png",
            link: "/blogs/how-to-move-abroad",
            category: "Visa & Finance"
        },
        {
            title: "Germany Opportunity Card",
            description: "The German government introduced the “Opportunity Card” (Chancenkarte) to its arsenal of residence permits. This permit came to replace the Job Seeker Visa.",
            image: "/Jsv.webp",
            link: "/blogs/germany-opportunity-card",
            category: "Visa & Finance"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Page Header */}
                <div className="mb-10">
                    <p className="text-5xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-gray-900 mb-4">
                        Read our articles
                    </p>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Expert articles on lifestyle, tax, visas, investment, healthcare, as well as finances for an affluent expat's life in Portugal
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            {/* Image */}
                            <div className="h-48 w-full">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-playfair">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {post.description}
                                </p>

                                <Link
                                    href={post.link}
                                    className="inline-flex items-center font-medium text-black hover:text-black transition-colors mt-auto no-underline"
                                >
                                    Read more
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs
