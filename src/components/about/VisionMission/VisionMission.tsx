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
              Vision of the Program
            </h3>

            <div className="space-y-6 text-xl text-content/80 leading-relaxed font-light tracking-wide">
              <p>
                The Department of Information Technology at IEM Kolkata strives to achieve excellence in academics, innovation, research, and student development. It is well-equipped to tackle novel challenges in this fast-evolving era of Information Technology through research and entrepreneurial initiatives, thereby creating true value for society.
              </p>
              <p>
                The department is internationally recognized in distinctive areas of education and research, driven by a professional and technology-oriented focus, based on a culture of innovation and excellence.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/vision.jpg"
                alt="Vision of the Information Technology program"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
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
              Mission of the Program
            </h3>

            <div className="space-y-6 text-lg text-content/80 leading-relaxed font-light tracking-wide">
              <p>
                To assist students in understanding and enjoying the seamless nature of knowledge, encouraging them to apply acquired knowledge to practical use, ensuring they become socially responsible individuals sought after for their leadership qualities.
              </p>
              <p>
                To foster creativity, innovation, and excellence through an example-based teaching-learning process imparted in the most simple and understandable way.
              </p>
              <p>
                To continuously upgrade knowledge bases, improve infrastructure, adopt the latest technological tools, and update curricula based on periodic stakeholder feedback, enabling students to meet professional requirements and expectations.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/mission.jpg"
                alt="Mission of the Information Technology program"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
}