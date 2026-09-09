"use client";

import { useState } from "react";

import "./StudyMaterials.css";

type Material = {
  subject: string;
  type: string;
  title: string;
  file?: string;
};

const materials: Record<string, Material[]> = {
  "2nd Year": [
    {
      subject: "Data Structures",
      type: "Notes",
      title: "Data Structures - Unit 1",
    },
    {
      subject: "Data Structures",
      type: "Assignment",
      title: "Data Structures Assignment 1",
    },
    {
      subject: "Database Management",
      type: "Notes",
      title: "DBMS - Unit 1",
    },
  ],

  "3rd Year": [
    {
      subject: "Operating Systems",
      type: "Notes",
      title: "Operating Systems - Unit 1",
    },
    {
      subject: "Computer Networks",
      type: "Notes",
      title: "Computer Networks - Unit 1",
    },
    {
      subject: "Software Engineering",
      type: "Assignment",
      title: "Software Engineering Assignment",
    },
  ],

  "4th Year": [
    {
      subject: "Artificial Intelligence",
      type: "Notes",
      title: "Artificial Intelligence - Unit 1",
    },
    {
      subject: "Machine Learning",
      type: "Notes",
      title: "Machine Learning - Unit 1",
    },
    {
      subject: "Project",
      type: "Assignment",
      title: "Final Year Project Guidelines",
    },
  ],
};

const years = Object.keys(materials);

export default function StudyMaterials() {
  const [activeYear, setActiveYear] = useState("2nd Year");

  return (
    <section className="study-materials-section">

      <div className="study-materials-container">

        {/* Header */}
        <div className="study-materials-header">

          <span>ACADEMIC RESOURCES</span>

          <h1>
            Study Materials
            <strong>& Assignments</strong>
          </h1>

          <p>
            Find notes, assignments and academic resources organized
            according to your year of study.
          </p>

        </div>

        {/* Year Tabs */}
        <div className="study-year-tabs">

          {years.map((year) => (
            <button
              key={year}
              type="button"
              className={activeYear === year ? "active" : ""}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}

        </div>

        {/* Materials */}
        <div className="materials-list">

          {materials[activeYear].map((material, index) => (

            <div className="material-card" key={`${material.title}-${index}`}>

              <div className="material-icon">
                📄
              </div>

              <div className="material-info">

                <span>{material.type}</span>

                <h2>{material.title}</h2>

                <p>{material.subject}</p>

              </div>

              <a
                href={material.file || "#"}
                className="material-download"
                onClick={(event) => {
                  if (!material.file) {
                    event.preventDefault();
                  }
                }}
              >
                {material.file ? "Download" : "Add File"}
                <span>↓</span>
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}