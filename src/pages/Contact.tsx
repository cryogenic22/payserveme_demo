import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { useLanguage } from '../context/LanguageContext' // Removed unused import

// Icons
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const SupportIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  country: string
  subject: string
  message: string
  businessType: string
  monthlyVolume: string
  interests: string[]
}

interface FormErrors {
  [key: string]: string
}

const Contact: React.FC = () => {
  // const { t } = useLanguage() // Removed unused variable
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
    businessType: '',
    monthlyVolume: '',
    interests: []
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <LocationIcon />,
      title: "Dubai Headquarters",
      details: [
        "Office 201-4, Al Masood Building",
        "Near Clock Tower, Deira",
        "Dubai, United Arab Emirates",
        "Strategic location in Dubai's business district"
      ]
    },
    {
      icon: <PhoneIcon />,
      title: "Phone Support",
      details: [
        "UAE: +971 4 294 7890",
        "Saudi Arabia: +966 11 455 6789",
        "Qatar: +974 4400 1234",
        "International: +971 4 294 7890"
      ]
    },
    {
      icon: <EmailIcon />,
      title: "Email Support",
      details: [
        "General Inquiries: admin@payserveme.com",
        "Sales: sales@payserveme.com",
        "Support: support@payserveme.com",
        "Business Partnerships: partners@payserveme.com"
      ]
    },
    {
      icon: <ClockIcon />,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 9:00 AM - 6:00 PM",
        "Friday: 9:00 AM - 1:00 PM",
        "Saturday: Closed",
        "24/7 Technical Support Available"
      ]
    }
  ]

  const supportChannels = [
    {
      icon: <ChatIcon />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: <PhoneIcon />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "Business Hours"
    },
    {
      icon: <SupportIcon />,
      title: "Support Portal",
      description: "Access help center and submit tickets",
      action: "Visit Portal",
      available: "24/7"
    }
  ]

  const offices = [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Office 201-4, Al Masood Building, Deira, Dubai, UAE",
      isHeadquarters: true
    },
    {
      city: "Riyadh",
      country: "Saudi Arabia",
      address: "King Fahd Road, Al Olaya District, Riyadh 12212"
    },
    {
      city: "Doha",
      country: "Qatar",
      address: "Qatar Financial Centre, QFC Tower 1, West Bay"
    },
    {
      city: "Abu Dhabi",
      country: "United Arab Emirates",
      address: "ADGM Square, Al Maryah Island"
    }
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        subject: '',
        message: '',
        businessType: '',
        monthlyVolume: '',
        interests: []
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-2xl mx-4"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon />
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your message has been received. Our team will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors"
            >
              Send Another Message
            </button>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Ready to revolutionize your banking and payment solutions? Our Dubai-based experts are here to help 
              you build stronger partnerships in the financial technology industry.
            </p>
            <nav className="text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span>Contact Us</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Quick Support Channels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Professional Services & Support
            </h2>
            <p className="text-xl text-gray-600">
              Experience our commitment to providing the best professional services in banking and payment technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-teal/10 text-primary-teal rounded-xl flex items-center justify-center mx-auto mb-6">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-sm text-gray-500 mb-6">Available: {channel.available}</p>
                <button className="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                          errors.company ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Phone and Country */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                          errors.country ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Country</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="QA">Qatar</option>
                        <option value="KW">Kuwait</option>
                        <option value="BH">Bahrain</option>
                        <option value="OM">Oman</option>
                        <option value="JO">Jordan</option>
                        <option value="LB">Lebanon</option>
                        <option value="EG">Egypt</option>
                        <option value="OTHER">Other</option>
                      </select>
                      {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                    </div>
                  </div>

                  {/* Business Type and Volume */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                      >
                        <option value="">Select Business Type</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="retail">Retail</option>
                        <option value="fintech">Fintech</option>
                        <option value="marketplace">Marketplace</option>
                        <option value="saas">SaaS</option>
                        <option value="nonprofit">Non-profit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="monthlyVolume" className="block text-sm font-semibold text-gray-700 mb-2">
                        Monthly Transaction Volume
                      </label>
                      <select
                        id="monthlyVolume"
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                      >
                        <option value="">Select Volume</option>
                        <option value="<10k">Less than $10,000</option>
                        <option value="10k-100k">$10,000 - $100,000</option>
                        <option value="100k-1m">$100,000 - $1,000,000</option>
                        <option value="1m-10m">$1,000,000 - $10,000,000</option>
                        <option value=">10m">More than $10,000,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your payment processing needs..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Payment Gateway',
                        'Mobile Payments',
                        'API Integration',
                        'Fraud Prevention',
                        'Analytics & Reporting',
                        'Enterprise Solutions',
                        'White-label Solutions',
                        'Partnership Opportunities'
                      ].map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleCheckboxChange(interest)}
                            className="rounded border-gray-300 text-primary-teal focus:ring-primary-teal"
                          />
                          <span className="ml-2 text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-blue text-white py-4 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-teal/10 text-primary-teal rounded-lg flex items-center justify-center mr-4">
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across the Middle East, we're always close to our customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                {office.isHeadquarters && (
                  <div className="bg-primary-teal text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Headquarters
                  </div>
                )}
                <div className="w-16 h-16 bg-primary-teal/10 text-primary-teal rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LocationIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 font-medium mb-3">{office.country}</p>
                <p className="text-gray-500 text-sm">{office.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600">
              Visit our Dubai headquarters at the heart of the financial district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center">
              <div className="text-center text-white">
                <LocationIcon />
                <h3 className="text-2xl font-bold mt-4 mb-2">Interactive Map</h3>
                <p className="text-blue-100">
                  Google Maps integration would be implemented here
                </p>
                <button className="mt-4 bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact