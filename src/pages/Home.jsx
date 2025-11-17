import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure custom CSS is imported for custom colors/fonts

// --- Data Definitions (Unchanged) ---
const courses = [
  { 
    title: "Carnatic Vocal", 
    description: "Personalized attention in acoustic classrooms", 
    icon: "🎤",
    category: "Classical",
    isFeatured: true
  },
  { 
    title: "Violin", 
    description: "Focus on bowing techniques and classical compositions", 
    icon: "🎻",
    category: "Instrumental"
  },
  { 
    title: "Tabla", 
    description: "North Indian percussion, rhythm and traditional compositions", 
    icon: "🥁",
    category: "Instrumental"
  },
  { 
    title: "Keyboard", 
    description: "Modern lessons with strong foundation in music theory", 
    icon: "🎹",
    category: "Instrumental"
  },
  { 
    title: "Mridangam", 
    description: "South Indian classical percussion (guru-shishya)", 
    icon: "🎯",
    category: "Instrumental"
  },
  { 
    title: "Classical Dance", 
    description: "Bharatanatyam emphasis on expression and technique", 
    icon: "💃",
    category: "Movement"
  },
  { 
    title: "Art & Drawing", 
    description: "Kerala mural art and contemporary drawing techniques", 
    icon: "🎨",
    category: "Movement"
  },
  { 
    title: "Music Theory", 
    description: "Comprehensive understanding of notation and fundamentals", 
    icon: "📚",
    category: "Classical"
  }
];

const timeline = [
  { year: "2000", title: "Humble Beginnings", desc: "Started with 3 students in traditional classroom setup" },
  { year: "2005", title: "First Expansion", desc: "Added dedicated rooms for vocal and instrumental classes" },
  { year: "2010", title: "Cultural Recognition", desc: "Recognized as premier offline music school in district" },
  { year: "2015", title: "New Campus", desc: "Moved to dedicated building with 8 classrooms and practice halls" },
  { year: "2020", title: "Traditional Focus", desc: "Strengthened offline teaching methodology during digital era" },
  { year: "2024", title: "Silver Jubilee", desc: "25 years of pure offline, in-person musical education" }
];

const facilities = [
  { icon: "🏫", title: "8 Acoustic Classrooms", fact: "Sound-dampened for pure sound learning.", details: ["Dedicated instrumental rooms", "Vocal practice modules"] },
  { icon: "🎵", title: "Concert Practice Hall", fact: "Spacious area for ensemble training and rehearsals.", details: ["Mini stage setup", "Capacity for 50 people"] },
  { icon: "📚", title: "Traditional Music Library", fact: "Collection of classical texts, scores, and reference materials.", details: ["Rare sheet music access", "Quiet reading space"] },
  { icon: "🎤", title: "Mini Performance Stage", fact: "Regular showcase for students to build stage presence.", details: ["Professional lighting", "Sound system"] },
  { icon: "☕", title: "Guru Lounge & Pantry", fact: "Space for teachers to prepare and meet students privately.", details: ["Consultation area", "Staff amenities"] },
  { icon: "🅿️", title: "Dedicated Parking Area", fact: "Secure parking for all students and visitors.", details: ["Car and two-wheeler slots", "Easy access"] }
];

// --- Utility Components (Adjusted) ---

const Highlight = ({ icon, title, subtitle, color, iconColor }) => (
  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
      <span className={`${iconColor} text-xl`}>{icon}</span>
    </div>
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
    </div>
  </div>
);

const Badge = ({ top, right, bottom, left, bgColor, icon, count, text }) => (
  <div className={`absolute ${top ? `top-${top}` : ''} ${right ? `right-${right}` : ''} ${bottom ? `bottom-${bottom}` : ''} ${left ? `left-${left}` : ''} ${bgColor} text-white rounded-3xl p-6 shadow-xl transform ${top ? 'rotate-3' : '-rotate-3'} transition-transform hover:scale-105`}>
    <div className="text-center">
      <div className="text-3xl mb-1">{icon}</div>
      <div className="text-3xl font-bold">{count}</div>
      <div className="text-sm">{text}</div>
    </div>
  </div>
);

