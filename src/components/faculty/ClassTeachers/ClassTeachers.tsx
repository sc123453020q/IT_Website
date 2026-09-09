import Image from "next/image";

import SwagatamBasu from "../teachers/swagatam_basu.png";
import SubinduSaha from "../teachers/subindu_saha.png";
import SudiptaBhuyan from "../teachers/sudipta_bhuiya.png";

import "./ClassTeachers.css";

const classTeachers = [
  {
    name: "Prof. Swagatam Basu",
    year: "2ND YEAR",
    image: SwagatamBasu,
  },
  {
    name: "Prof. Subindu Saha",
    year: "3RD YEAR",
    image: SubinduSaha,
  },
  {
    name: "Prof. Dr. Sudipta Bhuyan",
    year: "4TH YEAR",
    image: SudiptaBhuyan,
  },
];

export default function ClassTeachers() {
  return (
    <section
      className="class-teachers-section"
      id="class-teachers-section"
    >
      <div className="class-teachers-container">

        {/* Heading */}
        <div className="class-teachers-heading">
          <div className="class-teachers-eyebrow">
            <span className="class-teachers-eyebrow-line" />
            ACADEMIC GUIDANCE
          </div>

          <h1>
            Our Class
            <span>Teachers</span>
          </h1>

          <p>
            Meet the faculty members guiding and supporting our
            students throughout their academic journey.
          </p>
        </div>

        {/* Teachers */}
        <div className="class-teachers-grid">
          {classTeachers.map((teacher, index) => (
            <article
              className="class-teacher-card"
              key={teacher.name}
            >
              <div className="class-teacher-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="class-teacher-image-wrapper">
                <div className="class-teacher-image-glow" />

                <div className="class-teacher-image">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1100px) 45vw, 30vw"
                  />
                </div>
              </div>

              <div className="class-teacher-info">
                <span className="class-teacher-year">
                  {teacher.year}
                </span>

                <h2>{teacher.name}</h2>

                <p>Class Teacher</p>
              </div>

              <div className="class-teacher-accent" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}