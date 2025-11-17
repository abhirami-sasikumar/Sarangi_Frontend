import React from 'react'

export default function Timeline({ events = [] }) {
  // Key Changes: amber/rose -> saffron/maroon
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 
                    w-1 bg-gradient-to-b from-saffron to-maroon/70 rounded-full 
                    shadow-lg"></div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-start 
                                    group cursor-pointer">
            
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 
                          w-6 h-6 bg-white border-4 border-maroon rounded-full 
                          shadow-lg z-10 group-hover:scale-125 group-hover:border-deep-maroon 
                          transition-all duration-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-saffron rounded-full group-hover:bg-maroon 
                           transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 w-full md:w-5/12 
                           ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} 
                           transform group-hover:-translate-y-1 transition-transform duration-300`}>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                           border border-sand group-hover:border-light-saffron 
                           transition-all duration-500 relative overflow-hidden">
                
                {/* Year badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full 
                              bg-gradient-to-r from-saffron to-maroon text-white 
                              text-sm font-bold shadow-md mb-3">
                  {event.year}
                </div>

                <h3 className="font-serif-traditional text-lg font-bold text-maroon mb-2 
                             group-hover:text-deep-maroon transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {event.desc}
                </p>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/0 to-maroon/0 
                              group-hover:from-saffron/30 group-hover:to-maroon/30 
                              transition-all duration-500 rounded-2xl"></div>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-2/12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}