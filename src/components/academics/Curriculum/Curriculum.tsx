"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { LuFileText, LuArrowRight, LuDownload } from "react-icons/lu";
type SemesterType =
  | "4TH SEM"
  | "6TH SEM"
  | "8TH SEM";

type TableCell =
  | string
  | number
  | {
      text: string;
      colspan?: number;
      rowspan?: number;
      section?: string;
    };

type CourseStruct = TableCell[][];

interface CurriculumData {
  struct?: CourseStruct;
  elective?: CourseStruct;
}

const semesters: SemesterType[] = [
  "4TH SEM",
  "6TH SEM",
  "8TH SEM",
];

const courseStruct: Record<
  SemesterType,
  CurriculumData
> = {
  "4TH SEM": {
    struct: [
      [
        { text: "Sl. No.", rowspan: 2 },
        { text: "Type of course", rowspan: 2 },
        { text: "Course Code", rowspan: 2 },
        { text: "Course Name", rowspan: 2 },
        {
          text: "Hours per week",
          colspan: 4,
        },
        { text: "Credit Points", rowspan: 2 },
      ],

      [
        "Lecture",
        "Tutorial",
        "Practical",
        "Sessional",
      ],

      [
        {
          text: "Theory Papers",
          colspan: 9,
          section: "theory",
        },
      ],

      [
        1,
        "Professional Core Course",
        "PCCCS401",
        "Discrete Mathematics",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        2,
        "Professional Core Course",
        "PCCCS402",
        "Computer Organisation & Architecture",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        3,
        "Professional Core Course",
        "PCCCS403",
        "Artificial Intelligence & Machine Learning",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        4,
        "Professional Core Course",
        "PCCCS404",
        "Design & Analysis of Algorithms",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        5,
        "Professional Core Course",
        "PCCCS405",
        "Advanced Programming (OOP)",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        6,
        "Humanities & Social Sciences including Management course",
        "HSMCS471",
        "Management 1 (Finance & Accounting)",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        7,
        "Humanities & Social Sciences including Management course",
        "ESP401",
        "Essential Studies for Professionals - IV",
        2,
        0,
        0,
        0,
        0.5,
      ],

      [
        8,
        "Mandatory Course",
        "MCC471",
        "Sustainability, Climate Actions & Environmental Sciences",
        1,
        "-",
        "(Field Projects)",
        "-",
        2,
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        21,
        0,
        0,
        0,
        20.5,
      ],

      [
        {
          text: "Practical Papers",
          colspan: 9,
          section: "practical",
        },
      ],

      [
        1,
        "Professional Core Course",
        "PCCCS492",
        "Computer Organisation & Architecture Laboratory",
        0,
        0,
        4,
        0,
        2,
      ],

      [
        2,
        "Professional Core Course",
        "PCCCS493",
        "Artificial Intelligence & Machine Learning Laboratory",
        0,
        0,
        2,
        0,
        1,
      ],

      [
        3,
        "Professional Core Course",
        "PCCCS494",
        "Design & Analysis of Algorithms Laboratory",
        0,
        0,
        4,
        0,
        2,
      ],

      [
        4,
        "Professional Core Course",
        "PCCCS402",
        "Advanced Programming (OOP) Laboratory",
        0,
        0,
        2,
        0,
        1,
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        0,
        0,
        12,
        0,
        6,
      ],

      [
        {
          text: "Sessional Papers",
          colspan: 9,
          section: "sessional",
        },
      ],

      [
        1,
        "Humanities & Social Sciences including Management course",
        "SDP481",
        "Skill Development for Professionals - IV",
        0,
        0,
        0,
        2,
        0.5,
      ],

      [
        2,
        "Innovative Project",
        "PRJCS481",
        "Innovative Project -II",
        0,
        0,
        0,
        0,
        1,
      ],

      [
        3,
        "Professional Core Course",
        "PCCCS481",
        "Data Analytics",
        0,
        0,
        4,
        0,
        2,
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        0,
        0,
        0,
        4,
        0.5,
      ],

      [
        {
          text: "Mandatory Requirements",
          colspan: 9,
          section: "mandatory",
        },
      ],

      [
        1,
        "Co-curricular & Extra Curricular Activities",
        "MAR",
        "Mandatory Additional Requirements (Score)",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],

      [
        2,
        "Honours",
        "MOOCs",
        "Massive Open Online Course (Credit)",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],

      [
        3,
        "Certification",
        "IFC",
        "Industry and Foreign Certification (Count)",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        21,
        0,
        12,
        4,
        29,
      ],
    ],
  },

  "6TH SEM": {
    struct: [
      [
        { text: "Sl. No.", rowspan: 2 },
        { text: "Type of course", rowspan: 2 },
        { text: "Course Code", rowspan: 2 },
        { text: "Course Name", rowspan: 2 },
        {
          text: "Hours per week",
          colspan: 4,
        },
        { text: "Credit Points", rowspan: 2 },
      ],

      [
        "Lecture",
        "Tutorial",
        "Practical",
        "Sessional",
      ],

      [
        {
          text: "Theory Papers",
          colspan: 9,
          section: "theory",
        },
      ],

      [
        1,
        "Professional Core Course",
        "PCCCS601",
        "Computer Networks",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        2,
        "Professional Core Course",
        "PCCCS602",
        "Cloud Computing & IOT",
        3,
        0,
        0,
        0,
        2,
      ],

      [
        3,
        "Professional Core Course",
        "PCCCS603",
        "Introductory Cyber Scurity",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        4,
        "Professional Core Course",
        "PCCCS604",
        "Elective - I",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        5,
        "Professional Core Course",
        "PCCCS605",
        "Elective - II",
        3,
        0,
        0,
        0,
        3,
      ],

      [
        6,
        "Humanities & Social Sciences including Management course",
        "ESP(CS)601",
        "Essential Studies for Professionals – VI (CS)",
        2,
        0,
        0,
        0,
        0.5,
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        16,
        0,
        0,
        0,
        14.5,
      ],

      [
        {
          text: "Practical Papers",
          colspan: 9,
          section: "practical",
        },
      ],

      [
        1,
        "Professional Core Course",
        "PCCCS691",
        "Computer Networks Laboratory",
        0,
        0,
        4,
        0,
        2,
      ],

      [
        2,
        "Professional Core Course",
        "PCCCS692",
        "Cloud Computing & IOT Laboratory",
        0,
        0,
        4,
        0,
        2,
      ],

      [
        3,
        "Professional Elective Course",
        "PECCS691",
        "Introductory Cyber Security Laboratory",
        0,
        0,
        4,
        0,
        2,
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        0,
        0,
        12,
        0,
        6,
      ],

      [
        {
          text: "Sessional Papers",
          colspan: 9,
          section: "sessional",
        },
      ],

      [
        1,
        "Humanities & Social Sciences including Management course",
        "SDP681",
        "Skill Development for Professionals - VI",
        0,
        0,
        0,
        2,
        0.5,
      ],

      [
        2,
        "Innovative Project",
        "PRJCS681",
        "Project - I",
        0,
        0,
        0,
        6,
        3,
      ],

      [
        3,
        "Professional Core Course",
        "PCCCS481",
        "Generative AI & Deep Learning",
        0,
        0,
        0,
        2,
        1,
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        0,
        0,
        0,
        10,
        4.5,
      ],

      [
        {
          text: "Mandatory Requirements",
          colspan: 9,
          section: "mandatory",
        },
      ],

      [
        1,
        "Co-curricular & Extra Curricular Activities",
        "MAR",
        "Mandatory Additional Requirements (Score)",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],

      [
        2,
        "Honours",
        "MOOCs",
        "Massive Open Online Course (Credit)",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],

      [
        3,
        "Certification",
        "IFC",
        "Industry and Foreign Certification (Count)",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],

      [
        {
          text: "Total",
          colspan: 4,
        },
        16,
        0,
        12,
        10,
        25,
      ],
    ],

    elective: [
      [
        "Program Name",
        "Track",
        "Elective - I",
        "Elective - II",
      ],

      [
        {
          text: "B.Tech in CSE",
          rowspan: 4,
        },
        "Network & Security",
        "Blockchain, Cryptocurrency & NFT (PECCS602A)",
        "Digital Forensics (PECCS603A)",
      ],

      [
        "Artificial Intelligence & Data Science",
        "Soft Computing (PECCS602B)",
        "Natural Language Processing Data (PECCS603B)",
      ],

      [
        "Theory & Systems",
        "Graph Theory (PECCS602C)",
        "Distributed Systems (PECCS603C)",
      ],

      [
        "Applications",
        "Image Processing (PECCS602D)",
        "Computer Graphics (PECCS603D)",
      ],

      [
        {
          text: "B.Tech in IT",
          rowspan: 4,
        },
        "Network & Security",
        "Information Theory & Coding (PECCS602E)",
        "Data Communication (PECCS603F)",
      ],

      [
        "Artificial Intelligence",
        "Soft Computing (PECCS602B)",
        "Natural Language Processing (PECCS603B)",
      ],

      [
        "Theory and Algorithms",
        "Graph Theory (PECCS602C)",
        "Computer Graphics (PECCS603D)",
      ],

      [
        "Applications",
        "Image Processing (PECCS602D)",
        "E-Commerce (PECCS603I)",
      ],

      [
        {
          text: "B.Tech in CSE (IOTCSBT)",
          rowspan: 3,
        },
        "Network & Security",
        "Blockchain, Cryptocurrency & NFT (PECCS602A)",
        "Digital Forensics (PECCS603A)",
      ],

      [
        "Artificial Intelligence",
        "-",
        "Big Data Analytics (PECCS603G)",
      ],

      [
        "Applications",
        "-",
        "Wireless Sensor Network (PECCS603H)",
      ],

      [
        {
          text: "B.Tech in CSE (IOT)",
          rowspan: 3,
        },
        "Network & Security",
        "5G Network Technology (PECCS602H)",
        "Data Communication (PECCS603F)",
      ],

      [
        "Artificial Intelligence",
        "Soft Computing (PECCS602B)",
        "Big Data Analytics (PECCS603G)",
      ],

      [
        "Applications",
        "Embedded System (PECCS602J)",
        "Wireless Sensor Network (PECCS603H)",
      ],

      [
        {
          text: "B.Tech in CSE (AI)",
          rowspan: 2,
        },
        "Artificial Intelligence",
        "Soft Computing (PECCS602B)",
        "Natural Language Processing Data (PECCS603B)",
      ],

      [
        "Data Science",
        "Data Science using Python (PECCS602K)",
        "Cognitive Computing (PECCS603E)",
      ],

      [
        {
          text: "B.Tech in CST / CSIT",
          rowspan: 3,
        },
        "Network & Security",
        "Blockchain, Cryptocurrency & NFT (PECCS602A)",
        "Digital Forensics (PECCS603A)",
      ],

      [
        "Artificial Intelligence",
        "Soft Computing (PECCS602B)",
        "Natural Language Processing (PECCS603B)",
      ],

      [
        "Applications",
        "-",
        "Computer Graphics (PECCS603D)",
      ],

      [
        {
          text: "B.Tech in CSE (AI & ML)",
          rowspan: 2,
        },
        "Theoretical AI",
        "Soft Computing (PECCS602B)",
        "Natural Language Processing (PECCS603B)",
      ],

      [
        "Applied AI",
        "Data Science using Python (PECCS602K)",
        "Pattern Recognition (PECCS603J)",
      ],

      [
        {
          text: "B.Tech in CSBS",
          rowspan: 2,
        },
        "Networks",
        "Blockchain, Cryptocurrency & NFT (PECCS602A)",
        "Wireless Sensor Network (PECCS603H)",
      ],

      [
        "Applied AI",
        "Data Science using Python (PECCS602K)",
        "Natural Language Processing (PECCS603B)",
      ],
    ],
  },

  "8TH SEM": {},
};


