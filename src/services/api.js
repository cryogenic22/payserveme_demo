import { API_ENDPOINTS } from '../utils/constants'

class ApiService {
  constructor() {
    this.baseURL = API_ENDPOINTS.BASE_URL
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  // Set auth token
  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`
    } else {
      delete this.headers['Authorization']
    }
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // GET request
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' })
  }

  // POST request
  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // PUT request
  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // DELETE request
  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }

  // Auth methods
  login(credentials) {
    return this.post(API_ENDPOINTS.AUTH.LOGIN, credentials)
  }

  logout() {
    return this.post(API_ENDPOINTS.AUTH.LOGOUT)
  }

  register(userData) {
    return this.post(API_ENDPOINTS.AUTH.REGISTER, userData)
  }

  // Payment methods
  createPayment(paymentData) {
    return this.post(API_ENDPOINTS.PAYMENTS.CREATE, paymentData)
  }

  getPayments() {
    return this.get(API_ENDPOINTS.PAYMENTS.LIST)
  }

  getPaymentDetails(id) {
    return this.get(API_ENDPOINTS.PAYMENTS.DETAILS.replace(':id', id))
  }

  // User methods
  getUserProfile() {
    return this.get(API_ENDPOINTS.USERS.PROFILE)
  }

  updateUserProfile(userData) {
    return this.put(API_ENDPOINTS.USERS.UPDATE, userData)
  }
}

// Export singleton instance
export default new ApiService()