// SECTION HEADER IS NOW MORE OF A 'TITLE BLOCK'
const SectionTitleBlock = ({ pretitle, title, subtitle, color, className="" }) => (
    <div className={`text-left mb-8 ${className}`}>
        <p className="text-sm font-medium text-saffron uppercase tracking-widest mb-1">{pretitle}</p>
        <h2 className={`text-4xl lg:text-5xl font-bold font-serif-traditional ${color} mb-4`}>
            {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
            {subtitle}
        </p>
    </div>
);


// --- Home Component ---

export default function Home() {
    
    // Group courses by category for the new layout
    const groupedCourses = courses.reduce((acc, course) => {
        if (!acc[course.category]) {
            acc[course.category] = [];
        }
        acc[course.category].push(course);
        return acc;
    }, {});
    
    const categories = Object.keys(groupedCourses);
    const featuredCourse = courses.find(c => c.isFeatured) || courses[0];

    return (
        <div className="min-h-screen bg-sand relative overflow-hidden"> 

            {/* Simple Pattern Background */}
            <div className="absolute inset-0 opacity-10 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='var(--maroon)' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            {/* HERO SECTION (Unchanged for stability) */}
            <section className="relative py-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* ... Hero Content ... */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-light-saffron border border-saffron/50 shadow-md">
                                    <span className="w-2 h-2 bg-maroon rounded-full mr-2 animate-pulse"></span>
                                    <span className="text-maroon text-sm font-medium">🎯 Pure Offline Classes • Since 2000</span>
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-serif-traditional">
                                    <span className="text-maroon">Embrace the </span>
                                    <br />
                                    <span className="text-saffron">Guru-Shishya</span>
                                    <br />
                                    <span className="text-maroon">Tradition.</span>
                                </h1>
                                
                                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                                    At Sarangi School, we believe in the power of **in-person learning**. 
                                    Experience authentic mentorship, hands-on training, and real-time feedback in our dedicated, acoustic classrooms.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Highlight icon="👥" title="Face-to-Face" subtitle="Direct teacher interaction" color="bg-saffron/20" iconColor="text-saffron" />
                                <Highlight icon="🏫" title="Dedicated Campus" subtitle="8 specialized classrooms" color="bg-maroon/10" iconColor="text-maroon" />
                                <Highlight icon="🎭" title="Live Performances" subtitle="Regular stage opportunities" color="bg-saffron/20" iconColor="text-saffron" />
                                <Highlight icon="👨‍🏫" title="Expert Gurus" subtitle="Experienced instructors" color="bg-maroon/10" iconColor="text-maroon" />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link 
                                    to="/visit" 
                                    className="px-8 py-4 bg-gradient-to-r from-maroon to-deep-maroon text-light-saffron rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center border-2 border-saffron"
                                >
                                    <span className="mr-2">🏫</span>
                                    Schedule Campus Visit
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="px-8 py-4 border-2 border-maroon text-maroon rounded-lg font-semibold hover:bg-light-saffron transition-all duration-300 text-center"
                                >
                                    Book Free Demo Class
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/80 transition-shadow hover:shadow-maroon/30">
                                <div className="w-full h-[550px] bg-gradient-to-br from-saffron/40 to-maroon/20 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/10 backdrop-brightness-90 flex items-center justify-center">
                                        <div className="text-center text-maroon p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg">
                                            <div className="text-7xl mb-4">🎶</div>
                                            <div className="text-2xl font-semibold font-serif-traditional">Traditional Classroom</div>
                                            <div className="text-md mt-1">Experience real-time learning in Thiruvananthapuram</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <Badge top="-4" right="-4" bgColor="bg-maroon" icon="🎓" count="25+" text="Years Experience" />
                            <Badge bottom="-4" left="-4" bgColor="bg-saffron" icon="👥" count="500+" text="Students Trained" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section Divider --- */}
            <hr className="max-w-7xl mx-auto border-saffron/50" />

            {/* WHY OFFLINE MATTERS SECTION - NEW ASYMMETRICAL FOLIO LAYOUT */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    
                    <SectionTitleBlock 
                        pretitle="Our Core Philosophy"
                        title="The Guru's Physical Presence" 
                        subtitle="Why the traditional, face-to-face setting is the only path to mastery in classical arts." 
                        color="text-maroon"
                        className="text-center"
                    />

                    {/* Main Content & Image Block */}
                    <div className="grid lg:grid-cols-3 gap-8 pt-10">
                        
                        {/* Quote Sidebar 1 (Left) */}
                        <div className="p-6 bg-sand border-l-4 border-saffron shadow-lg rounded-lg self-start sticky top-20 hidden lg:block">
                            <p className="text-lg italic text-gray-800 font-serif-traditional">
                                "The rhythm of a Mridangam is felt through the floor. The micro-tonal corrections of a Swaram must be heard in a pure acoustic space. This connection is lost online."
                            </p>
                            <p className="text-sm font-semibold text-maroon mt-4">— Smt. Janaki Devi, Vocal Guru</p>
                        </div>

                        {/* Centerpiece: Layered Visual and Pull Quote */}
                        <div className="lg:col-span-2 relative">
                            {/* Background Placeholder Image */}
                            <div className="h-[450px] w-full bg-gradient-to-tr from-saffron/30 to-maroon/20 rounded-2xl shadow-xl border-4 border-sand/50">
                                {/* Visual: Teacher and Student in action (Placeholder) */}
                                <div className="absolute inset-0 flex items-center justify-center text-maroon/50 text-9xl">📸</div>
                            </div>
                            
                            {/* Overlapping Pull Quote */}
                            <div className="absolute -bottom-16 md:-right-8 p-8 md:p-12 bg-maroon text-white rounded-xl shadow-2xl w-full md:w-2/3 border-4 border-saffron transform -rotate-1">
                                <span className="text-saffron text-6xl block mb-2 leading-none">“</span>
                                <h4 className="text-2xl font-serif-traditional italic font-light leading-snug">
                                    The true depth of classical art is transferred not just through sound, but through shared silence, observation, and the physical presence of the Guru.
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

            {/* --- Section Divider --- */}
            <div className="my-20 max-w-7xl mx-auto border-t border-maroon/20"></div>

            {/* COURSES SECTION - NEW HORIZONTAL/VERTICAL FOCUS LAYOUT */}
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
                            <p className="text-saffron font-bold uppercase mb-2">Featured Discipline</p>
                            <h3 className="text-3xl font-serif-traditional text-white mb-4">{featuredCourse.title}</h3>
                            <p className="text-sand mb-6 leading-relaxed">{featuredCourse.description}</p>
                            
                            <ul className="space-y-3 mb-6 text-white/90">
                                <li className="flex items-center"><span className="text-saffron mr-3">✓</span> One-on-one sessions</li>
                                <li className="flex items-center"><span className="text-saffron mr-3">✓</span> Regular stage performances</li>
                                <li className="flex items-center"><span className="text-saffron mr-3">✓</span> Advanced certification available</li>
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
                            {categories.map(category => (
                                <div key={category}>
                                    <h4 className="text-2xl font-serif-traditional text-maroon font-semibold mb-4 border-b-2 border-saffron pb-1">{category}</h4>
                                    
                                    <div className="flex overflow-x-auto space-x-6 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
                                        {groupedCourses[category].map((course, index) => (
                                            <div 
                                                key={index}
                                                className="flex-shrink-0 w-64 bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-maroon/20 transition-shadow duration-300"
                                            >
                                                <div className="text-3xl mb-3 text-saffron">{course.icon}</div>
                                                <h5 className="text-lg font-bold text-maroon mb-1">{course.title}</h5>
                                                <p className="text-gray-600 text-sm italic">{course.description}</p>
                                                <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-maroon hover:text-saffron transition-colors">
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

            {/* --- Section Divider --- */}
            <div className="my-20 max-w-7xl mx-auto border-t border-maroon/20"></div>

            {/* FACILITIES SECTION - NEW FACT SHEET BLOCK LAYOUT */}
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
                                        <span className="mr-2 text-2xl text-saffron">{facility.icon}</span>
                                        {facility.title}
                                    </div>
                                    <p className="text-gray-700 italic text-sm mb-2">{facility.fact}</p>
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
                                Every detail is designed for distraction-free, high-fidelity artistic education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section Divider --- */}
            <div className="my-20 max-w-7xl mx-auto border-t border-maroon/20"></div>

            {/* TIMELINE SECTION (Unchanged for stability) */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-maroon to-deep-maroon text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold font-serif-traditional mb-4">25 Years of Offline Excellence</h2>
                        <p className="text-xl text-saffron">Our journey of traditional, in-person teaching</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Visual */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-saffron/50 h-full rounded-full"></div>
                        
                        <div className="space-y-12">
                            {timeline.map((event, index) => (
                                <div key={index} className="relative flex items-start">
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-saffron rounded-full border-4 border-maroon z-10 mt-2 shadow-lg"></div>
                                    
                                    <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:mr-1/2' : 'md:ml-1/2'}`}>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-saffron md:border-l-0 md:border-r-4">
                                            <div className="text-saffron font-bold text-lg mb-2">{event.year}</div>
                                            <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">{event.title}</h3>
                                            <p className="text-rose-100 leading-relaxed">{event.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA VISIT SECTION (Unchanged for stability) */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-light-saffron">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-saffron/50">
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif-traditional text-maroon mb-4">
                            Experience Traditional Learning
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Visit our campus, meet our gurus, and see why offline learning makes all the difference in arts education.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/visit" 
                                className="px-8 py-4 bg-maroon text-white rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-2 border-saffron"
                            >
                                <span className="mr-2">📅</span>
                                Schedule a Campus Visit
                            </Link>
                            <Link 
                                to="/contact" 
                                className="px-8 py-4 border-2 border-maroon text-maroon rounded-lg font-bold hover:bg-light-saffron transition-all duration-300"
                            >
                                Call: +91 98765 43210
                            </Link>
                        </div>
                        <div className="mt-6 text-sm text-gray-500">
                            📍 Near PMG Junction, Thiruvananthapuram • 🕘 Mon-Sat: 8AM-8PM
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}