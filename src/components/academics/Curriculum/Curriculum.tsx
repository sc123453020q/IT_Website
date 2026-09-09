"use client";

import { useState } from "react";

import "./Curriculum.css";

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
  const [selectedSemester, setSelectedSemester] =
    useState<SemesterType>("4TH SEM");

  const data = courseStruct[selectedSemester];

  return (
    <section
      className="curriculum-section"
      id="curriculum-section"
    >

      <div className="curriculum-container">

        {/* Heading */}

        <div className="curriculum-heading">

          <div className="curriculum-eyebrow">
            <span />
            ACADEMIC STRUCTURE
          </div>

          <h2>
            Course
            <strong>Curriculum</strong>
          </h2>

          <p>
            Explore semester-wise course structures,
            electives and detailed syllabus documents.
          </p>

        </div>


        {/* Semester tabs */}

        <div className="curriculum-tabs">

          {semesters.map((semester) => (
            <button
              type="button"
              key={semester}
              className={
                selectedSemester === semester
                  ? "curriculum-tab active"
                  : "curriculum-tab"
              }
              onClick={() =>
                setSelectedSemester(semester)
              }
            >
              {semester}
            </button>
          ))}

        </div>


        {/* Course structure */}

        {data.struct &&
          data.struct.length > 0 ? (

          <div className="curriculum-card">

            <div className="curriculum-card-header">

              <div>
                <span>COURSE STRUCTURE</span>

                <h3>
                  {selectedSemester}
                </h3>
              </div>

              <span className="curriculum-scroll">
                ← Scroll table →
              </span>

            </div>


            <div className="curriculum-table-wrapper">

              <table className="curriculum-table">

                <thead>

                  {data.struct
                    .slice(0, 2)
                    .map((row, rowIndex) => (
                      <tr key={rowIndex}>

                        {row.map(
                          (cell, cellIndex) => {

                            const text =
                              typeof cell ===
                              "object"
                                ? cell.text
                                : cell;

                            const colspan =
                              typeof cell ===
                              "object"
                                ? cell.colspan
                                : undefined;

                            const rowspan =
                              typeof cell ===
                              "object"
                                ? cell.rowspan
                                : undefined;

                            return (
                              <th
                                key={cellIndex}
                                colSpan={colspan}
                                rowSpan={rowspan}
                              >
                                {text}
                              </th>
                            );
                          }
                        )}

                      </tr>
                    ))}

                </thead>


                <tbody>

                  {data.struct
                    .slice(2)
                    .map((row, rowIndex) => {

                      const isSection =
                        row.some(
                          (cell) =>
                            typeof cell ===
                              "object" &&
                            cell.section
                        );

                      const firstCell =
                        row[0];

                      const firstText =
                        typeof firstCell ===
                        "object"
                          ? firstCell.text
                          : firstCell;

                      const isTotal =
                        String(firstText)
                          .toLowerCase()
                          .includes("total");

                      return (
                        <tr
                          key={rowIndex}
                          className={
                            isSection
                              ? "curriculum-section-row"
                              : isTotal
                              ? "curriculum-total-row"
                              : rowIndex % 2 === 0
                              ? "curriculum-even-row"
                              : "curriculum-odd-row"
                          }
                        >

                          {row.map(
                            (cell, cellIndex) => {

                              const text =
                                typeof cell ===
                                "object"
                                  ? cell.text
                                  : cell;

                              const colspan =
                                typeof cell ===
                                "object"
                                  ? cell.colspan
                                  : undefined;

                              const rowspan =
                                typeof cell ===
                                "object"
                                  ? cell.rowspan
                                  : undefined;

                              return (
                                <td
                                  key={cellIndex}
                                  colSpan={colspan}
                                  rowSpan={rowspan}
                                  className={
                                    isSection
                                      ? "curriculum-section-cell"
                                      : ""
                                  }
                                >
                                  {text}
                                </td>
                              );
                            }
                          )}

                        </tr>
                      );
                    })}

                </tbody>

              </table>

            </div>

          </div>

        ) : (

          <div className="curriculum-empty">

            <div className="curriculum-empty-number">
              08
            </div>

            <h3>
              Detailed Course Structure
            </h3>

            <p>
              The detailed course structure for this
              semester is not available in the current
              department data.
            </p>

          </div>

        )}


        {/* Electives */}

        {selectedSemester === "6TH SEM" &&
          data.elective && (

          <div className="curriculum-card elective-card">

            <div className="curriculum-card-header">

              <div>
                <span>ELECTIVE COURSES</span>

                <h3>
                  Elective Tracks
                </h3>
              </div>

              <span className="curriculum-scroll">
                ← Scroll table →
              </span>

            </div>


            <div className="curriculum-table-wrapper">

              <table className="curriculum-table">

                <thead>

                  <tr>
                    {data.elective[0].map(
                      (cell, index) => (
                        <th key={index}>
                          {typeof cell ===
                          "object"
                            ? cell.text
                            : cell}
                        </th>
                      )
                    )}
                  </tr>

                </thead>


                <tbody>

                  {data.elective
                    .slice(1)
                    .map((row, rowIndex) => (

                      <tr
                        key={rowIndex}
                        className={
                          rowIndex % 2 === 0
                            ? "curriculum-even-row"
                            : "curriculum-odd-row"
                        }
                      >

                        {row.map(
                          (cell, cellIndex) => {

                            const text =
                              typeof cell ===
                              "object"
                                ? cell.text
                                : cell;

                            const rowspan =
                              typeof cell ===
                              "object"
                                ? cell.rowspan
                                : undefined;

                            return (
                              <td
                                key={cellIndex}
                                rowSpan={rowspan}
                              >
                                {text}
                              </td>
                            );
                          }
                        )}

                      </tr>

                    ))}

                </tbody>

              </table>

            </div>

          </div>

        )}


        {/* Syllabus */}

        <div className="syllabus-card">

          <div className="syllabus-content">

            <div className="syllabus-icon">
              PDF
            </div>

            <div>
              <span>DETAILED DOCUMENT</span>

              <h3>
                {selectedSemester} Syllabus
              </h3>

              <p>
                Open the detailed syllabus document
                for this semester.
              </p>
            </div>

          </div>

          <a
            href={syllabusFiles[selectedSemester]}
            target="_blank"
            rel="noopener noreferrer"
            className="syllabus-button"
          >
            Open Syllabus
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}