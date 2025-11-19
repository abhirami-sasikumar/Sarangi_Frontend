import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";

const courses = [
  { 
    title: "Carnatic Vocal", 
    description: "Personalized attention in acoustic classrooms (Acoustic Sound Lab)", 
    icon: "🎤",
    category: "Classical",
    isFeatured: true
  },
  { 
    title: "Violin", 
    description: "Focus on bowing techniques and South Indian classical compositions", 
    icon: "🎻",
    category: "Instrumental"
  },
  { 
    title: "Tabla", 
    description: "North Indian percussion training, rhythm and traditional compositions", 
    icon: "🥁",
    category: "Instrumental"
  },
  { 
    title: "Keyboard (Music Theory)", 
    description: "Modern lessons with strong foundation in notation and theory", 
    icon: "🎹",
    category: "Instrumental"
  },
  { 
    title: "Mridangam", 
    description: "South Indian classical percussion (Tanjavur style, guru-shishya)", 
    icon: "🥁",
    category: "Instrumental"
  },
  { 
    title: "Classical Dance", 
    description: "Bharatanatyam emphasis on expression (Abhinaya) and technique", 
    icon: "💃",
    category: "Movement"
  },
  { 
    title: "Art & Drawing", 
    description: "Kerala Mural Art, contemporary drawing, and portrait techniques", 
    icon: "🎨",
    category: "Movement"
  },
  { 
    title: "Music Theory", 
    description: "Comprehensive understanding of notation, scales, and fundamentals", 
    icon: "📚",
    category: "Classical"
  }
];

const timeline = [
  { year: "2000", title: "Humble Beginnings", desc: "Started with 3 students in traditional classroom setup in Thiruvananthapuram." },
  { year: "2005", title: "First Expansion", desc: "Added dedicated rooms for vocal and instrumental classes." },
  { year: "2010", title: "Cultural Recognition", desc: "Recognized as a premier offline music school in the district." },
  { year: "2015", title: "New Campus", desc: "Moved to a dedicated building with 8 acoustic classrooms and practice halls." },
  { year: "2020", title: "Traditional Focus", desc: "Strengthened offline teaching methodology during the digital era." },
  { year: "2024", title: "Silver Jubilee", desc: "25 years of pure offline, in-person musical education and affiliation with Kerala Sangeetha Nataka Academy." }
];

const facilities = [
  { icon: "🏫", title: "8 Acoustic Classrooms", fact: "Sound-dampened for pure sound learning, critical for classical correction.", details: ["Dedicated instrumental rooms", "Vocal practice modules"] },
  { icon: "🎵", title: "Concert Practice Hall", fact: "Spacious area for ensemble training and formal rehearsals.", details: ["Mini stage setup", "Capacity for 50 people"] },
  { icon: "📚", title: "Traditional Music Library", fact: "Collection of classical scores, rare texts, and reference materials.", details: ["Rare sheet music access", "Quiet reading space"] },
  { icon: "🎤", title: "Mini Performance Stage", fact: "Regular monthly showcase for students to build stage presence.", details: ["Professional lighting", "Sound system"] },
  { icon: "☕", title: "Guru Lounge & Pantry", fact: "Dedicated space for teachers to prepare and meet students privately.", details: ["Consultation area", "Staff amenities"] },
  { icon: "🅿️", title: "Dedicated Parking Area", fact: "Secure parking for all students and visitors.", details: ["Car and two-wheeler slots", "Easy access"] }
];

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

