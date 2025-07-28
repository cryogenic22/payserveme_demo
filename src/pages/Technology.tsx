import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiCpu, FiShield, FiDatabase, FiCloud, FiZap, FiLock, 
  FiTrendingUp, FiGlobe, FiCode, FiActivity 
} from 'react-icons/fi'
// import { useLanguage } from '../context/LanguageContext' // Removed unused import
// import Button from '../components/ui/Button' // Removed unused import

const Technology: React.FC = () => {
  // const { t } = useLanguage() // Removed unused variable

  const techStack = [
    {
      layer: 'Frontend Layer',
      description: 'APIs, SDKs, and integration tools',
      technologies: ['REST APIs', 'GraphQL', 'WebHooks', 'Mobile SDKs', 'JavaScript SDK'],
      icon: <FiCode className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      layer: 'AI/ML Layer',
      description: 'Intelligent fraud detection and analytics',
      technologies: ['TensorFlow', 'PyTorch', 'Real-time ML', 'Pattern Recognition', 'Risk Scoring'],
      icon: <FiCpu className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      layer: 'Processing Layer',
      description: 'Transaction routing and processing',
      technologies: ['Microservices', 'Load Balancing', 'Auto-scaling', 'Circuit Breakers', 'Event Streaming'],
      icon: <FiZap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      layer: 'Security Layer',
      description: 'Encryption and compliance',
      technologies: ['AES-256', 'RSA-2048', 'OAuth 2.0', 'JWT', 'HSM'],
      icon: <FiShield className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
    },
    {
      layer: 'Infrastructure',
      description: 'Cloud providers and data centers',
      technologies: ['AWS', 'Azure', 'Multi-region', 'CDN', 'Redis'],
      icon: <FiCloud className="w-8 h-8" />,
      color: 'from-teal-500 to-teal-600',
    },
  ]

  const aiCapabilities = [
    {
      title: 'Machine Learning Models',
      description: 'Advanced ML algorithms for fraud detection and risk assessment',
      features: [
        'Real-time transaction scoring',
        '99.7% accuracy rate',
        'Sub-100ms response time',
        'Continuous model improvement',
      ],
      metrics: {
        accuracy: '99.7%',
        speed: '<100ms',
        falsePositives: '<0.1%',
      },
    },
    {
      title: 'Fraud Detection System',
      description: 'AI-powered fraud prevention with behavioral analysis',
      features: [
        'Behavioral pattern recognition',
        'Device fingerprinting',
        'Velocity checking',
        'Network analysis',
      ],
      metrics: {
        fraudReduction: '85%',
        automation: '95%',
        coverage: '24/7',
      },
    },
    {
      title: 'Risk Assessment',
      description: 'Intelligent risk scoring with customizable rules',
      features: [
        'Dynamic risk scoring',
        'Custom rule engine',
        'Regulatory compliance',
        'Automated decisioning',
      ],
      metrics: {
        riskReduction: '70%',
        compliance: '100%',
        decisions: 'Instant',
      },
    },
  ]

  const securityFeatures = [
    {
      icon: <FiLock />,
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using industry-standard protocols',
    },
    {
      icon: <FiShield />,
      title: 'PCI DSS Level 1',
      description: 'Highest level of payment card industry data security standard compliance',
    },
    {
      icon: <FiDatabase />,
      title: 'Tokenization',
      description: 'Sensitive data replaced with non-sensitive tokens for enhanced security',
    },
    {
      icon: <FiActivity />,
      title: '3D Secure 2.0',
      description: 'Advanced authentication protocol for secure online transactions',
    },
    {
      icon: <FiGlobe />,
      title: 'Regional Compliance',
      description: 'Compliant with SAMA, UAE Central Bank, and other regional regulations',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring with threat detection and response',
    },
  ]

  const performanceMetrics = [
    { metric: 'API Response Time', value: '<50ms', description: 'Average response time' },
    { metric: 'Uptime', value: '99.99%', description: 'System availability' },
    { metric: 'Transaction Success Rate', value: '99.9%', description: 'Successful processing' },
    { metric: 'Fraud Detection', value: '<100ms', description: 'Real-time analysis' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-primary-teal pt-20 pb-16">
        {/* Background Pattern */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <nav className="text-blue-200 mb-8">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span>Technology</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Technology That Powers Innovation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Built on cutting-edge infrastructure with AI at its core, designed for scale and security
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20 bg-white -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A robust, scalable architecture built for the demands of modern payment processing
            </p>
          </motion.div>

          <div className="space-y-8">
            {techStack.map((layer, index) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${layer.color} text-white`}>
                    {layer.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {layer.layer}
                    </h3>
                    <p className="text-gray-600 mb-4">{layer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              AI Capabilities Deep Dive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform delivers intelligent insights and automated decision-making
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
              >
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(capability.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-primary-teal">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bank-grade security with comprehensive compliance coverage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-teal/10 text-primary-teal rounded-xl 
                              flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(feature.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time performance data from our global infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl font-bold text-primary-teal mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {metric.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              API & Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developer-friendly APIs and comprehensive integration tools for seamless implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-xl 
                            flex items-center justify-center mx-auto mb-4">
                <FiCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">RESTful APIs</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive REST APIs with detailed documentation, code examples, and testing tools
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• Complete payment processing endpoints</li>
                <li>• Real-time webhook notifications</li>
                <li>• Advanced filtering and pagination</li>
                <li>• Rate limiting and security controls</li>
              </ul>
              <Link
                to="/docs"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue-dark transition-colors duration-200"
              >
                View API Docs
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-xl 
                            flex items-center justify-center mx-auto mb-4">
                <FiZap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">SDKs & Libraries</h3>
              <p className="text-gray-600 mb-6">
                Native SDKs for popular programming languages and frameworks for faster integration
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• JavaScript/Node.js SDK</li>
                <li>• PHP Laravel package</li>
                <li>• Python Django integration</li>
                <li>• Mobile SDKs (iOS/Android)</li>
              </ul>
              <Link
                to="/sdks"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue-dark transition-colors duration-200"
              >
                Download SDKs
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl 
                            flex items-center justify-center mx-auto mb-4">
                <FiActivity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Testing Environment</h3>
              <p className="text-gray-600 mb-6">
                Full-featured sandbox environment for testing integrations with realistic data
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• Test payment scenarios</li>
                <li>• Mock bank responses</li>
                <li>• Fraud simulation tools</li>
                <li>• API testing interface</li>
              </ul>
              <Link
                to="/sandbox"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue-dark transition-colors duration-200"
              >
                Access Sandbox
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Experience Our Technology?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              See our technology in action with a personalized demo and discover how 
              our AI-powered platform can transform your payment operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-blue bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Schedule Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-200"
              >
                Contact Engineering
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Technology