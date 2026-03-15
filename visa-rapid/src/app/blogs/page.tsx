import Link from 'next/link'

export const metadata = {
    title: 'Blogs | Visa Rapid',
    description: 'Expert articles on lifestyle, tax, visas, investment, healthcare, as well as finances for an affluent expat\'s life in Portugal',
}

const Blogs = () => {
    const blogPosts = [
        {
            title: "European Immigration Market Trends 2026: What's Driving the Global Surge in EU Residency Applications",
            description: "From remote work visas to tax-driven relocation — discover the 9 major trends reshaping who is moving to Europe in 2026 and why applications are hitting record highs.",
            image: "/blog18.png",
            link: "/blogs/european-immigration-market-trends-2026",
            category: "Immigration Trends"
        },
        {
            title: "Moving to Europe from the USA in 2026: The Complete Guide for Americans",
            description: "The most practical guide for Americans moving to Europe in 2026 — visa options, real cost comparisons, healthcare, FATCA taxes, and the best countries for every American profile.",
            image: "/blog16.png",
            link: "/blogs/moving-to-europe-from-usa-2026",
            category: "Relocation Guide"
        },
        {
            title: "Portugal D2 Visa 2026: The Complete Entrepreneur's Guide",
            description: "The full 2026 guide to the Portugal D2 Visa — eligibility, business plan requirements, documents, step-by-step process, costs, and the 5-year path to Portuguese citizenship.",
            image: "/blog17.png",
            link: "/blogs/portugal-d2-visa-entrepreneur-guide-2026",
            category: "Startup Visa"
        },
        {
            title: "Portugal D7 Visa 2026: The Complete Guide for Passive Income Earners",
            description: "Everything you need to know about the Portugal D7 Visa in 2026 — income requirements, documents, step-by-step application, costs, and the 5-year path to Portuguese citizenship.",
            image: "/blog15.png",
            link: "/blogs/portugal-d7-visa-guide",
            category: "Retirement & Visa"
        },
        {
            title: "Retiring in Portugal: Golden Visa, D7 Visa & How to Get Portuguese Citizenship",
            description: "The complete guide to retiring in Portugal — Golden Visa investment options, D7 Retirement Visa income requirements, NHR tax benefits, and the 5-year path to Portuguese citizenship.",
            image: "/blog14.png",
            link: "/blogs/retiring-in-portugal-golden-visa-d7",
            category: "Retirement & Visa"
        },
        {
            title: "Best Countries for Software Engineers to Move: Visas, Salaries & Where to Actually Go",
            description: "Compare visas, salaries, taxes, and citizenship timelines across Portugal, USA, Germany, Canada, Spain and more — and find the best country for your software engineering career.",
            image: "/blog13.png",
            link: "/blogs/best-countries-software-engineers",
            category: "Visa & Career"
        },
        {
            title: "How to Get French Citizenship, Spanish Citizenship, and EU Residency: The Founder's Guide",
            description: "A practical comparison of French citizenship, Spanish citizenship, and Portugal's D2 Visa for entrepreneurs. Discover the fastest route to an EU passport based on your background.",
            image: "/blog12.png",
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
            title: "Why Europe’s Startup Visa Is Often a Better Option Than New Zealand, UK, Ireland, USA, and Canada",
            description: "If you’re an early-stage founder with an innovative idea or MVP, choosing the right country can save you years of time, huge costs, and unnecessary complexity.",
            image: "/Blog5.webp",
            link: "/blogs/europe-startup-visa-comparison",
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
            title: "Portugal Startup Visa Approvals & Ecosystem Growth in 2025",
            description: "The 2025 Startup Ecosystem Report highlights a major milestone: active startups in Portugal have crossed the 5,000 mark. What does this mean for visa approvals?",
            image: "/Img3.png",
            link: "/blogs/portugal-startup-ecosystem-2025",
            category: "Ecosystem Report"
        },
        {
            title: "Portugal Startup Visa vs UK, USA, and Canada: Cost, Funding & Approval Compared",
            description: "For entrepreneurs looking to move abroad, startup visas have become one of the most realistic pathways. However, not all startup visa programs are created equal.",
            image: "/Img2.png",
            link: "/blogs/portugal-startup-visa-comparison",
            category: "Startup Visa"
        },
        {
            title: "Which Is the Most Affordable and Convenient Option to Move Abroad?",
            description: "Today, there are several pathways to move abroad. Among the most commonly considered options are Work Visa, Business Visa, Job Seeker Visa, and Study Abroad. But which one is right for you?",
            image: "/Img1.png",
            link: "/blogs/affordable-overseas-option",
            category: "Visa & Finance"
        },
        {
            title: "The Opportunity Card: The Ticket to Germany",
            description: "The German government introduced the “Opportunity Card” (Chancenkarte) to its arsenal of residence permits. This permit came to replace the Job Seeker Visa.",
            image: "/Jsv.webp",
            link: "/blogs/opportunity-card",
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
