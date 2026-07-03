import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-neutral-950 text-white">
        {/* Hero Section */}
        <div className="relative border-b border-amber-400/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <span className="inline-block text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              UP <span className="text-amber-400">35</span> Media
            </h1>
            <p className="mt-5 text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We cover the local news of Unnao City. We are the trusted source
              for all information — every image shown on this platform complies
              with the IT Act, 2000.
            </p>
          </div>
        </div>

        {/* Reporter Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 blur-sm opacity-70" />
                <Image
                  src="/AnujMishra.jpeg"
                  alt="Anuj Mishra"
                  width={180}
                  height={180}
                  className="relative rounded-full object-cover w-40 h-40 sm:w-44 sm:h-44 border-4 border-neutral-950"
                />
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold">Anuj Mishra</h2>
              <p className="text-amber-400 text-sm sm:text-base font-medium mt-1">
                Founder &amp; Chief Reporter, UP 35 Media
              </p>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                Anuj Mishra leads on-ground reporting across Unnao City,
                bringing verified, timely, and accurate news to the community.
                Every story published here is backed by credibility and
                accountability.
              </p>

              {/* ID Card */}
              <div className="mt-8 inline-block">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Press Identification
                </p>
                <div className="rounded-lg overflow-hidden border border-amber-400/30 shadow-lg shadow-amber-400/5">
                  <Image
                    src="/IDCard.jpeg"
                    alt="Press ID Card"
                    width={280}
                    height={180}
                    className="object-cover w-64 sm:w-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-amber-400/20 bg-neutral-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-10">
              Get In <span className="text-amber-400">Touch</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Email */}
              <div className="flex flex-col items-center text-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-amber-400/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-amber-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Email</p>
                <p className="text-sm sm:text-base font-medium break-all">mediahubunnao</p>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-center text-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-amber-400/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-amber-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Contact</p>
                <p className="text-sm sm:text-base font-medium">+91 9236661111</p>
              </div>

              {/* City */}
              <div className="flex flex-col items-center text-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-amber-400/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-amber-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">City</p>
                <p className="text-sm sm:text-base font-medium">Unnao, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}