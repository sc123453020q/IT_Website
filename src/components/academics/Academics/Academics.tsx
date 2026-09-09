"use client";

import { useState } from "react";
import Image from "next/image";

import { homeAbout } from "@/lib/dummydata";

import Routine from "../Routine/Routine";
import Curriculum from "../Curriculum/Curriculum";
import Infrastructure from "../Infrastructure/Infrastructure";

import "./Academics.css";
type AcademicSection =
  | "routine"
  | "curriculum"
  | "infrastructure"
  | null;

export default function Academics() {
  const [activeSection, setActiveSection] =
    useState<AcademicSection>(null);

  const handleSectionClick = (title: string) => {
    const normalizedTitle = title.toLowerCase();

    if (normalizedTitle === "routine") {
      setActiveSection("routine");
    } else if (normalizedTitle === "curriculum") {
      setActiveSection("curriculum");
    } else if (normalizedTitle === "infrastructure") {
      setActiveSection("infrastructure");
    }

    setTimeout(() => {
      const id = `${normalizedTitle}-section`;

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <main className="academics-page">

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="academics-intro">
        <div className="academics-container">

          <div className="academics-eyebrow">
            <span className="academics-eyebrow-line" />
            ACADEMIC LIFE
          </div>

          <h1>
            Empowering Minds,
            <span>Shaping Futures.</span>
          </h1>

          <p>
            Explore the academic resources, curriculum, schedules
            and infrastructure that support learning and
            professional development in the Department of
            Information Technology.
          </p>

        </div>
      </section>


      {/* =====================================================
          ACADEMIC OPTIONS
      ===================================================== */}

      <section className="academics-options">
        <div className="academics-container">

          <div className="academics-section-heading">
            <span>EXPLORE</span>

            <h2>
              Academic
              <strong>Resources</strong>
            </h2>

            <p>
              Everything you need to navigate your academic
              journey in the department.
            </p>
          </div>


          <div className="academics-grid">

            {homeAbout.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={`academic-card ${
                  activeSection ===
                  item.title.toLowerCase()
                    ? "academic-card-active"
                    : ""
                }`}
                onClick={() =>
                  handleSectionClick(item.title)
                }
              >

                <div className="academic-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="academic-card-icon">

                  {item.cover ? (
                    <Image
                      src={item.cover}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  ) : (
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}

                </div>

                <div className="academic-card-content">

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <span className="academic-card-link">
                    Explore
                    <span>→</span>
                  </span>

                </div>

                <div className="academic-card-arrow">
                  ↗
                </div>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SELECTED CONTENT
      ===================================================== */}

      {activeSection === "routine" && <Routine />}

      {activeSection === "curriculum" && <Curriculum />}

      {activeSection === "infrastructure" && (
        <Infrastructure />
      )}

    </main>
  );
}