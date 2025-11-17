import React from 'react'
// Assuming CourseCard is updated to use the custom palette
import CourseCard from '../components/CourseCard' 

const courses = [
  // Expanded data for better demo
  { title: 'Carnatic Vocal', description: 'Classical vocal training from basics to advanced, focusing on raga and tala.', duration: '1 year', icon: '🎤', features: ['Daily practice routines', 'Stage exposure', 'Certification'] },
  { title: 'Violin', description: 'Carnatic violin training with practical bowing exercises and finger placement drills.', duration: '1 year', icon: '🎻', features: ['One-on-one sessions', 'Ensemble training', 'Advanced techniques'] },
  { title: 'Tabla', description: 'North Indian percussion focusing on rhythm mastery and traditional compositions (kaidas and relas).', duration: '6 months', icon: '🥁', features: ['Rhythm theory', 'Solo performance prep', 'Practice material'] },
  { title: 'Mridangam', description: 'South Indian classical percussion following the traditional Guru-Shishya method.', duration: '1 year', icon: '🎯', features: ['Hands-on correction', 'Concert accompaniment', 'Graded syllabus'] },
]

export default function Courses() {
  // Key Changes: Typography and color updates
  return (
    <div className="bg-sand py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        <h2 className="font-serif-traditional text-5xl text-maroon tracking-tight mb-4 border-b-4 border-saffron w-fit pb-2">
          Our Classroom Courses
        </h2>
        <p className="text-gray-600 text-xl mt-4 max-w-3xl">
          Select from our structured, in-person programs designed for deep artistic immersion and skill building.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c, i) => (
            // CourseCard must be updated with the custom color palette
            <CourseCard key={i} course={c} /> 
          ))}
        </div>

      </div>
    </div>
  )
}