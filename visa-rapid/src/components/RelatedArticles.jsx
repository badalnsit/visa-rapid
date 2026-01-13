import React from 'react'
import { Link } from 'react-router-dom'

const RelatedArticles = ({ currentPath }) => {
  const allBlogPosts = [
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
                to={post.link}
                className="inline-flex items-center font-medium text-sm !text-gray-600 hover:text-gray-900 transition-colors mt-auto"
                style={{ textDecoration: 'none' }}
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
