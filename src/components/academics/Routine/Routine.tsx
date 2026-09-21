"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

type RoutineCell =
  | string
  | {
      text: string;
      rowspan?: number;
      colspan?: number;
      style?: React.CSSProperties;
    };

type RoutineRow = RoutineCell[];

const routines: Record<string, RoutineRow[]> = {
  "2ND YEAR": [
    [
      "Day",
      "09:30 - 10:20",
      "10:20 - 11:10",
      "11:10 - 12:00",
      "12:00 - 12:50",
      "12:50 - 01:40",
      "01:40 - 02:30",
      "02:30 - 03:20",
      "03:20 - 04:10",
      "04:10 - 05:00",
    ],

    [
      { text: "Monday", rowspan: 2 },
      { text: "ESP IV", colspan: 2 },
      "F&A(M1)",
      "F&A(M1)",
      {
        text: "L",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      {
        text: "Gr A: COA Lab (PSP+SBS+AR) IT Lab 6",
        colspan: 2,
      },
      "AIML",
      {
        text: "Mentoring",
        rowspan: 10,
        style: {
          verticalAlign: "middle",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        },
      },
    ],

    [
      { text: "ARC (LG 2.1)", colspan: 2 },
      "AB (LG 2.1)",
      "PSP (LG 2.1)",
      {
        text: "Gr B: AIML Lab (BG+RNB) IT Lab 1",
        colspan: 2,
      },
      "SSG (LG 2.1)",
    ],

    [
      { text: "Tuesday", rowspan: 2 },
      {
        text: "Gr A: AIML Lab (BG+RNB) IT Lab 1",
        colspan: 2,
      },
      "DM",
      "AP(OOP)",
      {
        text: "U",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "DAA",
      {
        text: "Gr A: AP(OOP) Lab (SJ+SDB) IT Lab 7",
        colspan: 2,
      },
    ],

    [
      {
        text: "Gr B: COA Lab (PSP+SBS+AR) IT Lab 6",
        colspan: 2,
      },
      "AVC (LG 2.1)",
      "SWB (LG 2.1)",
      "SSB (LG 2.1)",
      {
        text: "Gr B: DAA Lab (SSB+AVC) IT Lab 5",
        colspan: 2,
      },
    ],

    [
      { text: "Wednesday", rowspan: 2 },
      { text: "SDP IV", colspan: 2 },
      "DM",
      "AP(OOP)",
      {
        text: "N",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "AP(OOP)",
      "DM",
      "COA",
    ],

    [
      { text: "LG 2.1", colspan: 2 },
      "AVC (LG 2.1)",
      "SDB (LG 2.1)",
      "SJ (LG 2.1)",
      "AKM (LG 2.1)",
      "KS (LG 2.1)",
    ],

    [
      { text: "Thursday", rowspan: 2 },
      { text: "PPT", colspan: 2 },
      {
        text: "Gr A: DAA Lab (SSB+PBL) IT Lab 5",
        colspan: 2,
      },
      {
        text: "C",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "COA",
      "DAnalytics",
      "AIML",
    ],

    [
      { text: "Science Auditorium", colspan: 2 },
      {
        text: "Gr B: AP(OOP) Lab (SJ+SDB) IT Lab 7",
        colspan: 2,
      },
      "SMU (LG 2.1)",
      "SDas (LG 2.1)",
      "KD (LG 2.1)",
    ],

    [
      { text: "Friday", rowspan: 2 },
      "DAnalytics",
      "F&A(M1)",
      "DAA",
      "COA",
      {
        text: "H",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "AIML",
      "DAA",
      "EVS",
    ],

    [
      "KD (LG 2.1)",
      "AB (LG 2.1)",
      "SWB (LG 2.1)",
      "SBS (LG 2.1)",
      "RNB (LG 2.1)",
      "PBL (LG 2.1)",
      "SD / Kakoli Dutta (LG 2.1)",
    ],
  ],

  "3RD YEAR": [
    [
      "Day",
      "09:30 - 10:20",
      "10:20 - 11:10",
      "11:10 - 12:00",
      "12:00 - 12:50",
      "12:50 - 01:40",
      "01:40 - 02:30",
      "02:30 - 03:20",
      "03:20 - 04:10",
      "04:10 - 05:00",
    ],

    [
      { text: "Monday", rowspan: 2 },
      "CN",
      "ICS",
      {
        text: "NLP / ServiceNow",
        colspan: 2,
      },
      {
        text: "L",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "ICS",
      "CC&IOT",
      "SComp / GT",
      {
        text: "Mentoring",
        rowspan: 10,
        style: {
          verticalAlign: "middle",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        },
      },
    ],

    [
      "RD (LG 4.7)",
      "MBS (LG 4.7)",
      {
        text: "MDey / PBL (LG 4.7)",
        colspan: 2,
      },
      "BD (LG 4.7)",
      "Saikat Dutt (LG 4.7)",
      "SGH / AVC (LG 4.7)",
    ],

    [
      { text: "Tuesday", rowspan: 2 },
      "CN",
      "CC&IOT",
      "ESP VI",
      "ICS",
      {
        text: "U",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "ESP VI",
      "CC&IOT",
      "CN",
    ],

    [
      "SUBH (LG 4.7)",
      "SJ (LG 4.7)",
      "TaB (LG 4.7)",
      "KS (LG 4.7)",
      "MG (LG 4.7)",
      "KK (LG 4.7)",
      "D.Sobya (LG 4.7)",
    ],

    [
      { text: "Wednesday", rowspan: 2 },
      "NLP / ServiceNow",
      "GEN AI",
      {
        text: "Gr A: CN Lab (SuBh+PB) IT Lab 2",
        colspan: 2,
      },
      {
        text: "N",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      {
        text: "Gr A: ICS Lab (PC+RD) IT Lab 4",
        colspan: 2,
      },
      "GEN AI",
    ],

    [
      "RNB / PBL (LG 4.7)",
      "SGH (LG 4.7)",
      {
        text: "Gr B: CC&IOT Lab (AB+KS) IT Lab 8",
        colspan: 2,
      },
      {
        text: "Gr B: IPM Lab (SSG+SD) IT Lab 3",
        colspan: 2,
      },
      "KD (LG 4.7)",
    ],

    [
      { text: "Thursday", rowspan: 2 },
      { text: "SDP VI", colspan: 2 },
      {
        text: "Gr A: CC&IOT Lab (AB+KS) IT Lab 8",
        colspan: 2,
      },
      {
        text: "C",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "CN",
      {
        text: "Gr A: IPM Lab (SSG+MG) IT Lab 3",
        colspan: 2,
      },
    ],

    [
      { text: "SHT (LG 4.7)", colspan: 2 },
      {
        text: "Gr B: CN Lab (SuBh+PB) IT Lab 2",
        colspan: 2,
      },
      "RD (LG 4.7)",
      {
        text: "Gr B: ICS Lab (PC+RD) IT Lab 4",
        colspan: 2,
      },
    ],

    [
      { text: "Friday", rowspan: 2 },
      { text: "PPT", colspan: 2 },
      "SComp / GT",
      "SComp / GT",
      {
        text: "H",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "GEN AI",
      "CC",
      "CC",
    ],

    [
      { text: "Science Auditorium", colspan: 2 },
      "SUBH / SDB (LG 4.7)",
      "SGH / SDB",
      "SGH",
      "MG",
      "MG",
    ],
  ],

  "4TH YEAR": [
    [
      "Day",
      "09:30 - 10:20",
      "10:20 - 11:10",
      "11:10 - 12:00",
      "12:00 - 12:50",
      "12:50 - 01:40",
      "01:40 - 02:30",
      "02:30 - 03:20",
      "03:20 - 04:10",
      "04:10 - 05:00",
    ],

    [
      { text: "Monday", rowspan: 2 },
      "Advanced AI",
      "HCI",
      {
        text: "ESP VIII",
        colspan: 2,
      },
      {
        text: "L",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      "SSIC",
      "GC",
      "GC",
      {
        text: "Mentoring",
        rowspan: 10,
        style: {
          verticalAlign: "middle",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        },
      },
    ],

    [
      "ADB",
      "SJ",
      {
        text: "DDSI",
        colspan: 2,
      },
      "SD",
      "SGH",
      "KS",
    ],

    [
      { text: "Tuesday", rowspan: 2 },
      "Advanced AI",
      "SSIC",
      "HCI",
      "HCI",
      {
        text: "U",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      {
        text: "SDP VIII",
        colspan: 2,
        rowspan: 2,
      },
      "CL&IPR",
    ],

    [
      "ADB",
      "SD",
      "SJ",
      "SBS",
      "SWB",
    ],

    [
      { text: "Wednesday", rowspan: 2 },
      "Advanced AI",
      "GC",
      "BioInf",
      "BioInf",
      {
        text: "N",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      {
        text: "PROJECT",
        colspan: 3,
        rowspan: 2,
      },
    ],

    [
      "ADB",
      "KS",
      "SSB",
      "G.Kamei",
    ],

    [
      { text: "Thursday", rowspan: 2 },
      "SSIC",
      {
        text: "PROJECT",
        rowspan: 2,
      },
      "CL&IPR",
      {
        text: "PROJECT",
        rowspan: 2,
      },
      {
        text: "C",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      {
        text: "PROJECT",
        colspan: 3,
        rowspan: 2,
      },
    ],

    [
      "SD",
      "MBS",
    ],

    [
      { text: "Friday", rowspan: 2 },
      "CL&IPR",
      "BioInf",
      {
        text: "PROJECT",
        colspan: 2,
        rowspan: 2,
      },
      {
        text: "H",
        rowspan: 2,
        style: {
          verticalAlign: "middle",
          fontWeight: "bold",
        },
      },
      {
        text: "PROJECT",
        colspan: 3,
        rowspan: 2,
      },
    ],

    [
      "MBS",
      "SSB",
    ],
  ],
};

export default function Routine() {
  const years = Object.keys(routines);
  const [selectedYear, setSelectedYear] = useState<string>("2ND YEAR");

  const selectedRoutine = routines[selectedYear];

  return (
    <section className="py-24 bg-white" id="routine-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">

        {/* Header */}
        <motion.div 
          className="max-w-4xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Academic Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-content mb-6 tracking-tight">
            Class Routine.
          </h2>
          <p className="text-xl text-content-muted leading-relaxed font-light tracking-wide max-w-2xl">
            Select your academic year to view the current class timetable.
          </p>
        </motion.div>

        {/* Year selector */}
        <div className="flex flex-wrap gap-4 mb-12">
          {years.map((year) => (
            <button
              type="button"
              key={year}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedYear === year
                  ? "bg-content text-white shadow-lg"
                  : "bg-surface-alt text-content-muted hover:bg-black/5"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Timetable */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-black/5 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            <div className="p-8 border-b border-black/5 flex justify-between items-end bg-surface-alt/50">
              <div>
                <span className="text-primary font-bold tracking-widest text-[10px] uppercase block mb-2">
                  Weekly Schedule
                </span>
                <h3 className="text-2xl font-semibold text-content tracking-tight">
                  {selectedYear}
                </h3>
              </div>
              <span className="text-xs font-semibold text-content-muted uppercase tracking-widest flex items-center gap-2 hidden md:flex">
                <LuArrowRight className="rotate-180" /> Scroll horizontally <LuArrowRight />
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-surface-alt text-content-muted text-xs uppercase tracking-widest">
                    {selectedRoutine[0].map((cell, index) => {
                      const text = typeof cell === "object" ? cell.text : cell;
                      const colspan = typeof cell === "object" ? cell.colspan : undefined;
                      const rowspan = typeof cell === "object" ? cell.rowspan : undefined;
                      return (
                        <th
                          key={index}
                          colSpan={colspan}
                          rowSpan={rowspan}
                          className="px-6 py-4 border-b border-r border-black/5 font-semibold whitespace-nowrap last:border-r-0 text-center"
                        >
                          {text}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-content">
                  {selectedRoutine.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
                      {row.map((cell, cellIndex) => {
                        const text = typeof cell === "object" ? cell.text : cell;
                        const colspan = typeof cell === "object" ? cell.colspan : undefined;
                        const rowspan = typeof cell === "object" ? cell.rowspan : undefined;
                        const style = typeof cell === "object" ? cell.style : undefined;
                        
                        const isDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(text);
                        const isBreak = ["L", "U", "N", "C", "H", "Mentoring"].includes(text);
                        
                        return (
                          <td
                            key={cellIndex}
                            colSpan={colspan}
                            rowSpan={rowspan}
                            style={style}
                            className={`px-4 py-3 border-r border-black/5 last:border-r-0 text-center ${
                              isDay ? "bg-surface-alt/50 font-bold text-content tracking-wide uppercase text-xs" : ""
                            } ${
                              isBreak ? "bg-black/[0.03] text-content-muted font-bold tracking-widest" : ""
                            }`}
                          >
                            {text}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}