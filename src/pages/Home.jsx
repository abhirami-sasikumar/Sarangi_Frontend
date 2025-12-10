import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// --- Data Definitions (UNCHANGED) ---
const courses = [
  {
    title: "Carnatic Vocal (Kriti & Raga)",
    description: "Rigorous training in Swara, Laya, and the nuanced delivery of classical compositions.",
    icon: "🎤",
    category: "Classical",
    isFeatured: true,
  },
  {
    title: "Kerala Violin (Bani Focus)",
    description: "Mastering the unique style of Carnatic violin playing rooted in South Indian traditions.",
    icon: "🎻",
    category: "Instrumental",
  },
  {
    title: "Mridangam & Ganjira",
    description: "Hands-on instruction in Thani Avartanam and complex rhythmic calculations (Konnakol).",
    icon: "🥁",
    category: "Percussion",
  },
  {
    title: "Keyboard (Classical Adaptation)",
    description: "Adapting classical Carnatic music pieces and theory to the modern keyboard instrument.",
    icon: "🎹",
    category: "Instrumental",
  },
  {
    title: "Sopana Sangeetham",
    description: "The traditional temple music of Kerala, focusing on the Eddakka (percussion) accompaniment.",
    icon: "🪕",
    category: "Regional Arts",
  },
  {
    title: "Bharatanatyam (Kalakshetra Style)",
    description: "Structured instruction in Adavus, Abhinaya, and Nattuvangam.",
    icon: "💃",
    category: "Movement",
  },
  {
    title: "Kerala Mural Painting",
    description: "Traditional techniques of pigment preparation, drawing, and execution of murals.",
    icon: "🎨",
    category: "Visual Arts",
  },
  {
    title: "Theory & History of Music",
    description: "Comprehensive study of Sampradaya, musicologists, and notation systems.",
    icon: "📚",
    category: "Classical",
  },
];

const timeline = [
  {
    year: "2000",
    title: "Inauguration in Trivandrum",
    desc: "Sarangi School opens its doors with a focus solely on the Carnatic traditions.",
  },
  {
    year: "2007",
    title: "Incorporation of Regional Arts",
    desc: "Sopana Sangeetham and Kerala Mural Art classes are added to the curriculum.",
  },
  {
    year: "2012",
    title: "State-Level Performance Trophy",
    desc: "Sarangi students win the State Youth Festival's classical music category, gaining widespread acclaim.",
  },
  {
    year: "2015",
    title: "New Acoustic Campus",
    desc: "Relocation to a purpose-built facility in Powdikonam, optimized for sound and learning.",
  },
  {
    year: "2020",
    title: "Commitment to Offline Mode",
    desc: "Despite the global shift, we reinforced our strict policy of in-person mentorship to preserve quality.",
  },
  {
    year: "2024",
    title: "Silver Jubilee Celebration",
    desc: "Marking 25 years of uninterrupted, traditional arts education and cultural preservation.",
  },
];

const facilities = [
  {
    icon: "🏫",
    title: "8 Acoustic Classrooms",
    fact: "Sound-dampened for pure sound learning.",
    details: ["Dedicated instrumental rooms", "Vocal practice modules"],
  },
  {
    icon: "🎵",
    title: "Concert Practice Hall",
    fact: "Spacious area for ensemble training and rehearsals.",
    details: ["Mini stage setup", "Capacity for 50 people"],
  },
  {
    icon: "📚",
    title: "Traditional Music Library",
    fact: "Collection of classical texts, scores, and reference materials.",
    details: ["Rare sheet music access", "Quiet reading space"],
  },
  {
    icon: "🎤",
    title: "Mini Performance Stage",
    fact: "Regular showcase for students to build stage presence.",
    details: ["Professional lighting", "Sound system"],
  },
  {
    icon: "☕",
    title: "Guru Lounge & Pantry",
    fact: "Space for teachers to prepare and meet students privately.",
    details: ["Consultation area", "Staff amenities"],
  },
  {
    icon: "🅿️",
    title: "Dedicated Parking Area",
    fact: "Secure parking for all students and visitors.",
    details: ["Car and two-wheeler slots", "Easy access"],
  },
];

