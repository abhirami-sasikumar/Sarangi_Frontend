import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
// Ensure you have custom color classes (maroon, saffron, sand, etc.) defined in your Tailwind config or CSS.

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Updated background to use custom sand color palette for consistency
    <footer className="bg-gradient-to-b from-sand to-light-saffron border-t border-maroon/20 relative overflow-hidden">
      
      {/* Floating Musical Notes - Now using saffron color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-saffron opacity-20" // Changed color
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {["♫", "♪", "♩", "♬"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* School Info & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-maroon 
                            shadow-md flex items-center justify-center text-white font-bold text-xl 
                            border-2 border-white">
                🎵
              </div>
              <div>
                <h3 className="font-serif-traditional text-2xl font-bold text-maroon">
                  Sarangi School of Music
                </h3>
                <p className="text-sm text-saffron font-medium"> 
                  Traditional Arts Education Since 2000
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
              For over two decades, **Sarangi School** has been nurturing artistic talent through 
              traditional in-person teaching methods. Join us in preserving and promoting 
              Kerala's rich cultural heritage.
            </p>

            {/* Contact Details - Icons use maroon, text is clean gray */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-maroon flex-shrink-0" />
                <div>
                  <p className="font-medium">Keraladithyapuram, Powdikonam</p>
                  <p className="text-gray-600">Thiruvananthapuram — 695008</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-maroon flex-shrink-0" />
                <a 
                  href="tel:+919496232325" 
                  className="hover:text-saffron transition-colors duration-300 font-medium"
                >
                  +91 94962 32325
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaClock className="text-maroon flex-shrink-0" />
                <div>
                  <p className="font-medium">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-maroon flex-shrink-0" />
                <a 
                  href="mailto:info@sarangischool.com" 
                  className="hover:text-saffron transition-colors duration-300"
                >
                  info@sarangischool.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif-traditional font-semibold text-lg text-maroon mb-4 border-b border-saffron/50 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/courses", label: "Courses" },
                { path: "/teachers", label: "Our Teachers" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-700 hover:text-saffron transition-all duration-300 
                             hover:translate-x-1 hover:font-medium flex items-center gap-2 group"
                  >
                    {/* Updated bullet point color */}
                    <span className="w-1.5 h-1.5 bg-maroon rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses & Social */}
          <div>
            <h4 className="font-serif-traditional font-semibold text-lg text-maroon mb-4 border-b border-saffron/50 pb-2">Our Disciplines</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                "Carnatic Vocal",
                "Violin", 
                "Tabla",
                "Keyboard",
                "Mridangam",
                "Dance",
                "Art",
                "Theory"
              ].map((course) => (
                // Course tags using sand/saffron colors
                <span 
                  key={course}
                  className="text-xs bg-sand/70 text-maroon px-2 py-1 rounded 
                           hover:bg-saffron/50 hover:text-deep-maroon transition-colors duration-300 
                           text-center cursor-default font-medium"
                >
                  {course}
                </span>
              ))}
            </div>

            <h4 className="font-serif-traditional font-semibold text-lg text-maroon mb-4 border-b border-saffron/50 pb-2">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              {[
                { 
                  icon: FaInstagram, 
                  href: "#", 
                  color: "hover:text-pink-600",
                  label: "Instagram"
                },
                { 
                  icon: FaFacebook, 
                  href: "#", 
                  color: "hover:text-blue-600",
                  label: "Facebook"
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-2xl text-maroon ${social.color} transition-all duration-300 
                           transform hover:scale-110 hover:-translate-y-1 bg-white p-2 rounded-lg 
                           shadow-md hover:shadow-lg border border-maroon/10`}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic">
              Stay connected for events & updates
            </p>
          </div>
        </div>

        {/* Visit Campus CTA - Using maroon/saffron as primary CTA colors */}
        <div className="mt-12 p-6 bg-gradient-to-r from-maroon to-deep-maroon rounded-2xl text-center text-white shadow-xl">
          <h4 className="font-serif-traditional text-xl font-semibold mb-2 text-saffron">
            Ready to Begin Your Artistic Journey?
          </h4>
          <p className="mb-4 text-white/90 max-w-2xl mx-auto">
            Visit our campus in Thiruvananthapuram and experience **traditional learning** firsthand. 
            No prior experience required - all ages welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/visit"
              className="px-6 py-3 bg-saffron text-maroon rounded-lg font-bold 
                       hover:bg-saffron/90 transition-all duration-300 shadow-md 
                       transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-white"
            >
              🏫 Schedule Campus Visit
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold 
                       hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              📞 Contact Us
            </a>
          </div>
        </div>
      </div>

    {/* Bottom Bar */}
    <div className="border-t border-maroon/20 bg-sand/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center text-center">
          <div className="text-sm text-gray-600">
            <span>© {currentYear} Sarangi School of Music • All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}