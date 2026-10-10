"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-end bg-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_1.jpg"
          alt="IEM Campus"
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        {/* Apple-style smooth gradient fade to black at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px] pb-20 pt-36 md:pb-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Institute of Engineering & Management
          </div>
          
          {/* Huge typography with tight tracking typical of Apple */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-8">
            Leading the Future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Information Technology
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light tracking-wide">
            Creating technology-driven thinkers, innovators, and problem solvers through quality education and industry-oriented learning.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-semibold transition-all duration-300 shadow-xl flex items-center gap-2 active:scale-95"
            >
              Explore Department
            </Link>
            <Link 
              href="/course-curriculum/curriculum" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/10 rounded-full font-semibold transition-all duration-300 active:scale-95"
            >
              Academic Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}