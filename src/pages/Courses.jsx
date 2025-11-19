import React from 'react'
import CourseCard from '../components/CourseCard' 

const courses = [
  { title: 'Carnatic Vocal', description: 'Classical vocal training from basics to advanced, focusing on raga and tala.', duration: '1 year', icon: '🎤', features: ['Daily practice routines', 'Stage exposure', 'Certification'] },
  { title: 'Violin', description: 'Carnatic violin training with practical bowing exercises and finger placement drills.', duration: '1 year', icon: '🎻', features: ['One-on-one sessions', 'Ensemble training', 'Advanced techniques'] },
  { title: 'Tabla', description: 'North Indian percussion focusing on rhythm mastery and traditional compositions (kaidas and relas).', duration: '6 months', icon: '🥁', features: ['Rhythm theory', 'Solo performance prep', 'Practice material'] },
  { title: 'Mridangam', description: 'South Indian classical percussion following the traditional Guru-Shishya method.', duration: '1 year', icon: '🎯', features: ['Hands-on correction', 'Concert accompaniment', 'Graded syllabus'] },
  { title: 'Keyboard', description: 'Modern keyboard lessons with strong foundation in music theory and classical principles.', duration: '1 year', icon: '🎹', features: ['Music notation', 'Chord progressions', 'Performance skills'] },
  { title: 'Bharatanatyam', description: 'Classical Indian dance training focusing on expression, rhythm, and technique.', duration: '2 years', icon: '💃', features: ['Adavus training', 'Abhinaya', 'Stage performances'] },
  { title: 'Art & Drawing', description: 'Traditional Kerala mural art and contemporary drawing techniques.', duration: '1 year', icon: '🎨', features: ['Mural techniques', 'Portrait drawing', 'Color theory'] },
  { title: 'Music Theory', description: 'Comprehensive understanding of Indian and Western music theory fundamentals.', duration: '6 months', icon: '📚', features: ['Notation reading', 'Scale theory', 'Composition basics'] },
]

export default function Courses() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-light-yellow py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        <h2 className="font-serif-traditional text-5xl text-navy-blue tracking-tight mb-4 border-b-4 border-royal-blue w-fit pb-2">
          Our Classroom Courses
        </h2>
        <p className="text-gray-600 text-xl mt-4 max-w-3xl">
          Select from our structured, in-person programs designed for deep artistic immersion and skill building.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c, i) => (
            <CourseCard key={i} course={c} /> 
          ))}
        </div>

        {/* Additional Call-to-Action Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-navy-blue to-royal-blue rounded-2xl text-center text-white shadow-xl border-2 border-bright-yellow">
          <h3 className="font-serif-traditional text-2xl font-bold mb-4 text-bright-yellow">
            Not Sure Which Course is Right for You?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Visit our campus for a free consultation and trial class. Our experienced teachers will help you choose the perfect course based on your interests and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/visit"
              className="px-6 py-3 bg-bright-yellow text-navy-blue rounded-lg font-bold 
                       hover:bg-sunshine-yellow transition-all duration-300 shadow-md 
                       transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-white"
            >
              🎵 Schedule Trial Class
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold 
                       hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              📞 Speak with Advisor
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}