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
<section className="relative pt-6 pb-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto">

    {/* TIER 1 — TRUST + HEADLINE */}
    <div className="text-center mb-8 space-y-4">

      <div className="inline-block px-6 py-2 bg-maroon text-saffron font-bold rounded-lg shadow-xl border-2 border-saffron">
        Affiliated with Kerala Sangeetha Nataka Academy
      </div>

      <h1 className="text-5xl md:text-6xl xl:text-7xl font-black font-serif-traditional text-maroon leading-tight max-w-4xl mx-auto">
        <span className="text-saffron block">25 Years of Authentic</span>
        Indian Classical Excellence
      </h1>

      {/* Unified Feature Bar */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-sand border-2 border-saffron rounded-xl p-4 max-w-4xl mx-auto shadow-lg">
        <div className="flex items-center justify-center text-maroon font-semibold">
          🗓️ Established in 2000
        </div>
        <div className="flex items-center justify-center text-maroon font-semibold">
          🌍 No Age Barrier
        </div>
        <div className="flex items-center justify-center text-maroon font-semibold">
          🕒 Flexible Timings
        </div>
      </div>
    </div>

    {/* TIER 2 — IMAGE + CONTENT */}
    <div className="grid lg:grid-cols-12 gap-10 items-center">

      {/* Image Column */}
      <div className="lg:col-span-5 relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand">
          <div className="w-full h-[420px] bg-gradient-to-br from-maroon/80 to-saffron/60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-8 rounded-2xl bg-maroon/70 border-4 border-saffron shadow-xl">
                <div className="text-7xl mb-3">🎻</div>
                <div className="text-2xl font-black font-serif-traditional">
                  Artistic Mastery
                </div>
                <div className="text-sm mt-1">
                  Offline Mentorship • Online Flexibility
                </div>
              </div>
            </div>
          </div>
        </div>

        <Badge
          top="-4"
          right="-4"
          bgColor="bg-maroon"
          icon="🎓"
          count="25+"
          text="Years"
        />
        <Badge
          bottom="-4"
          left="-4"
          bgColor="bg-saffron"
          icon="👥"
          count="500+"
          text="Students"
        />
      </div>

      {/* Content Column */}
      <div className="lg:col-span-7 space-y-5">
        <h2 className="text-3xl font-extrabold text-maroon font-serif-traditional">
          Forge Your Legacy at Sarangi School of Music
        </h2>

        <div className="text-base text-gray-700 leading-relaxed space-y-3 border-l-4 border-saffron pl-4 bg-sand/60 rounded-lg">
          <p>
            Trivandrum’s premier institution for authentic Indian classical arts,
            offering both traditional offline mentorship and structured online learning.
          </p>

          <ul className="list-disc list-inside grid grid-cols-2 gap-x-4 text-sm text-maroon font-medium">
            <li>Vocal Music</li>
            <li>Classical Dance</li>
            <li>Instrumental Arts</li>
            <li>Theory & Drawing</li>
          </ul>

          <p className="italic text-sm">
            Guided by accomplished Gurus, preserving tradition with discipline.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-saffron to-amber-700 text-white rounded-lg font-bold shadow-lg hover:-translate-y-1 transition-all border-2 border-maroon"
        >
          Begin Your Musical Journey →
        </Link>
      </div>
    </div>
  </div>
</section>


   {/* 2. NEW SECTION: ANNUAL ARPANA (MUSICAL OFFERINGS) - REVISED FOR MAROON BG & HIGH CONTRAST */}
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-maroon relative">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-sm font-medium text-saffron uppercase tracking-widest">
        Sacred Annual Tradition
      </p>
      <h2 className="text-4xl lg:text-5xl font-bold font-serif-traditional text-saffron">
        Arpanam — Musical Offerings
      </h2>
      <p className="text-white max-w-2xl mx-auto mt-3">
        Ceremonial performances rooted in devotion, tradition, and legacy.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* FEATURED EVENT */}
      <div className="lg:col-span-2 bg-sand p-10 rounded-3xl shadow-2xl border-t-8 border-saffron">
        <div className="flex items-center space-x-4 mb-5">
          <div className="text-6xl text-saffron font-serif-traditional">ॐ</div>
          <div>
            <h3 className="text-3xl font-extrabold text-maroon font-serif-traditional">
              Tyagaraja Aradhana
            </h3>
            <p className="text-sm uppercase text-gray-500">
              Pancharatna Keerthanam
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-3">
          A sacred annual homage to Saint Tyagaraja, uniting musicians in a
          collective rendering of the Pancharatna Kritis.
        </p>

        <p className="italic font-semibold text-gray-800">
          A cornerstone of Sarangi’s spiritual and musical lineage.
        </p>

        <div className="mt-6 flex justify-between text-sm border-t border-saffron/40 pt-3">
          <span className="font-bold text-maroon">17+ Years</span>
          <span className="text-gray-500">📍 Keraladithyapuram</span>
        </div>
      </div>

      {/* SECONDARY EVENT */}
      <div className="bg-sand p-8 rounded-3xl shadow-xl border-t-8 border-saffron">
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-5xl text-saffron">𛰪</div>
          <div>
            <h3 className="text-2xl font-extrabold text-maroon font-serif-traditional">
              Mookambika Sangeetarchana
            </h3>
            <p className="text-xs uppercase text-gray-500">
              Annual Devotional Pilgrimage
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          A 15-hour continuous musical offering at Kollur Mookambika Temple,
          invoking blessings of Saraswati.
        </p>

        <p className="italic font-semibold text-gray-800 text-sm">
          Performed every May 20th.
        </p>

        <div className="mt-5 flex justify-between text-sm border-t border-saffron/40 pt-3">
          <span className="font-bold text-maroon">12+ Years</span>
          <span className="text-gray-500">📅 May 20</span>
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

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Classical Dance */}
      <div>
        <h4 className="text-2xl font-serif-traditional text-maroon font-semibold mb-6 border-b-2 border-saffron pb-2">
          Classical Dance
        </h4>
        <div className="space-y-4">
          {["Bharatanatyam", "Mohiniyattam", "Kuchipudi"].map((dance, index) => (
            <div key={dance} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-maroon/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-saffron/20 p-3 rounded-lg">
                  <span className="text-2xl text-maroon">
                    {["🕉️", "🌸", "🎭"][index]}
                  </span>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-maroon mb-1">{dance}</h5>
                  <p className="text-gray-600 text-sm">
                    {[
                      "Ancient temple dance form from Tamil Nadu",
                      "Lyrical dance from Kerala with swaying movements",
                      "Dynamic dance-drama from Andhra Pradesh"
                    ][index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Classical Music & Instrumental */}
      <div>
        <h4 className="text-2xl font-serif-traditional text-maroon font-semibold mb-6 border-b-2 border-saffron pb-2">
          Music
        </h4>
        <div className="space-y-4">
          {[
            {name: "Carnatic Vocal", desc: "Training in raga, tala & compositions", icon: "🎵"},
            {name: "Devotional Music", desc: "Bhajans & spiritual hymns", icon: "🙏"},
            {name: "Violin", desc: "Carnatic style & accompaniment", icon: "🎻"},
            {name: "Keyboard/Piano", desc: "Indian classical & Western techniques", icon: "🎹"},
            {name: "Veena", desc: "Ancient string instrument training", icon: "🪕"}
          ].map((item, index) => (
            <div key={item.name} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-maroon/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-saffron/20 p-3 rounded-lg">
                  <span className="text-2xl text-maroon">{item.icon}</span>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-maroon mb-1">{item.name}</h5>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Percussion & Fine Arts */}
      <div>
        <h4 className="text-2xl font-serif-traditional text-maroon font-semibold mb-6 border-b-2 border-saffron pb-2">
          Percussion & Arts
        </h4>
        <div className="space-y-4">
          {[
            {name: "Tabla", desc: "North Indian percussion training", icon: "🥁"},
            {name: "Mridangam", desc: "Carnatic rhythm & complex patterns", icon: "🪘"},
            {name: "Drawing & Painting", desc: "Traditional & contemporary art forms", icon: "🎨"}
          ].map((item, index) => (
            <div key={item.name} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-maroon/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-saffron/20 p-3 rounded-lg">
                  <span className="text-2xl text-maroon">{item.icon}</span>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-maroon mb-1">{item.name}</h5>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

     
      {/* ... (TIMELINE SECTION) ... */}
{/* TIMELINE SECTION - UPDATED with brighter text */}
<section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-maroon to-deep-maroon text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-bold font-serif-traditional mb-4 text-white">
        Our Journey of Excellence
      </h2>
      <p className="text-xl text-saffron font-medium">
        Milestones at Sarangi School of Music (Keraladithyapuram, Trivandrum)
      </p>
    </div>

    <div className="relative">
      {/* Timeline Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-saffron/50 h-full rounded-full hidden md:block"></div>
      
      {/* Timeline for mobile - show on left side */}
      <div className="absolute left-4 w-1 bg-saffron/50 h-full rounded-full md:hidden"></div>

      <div className="space-y-12">
        {/* 2000 - Establishment (LEFT SIDE on desktop) */}
        <div className="relative flex">
          <div className="hidden md:block w-1/2 pr-12 text-right">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-r-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2000</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Foundation & Establishment
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Sarangi School of Music was founded in Keraladithyapuram, 
                marking the beginning of over two decades of dedicated arts 
                education in Trivandrum. Our journey began with a focus on 
                traditional Carnatic vocal training.
              </p>
            </div>
          </div>
          
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron rounded-full border-4 border-white z-10 mt-2 shadow-xl"></div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden ml-10 w-full">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2000</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Foundation & Establishment
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Sarangi School of Music was founded in Keraladithyapuram, 
                marking the beginning of over two decades of dedicated arts 
                education in Trivandrum.
              </p>
            </div>
          </div>
          
          {/* Right side empty on desktop for left items */}
          <div className="hidden md:block w-1/2"></div>
        </div>

        {/* 2007 - Curriculum Expansion (RIGHT SIDE on desktop) */}
        <div className="relative flex">
          {/* Left side empty on desktop for right items */}
          <div className="hidden md:block w-1/2"></div>
          
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron rounded-full border-4 border-white z-10 mt-2 shadow-xl"></div>
          
          <div className="hidden md:block w-1/2 pl-12">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2007</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Major Curriculum Expansion
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Expanded beyond vocal music to establish comprehensive departments 
                for Instruments (Violin, Keyboard, Veena, Tabla, Mridangam), 
                Dance (Bharatanatyam, Mohiniyattam, Kuchipudi, Folk Dance), 
                and Fine Arts (Drawing & Sketching).
              </p>
            </div>
          </div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden ml-10 w-full">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2007</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Major Curriculum Expansion
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Expanded beyond vocal music to establish comprehensive departments 
                for Instruments, Dance, and Fine Arts.
              </p>
            </div>
          </div>
        </div>

        {/* 2012 - Government Affiliation (LEFT SIDE on desktop) */}
        <div className="relative flex">
          <div className="hidden md:block w-1/2 pr-12 text-right">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-r-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2012</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Government Recognition & Affiliation
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Achieved a major milestone with affiliation to the{" "}
                <span className="font-bold text-saffron">Kerala Sangeetha Nataka Akademi</span>. 
                This recognition validates our quality of training and enables 
                certified courses with state-level opportunities.
              </p>
            </div>
          </div>
          
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron rounded-full border-4 border-white z-10 mt-2 shadow-xl"></div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden ml-10 w-full">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2012</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Government Recognition & Affiliation
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Affiliated with Kerala Sangeetha Nataka Akademi, validating 
                our quality of training and enabling certified courses.
              </p>
            </div>
          </div>
          
          {/* Right side empty on desktop for left items */}
          <div className="hidden md:block w-1/2"></div>
        </div>

        {/* 2015 - New Campus (RIGHT SIDE on desktop) */}
        <div className="relative flex">
          {/* Left side empty on desktop for right items */}
          <div className="hidden md:block w-1/2"></div>
          
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron rounded-full border-4 border-white z-10 mt-2 shadow-xl"></div>
          
          <div className="hidden md:block w-1/2 pl-12">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2015</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                New Acoustic Campus
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Relocated to a purpose-built facility in Powdikonam, 
                specifically optimized for sound quality and learning. 
                The new campus features 8 acoustic classrooms and dedicated 
                practice halls for enhanced training experience.
              </p>
            </div>
          </div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden ml-10 w-full">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2015</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                New Acoustic Campus
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Relocated to a purpose-built facility in Powdikonam optimized 
                for sound quality and learning.
              </p>
            </div>
          </div>
        </div>

        {/* 2020 - Hybrid Learning (LEFT SIDE on desktop) */}
        <div className="relative flex">
          <div className="hidden md:block w-1/2 pr-12 text-right">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-r-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2020</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Adoption of Hybrid Learning Model
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Successfully transitioned to offering Online Classes alongside 
                traditional offline sessions. This innovation expanded our reach 
                to students beyond Keraladithyapuram/Powdikonam while maintaining 
                our commitment to quality mentorship.
              </p>
            </div>
          </div>
          
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron rounded-full border-4 border-white z-10 mt-2 shadow-xl"></div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden ml-10 w-full">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2020</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Adoption of Hybrid Learning Model
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Successfully transitioned to offering Online Classes alongside 
                traditional offline sessions, expanding our reach.
              </p>
            </div>
          </div>
          
          {/* Right side empty on desktop for left items */}
          <div className="hidden md:block w-1/2"></div>
        </div>

        {/* 2024/2025 - Silver Jubilee (RIGHT SIDE on desktop) */}
        <div className="relative flex">
          {/* Left side empty on desktop for right items */}
          <div className="hidden md:block w-1/2"></div>
          
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron rounded-full border-4 border-white z-10 mt-2 shadow-xl"></div>
          
          <div className="hidden md:block w-1/2 pl-12">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2024 - 2025</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Silver Jubilee Celebration
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Marking 25 years of uninterrupted, traditional arts education 
                and cultural preservation. A celebration of our legacy as 
                Trivandrum's premier institution for authentic Indian classical 
                arts training.
              </p>
            </div>
          </div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden ml-10 w-full">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron shadow-lg">
              <div className="text-saffron font-bold text-lg mb-2">2024 - 2025</div>
              <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">
                Silver Jubilee Celebration
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Marking 25 years of uninterrupted, traditional arts education 
                and cultural preservation.
              </p>
            </div>
          </div>
        </div>
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