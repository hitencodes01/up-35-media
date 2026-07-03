import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-neutral-950 text-white">
        {/* Hero */}
        <div className="relative border-b border-amber-400/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
            <span className="inline-block text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Contact <span className="text-amber-400">Us</span>
            </h1>
            <p className="mt-5 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Have a tip, feedback, or a story to share? Reach out to UP 35 Media directly.
            </p>
          </div>
        </div>

        {/* Contact cards */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Email */}
            <Link
              href="mailto:mediahubunnao@gmail.com"
              className="flex flex-col items-center text-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-8 hover:border-amber-400/50 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500">Email</p>
              <p className="text-sm sm:text-base font-semibold break-all">mediahubunnao</p>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+919236661111"
              className="flex flex-col items-center text-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-8 hover:border-amber-400/50 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500">Phone</p>
              <p className="text-sm sm:text-base font-semibold">+91 92366 61111</p>
            </Link>

            {/* Location */}
            <div className="flex flex-col items-center text-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-8">
              <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500">City</p>
              <p className="text-sm sm:text-base font-semibold">Unnao, Uttar Pradesh</p>
            </div>
          </div>

          {/* Note strip */}
          <div className="mt-10 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 sm:p-6 text-center">
            <p className="text-sm sm:text-base text-neutral-300">
              For press queries, story tips, or corrections, please reach out via email or phone.
              We aim to respond within <span className="text-amber-400 font-semibold">24 hours</span>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}