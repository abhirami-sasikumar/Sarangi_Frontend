import React from 'react'
// Assuming GalleryGrid is updated to use the custom palette
import GalleryGrid from '../components/GalleryGrid' 

const gallery = [
  // Placeholder data update
  { title: 'Annual Concert 2024', category: 'Performance', url: '/images/sample1.jpg' },
  { title: 'Violin Practice', category: 'Classroom', url: '/images/sample2.jpg' },
  { title: 'Guru-Shishya', category: 'Lesson', url: '/images/sample3.jpg' },
  { title: 'Campus View', category: 'Facilities', url: '/images/sample4.jpg' }
]

export default function Gallery() {
  // Key Changes: Typography and color updates
  return (
    <div className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        <h2 className="font-serif-traditional text-5xl text-maroon tracking-tight mb-4 border-b-4 border-saffron w-fit pb-2">
          Gallery & Events
        </h2>
        <p className="text-gray-600 text-xl mt-4 max-w-3xl">
          A glimpse into the vibrant life and dedicated learning environment at Sarangi School.
        </p>

        <div className="mt-12">
          {/* GalleryGrid must be updated with the custom color palette */}
          <GalleryGrid items={gallery} /> 
        </div>

      </div>
    </div>
  )
}