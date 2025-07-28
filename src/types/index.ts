// Common types
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  benefits?: string[]
  link: string
}

// Navigation types
export interface NavLink {
  label: string
  href: string
  dropdown?: NavLink[]
}

// Team member types
export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  linkedin?: string
}

// Testimonial types
export interface Testimonial {
  id: string
  clientName: string
  clientTitle: string
  company: string
  logo?: string
  quote: string
  metric?: string
}

// Case study types
export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    label: string
    value: string
  }[]
  image?: string
}

// Contact form types
export interface ContactFormData {
  fullName: string
  companyName: string
  email: string
  phone?: string
  country: string
  subject: string
  message: string
  preferredContact: 'email' | 'phone'
}

// Button types
export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  onClick?: () => void
  href?: string
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

// Card types
export interface CardProps extends BaseProps {
  title?: string
  description?: string
  image?: string
  hover?: boolean
  onClick?: () => void
}

// Modal types
export interface ModalProps extends BaseProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// Alert types
export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface AlertProps extends BaseProps {
  type: AlertType
  message: string
  onClose?: () => void
  dismissible?: boolean
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    message: string
    code?: string
  }
}

// Language types
export type Language = 'en' | 'ar'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}