// --- Utility Components (UNCHANGED) ---
const Highlight = ({ icon, title, subtitle, color, iconColor }) => (
  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
    <div
      className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}
    >
      <span className={`${iconColor} text-xl`}>{icon}</span>
    </div>
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
    </div>
  </div>
);

const Badge = ({ top, right, bottom, left, bgColor, icon, count, text }) => (
  <div
    className={`absolute ${top ? `top-${top}` : ""} ${right ? `right-${right}` : ""} ${bottom ? `bottom-${bottom}` : ""} ${left ? `left-${left}` : ""} ${bgColor} text-white rounded-3xl p-6 shadow-xl transform ${top ? "rotate-3" : "-rotate-3"} transition-transform hover:scale-105`}
  >
    <div className="text-center">
      <div className="text-3xl mb-1">{icon}</div>
      <div className="text-3xl font-bold">{count}</div>
      <div className="text-sm">{text}</div>
    </div>
  </div>
);

const SectionTitleBlock = ({
  pretitle,
  title,
  subtitle,
  color,
  className = "",
}) => (
  <div className={`text-left mb-8 ${className}`}>
    <p className="text-sm font-medium text-saffron uppercase tracking-widest mb-1">
      {pretitle}
    </p>
    <h2
      className={`text-4xl lg:text-5xl font-bold font-serif-traditional ${color} mb-4`}
    >
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
  </div>
);

// New component for the animated symbols (UNCHANGED - Corrected and ready for page-wide use)
const FloatingSymbols = () => (
  <>
    {/* Symbol 1: Top-Left, Saffron */}
    <div className="absolute top-[10%] left-[5%] text-4xl text-saffron opacity-90 animate-float-symbol animation-delay-0">
      🎶
    </div>
    {/* Symbol 2: Mid-Right, Maroon (Contrasting) */}
    <div className="absolute top-[60%] right-[10%] text-5xl text-maroon opacity-90 animate-float-symbol animation-delay-3s">
      ♫
    </div>
    {/* Symbol 3: Mid-Left, Saffron */}
    <div className="absolute top-[40%] left-[20%] text-3xl text-saffron opacity-90 animate-float-symbol animation-delay-6s">
      ♬
    </div>
    {/* Symbol 4: Bottom-Left, Maroon (was Violin) */}
    <div className="absolute top-[85%] left-[15%] text-5xl text-maroon opacity-90 animate-float-symbol animation-delay-9s">
      ♪
    </div>
    {/* Symbol 5: Mid-Center, Saffron (Smaller, faster start) (was Drum) */}
    <div className="absolute top-[30%] left-[50%] text-2xl text-saffron opacity-90 animate-float-symbol animation-delay-1s">
      ♯
    </div>
    {/* Symbol 6: Far-Right, Maroon (Small) (was Keyboard) */}
    <div className="absolute top-[25%] right-[5%] text-3xl text-maroon opacity-90 animate-float-symbol animation-delay-4s">
      ♭
    </div>
    {/* Symbol 7: Bottom-Right, Saffron (Largest) (was Mic) */}
    <div className="absolute top-[70%] right-[30%] text-6xl text-saffron opacity-90 animate-float-symbol animation-delay-7s">
      ♬
    </div>
    {/* Symbol 8: Upper-Center, Maroon (Low opacity for depth) (was Lute) */}
    <div className="absolute top-[15%] left-[35%] text-3xl text-maroon opacity-80 animate-float-symbol animation-delay-10s">
      ♫
    </div>
  </>
);


// --- Home Component (MODIFIED) ---

