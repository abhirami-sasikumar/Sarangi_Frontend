import React from 'react'
import GalleryGrid from '../components/GalleryGrid' 

const gallery = [
  // Placeholder data - replace URLs with your actual image paths in your public/ or assets/ folder
  { title: 'Annual Concert 2024', category: 'Performance', url: '/images/sample1.jpg' },
  { title: 'Violin Practice', category: 'Classroom', url: '/images/sample2.jpg' },
  { title: 'Guru-Shishya Session', category: 'Lesson', url: '/images/sample3.jpg' },
  { title: 'Campus View', category: 'Facilities', url: '/images/sample4.jpg' },
  { title: 'Mural Art Class', category: 'Art', url: '/images/sample5.jpg' },
  { title: 'Rhythm Workshop', category: 'Workshop', url: '/images/sample6.jpg' }
]

export default function Gallery() {
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
          <GalleryGrid items={gallery} /> 
        </div>

      </div>
    </div>
  )
}