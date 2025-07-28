import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

interface ServiceCardProps {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  link: string
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`feature-card ${className}`}
    >
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-secondary-dark-gray mb-3">
        {title}
      </h3>
      <p className="text-secondary-gray mb-6 flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-primary-teal hover:text-primary-teal-dark 
                 font-medium transition-colors group"
      >
        Learn More
        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}

export default ServiceCard