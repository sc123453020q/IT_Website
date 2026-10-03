"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { peo, peoMapping, peoProcess, pso } from "@/lib/dummydata";
import { LuBookOpen, LuCircleCheck, LuCompass, LuLayers, LuTarget } from "react-icons/lu";

export default function DepartmentOverview() {
  return (
    <section className="py-24 bg-surface-alt border-y border-black/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* ================= LEFT-ALIGNED HEADING ================= */}
        <motion.div
          className="text-left mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Department of Information Technology
          </span>
          <h2 className="text-6xl md:text-8xl font-bold text-content mb-6 tracking-tight">
            About
          </h2>
          <p className="text-xl md:text-2xl text-content-muted leading-relaxed font-light">
            Comprehensive framework of Vision, Mission, Program Educational Objectives (PEOs), Mapping Matrices, and Program Specific Outcomes (PSOs).
          </p>
        </motion.div>

        {/* ================= VISION & MISSION OF INSTITUTE AND DEPARTMENT ================= */}
        <div className="space-y-16 mb-24">
          
          {/* Institute Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <LuCompass className="text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-content tracking-tight">
                Vision and Mission of the Institute
              </h3>
            </div>

            {/* UEM & IEM Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* UEM Card */}
              <div className="bg-surface-muted/60 p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full mb-4">
                    UEM: Vision & Mission
                  </span>
                  <h4 className="text-xl font-bold text-content mb-2">VISION (UEMV)</h4>
                  <p className="text-content-muted text-sm leading-relaxed mb-6">
                    To be globally recognized as a center of excellence in education and research producing global leaders in science, technology and management and creating knowledge in frontier areas of national and global importance.
                  </p>
                  <h4 className="text-xl font-bold text-content mb-2">MISSION</h4>
                  <p className="text-content-muted text-sm leading-relaxed">
                    To provide the highest quality engineering, management graduates, cutting-edge researchers and innovation technologists by offering a congenial learning atmosphere to students with target to create good citizens.
                  </p>
                </div>
              </div>

              {/* IEM Card */}
              <div className="bg-surface-muted/60 p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full mb-4">
                    IEM: Vision & Mission
                  </span>
                  <h4 className="text-xl font-bold text-content mb-2">VISION (IEMV)</h4>
                  <p className="text-content-muted text-sm leading-relaxed mb-6">
                    To be a globally recognized educational institution known for outcome based education and application oriented research.
                  </p>
                  <h4 className="text-xl font-bold text-content mb-2">MISSION</h4>
                  <ul className="space-y-3 text-content-muted text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold text-base">•</span>
                      <span>To assist students to understand and enjoy seamless nature of knowledge and encourage them to apply the acquired knowledge to practical use, so that they become worthy, socially responsible good human beings sought after for their leadership qualities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold text-base">•</span>
                      <span>To foster creativity, innovation, and excellence through example based teaching-learning process imparted in the most simple and easily comprehensible way.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold text-base">•</span>
                      <span>To continuously upgrade knowledge base of our manpower, improve infrastructure and use of latest technology/pedagogical tools, and update curriculum through periodic feedback from stakeholders to enable students to meet professional requirements and their expectations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Institute Vision Photo Frame */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[450px] rounded-2xl overflow-hidden border border-black/10 shadow-sm group">
              <Image
                src="/images/vision.jpg"
                alt="Faculty & Leadership — Institute of Engineering & Management"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-sm font-medium tracking-wide drop-shadow-sm bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                  Faculty & Leadership — Institute of Engineering & Management
                </span>
              </div>
            </div>
          </motion.div>

          {/* Department Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <LuTarget className="text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-content tracking-tight">
                Vision & Mission of the Department
              </h3>
            </div>

            {/* Vision of Department & Image Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
              <div className="lg:col-span-7 bg-primary/5 p-8 md:p-10 rounded-2xl border border-primary/10">
                <h4 className="text-2xl font-bold text-content mb-4 flex items-center gap-2">
                  <span className="text-primary">VISION OF THE DEPARTMENT (ITV)</span>
                </h4>
                <p className="text-content/80 text-base md:text-lg leading-relaxed mb-4">
                  To be a nationally and internationally distinguished Department of Information Technology that advances transformative digital solutions through experiential learning, interdisciplinary collaboration, and research excellence in alignment with NEP 2020.
                </p>
                <p className="text-content/80 text-base md:text-lg leading-relaxed">
                  To create technology leaders and responsible innovators who harness data, intelligent systems, and digital infrastructure to drive inclusive growth and sustainable development in accordance with the SDGs.
                </p>
              </div>

              {/* Department Mission Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 shadow-sm group">
                  <Image
                    src="/images/mission.jpg"
                    alt="Department of IT Students & Faculty"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-medium tracking-wide bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block">
                      Department of IT — Students & Faculty
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Mapping Matrix */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-content mb-4">Vision Mapping Matrix of UEMV, IEMV with ITV</h4>
              <div className="overflow-x-auto rounded-2xl border border-black/10">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-surface-muted text-content font-bold text-sm">
                      <th className="p-4 border-b border-black/10 w-1/3">University / Institute Vision</th>
                      <th className="p-4 border-b border-black/10 w-1/2">Alignment with ITV (Department of IT Vision)</th>
                      <th className="p-4 border-b border-black/10 text-center">Level of Alignment</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-content-muted divide-y divide-black/5">
                    <tr>
                      <td className="p-4 font-semibold text-content">
                        <strong>UEMV</strong>: To be globally recognized as a centre of excellence in education and research producing global leaders in science, technology and management and creating knowledge in frontier areas of national and global importance.
                      </td>
                      <td className="p-4 leading-relaxed">
                        ITV emphasizes national and international distinction, research excellence, experiential learning, and creation of technology leaders contributing to inclusive growth and sustainable development. Both focus on global recognition, leadership, research excellence, and frontier knowledge creation in science and technology domains.
                      </td>
                      <td className="p-4 text-center font-bold text-primary">
                        Strong Alignment<br />
                        <span className="text-lg font-mono">3</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-content">
                        <strong>IEMV</strong>: To be a globally recognized educational institution known for outcome based education and application oriented research.
                      </td>
                      <td className="p-4 leading-relaxed">
                        ITV strongly supports outcome-based education, experiential learning, interdisciplinary collaboration, and application-oriented research in digital and intelligent systems. Both visions emphasize global recognition and practical research orientation aligned with professional and societal needs.
                      </td>
                      <td className="p-4 text-center font-bold text-primary">
                        Strong Alignment<br />
                        <span className="text-lg font-mono">3</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-content-muted mt-3 font-medium">
                * Scale: 3 - Strong Alignment, 2 - Moderate Alignment, 1 - Low Alignment, 0 - No Alignment
              </p>
            </div>

            {/* Mission of Department */}
            <div>
              <h4 className="text-2xl font-bold text-content mb-6">MISSION OF THE DEPARTMENT</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-muted/60 p-6 rounded-2xl border border-black/5">
                  <h5 className="font-bold text-content text-lg mb-2 text-primary">Holistic & Experiential Education</h5>
                  <p className="text-content-muted text-sm leading-relaxed">
                    To deliver multidisciplinary, experiential, and outcome-based IT education aligned with NEP 2020, enabling students to integrate theory with practice and emerge as competent, ethical, and socially responsible professionals.
                  </p>
                </div>

                <div className="bg-surface-muted/60 p-6 rounded-2xl border border-black/5">
                  <h5 className="font-bold text-content text-lg mb-2 text-primary">Innovation, Research & Digital Transformation</h5>
                  <p className="text-content-muted text-sm leading-relaxed">
                    To foster innovation, applied research, and industry collaboration in emerging areas of Information Technology, encouraging entrepreneurship and the development of technology-driven solutions for national and global challenges.
                  </p>
                </div>

                <div className="bg-surface-muted/60 p-6 rounded-2xl border border-black/5">
                  <h5 className="font-bold text-content text-lg mb-2 text-primary">Continuous Improvement & Sustainable Impact</h5>
                  <p className="text-content-muted text-sm leading-relaxed">
                    To continuously enhance curriculum, infrastructure, and faculty expertise through stakeholder engagement and modern pedagogical tools, preparing graduates to contribute to inclusive growth and the achievement of the Sustainable Development Goals (SDGs).
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ================= PROGRAM EDUCATIONAL OBJECTIVES (PEO) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5 mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <LuBookOpen className="text-2xl" />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">PEO</span>
              <h3 className="text-3xl font-bold text-content tracking-tight">
                Program Educational Objectives (ITPEOs)
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {peo.map((item) => (
              <div key={item.id} className="bg-surface-muted/60 p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full mb-4 inline-block">
                    PEO{item.id}
                  </span>
                  <h4 className="text-xl font-bold text-content mb-3">{item.title}</h4>
                  <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mapping Table */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-content mb-6">Mapping of ITPEOs with POs and SDGs</h4>
            <div className="overflow-x-auto rounded-2xl border border-black/10">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-surface-muted text-content font-bold text-sm">
                    <th className="p-4 border-b border-black/10 w-1/6">ITPEO</th>
                    <th className="p-4 border-b border-black/10 w-1/2">Relevant POs (Number & Statement)</th>
                    <th className="p-4 border-b border-black/10 w-1/3">Aligned SDGs</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-content-muted divide-y divide-black/5">
                  {peoMapping.map((row) => (
                    <tr key={row.itpeo}>
                      <td className="p-4 font-bold text-content font-mono">{row.itpeo}</td>
                      <td className="p-4 whitespace-pre-line leading-relaxed">{row.relevantPos}</td>
                      <td className="p-4 whitespace-pre-line font-semibold text-primary">{row.alignedSdgs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Process of Defining PEO */}
          <div>
            <h4 className="text-xl font-bold text-content mb-4">Process of Defining PEO</h4>
            <div className="flex flex-wrap gap-4">
              {peoProcess.map((proc, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-surface-muted rounded-full border border-black/5 font-semibold text-content text-sm">
                  <LuCircleCheck className="text-primary text-lg" />
                  <span>{idx + 1}. {proc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= PROGRAM SPECIFIC OUTCOMES (PSO) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <LuLayers className="text-2xl" />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">POs & PSOs</span>
              <h3 className="text-3xl font-bold text-content tracking-tight">
                Program Specific Outcomes (PSOs)
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pso.map((item) => (
              <div key={item.id} className="bg-surface-muted/60 p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full mb-4 inline-block">
                    PSO {item.id}
                  </span>
                  <h4 className="text-xl font-bold text-content mb-3">{item.title}</h4>
                  <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}