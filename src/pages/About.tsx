import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { useLanguage } from '../context/LanguageContext' // Removed unused import

// Icons
const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary-teal" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const TrophyIcon = () => (
  <svg className="w-8 h-8 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const GlobalIcon = () => (
  <svg className="w-8 h-8 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const About: React.FC = () => {
  // const { t } = useLanguage() // Removed unused variable

  const milestones = [
    {
      year: "2020",
      title: "PayServeMe Founded",
      description: "Established in Dubai with a vision to revolutionize payments in the Middle East",
      highlight: true
    },
    {
      year: "2021",
      title: "First Million Transactions",
      description: "Processed our first million transactions across UAE and Saudi Arabia"
    },
    {
      year: "2022",
      title: "Regional Expansion",
      description: "Expanded to Qatar, Kuwait, Oman, and Bahrain with localized solutions"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched advanced AI-powered fraud detection and analytics platform"
    },
    {
      year: "2024",
      title: "Enterprise Growth",
      description: "Secured partnerships with major regional banks and enterprises"
    }
  ]

  const leadership = [
    {
      name: "Ahmed Al-Rashid",
      position: "Chief Executive Officer",
      bio: "Former VP of Digital Banking at Emirates NBD with 15+ years in fintech. Led digital transformation initiatives across MENA region.",
      image: "/images/team/ahmed-al-rashid.jpg",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      bio: "Ex-Amazon Web Services architect specializing in scalable payment systems. PhD in Computer Science from MIT.",
      image: "/images/team/sarah-johnson.jpg",
      linkedin: "#"
    },
    {
      name: "Omar Hassan",
      position: "Chief Operating Officer",
      bio: "Former McKinsey consultant with expertise in scaling fintech operations. MBA from INSEAD.",
      image: "/images/team/omar-hassan.jpg",
      linkedin: "#"
    },
    {
      name: "Fatima Al-Zahra",
      position: "Chief Compliance Officer",
      bio: "Former Central Bank of UAE regulatory specialist. Expert in regional financial regulations and compliance.",
      image: "/images/team/fatima-al-zahra.jpg",
      linkedin: "#"
    }
  ]

  const values = [
    {
      icon: <UsersIcon />,
      title: "Customer First",
      description: "Our clients' success is our primary focus, driving every decision and innovation we make"
    },
    {
      icon: <TrophyIcon />,
      title: "Desire to be the Best",
      description: "We continuously strive for excellence and leadership in banking and payment technology"
    },
    {
      icon: <CheckIcon />,
      title: "Highly Passionate",
      description: "We bring enthusiasm and dedication to every project, partnership, and challenge"
    },
    {
      icon: <GlobalIcon />,
      title: "Honesty & Integrity",
      description: "We build trust through transparency, ethical practices, and reliable partnerships"
    }
  ]

  const stats = [
    { value: "500M+", label: "Transactions Processed" },
    { value: "15,000+", label: "Active Merchants" },
    { value: "8", label: "Countries Served" },
    { value: "99.9%", label: "System Uptime" }
  ]

  const certifications = [
    "PCI DSS Level 1",
    "ISO 27001",
    "SAMA Approved",
    "UAE Central Bank Licensed",
    "GDPR Compliant",
    "SOC 2 Type II"
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
              Building Strong Partnerships in Banking & Payment Technology
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              A UAE-based technology services company in Dubai, committed to providing professional 
              services and support to clients in the banking and payment industry
            </p>
            <nav className="text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span>About Us</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Born from the vision to transform how businesses in the Middle East handle payments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg mx-auto text-gray-700"
            >
              <p className="text-xl leading-relaxed mb-6">
                PayServeMe is a UAE-based technology services company established in Dubai with a clear 
                vision: to build strong partnerships with clients in the banking and payment industry. 
                Located at Office 201-4, Al Masood Building in Deira, Dubai, we are strategically 
                positioned to serve the region's growing financial technology sector.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our mission is to provide our clients with the best professional services and support 
                in the rapidly evolving landscape of banking and payment technology. We understand that 
                success in this industry requires not just advanced technology, but also deep partnerships 
                built on trust, expertise, and unwavering commitment to excellence.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                From payment platforms and banking solutions to intelligent automation and cloud 
                infrastructure, we deliver comprehensive technology services that enable our clients 
                to thrive in the digital economy. Our expertise spans UI/UX design, mobility solutions, 
                POS terminal management, e-commerce payment gateways, and quality engineering.
              </p>

              <p className="text-lg leading-relaxed">
                As a Dubai-based company, we combine global technology standards with local market 
                knowledge, ensuring our solutions are perfectly aligned with the unique requirements 
                of the Middle Eastern banking and payment landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                To provide our clients the best professional services and support in banking and 
                payment technology, fostering innovation and excellence in the financial industry.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build a strong partnership with our clients in banking and payment industry, 
                becoming their trusted technology partner for sustainable growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-blue to-primary-teal p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Why the Middle East?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3">Fastest growing digital economy globally</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3">Young, tech-savvy population driving innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3">Strong government support for fintech</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3">Strategic location connecting East and West</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3">Unique regulatory and cultural requirements</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders from top financial institutions and technology companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-primary-blue to-primary-teal"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-primary-teal font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  <a 
                    href={leader.linkedin}
                    className="inline-flex items-center text-primary-blue hover:text-primary-blue-dark transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform payments in the Middle East
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-teal"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start mb-12"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                    milestone.highlight ? 'bg-primary-teal' : 'bg-primary-blue'
                  }`}>
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="ml-8">
                    <div className="text-sm text-primary-teal font-semibold mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
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
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining the highest standards of security, compliance, and operational excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon />
                </div>
                <div className="text-sm font-medium text-gray-900">{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Experience the difference that intelligent payment technology can make for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-blue bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-200"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About