const SectionTitleBlock = ({ pretitle, title, subtitle, color, className="" }) => (
    <div className={`text-left mb-8 ${className}`}>
        <p className="text-sm font-medium text-royal-blue uppercase tracking-widest mb-1">{pretitle}</p>
        <h2 className={`text-4xl lg:text-5xl font-bold font-serif-traditional ${color} mb-4`}>
            {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
            {subtitle}
        </p>
    </div>
);

export default function Home() {
    
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-light-yellow relative overflow-hidden"> 

            {/* Simple Pattern Background */}
            <div className="absolute inset-0 opacity-10 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='var(--navy-blue)' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            {/* HERO SECTION */}
            <section className="relative py-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-blue/20 border border-royal-blue/50 shadow-md">
                                    <span className="w-2 h-2 bg-navy-blue rounded-full mr-2 animate-pulse"></span>
                                    <span className="text-navy-blue text-sm font-medium">🎯 Pure Offline Classes • Since 2000 in Thiruvananthapuram</span>
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-serif-traditional">
                                    <span className="text-navy-blue">Embrace the </span>
                                    <br />
                                    <span className="text-bright-yellow bg-navy-blue px-4 py-2 rounded-lg">Guru-Shishya</span>
                                    <br />
                                    <span className="text-royal-blue">Tradition.</span>
                                </h1>
                                
                                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                                    At Sarangi School, we believe in the power of **in-person learning**. 
                                    Experience authentic mentorship, hands-on training, and real-time feedback in our dedicated, acoustic classrooms.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Highlight icon="👥" title="Face-to-Face" subtitle="Direct Guru interaction" color="bg-royal-blue/20" iconColor="text-royal-blue" />
                                <Highlight icon="🏫" title="Dedicated Campus" subtitle="8 specialized acoustic classrooms" color="bg-navy-blue/20" iconColor="text-navy-blue" />
                                <Highlight icon="🎭" title="Live Performances" subtitle="Regular stage opportunities" color="bg-royal-blue/20" iconColor="text-royal-blue" />
                                <Highlight icon="👨‍🏫" title="Expert Gurus" subtitle="Experienced instructors" color="bg-navy-blue/20" iconColor="text-navy-blue" />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link 
                                    to="/visit" 
                                    className="px-8 py-4 bg-gradient-to-r from-navy-blue to-royal-blue text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center border-2 border-bright-yellow"
                                >
                                    <span className="mr-2">🏫</span>
                                    Schedule Campus Visit
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="px-8 py-4 border-2 border-navy-blue text-navy-blue rounded-lg font-semibold hover:bg-light-yellow transition-all duration-300 text-center"
                                >
                                    Book Free Demo Class
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transition-shadow hover:shadow-navy-blue/30">
                                <div className="w-full h-[550px] bg-gradient-to-br from-bright-yellow/40 to-royal-blue/20 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/10 backdrop-brightness-90 flex items-center justify-center">
                                        <div className="text-center text-navy-blue p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg border-2 border-royal-blue">
                                            <div className="text-7xl mb-4">🎶</div>
                                            <div className="text-2xl font-semibold font-serif-traditional">Traditional Classroom</div>
                                            <div className="text-md mt-1">Experience real-time learning in Thiruvananthapuram</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <Badge top="-4" right="-4" bgColor="bg-navy-blue" icon="🎓" count="25+" text="Years Experience" />
                            <Badge bottom="-4" left="-4" bgColor="bg-royal-blue" icon="👥" count="500+" text="Students Trained" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section Divider --- */}
            <hr className="max-w-7xl mx-auto border-royal-blue/50" />

            {/* WHY OFFLINE MATTERS SECTION */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    
                    <SectionTitleBlock 
                        pretitle="Our Core Philosophy"
                        title="The Guru's Physical Presence" 
                        subtitle="Why the traditional, face-to-face setting is the only path to mastery in classical arts." 
                        color="text-navy-blue"
                        className="text-center"
                    />

                    <div className="grid lg:grid-cols-3 gap-8 pt-10">
                        
                        {/* Quote Sidebar 1 (Left) */}
                        <div className="p-6 bg-blue-50 border-l-4 border-royal-blue shadow-lg rounded-lg self-start sticky top-20 hidden lg:block">
                            <p className="text-lg italic text-gray-800 font-serif-traditional">
                                "The rhythm of a Mridangam is felt through the floor. The micro-tonal corrections of a Swaram must be heard in a pure acoustic space. This connection is lost online."
                            </p>
                            <p className="text-sm font-semibold text-navy-blue mt-4">— Smt. Janaki Devi, Vocal Guru</p>
                        </div>

                        {/* Centerpiece: Layered Visual and Pull Quote */}
                        <div className="lg:col-span-2 relative">
                            <div className="h-[450px] w-full bg-gradient-to-tr from-bright-yellow/30 to-royal-blue/20 rounded-2xl shadow-xl border-4 border-blue-100">
                                <div className="absolute inset-0 flex items-center justify-center text-royal-blue/50 text-9xl">📸</div>
                            </div>
                            
                            {/* Overlapping Pull Quote */}
                            <div className="absolute -bottom-16 md:-right-8 p-8 md:p-12 bg-navy-blue text-white rounded-xl shadow-2xl w-full md:w-2/3 border-4 border-bright-yellow transform -rotate-1">
                                <span className="text-bright-yellow text-6xl block mb-2 leading-none">"</span>
                                <h4 className="text-2xl font-serif-traditional italic font-light leading-snug">
                                    The true depth of classical art is transferred not just through sound, but through shared silence, observation, and the physical presence of the Guru.
                                </h4>
                                <Link 
                                    to="/visit" 
                                    className="mt-6 inline-flex items-center text-bright-yellow hover:text-white font-semibold transition-colors"
                                >
                                    Experience the difference in person →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section Divider --- */}
            <div className="my-20 max-w-7xl mx-auto border-t border-royal-blue/20"></div>

            {/* COURSES SECTION */}
            <section className="py-10 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-blue-50 to-light-yellow relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    
                    <SectionTitleBlock 
                        pretitle="Our Disciplines"
                        title="Traditional & Contemporary Arts" 
                        subtitle="A curated list of courses taught by dedicated gurus at our campus in Trivandrum." 
                        color="text-navy-blue"
                    />

                    <div className="grid lg:grid-cols-5 gap-8">
                        
                        {/* Left Column: Pinned Featured Course */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-navy-blue to-royal-blue p-8 rounded-2xl shadow-xl sticky top-20 h-fit border-b-8 border-bright-yellow">
                            <p className="text-bright-yellow font-bold uppercase mb-2">Featured Discipline</p>
                            <h3 className="text-3xl font-serif-traditional text-white mb-4">{featuredCourse.title}</h3>
                            <p className="text-blue-100 mb-6 leading-relaxed">{featuredCourse.description}</p>
                            
                            <ul className="space-y-3 mb-6 text-white/90">
                                <li className="flex items-center"><span className="text-bright-yellow mr-3">✓</span> One-on-one sessions in acoustic rooms</li>
                                <li className="flex items-center"><span className="text-bright-yellow mr-3">✓</span> Regular stage performances</li>
                                <li className="flex items-center"><span className="text-bright-yellow mr-3">✓</span> Advanced certification available</li>
                            </ul>

                            <Link 
                                to="/contact" 
                                className="inline-block w-full text-center px-6 py-3 bg-bright-yellow text-navy-blue font-bold rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-white"
                            >
                                Inquire about {featuredCourse.title}
                            </Link>
                        </div>
                        
                        {/* Right Column: Scrollable Course Categories */}
                        <div className="lg:col-span-3 space-y-12">
                            {categories.map(category => (
                                <div key={category}>
                                    <h4 className="text-2xl font-serif-traditional text-navy-blue font-semibold mb-4 border-b-2 border-royal-blue pb-1">{category}</h4>
                                    
                                    <div className="flex overflow-x-auto space-x-6 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
                                        {groupedCourses[category].map((course, index) => (
                                            <div 
                                                key={index}
                                                className="flex-shrink-0 w-64 bg-white rounded-xl p-5 shadow-lg border-2 border-royal-blue/20 hover:border-navy-blue transition-all duration-300"
                                            >
                                                <div className="text-3xl mb-3 text-royal-blue">{course.icon}</div>
                                                <h5 className="text-lg font-bold text-navy-blue mb-1">{course.title}</h5>
                                                <p className="text-gray-600 text-sm italic">{course.description}</p>
                                                <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-royal-blue hover:text-navy-blue transition-colors">
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
            <div className="my-20 max-w-7xl mx-auto border-t border-royal-blue/20"></div>

            {/* FACILITIES SECTION */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    
                    <SectionTitleBlock 
                        pretitle="The Sarangi Advantage"
                        title="Technical Specification: Our Campus" 
                        subtitle="A transparent look at the dedicated infrastructure supporting your artistic journey in Trivandrum." 
                        color="text-navy-blue" 
                        className="mb-12"
                    />

                    <div className="bg-gradient-to-br from-blue-50 to-light-yellow p-8 rounded-2xl shadow-2xl border-4 border-royal-blue">
                        <h3 className="text-2xl font-serif-traditional text-navy-blue border-b pb-4 mb-6 border-royal-blue/50">
                            Campus Infrastructure Summary
                        </h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {facilities.map((facility, index) => (
                                <div key={index} className="border-l-4 border-royal-blue pl-4 bg-white/50 p-4 rounded-lg">
                                    <div className="text-xl text-navy-blue font-bold flex items-center mb-1">
                                        <span className="mr-2 text-2xl text-royal-blue">{facility.icon}</span>
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
                        
                        <div className="mt-8 pt-6 border-t border-royal-blue/20 text-center">
                            <p className="text-sm text-gray-600">
                                Every detail is designed for distraction-free, high-fidelity artistic education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section Divider --- */}
            <div className="my-20 max-w-7xl mx-auto border-t border-royal-blue/20"></div>

            {/* TIMELINE SECTION */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-navy-blue to-royal-blue text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold font-serif-traditional mb-4">25 Years of Offline Excellence</h2>
                        <p className="text-xl text-bright-yellow">Our journey of traditional, in-person teaching</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-bright-yellow/50 h-full rounded-full"></div>
                        
                        <div className="space-y-12">
                            {timeline.map((event, index) => (
                                <div key={index} className="relative flex items-start">
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-bright-yellow rounded-full border-4 border-navy-blue z-10 mt-2 shadow-lg"></div>
                                    
                                    <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:mr-1/2' : 'md:ml-1/2'}`}>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-bright-yellow md:border-l-0 md:border-r-4 hover:bg-white/20 transition-all duration-300">
                                            <div className="text-bright-yellow font-bold text-lg mb-2">{event.year}</div>
                                            <h3 className="text-2xl font-bold text-white font-serif-traditional mb-2">{event.title}</h3>
                                            <p className="text-blue-100 leading-relaxed">{event.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA VISIT SECTION */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-light-yellow">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-royal-blue">
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif-traditional text-navy-blue mb-4">
                            Experience Traditional Learning
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Visit our campus, meet our gurus, and see why offline learning makes all the difference in arts education.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/visit" 
                                className="px-8 py-4 bg-gradient-to-r from-navy-blue to-royal-blue text-white rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-2 border-bright-yellow"
                            >
                                <span className="mr-2">📅</span>
                                Schedule a Campus Visit
                            </Link>
                            <Link 
                                to="/contact" 
                                className="px-8 py-4 border-2 border-navy-blue text-navy-blue rounded-lg font-bold hover:bg-blue-50 transition-all duration-300"
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