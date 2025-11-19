import React from 'react'
import GalleryGrid from '../components/GalleryGrid' 

const gallery = [
  { title: 'Annual Concert 2024', category: 'Performance', url: '/images/sample1.jpg' },
  { title: 'Violin Practice', category: 'Classroom', url: '/images/sample2.jpg' },
  { title: 'Guru-Shishya', category: 'Lesson', url: '/images/sample3.jpg' },
  { title: 'Campus View', category: 'Facilities', url: '/images/sample4.jpg' },
  { title: 'Dance Recital', category: 'Performance', url: '/images/sample5.jpg' },
  { title: 'Art Exhibition', category: 'Student Work', url: '/images/sample6.jpg' },
  { title: 'Music Theory Class', category: 'Classroom', url: '/images/sample7.jpg' },
  { title: 'Festival Celebration', category: 'Event', url: '/images/sample8.jpg' }
]

export default function Gallery() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-light-yellow py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        <h2 className="font-serif-traditional text-5xl text-navy-blue tracking-tight mb-4 border-b-4 border-royal-blue w-fit pb-2">
          Gallery & Events
        </h2>
        <p className="text-gray-600 text-xl mt-4 max-w-3xl">
          A glimpse into the vibrant life and dedicated learning environment at Sarangi School.
        </p>

        <div className="mt-12">
          <GalleryGrid items={gallery} /> 
        </div>

        {/* Additional Gallery Info Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-navy-blue to-royal-blue rounded-2xl text-center text-white shadow-xl border-2 border-bright-yellow">
          <h3 className="font-serif-traditional text-2xl font-bold mb-4 text-bright-yellow">
            See Our Campus in Person
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Photos can't capture the full experience of our acoustic classrooms and vibrant learning atmosphere. 
            Schedule a campus tour to see why our offline approach makes all the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/visit"
              className="px-6 py-3 bg-bright-yellow text-navy-blue rounded-lg font-bold 
                       hover:bg-sunshine-yellow transition-all duration-300 shadow-md 
                       transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-white"
            >
              📸 Schedule Campus Tour
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold 
                       hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              🎵 Request More Photos
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}