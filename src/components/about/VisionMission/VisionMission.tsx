"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuEye, LuTarget } from "react-icons/lu";

export default function VisionMission() {
  return (
    <section className="py-32 bg-surface-alt border-y border-black/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header */}
        <motion.div 
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Our Direction
          </span>
          <h2 className="text-5xl md:text-7xl font-semibold text-content mb-8 tracking-tighter leading-[1.1]">
            Vision & Mission.
          </h2>
          <p className="text-2xl text-content-muted leading-relaxed font-light tracking-wide max-w-3xl">
            A clear vision, meaningful mission and commitment to excellence shape the future of our students.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.article 
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-primary">
                <LuEye className="text-3xl" />
              </div>
              <span className="text-content-muted font-bold tracking-widest text-xs uppercase">
                01 — Vision
              </span>
            </div>

            <h3 className="text-4xl font-semibold text-content tracking-tight mb-8">
              Vision of the Department
            </h3>

            <div className="space-y-6 text-xl text-content/80 leading-relaxed font-light tracking-wide">
              <p>
                To be a nationally and internationally distinguished Department of Information Technology that advances transformative digital solutions through experiential learning, interdisciplinary collaboration, and research excellence in alignment with NEP 2020.
              </p>
              <p>
                To create technology leaders and responsible innovators who harness data, intelligent systems, and digital infrastructure to drive inclusive growth and sustainable development in accordance with the SDGs.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-white border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-4 flex items-center justify-center">
              <Image
                src="/images/vision.jpg"
                alt="Vision of the Information Technology Department"
                fill
                className="object-contain p-2 transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.article>

        {/* Mission */}
        <motion.article 
          className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-primary">
                <LuTarget className="text-3xl" />
              </div>
              <span className="text-content-muted font-bold tracking-widest text-xs uppercase">
                02 — Mission
              </span>
            </div>

            <h3 className="text-4xl font-semibold text-content tracking-tight mb-8">
              Mission of the Department
            </h3>

            <div className="space-y-6 text-lg text-content/80 leading-relaxed font-light tracking-wide">
              <div>
                <h4 className="font-semibold text-content text-xl mb-1">Holistic & Experiential Education</h4>
                <p>To deliver multidisciplinary, experiential, and outcome-based IT education aligned with NEP 2020, enabling students to integrate theory with practice and emerge as competent, ethical, and socially responsible professionals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-content text-xl mb-1">Innovation, Research & Digital Transformation</h4>
                <p>To foster innovation, applied research, and industry collaboration in emerging areas of Information Technology, encouraging entrepreneurship and the development of technology-driven solutions for national and global challenges.</p>
              </div>
              <div>
                <h4 className="font-semibold text-content text-xl mb-1">Continuous Improvement & Sustainable Impact</h4>
                <p>To continuously enhance curriculum, infrastructure, and faculty expertise through stakeholder engagement and modern pedagogical tools, preparing graduates to contribute to inclusive growth and the achievement of the Sustainable Development Goals (SDGs).</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-white border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-4 flex items-center justify-center">
              <Image
                src="/images/mission.jpg"
                alt="Mission of the Information Technology Department"
                fill
                className="object-contain p-2 transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
}