/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useCallback } from 'react'
import api from '../services/api'
import useLocalStorage from '../hooks/useLocalStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [token, setToken] = useLocalStorage('authToken', null)

  const loadUser = useCallback(async () => {
    try {
      const userData = await api.getUserProfile()
      setUser(userData)
    } catch (error) {
      console.error('Failed to load user:', error)
      setToken(null)
      api.setAuthToken(null)
    } finally {
      setLoading(false)
    }
  }, [setToken])

  useEffect(() => {
    // Check if user is logged in on mount
    if (token) {
      api.setAuthToken(token)
      loadUser()
    } else {
      setLoading(false)
    }
  }, [token, loadUser])

  const login = async (email, password) => {
    try {
      setError(null)
      const response = await api.login({ email, password })
      const { token, user } = response
      
      setToken(token)
      api.setAuthToken(token)
      setUser(user)
      
      return { success: true }
    } catch (error) {
      setError(error.message)
      return { success: false, error: error.message }
    }
  }

  const register = async (userData) => {
    try {
      setError(null)
      const response = await api.register(userData)
      const { token, user } = response
      
      setToken(token)
      api.setAuthToken(token)
      setUser(user)
      
      return { success: true }
    } catch (error) {
      setError(error.message)
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await api.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setToken(null)
      api.setAuthToken(null)
      setUser(null)
    }
  }

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}