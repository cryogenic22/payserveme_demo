import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGlobe, 
  FiShield, 
  FiDollarSign
} from 'react-icons/fi'
import { 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram
} from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Leadership Team', href: '/about#team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press & Media', href: '/press' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Payment Processing', href: '/solutions#processing' },
        { label: 'AI Fraud Detection', href: '/solutions#fraud' },
        { label: 'Financial Inclusion', href: '/solutions#inclusion' },
        { label: 'Enterprise Solutions', href: '/solutions#enterprise' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { label: 'API Documentation', href: '/technology#api' },
        { label: 'SDKs & Libraries', href: '/technology#sdks' },
        { label: 'Integration Guides', href: '/resources' },
        { label: 'Testing Sandbox', href: '/technology#sandbox' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/contact' },
        { label: 'Contact Support', href: '/contact' },
        { label: 'Resource Center', href: '/resources' },
        { label: 'System Status', href: '/status' },
      ],
    },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/payserveme', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/payserveme', label: 'Twitter' },
    { icon: <FaFacebook />, href: 'https://facebook.com/payserveme', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://instagram.com/payserveme', label: 'Instagram' },
  ]

  const officeLocations = [
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Dubai International Financial Centre',
      phone: '+971 4 123 4567',
      isHeadquarters: true,
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Abdullah Financial District',
      phone: '+966 11 123 4567',
    },
    {
      city: 'Cairo',
      country: 'Egypt',
      address: 'New Administrative Capital',
      phone: '+20 2 123 4567',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="bg-secondary-dark-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-teal rounded-xl flex items-center justify-center shadow-lg">
                  <FiDollarSign className="text-white text-xl font-bold" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    PayServeMe
                  </span>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Financial Technology
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the digital payment revolution across the Middle East with cutting-edge AI-powered solutions, 
                regulatory compliance, and inclusive financial services designed for emerging markets.
              </p>

              {/* Quick Contact */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <FiMail className="text-primary-teal" />
                  <a href="mailto:contact@payserveme.com" className="hover:text-white transition-colors">
                    contact@payserveme.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <FiPhone className="text-primary-teal" />
                  <a href="tel:+97143691000" className="hover:text-white transition-colors">
                    +971 4 369 1000
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <FiGlobe className="text-primary-teal" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-lg mb-6 text-white border-b border-gray-700 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className="text-gray-400 hover:text-primary-teal transition-colors text-sm block"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-xl font-semibold mb-8 text-center text-white">
            Global Presence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((location) => (
              <div 
                key={location.city}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-primary-teal transition-colors group relative"
              >
                {location.isHeadquarters && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-teal text-white text-xs px-2 py-1 rounded-full font-medium">
                      HQ
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-primary-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white group-hover:text-primary-teal transition-colors">
                      {location.city}
                    </h4>
                    <p className="text-sm text-gray-400 mb-2">{location.country}</p>
                    <p className="text-xs text-gray-500 mb-3">{location.address}</p>
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <FiPhone />
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm order-2 lg:order-1">
              <span className="text-gray-400">© {currentYear} PayServeMe. All rights reserved.</span>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/privacy" 
                  className="text-gray-400 hover:text-primary-teal transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-primary-teal transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm mr-3">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-teal transition-all duration-300"
                  >
                    <span className="text-lg">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 text-xs text-gray-500 order-3">
              <div className="flex items-center gap-2">
                <FiShield className="text-primary-teal" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <FiGlobe className="text-primary-teal" />
                <span>Licensed in 12+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer