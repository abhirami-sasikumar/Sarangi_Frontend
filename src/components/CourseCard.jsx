import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  // Key Changes: amber/rose -> saffron/maroon/sand
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
      border border-sand hover:border-light-saffron transition-all duration-500 
      transform hover:-translate-y-2 relative overflow-hidden">

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/0 to-maroon/0 
        group-hover:from-saffron/50 group-hover:to-maroon/50 transition-all duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        {/* Course Icon */}
        <div className="text-3xl mb-4 text-saffron group-hover:scale-110 transition-transform duration-300">
          {course.icon || '🎵'}
        </div>

        <h3 className="font-serif-traditional text-xl font-bold text-maroon group-hover:text-deep-maroon transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed text-sm">
          {course.description}
        </p>

        {/* Features List */}
        {course.features && (
          <div className="mt-4 space-y-2">
            {course.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-saffron rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-maroon bg-light-saffron px-3 py-1 rounded-full">
            {course.duration || 'Flexible'}
          </span>

          <Link 
            to="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-maroon to-deep-maroon 
                     text-white text-sm font-semibold shadow-md hover:shadow-lg 
                     transform hover:-translate-y-0.5 transition-all duration-300
                     hover:from-deep-maroon hover:to-maroon flex items-center gap-2"
          >
            <span>Learn More</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}