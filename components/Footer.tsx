import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-amber-400 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3 bg-neutral-900 border border-amber-400/30 rounded-full px-5 py-2.5">
            <Image
              src="/logo.jpeg"
              height={40}
              width={40}
              alt="UP 35 Media logo"
              className="rounded-full object-cover"
            />
            <h1 className="font-bold text-sm sm:text-base">
              UP 35 Media <span className="text-neutral-500 font-normal">by</span>{" "}
              <span className="text-amber-400">Anuj Mishra</span>
            </h1>
          </div>

          {/* Quick links */}
          <div className="w-full">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-4">
              Quick Links
            </p>
            <div className="flex text-black flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm sm:text-base font-medium">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/news" className="hover:text-amber-400 transition-colors">News</Link>
              <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Divider + bottom bar */}
          <div className="w-full pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} UP 35 Media. All rights reserved.</p>
            <p>Unnao, Uttar Pradesh</p>
          </div>
        </div>
      </div>
    </footer>
  )
}