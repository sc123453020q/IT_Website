"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { homeAbout } from "@/lib/dummydata";

import Routine from "../Routine/Routine";
import Curriculum from "../Curriculum/Curriculum";
import Infrastructure from "../Infrastructure/Infrastructure";

type AcademicSection =
  | "routine"
  | "curriculum"
  | "infrastructure"
  | null;

export default function Academics() {
  const [activeSection, setActiveSection] = useState<AcademicSection>(null);

  const handleSectionClick = (title: string) => {
    const normalizedTitle = title.toLowerCase();

    if (normalizedTitle === "routine") {
      setActiveSection("routine");
    } else if (normalizedTitle === "curriculum") {
      setActiveSection("curriculum");
    } else if (normalizedTitle === "infrastructure") {
      setActiveSection("infrastructure");
    }

    setTimeout(() => {
      const id = `${normalizedTitle}-section`;
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <main className="w-full">

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
          
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Academic Life
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold text-content mb-8 tracking-tighter leading-[1.1]">
              Empowering Minds, <br className="hidden md:block"/>
              <span className="text-content-muted">Shaping Futures.</span>
            </h1>
            <p className="text-2xl text-content-muted leading-relaxed font-light tracking-wide max-w-3xl">
              Explore the academic resources, curriculum, schedules
              and infrastructure that support learning and
              professional development in the Department of
              Information Technology.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          ACADEMIC OPTIONS
      ===================================================== */}
      <section className="py-32 bg-surface-alt border-y border-black/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-8 border-b border-black/5">
            <div className="max-w-3xl">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                Explore
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-content tracking-tight leading-tight">
                Academic Resources.
              </h2>
            </div>
            <p className="text-content-muted font-medium mt-6 md:mt-0 max-w-sm">
              Everything you need to navigate your academic journey in the department.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeAbout.map((item, index) => {
              const isActive = activeSection === item.title.toLowerCase();
              return (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => handleSectionClick(item.title)}
                  className={`group relative text-left rounded-[2rem] p-10 transition-all duration-500 flex flex-col h-full border overflow-hidden ${
                    isActive 
                      ? "bg-content text-white border-content shadow-[0_20px_40px_rgba(0,0,0,0.2)]" 
                      : "bg-white border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-black/10"
                  }`}
                >
                  <div className="flex justify-between items-start mb-16 w-full">
                    <div className={`text-4xl font-mono font-bold tracking-tighter transition-colors ${
                      isActive ? "text-white/20" : "text-black/5 group-hover:text-black/10"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-white/10 text-white" : "bg-surface-alt text-content-muted group-hover:bg-primary group-hover:text-white"
                    }`}>
                      <LuArrowUpRight className={`text-xl transition-transform duration-300 ${isActive ? "rotate-45" : ""}`} />
                    </div>
                  </div>

                  <h3 className={`text-3xl font-semibold tracking-tight mb-4 transition-colors ${
                    isActive ? "text-white" : "text-content"
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`font-medium tracking-wide leading-relaxed mb-8 flex-grow transition-colors ${
                    isActive ? "text-white/70" : "text-content-muted"
                  }`}>
                    {item.desc}
                  </p>

                  <div className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors mt-auto ${
                    isActive ? "text-white" : "text-primary"
                  }`}>
                    {isActive ? "Viewing Now" : "Explore Section"} 
                    {!isActive && <LuArrowRight className="text-lg" />}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          SELECTED CONTENT
      ===================================================== */}
      <AnimatePresence mode="wait">
        {activeSection === "routine" && (
          <motion.div
            key="routine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routine />
          </motion.div>
        )}

        {activeSection === "curriculum" && (
          <motion.div
            key="curriculum"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Curriculum />
          </motion.div>
        )}

        {activeSection === "infrastructure" && (
          <motion.div
            key="infrastructure"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Infrastructure />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}