const syllabusFiles: Record<
  SemesterType,
  string
> = {
  "4TH SEM":
    "/pdfs/4th_Semester_DetailedSyllabus.pdf",

  "6TH SEM":
    "/pdfs/Detailed_Syllabus_for_6th_Semester_removed.pdf",

  "8TH SEM":
    "/pdfs/IT_2021-2025.pdf",
};

export default function Curriculum() {
  const [selectedSemester, setSelectedSemester] = useState<SemesterType>("4TH SEM");

  const data = courseStruct[selectedSemester];

  return (
    <section className="py-24 bg-white" id="curriculum-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">

        {/* Heading */}
        <motion.div 
          className="max-w-4xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Academic Structure
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-content mb-6 tracking-tight">
            Course Curriculum.
          </h2>
          <p className="text-xl text-content-muted leading-relaxed font-light tracking-wide max-w-2xl">
            Explore semester-wise course structures, electives and detailed syllabus documents.
          </p>
        </motion.div>

        {/* Semester tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {semesters.map((semester) => (
            <button
              type="button"
              key={semester}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedSemester === semester
                  ? "bg-content text-white shadow-lg"
                  : "bg-surface-alt text-content-muted hover:bg-black/5"
              }`}
              onClick={() => setSelectedSemester(semester)}
            >
              {semester}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSemester}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Course structure */}
            {data.struct && data.struct.length > 0 ? (
              <div className="bg-white border border-black/5 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="p-8 border-b border-black/5 flex justify-between items-end bg-surface-alt/50">
                  <div>
                    <span className="text-primary font-bold tracking-widest text-[10px] uppercase block mb-2">
                      Course Structure
                    </span>
                    <h3 className="text-2xl font-semibold text-content tracking-tight">
                      {selectedSemester}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-content-muted uppercase tracking-widest flex items-center gap-2 hidden md:flex">
                    <LuArrowRight className="rotate-180" /> Scroll table <LuArrowRight />
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      {data.struct.slice(0, 2).map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-surface-alt text-content-muted text-xs uppercase tracking-widest">
                          {row.map((cell, cellIndex) => {
                            const text = typeof cell === "object" ? cell.text : cell;
                            const colspan = typeof cell === "object" ? cell.colspan : undefined;
                            const rowspan = typeof cell === "object" ? cell.rowspan : undefined;
                            return (
                              <th
                                key={cellIndex}
                                colSpan={colspan}
                                rowSpan={rowspan}
                                className="px-6 py-4 border-b border-r border-black/5 font-semibold whitespace-nowrap last:border-r-0"
                              >
                                {text}
                              </th>
                            );
                          })}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="text-sm font-medium text-content">
                      {data.struct.slice(2).map((row, rowIndex) => {
                        const isSectionHeader = row.length === 1 && typeof row[0] === "object" && row[0].section;
                        return (
                          <tr 
                            key={rowIndex} 
                            className={`border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors ${
                              isSectionHeader ? "bg-surface-alt/30" : ""
                            }`}
                          >
                            {row.map((cell, cellIndex) => {
                              const text = typeof cell === "object" ? cell.text : cell;
                              const colspan = typeof cell === "object" ? cell.colspan : undefined;
                              const rowspan = typeof cell === "object" ? cell.rowspan : undefined;
                              return (
                                <td
                                  key={cellIndex}
                                  colSpan={colspan}
                                  rowSpan={rowspan}
                                  className={`px-6 py-4 border-r border-black/5 last:border-r-0 ${
                                    isSectionHeader ? "font-bold text-primary tracking-wide text-xs uppercase py-6" : ""
                                  }`}
                                >
                                  {text}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-surface-alt rounded-[2rem] border border-black/5">
                <p className="text-content-muted font-medium">No course structure available for {selectedSemester}.</p>
              </div>
            )}

            {/* Elective Subjects (if any) */}
            {data.elective && data.elective.length > 0 && (
              <div className="bg-white border border-black/5 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden mt-12">
                <div className="p-8 border-b border-black/5 bg-surface-alt/50">
                  <span className="text-primary font-bold tracking-widest text-[10px] uppercase block mb-2">
                    Electives
                  </span>
                  <h3 className="text-2xl font-semibold text-content tracking-tight">
                    Professional Elective Courses
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-alt text-content-muted text-xs uppercase tracking-widest">
                        {data.elective[0].map((cell, idx) => (
                          <th key={idx} className="px-6 py-4 border-b border-r border-black/5 font-semibold whitespace-nowrap last:border-r-0">
                            {typeof cell === "object" ? cell.text : cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium text-content">
                      {data.elective.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
                          {row.map((cell, cellIndex) => {
                            const text = typeof cell === "object" ? cell.text : cell;
                            const colspan = typeof cell === "object" ? cell.colspan : undefined;
                            const rowspan = typeof cell === "object" ? cell.rowspan : undefined;
                            return (
                              <td
                                key={cellIndex}
                                colSpan={colspan}
                                rowSpan={rowspan}
                                className="px-6 py-4 border-r border-black/5 last:border-r-0"
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
              </div>
            )}

            {/* Syllabus Document */}
            {syllabusFiles[selectedSemester] && (
              <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10 bg-surface-alt border border-black/5 rounded-[2rem] gap-8">
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0 border border-black/5">
                    <LuFileText className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-primary font-bold tracking-widest text-[10px] uppercase block mb-1">
                      Detailed Document
                    </span>
                    <h3 className="text-xl font-semibold text-content tracking-tight mb-1">
                      {selectedSemester} Syllabus
                    </h3>
                    <p className="text-sm text-content-muted font-medium">
                      Open the detailed syllabus document.
                    </p>
                  </div>
                </div>
                
                <a
                  href={syllabusFiles[selectedSemester]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-content text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-content/90 transition-colors shadow-lg shadow-content/20"
                >
                  <LuDownload className="text-lg" />
                  Download PDF
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}