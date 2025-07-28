import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDollarSign } from 'react-icons/fi'
import Button from '../ui/Button'
import { NavLink } from '../../types'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Technology', href: '/technology' },
    { label: 'About Us', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:opacity-90 transition-all duration-200"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue via-primary-blue to-primary-teal rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                <FiDollarSign className="text-white text-xl font-bold" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-blue to-primary-teal rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                PayServeMe
              </span>
              <span className="text-xs text-primary-blue font-medium leading-none">
                Financial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-2 font-medium transition-all duration-200 group ${
                  isActive(link.href)
                    ? 'text-primary-blue'
                    : 'text-gray-700 hover:text-primary-blue'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-blue to-primary-teal transform transition-all duration-200 ${
                    isActive(link.href)
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* CTA Button */}
            <Button href="/contact" variant="primary" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-teal hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-6 space-y-1 bg-white/95 backdrop-blur-md">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 text-lg font-medium rounded-lg mx-2 transition-all duration-200 ${
                        isActive(link.href)
                          ? 'text-primary-teal bg-primary-blue/5 border-l-4 border-primary-teal'
                          : 'text-gray-700 hover:text-primary-teal hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 mt-6 mx-2 border-t border-gray-200">
                  {/* Mobile CTA */}
                  <Button href="/contact" variant="primary" className="w-full shadow-md hover:shadow-lg transition-all duration-200">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header