import React from 'react'
import { FaGraduationCap, FaHandsHelping, FaHistory, FaBullseye } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-light-yellow py-20 px-6">
        <div className="container mx-auto max-w-7xl">
            
            <h2 className="font-serif-traditional text-5xl text-navy-blue tracking-tight mb-4 border-b-4 border-royal-blue w-fit pb-2">
                About Sarangi School
            </h2>

            <div className="grid lg:grid-cols-3 gap-12 mt-12">
                
                {/* Left Column: Core Philosophy & History */}
                <div className="lg:col-span-2 space-y-8">
                    
                    <p className="mt-5 text-gray-700 text-xl leading-relaxed max-w-4xl">
                        Founded in **2000**, Sarangi School of Music in Thiruvananthapuram has trained 
                        hundreds of students across vocal and instrumental traditions. We emphasize 
                        **strong fundamentals**, structured learning, and regular performance opportunities 
                        while preserving classical traditions in a dedicated, in-person environment.
                    </p>

                    {/* Mission and Vision Block */}
                    <div className="grid sm:grid-cols-2 gap-6 p-6 bg-blue-50 rounded-2xl shadow-inner border-2 border-royal-blue/50">
                        
                        <div className="p-4 rounded-xl shadow-sm bg-white border-l-4 border-navy-blue">
                            <h4 className="font-semibold text-navy-blue text-lg flex items-center gap-2">
                                <FaBullseye className="text-royal-blue" /> Our Mission
                            </h4>
                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                To nurture musical talent and pass classical knowledge through the **Guru-Shishya** tradition to the next generation.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl shadow-sm bg-white border-l-4 border-navy-blue">
                            <h4 className="font-semibold text-navy-blue text-lg flex items-center gap-2">
                                <FaGraduationCap className="text-royal-blue" /> Our Vision
                            </h4>
                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                To be the premier institute for authentic, in-person arts education, fostering both skill and cultural appreciation.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right Column: Historical Focus Block (Asymmetrical Element) */}
                <div className="lg:col-span-1 p-6 bg-gradient-to-br from-navy-blue to-royal-blue text-white rounded-2xl shadow-2xl relative border-t-8 border-bright-yellow transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="text-bright-yellow text-5xl mb-4">
                        <FaHistory />
                    </div>
                    <h3 className="font-serif-traditional text-2xl font-bold mb-3">
                        The 25-Year Legacy
                    </h3>
                    <p className="text-blue-100 mb-4">
                        We have steadfastly upheld the **offline learning model** for over a quarter-century. This commitment ensures students receive the real-time, nuanced correction necessary for artistic mastery.
                    </p>
                    <p className="text-xs text-bright-yellow font-bold uppercase">
                        Acoustics • Presence • Tradition
                    </p>
                </div>

            </div>

            {/* Values Section */}
            <div className="mt-16 p-8 bg-white rounded-2xl shadow-xl border-2 border-royal-blue">
                <h3 className="font-serif-traditional text-3xl text-navy-blue mb-8 text-center">Our Core Values</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-xl border border-royal-blue/30">
                        <div className="text-4xl text-royal-blue mb-4">🎵</div>
                        <h4 className="font-semibold text-navy-blue mb-2">Authentic Tradition</h4>
                        <p className="text-gray-600 text-sm">Preserving classical arts in their purest form through direct Guru-Shishya parampara</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl border border-royal-blue/30">
                        <div className="text-4xl text-royal-blue mb-4">👁️</div>
                        <h4 className="font-semibold text-navy-blue mb-2">Personal Attention</h4>
                        <p className="text-gray-600 text-sm">Individualized guidance with real-time correction and feedback</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl border border-royal-blue/30">
                        <div className="text-4xl text-royal-blue mb-4">🏛️</div>
                        <h4 className="font-semibold text-navy-blue mb-2">Quality Infrastructure</h4>
                        <p className="text-gray-600 text-sm">Acoustic classrooms designed for optimal learning environment</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}