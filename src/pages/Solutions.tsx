import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiZap, FiShield, FiGlobe, FiTrendingUp, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
// import { useLanguage } from '@/context/LanguageContext' // Removed unused import
import Button from '@/components/ui/Button'

const Solutions: React.FC = () => {
  // const { t } = useLanguage() // Removed unused variable

  const solutions = [
    {
      id: 'payment-processing',
      icon: <FiZap className="w-12 h-12" />,
      title: 'Payment Processing',
      description: 'Complete payment gateway solution with support for cards, digital wallets, and local payment methods across the Middle East.',
      features: [
        'Multi-currency support (AED, SAR, QAR, KWD, BHD, OMR)',
        'Real-time transaction processing',
        'Secure tokenization',
        'PCI DSS Level 1 compliance',
        'Mobile and web integration',
        'Instant settlement options',
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Sub-second response times',
        'Lower transaction fees',
        'Advanced fraud protection',
      ],
      pricing: 'Starting from 2.9% + AED 1.50 per transaction',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'fraud-detection',
      icon: <FiShield className="w-12 h-12" />,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms that protect your business from fraud while minimizing false positives.',
      features: [
        'Real-time risk scoring',
        'Behavioral analytics',
        'Device fingerprinting',
        'Velocity checking',
        'Customizable rules engine',
        '3D Secure 2.0 support',
      ],
      benefits: [
        '40% reduction in fraud losses',
        '60% fewer false positives',
        'Instant decision making',
        'Continuous learning',
      ],
      pricing: 'Starting from AED 500/month',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'financial-inclusion',
      icon: <FiGlobe className="w-12 h-12" />,
      title: 'Financial Inclusion',
      description: 'Banking solutions designed for the unbanked and underbanked populations in emerging markets.',
      features: [
        'Agent network management',
        'Mobile money solutions',
        'Microfinance support',
        'Digital identity verification',
        'Cash-in/cash-out services',
        'Remittance processing',
      ],
      benefits: [
        'Reach 85% more customers',
        'Lower operational costs',
        'Regulatory compliance',
        'Social impact measurement',
      ],
      pricing: 'Custom pricing available',
      color: 'from-teal-500 to-teal-600',
    },
    {
      id: 'enterprise',
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: 'Enterprise Solutions',
      description: 'Scalable payment infrastructure for large organizations with custom integration and dedicated support.',
      features: [
        'Custom API development',
        'White-label solutions',
        'Advanced reporting & analytics',
        'Multi-tenant architecture',
        'Dedicated account management',
        'SLA guarantees',
      ],
      benefits: [
        'Dedicated infrastructure',
        '24/7 priority support',
        'Custom integrations',
        'Volume discounts',
      ],
      pricing: 'Contact for enterprise pricing',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const comparisonFeatures = [
    'Transaction Processing',
    'Fraud Detection',
    'Multi-currency',
    'Mobile SDK',
    'API Access',
    '24/7 Support',
    'Analytics Dashboard',
    'White-label Options',
    'Dedicated Manager',
    'SLA Guarantee',
  ]

  const plans = [
    {
      name: 'Starter',
      price: '2.9%',
      description: 'Perfect for small businesses and startups',
      features: [true, false, true, true, true, false, true, false, false, false],
    },
    {
      name: 'Professional',
      price: '2.5%',
      description: 'Ideal for growing businesses',
      features: [true, true, true, true, true, true, true, false, false, false],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [true, true, true, true, true, true, true, true, true, true],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-responsive-5xl font-heading font-bold mb-6">
              Solutions Tailored for Your Success
            </h1>
            <p className="text-responsive-xl text-blue-100 mb-8">
              From startups to enterprises, we have the right payment solution for your business needs
            </p>
            <nav className="text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span>Solutions</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} text-white`}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-secondary-dark-gray mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-secondary-gray">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-dark-gray mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-secondary-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-dark-gray mb-3">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                        <span className="text-sm text-secondary-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-secondary-gray">Starting from</div>
                    <div className="text-lg font-semibold text-primary-teal">
                      {solution.pricing}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm">
                      Learn More
                    </Button>
                    <Button href="/contact" size="sm">
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-4xl font-heading font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-responsive-lg text-secondary-gray">
              Compare our plans and find the perfect fit for your business
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-left">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center">
                      <div className={`p-4 rounded-lg ${plan.popular ? 'bg-primary-teal text-white' : 'bg-white'}`}>
                        <div className="font-bold text-lg">{plan.name}</div>
                        <div className="text-2xl font-bold mt-1">{plan.price}</div>
                        <div className="text-sm opacity-80 mt-1">{plan.description}</div>
                        {plan.popular && (
                          <div className="badge bg-white text-primary-teal mt-2">
                            Most Popular
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature}>
                    <td className="font-medium">{feature}</td>
                    {plans.map((plan, planIndex) => (
                      <td key={planIndex} className="text-center">
                        {plan.features[index] ? (
                          <FiCheckCircle className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-200 rounded-full mx-auto"></div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td></td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="text-center pt-6">
                      <Button
                        href="/contact"
                        variant={plan.popular ? 'primary' : 'secondary'}
                        size="sm"
                        className="w-full"
                      >
                        Choose {plan.name}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-4xl font-heading font-bold mb-4">
              Integration Partners
            </h2>
            <p className="text-responsive-lg text-secondary-gray">
              Seamlessly integrate with your existing tools and platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              'Shopify', 'WooCommerce', 'Magento', 'SAP', 'Oracle', 'Salesforce',
              'QuickBooks', 'Xero', 'NetSuite', 'Stripe', 'PayPal', 'Square'
            ].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md 
                         transition-all cursor-pointer"
              >
                <div className="text-gray-400 font-semibold">{partner}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-blue to-primary-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-responsive-4xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-responsive-lg text-blue-100 mb-8">
              Choose the solution that's right for your business and start accepting payments today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
                className="!bg-white !text-primary-blue hover:!bg-gray-100"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                Contact Sales
              </Button>
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
                className="!bg-transparent !text-white !border-white hover:!bg-white/10"
              >
                Book Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Solutions