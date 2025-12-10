import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";

// Musical notes for floating aesthetic
const instruments = ["♫", "♪", "♩", "♬", "🎵", "🎶"];

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Enhanced Background (Uses App.css styles) */}
      <div className="background-overlay" />
      
      {/* Improved Floating Notes */}
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

      {/* Navbar is fixed, so it needs to be outside the main scrolling area */}
      <Navbar /> 

      {/* Main Content: We add pt-24 here to push content below the fixed Navbar */}
      <div className="relative z-10 flex-1 flex flex-col">
        <main className="flex-1 fade-in pt-24"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
             {/* You may add a route for /anniversary or /visit if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  )
}