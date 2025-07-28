import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BaseProps } from '@/types'

interface LayoutProps extends BaseProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout