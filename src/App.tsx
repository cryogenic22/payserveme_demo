// import React from 'react' // Removed unused import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Technology from './pages/Technology'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App