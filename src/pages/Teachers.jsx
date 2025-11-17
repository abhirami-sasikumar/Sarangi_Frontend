import React from 'react'
// Assuming TeacherCard is updated to use the custom palette
import TeacherCard from '../components/TeacherCard' 

const teachers = [
  // Expanded data for better demo
  { name: 'Rajeswari Biju', specialization: 'Carnatic Vocal', experience: 20, initials: 'RB', bio: 'A master vocalist and composer, leading the Carnatic vocal department since 2005.' },
  { name: 'Bhadra Sarangi', specialization: 'Violin', experience: 15, initials: 'BS', bio: 'Specializes in bowing techniques and performance readiness, fostering student confidence.' },
  { name: 'Vimal Kumar', specialization: 'Tabla & Rhythm', experience: 18, initials: 'VK', bio: 'Expert in both North and South Indian percussion theory and practical application.' },
]

export default function Teachers() {
  // Key Changes: Typography and color updates
  return (
    <div className="bg-light-saffron py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        <h2 className="font-serif-traditional text-5xl text-maroon tracking-tight mb-4 border-b-4 border-saffron w-fit pb-2">
          Our Expert Gurus
        </h2>
        <p className="text-gray-600 text-xl mt-4 max-w-3xl">
          Learn from experienced masters dedicated to passing down authentic traditional knowledge.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TeacherCard must be updated with the custom color palette */}
          {teachers.map((t, i) => (
            <TeacherCard key={i} teacher={t} />
          ))}
        </div>

      </div>
    </div>
  )
}