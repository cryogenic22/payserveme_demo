// Application constants

export const APP_NAME = 'PayServeMe'

export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  PAYMENTS: {
    CREATE: '/payments/create',
    LIST: '/payments',
    DETAILS: '/payments/:id',
    UPDATE: '/payments/:id',
    DELETE: '/payments/:id',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
    DELETE: '/users/delete',
  },
}

export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'debit_card',
  PAYPAL: 'paypal',
  BANK_TRANSFER: 'bank_transfer',
  CRYPTO: 'cryptocurrency',
}

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
}

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.',
  PAYMENT_FAILED: 'Payment processing failed. Please try again.',
  VALIDATION_ERROR: 'Please check your input and try again.',
}

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in!',
  PAYMENT_SUCCESS: 'Payment processed successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_RESET: 'Password reset link sent to your email.',
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  PAYMENTS: '/payments',
  SETTINGS: '/settings',
}