import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-blue to-royal-blue border-t border-bright-yellow/20 relative overflow-hidden">
      
      {/* Floating Musical Notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-bright-yellow opacity-20"
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bright-yellow to-royal-blue 
                            shadow-md flex items-center justify-center text-white font-bold text-xl 
                            border-2 border-white">
                🎵
              </div>
              <div>
                <h3 className="font-serif-traditional text-2xl font-bold text-bright-yellow">
                  Sarangi School of Music
                </h3>
                <p className="text-sm text-blue-200 font-medium"> 
                  Traditional Arts Education Since 2000
                </p>
              </div>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-md">
              For over two decades, **Sarangi School** has been nurturing artistic talent through 
              traditional in-person teaching methods. Join us in preserving and promoting 
              Kerala's rich cultural heritage.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-blue-100">
                <FaMapMarkerAlt className="text-bright-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-bright-yellow">Our Campus</p>
                  <p className="text-blue-200">Keraladithyapuram, Powdikonam, Thiruvananthapuram — 695008</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-blue-100">
                <FaPhoneAlt className="text-bright-yellow flex-shrink-0" />
                <a 
                  href="tel:+919496232325" 
                  className="hover:text-bright-yellow transition-colors duration-300 font-medium"
                >
                  +91 94962 32325
                </a>
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <FaClock className="text-bright-yellow flex-shrink-0" />
                <div>
                  <p className="font-medium">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-blue-200">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <FaEnvelope className="text-bright-yellow flex-shrink-0" />
                <a 
                  href="mailto:info@sarangischool.com" 
                  className="hover:text-bright-yellow transition-colors duration-300"
                >
                  info@sarangischool.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif-traditional font-semibold text-lg text-bright-yellow mb-4 border-b border-blue-400/50 pb-2">Quick Links</h4>
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
                    className="text-blue-100 hover:text-bright-yellow transition-all duration-300 
                             hover:translate-x-1 hover:font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-bright-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses & Social */}
          <div>
            <h4 className="font-serif-traditional font-semibold text-lg text-bright-yellow mb-4 border-b border-blue-400/50 pb-2">Our Disciplines</h4>
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
                <span 
                  key={course}
                  className="text-xs bg-blue-500/20 text-blue-100 px-2 py-1 rounded 
                           hover:bg-bright-yellow/50 hover:text-navy-blue transition-colors duration-300 
                           text-center cursor-default font-medium border border-blue-400/30"
                >
                  {course}
                </span>
              ))}
            </div>

            <h4 className="font-serif-traditional font-semibold text-lg text-bright-yellow mb-4 border-b border-blue-400/50 pb-2">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              {[
                { 
                  icon: FaInstagram, 
                  href: "#", 
                  color: "hover:text-pink-400",
                  label: "Instagram"
                },
                { 
                  icon: FaFacebook, 
                  href: "#", 
                  color: "hover:text-blue-300",
                  label: "Facebook"
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-2xl text-bright-yellow ${social.color} transition-all duration-300 
                           transform hover:scale-110 hover:-translate-y-1 bg-blue-500/20 p-2 rounded-lg 
                           shadow-md hover:shadow-lg border border-blue-400/30`}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <p className="text-sm text-blue-300 italic">
              Stay connected for events & updates
            </p>
          </div>
        </div>

        {/* Visit Campus CTA */}
        <div className="mt-12 p-6 bg-gradient-to-r from-bright-yellow to-sunshine-yellow rounded-2xl text-center text-navy-blue shadow-xl border-2 border-white">
          <h4 className="font-serif-traditional text-xl font-semibold mb-2">
            Ready to Begin Your Artistic Journey?
          </h4>
          <p className="mb-4 text-navy-blue/90 max-w-2xl mx-auto">
            Visit our campus in Thiruvananthapuram and experience **traditional learning** firsthand. 
            No prior experience required - all ages welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/visit"
              className="px-6 py-3 bg-navy-blue text-white rounded-lg font-bold 
                       hover:bg-royal-blue transition-all duration-300 shadow-md 
                       transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-white"
            >
              🏫 Schedule Campus Visit
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 border-2 border-navy-blue text-navy-blue rounded-lg font-bold 
                       hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2 bg-white"
            >
              📞 Contact Us
            </a>
          </div>
        </div>
      </div>

    {/* Bottom Bar */}
    <div className="border-t border-blue-400/20 bg-navy-blue/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center text-center">
          <div className="text-sm text-blue-300">
            <span>© {currentYear} Sarangi School of Music • All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}