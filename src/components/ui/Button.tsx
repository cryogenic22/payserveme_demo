import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ButtonProps } from '@/types'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  disabled = false,
  loading = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  className = '',
}) => {
  const baseClasses = 'btn focus-visible'
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-secondary',
  }

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim()

  const content = (
    <>
      {loading ? (
        <div className="spinner w-5 h-5" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span>{icon}</span>}
        </>
      )}
    </>
  )

  if (href) {
    // External link
    if (href.startsWith('http')) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      )
    }

    // Internal link
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}

export default Button