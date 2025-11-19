import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './App.css'

const instruments = ["♫", "♪", "♩", "♬", "🎵", "🎶"]; 

export default function App() {
  return (
    <div className="relative min-h-screen"> 
      {/* Enhanced Background and Floating Notes - Keep as is (z-0) */}
      <div className="background-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="note"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 24}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          >
            {instruments[Math.floor(Math.random() * instruments.length)]}
          </div>
        ))}
      </div>

      {/* 1. Fixed Navbar on Top */}
      <header className="fixed top-0 w-full z-50"> 
        <Navbar />
      </header>

      {/* 2. Main Content Wrapper: Add margin/padding to account for fixed Navbar height */}
      <div className="pt-20 flex flex-col min-h-screen"> 
        
        {/* Main Content Area (Routes & Footer) */}
        <div className="relative z-10 flex-1 flex flex-col">
          <main className="flex-1 fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}