import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation placeholder
    if (!form.name || !form.email || !form.message) {
        setStatus('❌ Please fill out all fields.');
        return;
    }
    setStatus('✅ Thank you! This is a demo form — backend not connected.');
    setForm({ name: '', email: '', message: '' }); // Clear form on success
  }

  // Key Changes: General color updates to saffron/maroon
  return (
    <div className="bg-sand py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 max-w-7xl">
            
            {/* Contact Info (Left Column) */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border-t-8 border-saffron">
                <h2 className="font-serif-traditional text-4xl text-maroon mb-6">
                    Connect with Sarangi School
                </h2>

                <p className="text-gray-600 mb-8 max-w-md">
                    We welcome inquiries about courses, admissions, and campus visits. 
                    Reach out directly or use the contact form.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-3 bg-light-saffron/50 rounded-lg">
                        <FaMapMarkerAlt className="text-maroon text-2xl mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-maroon">Our Campus</p>
                            <p className="text-gray-700">Keraladithyapuram, Powdikonam, Thiruvananthapuram — 695008</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-light-saffron/50 rounded-lg">
                        <FaPhoneAlt className="text-maroon text-xl flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-maroon">Phone</p>
                            <a href="tel:+919496232325" className="text-gray-700 hover:text-saffron transition">+91 94962 32325</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-light-saffron/50 rounded-lg">
                        <FaEnvelope className="text-maroon text-xl flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-maroon">Email</p>
                            <a href="mailto:info@sarangischool.com" className="text-gray-700 hover:text-saffron transition">info@sarangischool.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="p-8 bg-white rounded-2xl shadow-xl">
                <h3 className="font-serif-traditional text-3xl text-maroon mb-6">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full border border-saffron/50 p-3 rounded-lg shadow-sm bg-sand 
                        focus:border-maroon focus:ring-2 focus:ring-maroon/50 outline-none transition duration-300"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />

                    <input
                        className="w-full border border-saffron/50 p-3 rounded-lg shadow-sm bg-sand 
                        focus:border-maroon focus:ring-2 focus:ring-maroon/50 outline-none transition duration-300"
                        placeholder="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <textarea
                        className="w-full border border-saffron/50 p-3 rounded-lg shadow-sm bg-sand 
                        focus:border-maroon focus:ring-2 focus:ring-maroon/50 outline-none transition duration-300"
                        placeholder="Message or Course Inquiry"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                    />

                    <button 
                        type="submit" 
                        className="px-6 py-3 bg-maroon text-white rounded-lg font-semibold shadow-md 
                        hover:bg-deep-maroon transition duration-300 w-full"
                    >
                        Send Message
                    </button>
                </form>

                {status && (
                    <div className={`mt-4 text-center p-3 rounded-lg ${status.startsWith('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {status}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}