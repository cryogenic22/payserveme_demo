import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

// Simple translations object
const translations = {
  en: {
    nav: {
      getStarted: 'Get Started'
    },
    footer: {
      company: 'Company',
      solutions: 'Solutions', 
      resources: 'Resources',
      support: 'Support',
      copyright: '© 2024 PayServeMe. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    }
  },
  ar: {
    nav: {
      getStarted: 'ابدأ الآن'
    },
    footer: {
      company: 'الشركة',
      solutions: 'الحلول',
      resources: 'الموارد', 
      support: 'الدعم',
      copyright: '© 2024 PayServeMe. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة'
    }
  }
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    dir: language === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}