export default function Home() {

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const categories = Object.keys(groupedCourses);
  const featuredCourse = courses.find((c) => c.isFeatured) || courses[0];

  return (
    // The main container has 'relative' and 'overflow-hidden'
 <div className="min-h-screen bg-sand relative overflow-hidden">
      
      {/* Simple Pattern Background (UNCHANGED) */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='var(--maroon)' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 🌟 Floating Animated Symbols placed HERE 🌟 (UNCHANGED) */}
      <FloatingSymbols />


      {/* HERO SECTION (MODIFIED: pt-16 reduced to pt-4) */}
     <section className="relative pt-4 pb-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text and CTA (Wider for better flow) */}
            <div className="lg:col-span-7 space-y-8"> 
              <div className="space-y-4">
                
                {/* Tagline */}
                <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-light-saffron border-2 border-saffron/80 shadow-lg animate-fade-in-down">
                  <span className="w-2.5 h-2.5 bg-maroon rounded-full mr-3 animate-pulse"></span>
                  <span className="text-maroon text-base font-semibold tracking-wider">
                    DUAL EXCELLENCE • Offline & Online Learning
                  </span>
                </div>

                {/* Main Heading (Updated to include 25 Years) */}
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-serif-traditional animate-slide-in-left">
                  <span className="text-saffron block">25 Years of Authentic </span>
                  <span className="text-maroon block">Indian Classical Excellence.</span>
                  <span className="text-maroon block">Forge Your Legacy.</span>
                </h1>
                
                {/* CREDENTIAL BLOCK (HIGHLY PROMINENT) */}
                <div className="space-y-2 pt-2">
                    <h2 className="text-3xl font-extrabold text-maroon">
                        Sarangi School of Music, Keraladithyapuram
                    </h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="px-4 py-2 bg-saffron/90 text-maroon font-bold rounded-lg shadow-md flex items-center">
                            <span className="mr-2 text-xl">🗓️</span> 
                            Established in 2000
                        </div>
                        <div className="px-4 py-2 bg-maroon text-saffron font-bold rounded-lg shadow-md flex items-center">
                            <span className="mr-2 text-xl">⭐</span> 
                            Affiliated with Kerala Sangeetha Nataka Academy
                        </div>
                    </div>

                    {/* --- NEW FEATURES BOX (Age Barrier & Timing) --- */}
                    <div className="pt-3 flex flex-wrap gap-3">
                        <div className="px-4 py-2 border-2 border-saffron text-maroon bg-white rounded-lg font-semibold shadow-inner flex items-center">
                            <span className="mr-2">🌍</span> 
                            No Age Barrier (All are welcome!)
                        </div>
                        <div className="px-4 py-2 border-2 border-saffron text-maroon bg-white rounded-lg font-semibold shadow-inner flex items-center">
                            <span className="mr-2">🕒</span> 
                            Convenient Class Timing
                        </div>
                    </div>
                    {/* --- END NEW FEATURES BOX --- */}

                </div>


                {/* Detailed Introductory Content - NOW CONDENSED */}
                <div className="text-lg text-gray-700 leading-relaxed max-w-xl space-y-3 pt-4 border-l-4 border-maroon pl-4 bg-white/50 rounded-lg">
                  <p className="text-base">
                    We are Trivandrum's premier center for authentic, high-quality instruction in Indian performing arts.
                  </p>
                  <p className="font-semibold text-gray-800 text-base">
                    We offer classes across all levels in:
                  </p>
                  <ul className="list-disc list-inside ml-4 grid grid-cols-2 gap-x-4 text-sm text-maroon font-medium">
                    <li>Vocal Music (Carnatic, Bhajan)</li>
                    <li>Classical Dance (Bharatanatyam, Mohiniyattam, Kuchipudi)</li>
                    <li>Instrumental Music (Violin, Veena, Mridangam, Tabla)</li>
                    <li>Other Arts (Keyboard, Drawing, Theory)</li>
                  </ul>
                  <p className="text-base pt-2 italic">
                    Choose between our traditional **in-person classes** or the flexibility of **online sessions** to start your artistic journey.
                  </p>
                </div>
              </div>

              {/* Single Strong CTA Button (Reintroduced) */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-saffron to-amber-700 text-white rounded-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center inline-flex items-center justify-center text-lg border-2 border-maroon"
                >
                  <span className="mr-3 text-2xl">enroll now</span>
                  <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
                </Link>
              </div>

            </div>

            {/* Right Column: Visual (Remains UNCHANGED) */}
            <div className="lg:col-span-5 relative transform lg:translate-y-0 animate-fade-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/80 transition-shadow hover:shadow-maroon/30">
                {/* Visual container with a strong background gradient */}
                <div className="w-full h-[550px] bg-gradient-to-br from-maroon/80 to-saffron/60 flex items-center justify-center">
                  
                  {/* Overlay for text and visual focus */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white p-10 rounded-2xl bg-maroon/70 backdrop-blur-md shadow-2xl border-4 border-saffron transform rotate-1 transition-transform hover:rotate-0">
                      <div className="text-8xl mb-4">🎻</div>
                      <div className="text-3xl font-black font-serif-traditional">
                        Artistic Mastery
                      </div>
                      <div className="text-xl mt-2 font-light">
                        Offline Mentorship | Online Flexibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges positioned for maximum impact */}
              <Badge
                top="-4"
                right="-4"
                bgColor="bg-maroon"
                icon="🎓"
                count="25+"
                text="Years Experience"
              />
              <Badge
                bottom="-4"
                left="-4"
                bgColor="bg-saffron"
                icon="👥"
                count="500+"
                text="Students Trained"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMAINDER OF HOME.JS (UNCHANGED) */}
      {/* ... (WHY OFFLINE MATTERS SECTION) ... */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <SectionTitleBlock
            pretitle="Our Core Philosophy"
            title="The Guru's Physical Presence"
            subtitle="Why the traditional, face-to-face setting is the only path to mastery in classical arts."
            color="text-maroon"
            className="text-center"
          />

          <div className="grid lg:grid-cols-3 gap-8 pt-10">
            {/* Quote Sidebar 1 (Left) - NOTE: This section's text implies ONLY offline, which conflicts with the Hero. You might want to update this philosophy block to support the hybrid model if it's true. I'll keep the original text for now as per your request but flag the inconsistency. */}
            <div className="p-6 bg-sand border-l-4 border-saffron shadow-lg rounded-lg self-start sticky top-20 hidden lg:block">
              <p className="text-lg italic text-gray-800 font-serif-traditional">
                "The rhythm of a Mridangam is felt through the floor. The
                micro-tonal corrections of a Swaram must be heard in a pure
                acoustic space. This connection is lost online."
              </p>
              <p className="text-sm font-semibold text-maroon mt-4">
                — Vidwan Harish P. Nair, Percussion Guru
              </p>
            </div>

            {/* Centerpiece: Layered Visual and Pull Quote */}
            <div className="lg:col-span-2 relative">
              {/* Background Placeholder Image */}
              <div className="h-[450px] w-full bg-gradient-to-tr from-saffron/30 to-maroon/20 rounded-2xl shadow-xl border-4 border-sand/50">
                {/* Visual: Teacher and Student in action (Placeholder) */}
                <div className="absolute inset-0 flex items-center justify-center text-maroon/50 text-9xl">
                  📸
                </div>
              </div>

              {/* Overlapping Pull Quote */}
              <div className="absolute -bottom-16 md:-right-8 p-8 md:p-12 bg-maroon text-white rounded-xl shadow-2xl w-full md:w-2/3 border-4 border-saffron transform -rotate-1">
                <span className="text-saffron text-6xl block mb-2 leading-none">
                  “
                </span>
                <h4 className="text-2xl font-serif-traditional italic font-light leading-snug">
                  The true depth of classical art is transferred not just through
                  sound, but through shared silence, observation, and the
                  physical presence of the Guru.
                </h4>
                <Link
                  to="/visit"
                  className="mt-6 inline-flex items-center text-saffron hover:text-white font-semibold transition-colors"
                >
                  Experience the difference in person →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... (COURSES SECTION) ... */}
      <section className="py-10 px-6 md:px-16 lg:px-24 bg-light-saffron relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitleBlock
            pretitle="Our Disciplines"
            title="Traditional & Contemporary Arts"
            subtitle="A curated list of courses taught by dedicated gurus at our campus."
            color="text-maroon"
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column: Pinned Featured Course (Vertical Focus) */}
            <div className="lg:col-span-2 bg-maroon p-8 rounded-2xl shadow-xl sticky top-20 h-fit border-b-8 border-saffron">
              <p className="text-saffron font-bold uppercase mb-2">
                Featured Discipline
              </p>
              <h3 className="text-3xl font-serif-traditional text-white mb-4">
                {featuredCourse.title}
              </h3>
              <p className="text-sand mb-6 leading-relaxed">
                {featuredCourse.description}
              </p>

              <ul className="space-y-3 mb-6 text-white/90">
                <li className="flex items-center">
                  <span className="text-saffron mr-3">✓</span> One-on-one
                  sessions
                </li>
                <li className="flex items-center">
                  <span className="text-saffron mr-3">✓</span> Regular stage
                  performances
                </li>
                <li className="flex items-center">
                  <span className="text-saffron mr-3">✓</span> Advanced
                  certification available
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-block w-full text-center px-6 py-3 bg-saffron text-maroon font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Inquire about {featuredCourse.title}
              </Link>
            </div>

            {/* Right Column: Scrollable Course Categories (Horizontal Scroll) */}
            <div className="lg:col-span-3 space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="text-2xl font-serif-traditional text-maroon font-semibold mb-4 border-b-2 border-saffron pb-1">
                    {category}
                  </h4>

                  <div className="flex overflow-x-auto space-x-6 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
                    {groupedCourses[category].map((course, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-64 bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-maroon/20 transition-shadow duration-300"
                      >
                        <div className="text-3xl mb-3 text-saffron">
                          {course.icon}
                        </div>
                        <h5 className="text-lg font-bold text-maroon mb-1">
                          {course.title}
                        </h5>
                        <p className="text-gray-600 text-sm italic">
                          {course.description}
                        </p>
                        <Link
                          to="/contact"
                          className="mt-4 inline-block text-sm font-medium text-maroon hover:text-saffron transition-colors"
                        >
                          View Details →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ... (FACILITIES SECTION) ... */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitleBlock
            pretitle="The Sarangi Advantage"
            title="Technical Specification: Our Campus"
            subtitle="A transparent look at the dedicated infrastructure supporting your artistic journey."
            color="text-maroon"
            className="mb-12"
          />

          <div className="bg-sand p-8 rounded-2xl shadow-2xl border-4 border-maroon/50">
            <h3 className="text-2xl font-serif-traditional text-maroon border-b pb-4 mb-6 border-saffron/50">
              Campus Infrastructure Summary
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="border-l-4 border-saffron pl-4">
                  <div className="text-xl text-maroon font-bold flex items-center mb-1">
                    <span className="mr-2 text-2xl text-saffron">
                      {facility.icon}
                    </span>
                    {facility.title}
                  </div>
                  <p className="text-gray-700 italic text-sm mb-2">
                    {facility.fact}
                  </p>
                  <ul className="text-xs text-gray-500 list-disc list-inside ml-2">
                    {facility.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-maroon/20 text-center">
              <p className="text-sm text-gray-600">
                Every detail is designed for distraction-free, high-fidelity
                artistic education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ... (TIMELINE SECTION) ... */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-maroon to-deep-maroon text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif-traditional mb-4">
              25 Years of Offline Excellence
            </h2>
            <p className="text-xl text-saffron">
              Our journey of traditional, in-person teaching
            </p>
          </div>

          <div className="relative">
            {/* Timeline Visual */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-saffron/50 h-full rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-saffron rounded-full border-4 border-maroon z-10 mt-2 shadow-lg"></div>

                  <div
                    className={`ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} md:w-1/2 ${index % 2 === 0 ? "md:mr-1/2" : "md:ml-1/2"}`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron md:border-l-0 md:border-r-4">
                      <div className="text-saffron font-bold text-lg mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                        {event.title}
                      </h3>
                      <p className="text-rose-100 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ... (CTA VISIT SECTION - Retaining the call line for consistency) ... */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-light-saffron">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-saffron/50">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif-traditional text-maroon mb-4">
              Experience Traditional Learning
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to start? Contact us to inquire about our hybrid online and offline class schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-maroon text-maroon rounded-lg font-bold hover:bg-light-saffron transition-all duration-300"
              >
                📞 Call Now: +91 94962 32325
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              📍 Keraladithyapuram, Thiruvananthapuram • 🕘 Mon-Sat: 8AM-8PM
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}