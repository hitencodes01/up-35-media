'use client'
import { HomeIcon, Menu, NewspaperIcon, PersonStandingIcon, PhoneIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenu, setIsMenu] = useState<boolean>(false);

    return (
        <div className="sticky top-0 z-50 w-full bg-white font-bold text-black shadow-md border-b-2 border-amber-400">
            {/* Main bar */}
            <div className="flex justify-between items-center w-full h-16 px-6">
                {/* Logo */}
                <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src="/logo.jpeg" className="rounded-full w-full h-full object-cover" alt="logo" />
                </div>


                <nav className="hidden sm:flex gap-2 text-lg">
                    <button className="px-4 py-2 hover:bg-amber-400 hover:text-white transition-colors"><Link href={"/"}><HomeIcon className="inline" /> Home</Link></button>
                    <button className="px-4 py-2 hover:bg-amber-400 hover:text-white transition-colors"><Link href={"/news"}><NewspaperIcon className="inline" /> News</Link></button>
                    <button className="px-4 py-2 hover:bg-amber-400 hover:text-white transition-colors"><Link href={"/about"}><PersonStandingIcon className="inline" /> About Us</Link></button>
                    <button className="px-4 py-2 hover:bg-amber-400 hover:text-white transition-colors"><Link href={"/contact"}><PhoneIcon className="inline" /> Contact</Link></button>
                </nav>


                <button
                    className="sm:hidden p-2"
                    onClick={() => setIsMenu(prev => !prev)}
                >
                    {isMenu ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenu && (
                <nav className="sm:hidden flex flex-col bg-white border-t border-gray-200 shadow-lg">
                    <button className="px-6 py-3 text-center bg-amber-400 transition-colors"><Link href={"/"}><HomeIcon className="inline" /> Home</Link></button>
                    <button className="px-6 py-3 text-center bg-amber-200"><Link href={"/news"}><NewspaperIcon className="inline" /> News</Link></button>
                    <button className="px-6 py-3 text-center bg-amber-400"><Link href={"/about"}><PersonStandingIcon className="inline" /> About Us</Link></button>
                    <button className="px-6 py-3 text-center bg-amber-200"><Link href={"/contact"}><PhoneIcon className="inline" /> Contact</Link></button>
                </nav>
            )}
        </div>
    );
}