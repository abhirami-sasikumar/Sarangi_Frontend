import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
      border-2 border-royal-blue/20 hover:border-navy-blue transition-all duration-500 
      transform hover:-translate-y-2 relative overflow-hidden">

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-bright-yellow/0 to-royal-blue/0 
        group-hover:from-bright-yellow/20 group-hover:to-navy-blue/20 transition-all duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        {/* Course Icon */}
        <div className="text-3xl mb-4 text-royal-blue group-hover:scale-110 transition-transform duration-300">
          {course.icon || '🎵'}
        </div>

        <h3 className="font-serif-traditional text-xl font-bold text-navy-blue group-hover:text-royal-blue transition-colors duration-300">
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
                <div className="w-1.5 h-1.5 bg-royal-blue rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-navy-blue bg-light-yellow px-3 py-1 rounded-full border border-royal-blue/30">
            {course.duration || 'Flexible'}
          </span>

          <Link 
            to="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-royal-blue to-navy-blue 
                     text-white text-sm font-semibold shadow-md hover:shadow-lg 
                     transform hover:-translate-y-0.5 transition-all duration-300
                     hover:from-navy-blue hover:to-royal-blue flex items-center gap-2 border border-bright-yellow/30"
          >
            <span>Learn More</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}