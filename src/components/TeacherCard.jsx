import React from 'react'

export default function TeacherCard({ teacher }) {
  // Key Changes: amber/rose -> saffron/maroon/sand
  return (
    <div className="group bg-white rounded-2xl p-6 text-center shadow-lg 
      border border-sand hover:border-light-saffron transition-all duration-500 
      transform hover:-translate-y-2 relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {/* Swapped colors for abstract blur */}
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-saffron/70 rounded-full blur-xl"></div>
        <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-maroon/70 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Teacher Avatar */}
        <div className="relative mx-auto mb-4">
          <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-sand to-light-saffron 
                        flex items-center justify-center text-maroon font-bold text-2xl shadow-lg 
                        group-hover:scale-105 transition-transform duration-300 border-4 border-white">
            {teacher.initials || '👨‍🏫'}
          </div>
          {/* Experience badge */}
          {teacher.experience && (
            // Badge color set to Saffron
            <div className="absolute -bottom-2 -right-2 bg-saffron text-maroon text-xs 
                          px-2 py-1 rounded-full font-bold shadow-md">
              {teacher.experience}+ yrs
            </div>
          )}
        </div>

        <h4 className="font-serif-traditional text-lg font-bold text-maroon group-hover:text-deep-maroon 
                     transition-colors duration-300 mb-1">
          {teacher.name}
        </h4>

        <p className="text-saffron text-sm font-medium mb-3">
          {teacher.specialization || teacher.instruments}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {teacher.bio || 'Experienced teacher with passion for traditional arts education.'}
        </p>

        {/* Specialties */}
        {teacher.specialties && (
          <div className="flex flex-wrap gap-1 justify-center mb-4">
            {teacher.specialties.slice(0, 3).map((specialty, index) => (
              // Specialty tags use light-saffron/maroon
              <span key={index} className="text-xs bg-light-saffron text-maroon 
                         px-2 py-1 rounded-full">
                {specialty}
              </span>
            ))}
          </div>
        )}

        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-maroon to-deep-maroon 
                         text-white text-sm font-semibold shadow-md hover:shadow-lg 
                         transform hover:-translate-y-0.5 transition-all duration-300
                         hover:from-deep-maroon hover:to-maroon w-full">
          View Profile
        </button>
      </div>
    </div>
  )
}