import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sand to-light-saffron border-t border-maroon/20 relative overflow-hidden">

    {/* Floating Musical Notes (ONLY 4, NO REPEAT) */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {[
    { symbol: "♫", top: "15%", left: "10%", size: "20px", delay: "0s" },
    { symbol: "♪", top: "30%", left: "80%", size: "18px", delay: "1s" },
    { symbol: "♩", top: "65%", left: "20%", size: "22px", delay: "2s" },
    { symbol: "♬", top: "75%", left: "70%", size: "19px", delay: "3s" },
  ].map((item, i) => (
    <div
      key={i}
      className="absolute text-saffron opacity-20"
      style={{
        top: item.top,
        left: item.left,
        fontSize: item.size,
        animationDelay: item.delay,
      }}
    >
      {item.symbol}
    </div>
  ))}
</div>


      <div className="container mx-auto px-4 py-12 relative z-10">

        {/* CENTERED CONTENT */}
        <div className="flex flex-col items-center text-center gap-6">

          {/* Logo + Title */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron to-maroon 
                            shadow-md flex items-center justify-center text-white font-bold text-2xl 
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

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed max-w-md">
            For over two decades, Sarangi School has been nurturing artistic talent
            through traditional in-person teaching methods. Join us in preserving
            and promoting Kerala's rich cultural heritage.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 text-sm">

            <div className="flex items-center justify-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-maroon flex-shrink-0" />
              <div>
                <p className="font-medium">Keraladithyapuram, Powdikonam</p>
                <p className="text-gray-600">Thiruvananthapuram — 695008</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-maroon flex-shrink-0" />
              <a
                href="tel:+919496232325"
                className="hover:text-saffron transition-colors duration-300 font-medium"
              >
                +91 94962 32325
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-maroon/20 bg-sand/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center text-center">
            <p className="text-sm text-gray-600">
              © {currentYear} Sarangi School of Music • All rights reserved
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
