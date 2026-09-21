"use client";

import { motion } from "framer-motion";
import { aboutprog } from "@/lib/dummydata";

export default function AboutProgram() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Information Technology
          </span>
          <h2 className="text-5xl md:text-7xl font-semibold text-content mb-8 tracking-tighter leading-[1.1]">
            About the Program.
          </h2>
          <p className="text-2xl text-content-muted leading-relaxed font-light tracking-wide max-w-3xl">
            Building strong foundations in technology, innovation, problem-solving and professional development.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {aboutprog.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border-t border-black/5 pt-8"
            >
              <div className="text-4xl md:text-5xl font-semibold text-content/20 mb-6 tracking-tighter">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="text-lg text-content-muted leading-relaxed font-medium tracking-wide">
                <p>{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}