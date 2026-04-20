import Link from 'next/link'

interface RelatedArticlesProps {
    currentPath: string;
}

const RelatedArticles = ({ currentPath }: RelatedArticlesProps) => {
    const allBlogPosts = [
        {
            title: "Digital Nomad Visa Portugal (D8): The Complete Guide for 2026",
            description: "Everything you need to know about the Portugal digital nomad visa (D8) in 2026 — income requirements, documents, step-by-step application, costs, taxes, and whether it is worth it.",
            image: "/blog35.jpg",
            link: "/blogs/digital-nomad-visa-portugal",
            category: "Visa Guide"
        },
        {
            title: "Portugal Retirement Visa: The Complete Guide for Retirees in 2026",
            description: "How to retire in Portugal on the D7 Retirement Visa — income requirements, step-by-step application, healthcare, taxes, best places to retire, and the 5-year path to EU citizenship.",
            image: "/blog34.jpg",
            link: "/blogs/portugal-retirement-visa",
            category: "Retirement Abroad"
        },
        {
            title: "How U.S. Citizens Can Retire in Portugal and Get Residency in 2026",
            description: "The complete guide for American retirees moving to Portugal — D7 visa requirements, income thresholds, cost of living, healthcare, taxes, and the 5-year path to a Portuguese passport.",
            image: "/blog33.jpg",
            link: "/blogs/us-citizens-retire-portugal-2026",
            category: "Retirement Abroad"
        },
        {
            title: "Citizenship by Investment: USA vs Portugal — Which One Actually Makes Sense in 2026?",
            description: "US EB-5 vs Portugal Golden Visa — an honest side-by-side on cost, timeline, passport strength, physical presence, and what you actually get at the end in 2026.",
            image: "/blog32.jpg",
            link: "/blogs/citizenship-by-investment-usa-vs-portugal-2026",
            category: "Investment Residency"
        },
        {
            title: "Europe vs USA: Immigration in 2026 — What Has Changed and What It Means for You",
            description: "The US is restricting both legal and illegal immigration. Europe is cracking down on irregular migrants while expanding routes for skilled workers. Here is what changed in 2026.",
            image: "/blog31.jpg",
            link: "/blogs/europe-vs-usa-immigration-2026",
            category: "Immigration Trends"
        },
        {
            title: "Strongest Passports in the World in 2026",
            description: "Singapore leads with 195 destinations. Where India, the US, and every major passport ranks on the Henley Index in 2026 — and how European residency can change your ranking.",
            image: "/blog30.jpg",
            link: "/blogs/strongest-passports-world-2026",
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
            title: "Portugal D7 Visa for British Families with UK Rental Income",
            description: "UK rental income qualifies for Portugal's D7 Passive Income Visa. How British families with buy-to-let properties can use rental income to move to Portugal after Brexit.",
            image: "/blog28.jpg",
            link: "/blogs/portugal-d7-visa-uk-rental-income",
            category: "Visa Guide"
        },
        {
            title: "How an Indian Cleantech Founder Transformed His Business by Moving to Europe",
            description: "A real case study of how an Indian climate tech founder used Portugal's D2 Entrepreneur Visa to unlock EU grants, new partnerships, and markets worth millions — while keeping his factories in India.",
            image: "/blog27.jpg",
            link: "/blogs/indian-cleantech-founder-europe",
            category: "Case Study"
        },
        {
            title: "European Citizenship for Filipinos: Your Best Routes in 2026",
            description: "Filipinos can get Spanish citizenship in just 2 years — plus Portugal, Germany, and Italy routes explained. The complete guide to European citizenship for Filipinos in 2026.",
            image: "/blog26.jpg",
            link: "/blogs/european-citizenship-filipinos-2026",
            category: "Citizenship"
        },
        {
            title: "Move to Portugal from USA in 2026: The Complete Guide for Americans",
            description: "D7, D8, and D2 visas explained, full move cost breakdown, cost of living table, taxes, healthcare, schools, and what daily life actually feels like for Americans in Portugal.",
            image: "/blog25.jpg",
            link: "/blogs/moving-to-portugal-from-usa-2026",
            category: "Relocation Guide"
        },
        {
            title: "Emigration from Russia: Where Russians Are Moving and What It Takes in 2026",
            description: "Where are Russians emigrating in 2026, which countries still accept them, and what visa and residency routes actually work.",
            image: "/blog24.jpg",
            link: "/blogs/russia-emigration-2026",
            category: "Immigration Trends"
        },
        {
            title: "Easiest Countries to Get Citizenship in 2026",
            description: "Naturalization, investment, and descent — the fastest and easiest routes to a second passport in 2026, including the best paths to an EU citizenship.",
            image: "/blog23.jpg",
            link: "/blogs/easiest-countries-citizenship-2026",
            category: "Citizenship"
        },
        {
            title: "Which Countries Allow Dual Citizenship and Which Ones Ban It in 2026",
            description: "Full 2026 breakdown of which countries allow dual citizenship, which ban it, and the conditions in between — plus the fastest paths to a second passport in Europe.",
            image: "/blog22.jpg",
            link: "/blogs/dual-citizenship-countries-2026",
            category: "Citizenship"
        },
        {
            title: "Why Dual Citizenship Might Not Be Worth It: The Downsides Nobody Talks About",
            description: "Before chasing a second passport, understand the real downsides — double taxation, military service, banking headaches, security clearance issues, and more.",
            image: "/blog21.jpg",
            link: "/blogs/dual-citizenship-downsides",
            category: "Citizenship"
        },
        {
            title: "Cheapest Countries to Live in Europe in 2026",
            description: "Real monthly budgets for Portugal, Bulgaria, Hungary, Romania, Albania, Serbia, Georgia, and North Macedonia — what it actually costs to live in Europe as an expat.",
            image: "/blog20.jpg",
            link: "/blogs/cheapest-countries-europe-2026",
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
            title: "European Immigration Market Trends 2026: What's Driving the Global Surge in EU Residency Applications",
            description: "From remote work visas to tax-driven relocation — discover the 9 major trends reshaping who is moving to Europe in 2026 and why applications are hitting record highs.",
            image: "/Blog18.jpg",
            link: "/blogs/european-immigration-market-trends-2026",
            category: "Immigration Trends"
        },
        {
            title: "Moving to Europe from the USA in 2026: The Complete Guide for Americans",
            description: "Visa options, real cost comparisons, healthcare, FATCA taxes, and the best countries for every American profile — the most practical relocation guide for Americans.",
            image: "/blog16.jpg",
            link: "/blogs/moving-to-europe-from-usa-2026",
            category: "Relocation Guide"
        },
        {
            title: "Portugal D2 Visa 2026: The Complete Entrepreneur's Guide",
            description: "Eligibility, business plan requirements, documents, costs, and step-by-step process — the full 2026 guide to the Portugal D2 Entrepreneur Visa.",
            image: "/blog17.jpg",
            link: "/blogs/portugal-d2-visa-entrepreneur-guide-2026",
            category: "Startup Visa"
        },
        {
            title: "Portugal D7 Visa 2026: The Complete Guide for Passive Income Earners",
            description: "Income requirements, documents, step-by-step application, costs, and the 5-year path to Portuguese citizenship — the complete D7 Visa guide for 2026.",
            image: "/blog15.jpg",
            link: "/blogs/portugal-d7-visa-guide",
            category: "Retirement & Visa"
        },
        {
            title: "Retiring in Portugal: Golden Visa, D7 Visa & How to Get Portuguese Citizenship",
            description: "Golden Visa investment routes, D7 Retirement Visa income requirements, NHR tax benefits, and the 5-year path to Portuguese citizenship — the complete retiree's guide.",
            image: "/blog14.jpg",
            link: "/blogs/retiring-in-portugal-golden-visa-d7",
            category: "Retirement & Visa"
        },
        {
            title: "Best Countries for Software Engineers to Move: Visas, Salaries & Where to Actually Go",
            description: "Compare visas, salaries, taxes, and citizenship timelines across Portugal, USA, Germany, Canada, Spain and more — find the best country for your engineering career.",
            image: "/blog13.jpg",
            link: "/blogs/best-countries-software-engineers",
            category: "Visa & Career"
        },
        {
            title: "How to Get French Citizenship, Spanish Citizenship, and EU Residency: The Founder's Guide",
            description: "A practical comparison of French, Spanish, and Portuguese citizenship pathways for entrepreneurs — find the fastest route to an EU passport.",
            image: "/blog12.jpg",
            link: "/blogs/eu-citizenship-entrepreneur-guide",
            category: "Citizenship"
        },
        {
            title: "Benefits of Portugal for Entrepreneurs: Why Founders Are Moving to Lisbon",
            description: "From the NHR tax regime and Schengen access to affordable living and EU citizenship — why Portugal is Europe's top destination for startup founders.",
            image: "/blog11.png",
            link: "/blogs/portugal-benefits-entrepreneurs",
            category: "Startup Visa"
        },
        {
            title: "Portugal D2 Visa: The Complete Guide for Entrepreneurs & Startup Founders",
            description: "The Portugal D2 Visa is the primary immigration pathway for non-EU founders and freelancers looking to build their business in Europe.",
            image: "/blog10.png",
            link: "/blogs/portugal-d2-visa",
            category: "Startup Visa"
        },
        {
            title: "Why Europe’s Startup Visa Is Often a Better Option Than New Zealand, UK, Ireland, USA, and Canada",
            description: "If you’re an early-stage founder with an innovative idea or MVP, choosing the right country can save you years of time.",
            image: "/Blog5.webp",
            link: "/blogs/europe-startup-visa-comparison",
            category: "Startup Visa"
        },
        {
            title: "Germany EU Blue Card vs Germany Opportunity Card",
            description: "Germany offers several pathways for skilled professionals. Two of the most popular routes are the EU Blue Card and the Germany Opportunity Card.",
            image: "/Blog4.webp",
            link: "/blogs/blue-card-vs-opportunity-card",
            category: "Visa Comparison"
        },
        {
            title: "Portugal Startup Visa Approvals & Ecosystem Growth in 2025",
            description: "The 2025 Startup Ecosystem Report highlights a major milestone: active startups in Portugal have crossed the 5,000 mark.",
            image: "/Img3.png",
            link: "/blogs/portugal-startup-ecosystem-2025",
            category: "Ecosystem Report"
        },
        {
            title: "Portugal Startup Visa vs UK, USA, and Canada",
            description: "For entrepreneurs looking to move abroad, startup visas have become one of the most realistic pathways.",
            image: "/Img2.png",
            link: "/blogs/portugal-startup-visa-comparison",
            category: "Startup Visa"
        },
        {
            title: "Most Affordable and Convenient Option to Move Abroad?",
            description: "Today, there are several pathways to move abroad. Work Visa, Business Visa, Job Seeker Visa, and Study Abroad.",
            image: "/Img1.png",
            link: "/blogs/affordable-overseas-option",
            category: "Visa & Finance"
        },
        {
            title: "The Opportunity Card: The Ticket to Germany",
            description: "The German government introduced the “Opportunity Card” (Chancenkarte) to its arsenal of residence permits.",
            image: "/Jsv.webp",
            link: "/blogs/opportunity-card",
            category: "Visa & Finance"
        }
    ];

    // Filter out the current article and take the first 3
    const relatedPosts = allBlogPosts
        .filter(post => post.link !== currentPath)
        .slice(0, 3);

    return (
        <div className="mt-20 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 font-sans">Read More Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
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
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="mb-3">
                                <span className="inline-block px-2 py-1 bg-blue-100 text-gray-600 text-xs rounded-full">
                                    {post.category}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                                {post.description}
                            </p>

                            <Link
                                href={post.link}
                                className="inline-flex items-center font-medium text-sm !text-gray-600 hover:text-gray-900 transition-colors mt-auto no-underline"
                            >
                                Read more
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedArticles
