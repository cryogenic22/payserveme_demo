import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { useLanguage } from '../context/LanguageContext' // Removed unused import

// Icons
const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const BookIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Resources: React.FC = () => {
  // const { t } = useLanguage() // Removed unused variable
  const [activeTab, setActiveTab] = useState('case-studies')

  const caseStudies = [
    {
      id: 1,
      title: "Emirates NBD Transforms Digital Payments",
      category: "Banking",
      description: "How one of the region's largest banks reduced transaction processing time by 85% using PayServeMe's AI-powered platform.",
      image: "/images/case-studies/emirates-nbd.jpg",
      results: ["85% faster processing", "60% cost reduction", "99.9% uptime"],
      duration: "6 months",
      industry: "Banking & Finance"
    },
    {
      id: 2,
      title: "Carrefour Middle East's E-commerce Success",
      category: "Retail",
      description: "Scaling payment infrastructure to handle Black Friday traffic spikes while maintaining security and user experience.",
      image: "/images/case-studies/carrefour.jpg",
      results: ["500% traffic handling", "45% conversion increase", "Zero downtime"],
      duration: "3 months",
      industry: "E-commerce & Retail"
    },
    {
      id: 3,
      title: "Talabat's Regional Payment Unification",
      category: "Food Delivery",
      description: "Unifying payment systems across 8 countries to provide seamless customer experience and reduce operational complexity.",
      image: "/images/case-studies/talabat.jpg",
      results: ["8 countries unified", "30% ops cost reduction", "Improved UX"],
      duration: "12 months",
      industry: "Food & Delivery"
    },
    {
      id: 4,
      title: "ADNOC's Corporate Payment Modernization",
      category: "Energy",
      description: "Modernizing legacy payment systems for one of the world's largest oil companies with enterprise-grade security.",
      image: "/images/case-studies/adnoc.jpg",
      results: ["Legacy system retired", "Enhanced security", "API integration"],
      duration: "18 months",
      industry: "Energy & Oil"
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Payments in the Middle East",
      excerpt: "Exploring emerging trends, regulatory changes, and technological innovations shaping the payment landscape in MENA.",
      author: "Ahmed Al-Rashid",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Industry Insights",
      featured: true
    },
    {
      id: 2,
      title: "AI in Fraud Detection: A Deep Dive",
      excerpt: "How machine learning algorithms are revolutionizing fraud prevention in real-time payment processing.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Regulatory Compliance in MENA: A Complete Guide",
      excerpt: "Understanding payment regulations across different Middle Eastern countries and ensuring compliance.",
      author: "Fatima Al-Zahra",
      date: "December 5, 2024",
      readTime: "15 min read",
      category: "Compliance"
    },
    {
      id: 4,
      title: "Cross-Border Payments: Challenges and Solutions",
      excerpt: "Addressing the complexities of international payments in the Middle East and innovative solutions.",
      author: "Omar Hassan",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Business Strategy"
    },
    {
      id: 5,
      title: "Mobile Payment Adoption in the Gulf States",
      excerpt: "Analysis of mobile payment trends and adoption rates across GCC countries.",
      author: "Research Team",
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "Market Research"
    },
    {
      id: 6,
      title: "Security Best Practices for Payment Integration",
      excerpt: "Essential security measures every business should implement when integrating payment systems.",
      author: "Security Team",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Security"
    }
  ]

  const documentation = [
    {
      title: "API Documentation",
      description: "Complete reference for PayServeMe APIs with code examples and testing tools",
      icon: <CodeIcon />,
      links: [
        { name: "REST API Reference", url: "/docs/api", type: "external" },
        { name: "GraphQL API", url: "/docs/graphql", type: "external" },
        { name: "Webhook Events", url: "/docs/webhooks", type: "external" },
        { name: "SDK Documentation", url: "/docs/sdks", type: "external" }
      ]
    },
    {
      title: "Integration Guides",
      description: "Step-by-step guides for integrating PayServeMe with your platform",
      icon: <BookIcon />,
      links: [
        { name: "Quick Start Guide", url: "/docs/quickstart", type: "external" },
        { name: "E-commerce Integration", url: "/docs/ecommerce", type: "external" },
        { name: "Mobile App Integration", url: "/docs/mobile", type: "external" },
        { name: "Enterprise Integration", url: "/docs/enterprise", type: "external" }
      ]
    },
    {
      title: "Security Guidelines",
      description: "Best practices and security requirements for payment processing",
      icon: <DocumentIcon />,
      links: [
        { name: "PCI DSS Compliance", url: "/docs/pci-dss", type: "external" },
        { name: "Data Protection", url: "/docs/data-protection", type: "external" },
        { name: "Fraud Prevention", url: "/docs/fraud-prevention", type: "external" },
        { name: "3D Secure Implementation", url: "/docs/3ds", type: "external" }
      ]
    }
  ]

  const whitepapers = [
    {
      title: "State of Digital Payments in MENA 2024",
      description: "Comprehensive analysis of payment trends, adoption rates, and market opportunities across the Middle East and North Africa.",
      pages: "45 pages",
      format: "PDF",
      size: "2.3 MB",
      category: "Market Research"
    },
    {
      title: "AI-Powered Fraud Detection: Technical Deep Dive",
      description: "Technical whitepaper exploring machine learning algorithms, real-time decision making, and performance metrics in fraud prevention.",
      pages: "32 pages",
      format: "PDF",
      size: "1.8 MB",
      category: "Technology"
    },
    {
      title: "Regulatory Landscape: Payment Compliance in MENA",
      description: "Guide to navigating payment regulations across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and other regional markets.",
      pages: "28 pages",
      format: "PDF",
      size: "1.5 MB",
      category: "Compliance"
    },
    {
      title: "The Future of Cross-Border Payments",
      description: "Research paper on emerging technologies, regulatory changes, and market opportunities in international payment processing.",
      pages: "38 pages",
      format: "PDF",
      size: "2.1 MB",
      category: "Business Strategy"
    }
  ]

  const webinars = [
    {
      title: "Building Secure Payment Systems",
      description: "Learn best practices for implementing robust security measures in payment processing systems.",
      duration: "45 minutes",
      date: "January 18, 2025",
      speaker: "Sarah Johnson, CTO",
      status: "upcoming"
    },
    {
      title: "Payment Regulations in the GCC",
      description: "Understanding compliance requirements across Gulf Cooperation Council countries.",
      duration: "60 minutes",
      date: "December 20, 2024",
      speaker: "Fatima Al-Zahra, Chief Compliance Officer",
      status: "recorded"
    },
    {
      title: "AI in Financial Services",
      description: "How artificial intelligence is transforming fraud detection and risk assessment.",
      duration: "50 minutes",
      date: "December 5, 2024",
      speaker: "Ahmed Al-Rashid, CEO",
      status: "recorded"
    }
  ]

  const tabs = [
    { id: 'case-studies', label: 'Case Studies', icon: <ChartIcon /> },
    { id: 'blog', label: 'Blog & Insights', icon: <DocumentIcon /> },
    { id: 'documentation', label: 'Documentation', icon: <CodeIcon /> },
    { id: 'whitepapers', label: 'Whitepapers', icon: <BookIcon /> },
    { id: 'webinars', label: 'Webinars', icon: <VideoIcon /> }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-primary-teal py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Explore case studies, technical documentation, industry insights, and best practices 
              to maximize your payment processing success
            </p>
            <nav className="text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span>Resources</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="w-5 h-5">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Tab */}
      {activeTab === 'case-studies' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Customer Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading businesses across the Middle East are transforming their payment operations with PayServeMe
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-blue to-primary-teal"></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary-teal/10 text-primary-teal px-3 py-1 rounded-full text-sm font-semibold">
                        {study.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <ClockIcon />
                        <span className="ml-1">{study.duration}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary-teal">{result}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{study.industry}</span>
                      <Link
                        to={`/case-study/${study.id}`}
                        className="inline-flex items-center text-primary-blue hover:text-primary-blue-dark font-semibold"
                      >
                        Read Full Case Study
                        <ExternalLinkIcon />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Tab */}
      {activeTab === 'blog' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Blog & Industry Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, technical insights, and industry analysis from our experts
              </p>
            </motion.div>

            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-primary-blue to-primary-teal"></div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{post.author}</div>
                        <div className="text-gray-500 text-sm">{post.date} • {post.readTime}</div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors"
                      >
                        Read Article
                        <ExternalLinkIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Regular Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-blue to-primary-teal"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <ClockIcon />
                        <span className="ml-1">{post.readTime}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                        <div className="text-gray-500 text-xs">{post.date}</div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-blue hover:text-primary-blue-dark font-semibold text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documentation Tab */}
      {activeTab === 'documentation' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Developer Documentation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive guides, API references, and integration resources for developers
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {documentation.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-teal/10 text-primary-teal rounded-xl flex items-center justify-center mb-6">
                    {doc.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{doc.description}</p>
                  <ul className="space-y-3">
                    {doc.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.url}
                          className="flex items-center justify-between text-primary-blue hover:text-primary-blue-dark transition-colors"
                        >
                          <span>{link.name}</span>
                          <ExternalLinkIcon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Quick Start CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-gradient-to-r from-primary-blue to-primary-teal rounded-2xl p-8 text-center text-white"
            >
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Start Integrating?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Get up and running in minutes with our comprehensive quick start guide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs/quickstart"
                  className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <CodeIcon />
                  Quick Start Guide
                </a>
                <a
                  href="/sandbox"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Access Sandbox
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Whitepapers Tab */}
      {activeTab === 'whitepapers' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Research & Whitepapers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth research, market analysis, and technical insights to guide your payment strategy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-primary-teal/10 text-primary-teal rounded-xl flex items-center justify-center">
                      <DocumentIcon />
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {paper.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{paper.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{paper.pages}</span>
                    <span>{paper.format}</span>
                    <span>{paper.size}</span>
                  </div>

                  <button className="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors flex items-center justify-center gap-2">
                    <DownloadIcon />
                    Download Whitepaper
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Webinars Tab */}
      {activeTab === 'webinars' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Webinars & Training
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from our experts through live webinars and recorded training sessions
              </p>
            </motion.div>

            <div className="space-y-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-teal/10 text-primary-teal rounded-lg flex items-center justify-center">
                          <VideoIcon />
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            webinar.status === 'upcoming' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                          </span>
                          <span className="text-gray-500 text-sm flex items-center">
                            <ClockIcon />
                            <span className="ml-1">{webinar.duration}</span>
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                        {webinar.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Speaker: {webinar.speaker}</span>
                        <span>•</span>
                        <span>{webinar.date}</span>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                        webinar.status === 'upcoming'
                          ? 'bg-primary-blue text-white hover:bg-primary-blue-dark'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}>
                        {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-teal">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Need Additional Support?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Our team of experts is ready to help you implement and optimize your payment solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-blue bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Contact Our Experts
                <ExternalLinkIcon />
              </Link>
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-200"
              >
                Browse Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources