"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuUserPlus, LuBookOpen, LuMicroscope, LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-end bg-black">
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
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px] pb-32 pt-40 md:pb-48">
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
              href="/academics" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/10 rounded-full font-semibold transition-all duration-300 active:scale-95"
            >
              Academic Programs
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Quick Nav Overlay */}
      <div className="relative z-20 w-full px-4 md:px-6 lg:px-12 max-w-[1400px] mx-auto -mb-20 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/70 backdrop-blur-3xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 divide-x divide-black/5">
            {[
              { title: "Prospective Students", desc: "Admissions & Campus Life", icon: LuUserPlus, link: "/admissions" },
              { title: "Current Students", desc: "Resources & Support Portal", icon: LuBookOpen, link: "/students" },
              { title: "Faculty & Research", desc: "Directories & Publications", icon: LuMicroscope, link: "/faculty" },
            ].map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link}
                className="group p-10 transition-colors hover:bg-white flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center text-content group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon className="text-2xl" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-content/30 group-hover:bg-black/5 group-hover:text-primary transition-all duration-300">
                    <LuArrowRight className="text-xl transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-content mb-2 tracking-tight">{item.title}</h3>
                <p className="text-content-muted font-medium">{item.desc}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}