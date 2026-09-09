"use client";

import { useState } from "react";

import "./Routine.css";

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

  const [selectedYear, setSelectedYear] =
    useState<string>("2ND YEAR");

  const selectedRoutine = routines[selectedYear];

  return (
    <section
      className="routine-section"
      id="routine-section"
    >
      <div className="routine-container">

        {/* Header */}

        <div className="routine-heading">

          <div className="routine-eyebrow">
            <span />
            ACADEMIC SCHEDULE
          </div>

          <h2>
            Class
            <strong>Routine</strong>
          </h2>

          <p>
            Select your academic year to view the current
            class timetable.
          </p>

        </div>


        {/* Year selector */}

        <div className="routine-tabs">

          {years.map((year) => (
            <button
              type="button"
              key={year}
              className={
                selectedYear === year
                  ? "routine-tab active"
                  : "routine-tab"
              }
              onClick={() => setSelectedYear(year)}
            >
              <span className="routine-tab-year">
                {year}
              </span>

              <span className="routine-tab-arrow">
                →
              </span>
            </button>
          ))}

        </div>


        {/* Timetable */}

        <div className="routine-table-card">

          <div className="routine-table-header">

            <div>
              <span>WEEKLY SCHEDULE</span>

              <h3>
                {selectedYear}
              </h3>
            </div>

            <div className="routine-scroll-hint">
              ← Scroll horizontally →
            </div>

          </div>


          <div className="routine-table-wrapper">

            <table className="routine-table">

              <thead>
                <tr>
                  {selectedRoutine[0].map(
                    (cell, index) => {

                      const text =
                        typeof cell === "object"
                          ? cell.text
                          : cell;

                      const colspan =
                        typeof cell === "object"
                          ? cell.colspan
                          : undefined;

                      const rowspan =
                        typeof cell === "object"
                          ? cell.rowspan
                          : undefined;

                      return (
                        <th
                          key={index}
                          colSpan={colspan}
                          rowSpan={rowspan}
                          className={
                            index === 0
                              ? "routine-day-header"
                              : ""
                          }
                        >
                          {text}
                        </th>
                      );
                    }
                  )}
                </tr>
              </thead>


              <tbody>

                {selectedRoutine
                  .slice(1)
                  .map((row, rowIndex) => {

                    return (
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

                            const isDay =
                              [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                              ].includes(text);

                            const isBreak =
                              [
                                "L",
                                "U",
                                "N",
                                "C",
                                "H",
                                "Mentoring",
                              ].includes(text);

                            return (
                              <td
                                key={cellIndex}
                                colSpan={colspan}
                                rowSpan={rowspan}
                                style={
                                  typeof cell ===
                                  "object"
                                    ? cell.style
                                    : undefined
                                }
                                className={
                                  isDay
                                    ? "routine-day"
                                    : isBreak
                                    ? "routine-special"
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

      </div>
    </section>
  );
}