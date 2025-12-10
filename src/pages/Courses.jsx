import React from 'react'
import CourseCard from '../components/CourseCard' 

// --- Data Definitions (UPDATED CONTENT) ---
const courses = [
  { 
    title: "Carnatic Vocal (Kriti & Raga)", 
    description: "Rigorous training in Swara, Laya, and the nuanced delivery of classical compositions.", 
    duration: '1-2 Years', 
    icon: "🎤",
    features: ['Daily practice routines', 'Stage exposure', 'Certification'] 
  },
  { 
    title: "Kerala Violin (Bani Focus)", 
    description: "Mastering the unique style of Carnatic violin playing rooted in South Indian traditions.", 
    duration: '1 Year', 
    icon: "🎻",
    features: ['One-on-one sessions', 'Ensemble training', 'Advanced techniques'] 
  },
  { 
    title: "Mridangam & Ganjira", 
    description: "Hands-on instruction in Thani Avartanam and complex rhythmic calculations (Konnakol).", 
    duration: '6 Months', 
    icon: "🥁",
    features: ['Rhythm theory', 'Solo performance prep', 'Practice material'] 
  },
  { 
    title: "Keyboard (Classical Adaptation)", 
    description: "Adapting classical Carnatic music pieces and theory to the modern keyboard instrument.", 
    duration: 'Flexible', 
    icon: "🎹",
    features: ['Modern lessons', 'Music theory fundamentals', 'Personalized curriculum'] 
  },
  { 
    title: "Sopana Sangeetham", 
    description: "The traditional temple music of Kerala, focusing on the Eddakka (percussion) accompaniment.", 
    duration: '1 Year', 
    icon: "🪕",
    features: ['Regional art focus', 'Traditional methods', 'Cultural immersion'] 
  },
  { 
    title: "Bharatanatyam (Kalakshetra Style)", 
    description: "Structured instruction in Adavus, Abhinaya, and Nattuvangam.", 
    duration: '2 Years', 
    icon: "💃",
    features: ['Strict technique', 'Abhinaya mastery', 'Annual Arangetram prep'] 
  },
  { 
    title: "Kerala Mural Painting", 
    description: "Traditional techniques of pigment preparation, drawing, and execution of murals.", 
    duration: '1 Year', 
    icon: "🎨",
    features: ['Hands-on art', 'Pigment preparation', 'Historical context'] 
  },
  { 
    title: "Theory & History of Music", 
    description: "Comprehensive study of Sampradaya, musicologists, and notation systems.", 
    duration: '6 Months', 
    icon: "📚",
    features: ['Certification', 'Advanced concepts', 'Reference material'] 
  }
];

export default function Courses() {
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
            <CourseCard key={i} course={c} /> 
          ))}
        </div>

      </div>
    </div>
  )
}