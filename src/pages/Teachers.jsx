import React from 'react'
import TeacherCard from '../components/TeacherCard' 

const teachers = [
  { 
    name: 'Rajeswari Biju', 
    specialization: 'Carnatic Vocal', 
    experience: 20, 
    initials: 'RB', 
    bio: 'A master vocalist and composer, leading the Carnatic vocal department since 2005.',
    specialties: ['Raga Alapana', 'Neraval', 'Kalpana Swaram']
  },
  { 
    name: 'Bhadra Sarangi', 
    specialization: 'Violin', 
    experience: 15, 
    initials: 'BS', 
    bio: 'Specializes in bowing techniques and performance readiness, fostering student confidence.',
    specialties: ['Bowing Techniques', 'Concert Performance', 'Ensemble Playing']
  },
  { 
    name: 'Vimal Kumar', 
    specialization: 'Tabla & Rhythm', 
    experience: 18, 
    initials: 'VK', 
    bio: 'Expert in both North and South Indian percussion theory and practical application.',
    specialties: ['Taal System', 'Laya', 'Composition']
  },
  { 
    name: 'Lakshmi Nair', 
    specialization: 'Mridangam', 
    experience: 12, 
    initials: 'LN', 
    bio: 'Specialist in Tanjore style Mridangam with focus on traditional compositions.',
    specialties: ['Tanjore Style', 'Thani Avarthanam', 'Tala Vadhya']
  },
  { 
    name: 'Arun Menon', 
    specialization: 'Keyboard & Theory', 
    experience: 10, 
    initials: 'AM', 
    bio: 'Modern approach to music theory with strong foundation in classical principles.',
    specialties: ['Music Notation', 'Harmony', 'Composition']
  },
  { 
    name: 'Meera Krishnan', 
    specialization: 'Bharatanatyam', 
    experience: 16, 
    initials: 'MK', 
    bio: 'Classical dance exponent focusing on expression and technical precision.',
    specialties: ['Abhinaya', 'Adavus', 'Mudras']
  }
]

export default function Teachers() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-light-yellow py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        <h2 className="font-serif-traditional text-5xl text-navy-blue tracking-tight mb-4 border-b-4 border-royal-blue w-fit pb-2">
          Our Expert Gurus
        </h2>
        <p className="text-gray-600 text-xl mt-4 max-w-3xl">
          Learn from experienced masters dedicated to passing down authentic traditional knowledge through personalized, in-person guidance.
        </p>

        {/* Teacher Statistics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
          <div className="bg-white rounded-lg p-4 text-center shadow-md border-2 border-royal-blue">
            <div className="text-2xl font-bold text-navy-blue">25+</div>
            <div className="text-sm text-royal-blue font-semibold">Years Legacy</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md border-2 border-royal-blue">
            <div className="text-2xl font-bold text-navy-blue">15+</div>
            <div className="text-sm text-royal-blue font-semibold">Expert Gurus</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md border-2 border-royal-blue">
            <div className="text-2xl font-bold text-navy-blue">500+</div>
            <div className="text-sm text-royal-blue font-semibold">Students Trained</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md border-2 border-royal-blue">
            <div className="text-2xl font-bold text-navy-blue">8</div>
            <div className="text-sm text-royal-blue font-semibold">Art Forms</div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((t, i) => (
            <TeacherCard key={i} teacher={t} />
          ))}
        </div>

        {/* Guru-Shishya Tradition Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-navy-blue to-royal-blue rounded-2xl text-white shadow-xl border-2 border-bright-yellow">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif-traditional text-2xl font-bold mb-4 text-bright-yellow">
              The Guru-Shishya Parampara
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              At Sarangi School, we uphold the ancient tradition of direct knowledge transmission from teacher to student. 
              Our gurus don't just teach techniques—they mentor, correct in real-time, and nurture each student's unique artistic voice 
              through personalized attention that only in-person learning can provide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-royal-blue">
                <div className="text-2xl mb-2">👁️</div>
                <h4 className="font-semibold text-bright-yellow mb-2">Direct Observation</h4>
                <p className="text-sm text-blue-100">Real-time correction of posture, technique, and expression</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-royal-blue">
                <div className="text-2xl mb-2">🎵</div>
                <h4 className="font-semibold text-bright-yellow mb-2">Acoustic Learning</h4>
                <p className="text-sm text-blue-100">Pure sound environment for perfect pitch and rhythm training</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-royal-blue">
                <div className="text-2xl mb-2">💫</div>
                <h4 className="font-semibold text-bright-yellow mb-2">Personal Mentorship</h4>
                <p className="text-sm text-blue-100">One-on-one guidance tailored to individual learning pace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Gurus CTA */}
        <div className="mt-12 text-center">
          <h3 className="font-serif-traditional text-3xl text-navy-blue mb-4">
            Ready to Learn from the Masters?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Meet our gurus in person, experience their teaching style, and find the perfect mentor for your artistic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/visit"
              className="px-8 py-4 bg-gradient-to-r from-navy-blue to-royal-blue text-white rounded-lg font-bold 
                       hover:from-royal-blue hover:to-navy-blue transition-all duration-300 shadow-md 
                       transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-bright-yellow"
            >
              👨‍🏫 Meet Our Gurus
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 border-2 border-navy-blue text-navy-blue rounded-lg font-bold 
                       hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              📞 Schedule Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}