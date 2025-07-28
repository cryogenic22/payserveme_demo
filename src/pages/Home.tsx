import React from 'react'
import { Link } from 'react-router-dom'
// import { useLanguage } from '../context/LanguageContext' // Removed unused import

// Import icons - using SVG inline for better performance
const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary-teal" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-12 h-12 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
  </svg>
)

const SpeedIcon = () => (
  <svg className="w-12 h-12 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const GlobalIcon = () => (
  <svg className="w-12 h-12 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const InnovationIcon = () => (
  <svg className="w-12 h-12 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const Home: React.FC = () => {
  // const { t } = useLanguage() // Removed unused variable

  const benefits = [
    {
      icon: <ShieldIcon />,
      title: "Bank-Level Security",
      description: "Advanced encryption and fraud protection powered by AI to keep your transactions safe 24/7"
    },
    {
      icon: <SpeedIcon />,
      title: "Lightning Fast Processing",
      description: "Process payments in milliseconds, not minutes. Our AI optimizes every transaction for speed"
    },
    {
      icon: <GlobalIcon />,
      title: "Regional Excellence",
      description: "Tailored for Middle Eastern markets with local payment methods and multi-currency support"
    },
    {
      icon: <InnovationIcon />,
      title: "AI-Powered Innovation",
      description: "Smart routing, predictive analytics, and automated reconciliation for better business decisions"
    }
  ]

  const services = [
    {
      title: "Payment Gateway",
      description: "Accept payments online with our secure, PCI-compliant gateway supporting all major cards and local payment methods",
      features: ["Multi-currency", "Instant settlement", "Fraud protection", "API integration"],
      popular: true
    },
    {
      title: "Mobile Payments",
      description: "Enable seamless mobile transactions with QR codes, NFC, and in-app payments for modern consumers",
      features: ["QR code payments", "NFC technology", "Mobile wallets", "In-app SDK"]
    },
    {
      title: "Business Analytics",
      description: "Get AI-powered insights into your payment data with real-time dashboards and predictive analytics",
      features: ["Real-time data", "Custom reports", "AI predictions", "Revenue optimization"]
    },
    {
      title: "Corporate Solutions",
      description: "Enterprise-grade payment infrastructure with dedicated support and custom integration options",
      features: ["Dedicated support", "Custom APIs", "Volume pricing", "White-label options"]
    }
  ]

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<100ms", label: "Transaction Speed" },
    { value: "150+", label: "Countries Supported" },
    { value: "24/7", label: "Customer Support" }
  ]

  const trustedBy = [
    "Emirates NBD", "QNB", "Saudi National Bank", "Bank Muscat", 
    "Carrefour", "LuLu Group", "Noon", "Talabat"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-primary-teal pt-20 pb-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up">
              Revolutionizing Payments in the Middle East with AI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 animate-fade-in-up animation-delay-200">
              Transform your business with intelligent payment solutions designed for the digital age. 
              Fast, secure, and tailored for regional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-blue bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Get Started Today
                <ArrowRightIcon />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-200"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gray-50 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Why Choose PayServeMe?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep regional expertise to deliver 
              payment solutions that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-primary-teal hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Complete Payment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we have the right solution for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-white p-8 rounded-xl ${
                  service.popular 
                    ? 'border-2 border-primary-teal shadow-xl transform scale-105' 
                    : 'border border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon />
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-teal font-semibold hover:text-primary-teal-dark transition-colors"
                >
                  Learn more
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Trusted by Leading Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses already using PayServeMe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {trustedBy.map((company, index) => (
              <div 
                key={index} 
                className="text-center text-gray-400 font-semibold hover:text-gray-600 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the payment revolution. Get started with PayServeMe today and experience 
            the future of intelligent payment processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-blue bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Schedule a Demo
              <ArrowRightIcon />
            </Link>
            <a
              href="tel:+971501234567"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-200"
            >
              Call Us Now
            </a>
          </div>
          <p className="mt-8 text-blue-100">
            Or email us at{' '}
            <a href="mailto:info@payserveme.com" className="text-white underline hover:no-underline">
              info@payserveme.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home