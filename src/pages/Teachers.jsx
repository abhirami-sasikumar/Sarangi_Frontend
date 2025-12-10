import React from 'react'
import TeacherCard from '../components/TeacherCard' 

// --- Data Definitions (UPDATED CONTENT) ---
const teachers = [
  { 
    name: 'Gana Ratnam Smt. Rema Devi', 
    specialization: 'Carnatic Vocal', 
    experience: 35, 
    initials: 'RD', 
    bio: 'The Principal Guru, trained in the prestigious Semmangudi tradition. She leads the vocal department with three decades of experience.',
    specialties: ['Kriti Analysis', 'Raga Alapana', 'Performance Prep']
  },
  { 
    name: 'Vidwan Harish P. Nair', 
    specialization: 'Mridangam & Percussion', 
    experience: 22, 
    initials: 'HN', 
    bio: 'A noted performer and expert in Laya Vinyasam and Konnakol, focusing on traditional rhythmic complexities.',
    specialties: ['Konnakol', 'Thani Avartanam', 'Ganjira']
  },
  { 
    name: 'Smt. Kavitha Menon', 
    specialization: 'Bharatanatyam', 
    experience: 16, 
    initials: 'KM', 
    bio: 'Trained in the Kalakshetra style, she focuses on purity of line, precision in Adavus, and emotional expression (Abhinaya).',
    specialties: ['Abhinaya', 'Nattuvangam', 'Adavu Practice']
  },
  { 
    name: 'Vaidyanathan Swami', 
    specialization: 'Kerala Violin & Theory', 
    experience: 28, 
    initials: 'VS', 
    bio: 'Specializes in the unique sound and technique of Kerala-style Carnatic violin, bridging theory and practice.',
    specialties: ['Bani Styles', 'Music Theory', 'Advanced Composition']
  },
];

export default function Teachers() {
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
          {teachers.map((t, i) => (
            <TeacherCard key={i} teacher={t} />
          ))}
        </div>

      </div>
    </div>
  )
}