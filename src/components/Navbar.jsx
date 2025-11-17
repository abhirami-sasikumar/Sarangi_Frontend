import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const instruments = ["♫", "♪", "♩", "♬"];

const NavItem = ({ to, children, mobile = false }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-4 py-2 text-sm font-medium transition-all duration-300 
      ${isActive 
        ? "text-maroon font-semibold bg-light-saffron rounded-lg shadow-inner" 
        : "text-gray-700 hover:text-maroon hover:bg-amber-50"
      } 
      ${mobile ? "block w-full text-left" : "group"}`
    }
    onClick={mobile ? () => {} : undefined}
  >
    {children}
    
    {/* Desktop underline animation (Saffron/Maroon gradient) */}
    {!mobile && (
      <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-saffron to-maroon 
                      transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
    )}
  </NavLink>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu AND the toggle button
      if (mobileOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest('.mobile-toggle-button')) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileOpen]);

  return (
    <header className="relative w-full z-50">
      {/* Floating Notes Behind Navbar (Uses App.css note styles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="note"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 6}s`,
              // Removed inline color for consistency with App.css. If you need multiple colors, define them in App.css classes.
            }}
          >
            {instruments[Math.floor(Math.random() * instruments.length)]}
          </div>
        ))}
      </div>

      {/* Navbar - Using sophisticated colors and styles */}
      <div className={`backdrop-blur-sm bg-sand/90 sticky top-0 w-full flex justify-between items-center py-4 px-4 md:px-16 z-10 transition-all duration-300 ${
        scrolled ? 'shadow-xl border-b border-saffron/30' : 'shadow-md'
      }`}>
        
        {/* Logo - More prominent and using saffron/maroon */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-saffron to-maroon
                          shadow-lg flex items-center justify-center text-white font-bold text-xl md:text-2xl 
                          border-2 border-white/80 hover:scale-105 transition-transform duration-300">
            🎶
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl md:text-2xl font-serif-traditional font-bold text-maroon tracking-wider leading-tight">
              Sarangi School Of Music
            </h1>
            <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
              Thiruvananthapuram • Est. 2000
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/courses">Courses</NavItem>
          <NavItem to="/teachers">Teachers</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <Link
            to="/anniversary"
            className="ml-4 px-4 py-2.5 rounded-xl text-sm font-semibold 
                       bg-gradient-to-r from-saffron to-amber-700 text-white 
                       hover:from-amber-700 hover:to-saffron transition-all duration-300 
                       shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                       border border-saffron/50"
          >
            🎉 25 Years
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            to="/anniversary"
            className="px-3 py-1.5 rounded-lg text-xs font-medium 
                       bg-gradient-to-r from-saffron to-amber-700 text-white 
                       hover:from-amber-700 hover:to-saffron transition-all duration-300 
                       shadow-md border border-saffron/50"
          >
            🎉 25
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
            className="text-gray-600 text-2xl focus:outline-none hover:text-maroon transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-light-saffron mobile-toggle-button"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-sand/95 backdrop-blur-lg shadow-xl w-full absolute left-0 top-full z-40 transition-all duration-300 mobile-menu-container ${
        mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="py-4 px-4 flex flex-col gap-1 border-t border-saffron/30">
          <NavItem to="/" mobile>Home</NavItem>
          <NavItem to="/about" mobile>About</NavItem>
          <NavItem to="/courses" mobile>Courses</NavItem>
          <NavItem to="/teachers" mobile>Teachers</NavItem>
          <NavItem to="/gallery" mobile>Gallery</NavItem>
          <NavItem to="/contact" mobile>Contact</NavItem>
          
          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-t border-saffron/30">
            <Link
              to="/visit"
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold 
                         bg-gradient-to-r from-maroon to-deep-maroon text-light-saffron
                         hover:from-deep-maroon hover:to-maroon transition-all duration-300 
                         shadow-md mb-2"
            >
              🏫 Visit Campus
            </Link>
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-2 rounded-lg text-sm font-medium 
                         border-2 border-saffron text-maroon
                         hover:bg-light-saffron transition-all duration-300"
            >
              📞 Call Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}