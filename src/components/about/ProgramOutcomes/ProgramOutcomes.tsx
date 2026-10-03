"use client";

import { motion } from "framer-motion";
import { peo, peoMapping, peoProcess, po, pso } from "@/lib/dummydata";
import { LuCircleCheck } from "react-icons/lu";

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
    <section className="mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-black/5">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            {eyebrow}
          </span>
          <h3 className="text-4xl md:text-5xl font-semibold text-content tracking-tight">{title}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.article
            key={`${item.id}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="flex flex-col bg-surface-muted/60 p-8 rounded-3xl border border-black/5 group hover:border-primary/20 transition-all duration-300"
          >
            <div className="text-sm font-bold text-primary font-mono px-3 py-1 bg-primary/10 rounded-full w-max mb-4">
              {item.title.startsWith("PEO") || item.title.startsWith("PSO") ? item.title.split(":")[0] : `PO ${item.id}`}
            </div>

            <div className="flex flex-col flex-grow">
              <h4 className="text-xl font-semibold text-content mb-3 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-content-muted leading-relaxed font-light text-sm">
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">

        <motion.header 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Academic Framework
          </span>

          <h2 className="text-5xl md:text-7xl font-semibold text-content mb-8 tracking-tight leading-[1.1]">
            Educational Objectives <br className="hidden md:block" />& Outcomes.
          </h2>

          <p className="text-2xl text-content-muted leading-relaxed font-light tracking-wide max-w-3xl">
            Our academic framework defines the knowledge, skills and professional qualities students are expected to develop throughout the program.
          </p>
        </motion.header>

        {/* PEO Section */}
        <OutcomeSection
          eyebrow="PEO"
          title="Program Educational Objectives (ITPEOs)"
          data={peo}
        />

        {/* PEO Mapping Table */}
        <div className="mt-16 bg-surface-muted/60 p-8 rounded-3xl border border-black/5">
          <h4 className="text-2xl font-bold text-content mb-6">Mapping of ITPEOs with POs and SDGs</h4>
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
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

          <div className="mt-8">
            <h5 className="text-lg font-bold text-content mb-3">Process of Defining PEO</h5>
            <div className="flex flex-wrap gap-4">
              {peoProcess.map((proc, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-2.5 bg-white rounded-full border border-black/5 font-semibold text-content text-sm">
                  <LuCircleCheck className="text-primary text-lg" />
                  <span>{idx + 1}. {proc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PO Section */}
        <OutcomeSection
          eyebrow="PO"
          title="Program Outcomes"
          data={po}
        />

        {/* PSO Section */}
        <OutcomeSection
          eyebrow="PSO"
          title="Program Specific Outcomes"
          data={pso}
        />

      </div>
    </section>
  );
}