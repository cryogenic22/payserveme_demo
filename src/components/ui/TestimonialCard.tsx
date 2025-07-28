import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { Testimonial } from '@/types'

interface TestimonialCardProps extends Testimonial {
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  clientName,
  clientTitle,
  company,
  quote,
  metric,
  logo,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`card ${className}`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 text-warning fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-secondary-gray mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Metric highlight */}
      {metric && (
        <div className="mb-4">
          <span className="badge badge-success text-sm font-semibold">
            {metric}
          </span>
        </div>
      )}

      {/* Client info */}
      <div className="flex items-center gap-4">
        {logo && (
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-8 h-8 object-contain"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-secondary-dark-gray">
            {clientName}
          </div>
          <div className="text-sm text-secondary-gray">
            {clientTitle} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard