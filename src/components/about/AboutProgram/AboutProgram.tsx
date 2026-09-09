"use client";

import { aboutprog } from "@/lib/dummydata";
import "./AboutProgram.css";

export default function AboutProgram() {
  return (
    <section className="about-program">
      <div className="about-program__container">

        {/* Section Header */}
        <div className="about-program__header">
          <span className="about-program__eyebrow">
            INFORMATION TECHNOLOGY
          </span>

          <h1>About the Program</h1>

          <p>
            Building strong foundations in technology, innovation,
            problem-solving and professional development.
          </p>
        </div>

        {/* Content */}
        <div className="about-program__content">
          {aboutprog.map((item, index) => (
            <article
              className="about-program__card"
              key={index}
            >
              <div className="about-program__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="about-program__text">
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}