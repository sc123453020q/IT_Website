"use client";

import { motion } from "framer-motion";
import { peo, po, pso } from "@/lib/dummydata";

type OutcomeItem = {
  id: string | number;
  title: string;
  desc: string;
};

function OutcomeSection({
  eyebrow,
  title,
  data,
}: {
  eyebrow: string;
  title: string;
  data: OutcomeItem[];
}) {
  return (
    <section className="mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-black/5">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            {eyebrow}
          </span>
          <h3 className="text-4xl md:text-5xl font-semibold text-content tracking-tight">{title}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {data.map((item, index) => (
          <motion.article
            key={`${item.id}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6 group"
          >
            <div className="text-2xl font-bold text-primary/30 group-hover:text-primary transition-colors mt-1 font-mono">
              {String(item.id).padStart(2, "0")}
            </div>

            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-content mb-3 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-content-muted leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default function ProgramOutcomes() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">

        <motion.header 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Academic Framework
          </span>

          <h2 className="text-5xl md:text-7xl font-semibold text-content mb-8 tracking-tighter leading-[1.1]">
            Educational Objectives <br className="hidden md:block" />& Outcomes.
          </h2>

          <p className="text-2xl text-content-muted leading-relaxed font-light tracking-wide max-w-3xl">
            Our academic framework defines the knowledge, skills and professional qualities students are expected to develop throughout the program.
          </p>
        </motion.header>

        <OutcomeSection
          eyebrow="PEO"
          title="Programme Educational Objectives"
          data={peo}
        />

        <OutcomeSection
          eyebrow="PO"
          title="Program Outcomes"
          data={po}
        />

        <OutcomeSection
          eyebrow="PSO"
          title="Program Specific Outcomes"
          data={pso}
        />

      </div>
    </section>
  );
}