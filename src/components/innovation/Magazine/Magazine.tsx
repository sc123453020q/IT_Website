"use client";

import "./Magazine.css";

const magazines = [
  {
    year: "2025",
    title: "Department Magazine",
    description:
      "A collection of department activities, achievements, events, student accomplishments and academic highlights.",
  },
  {
    year: "2024",
    title: "Annual Report",
    description:
      "Highlights of academic activities, research, events, achievements and departmental initiatives.",
  },
];

export default function Magazine() {
  return (
    <section className="magazine-section" id="magazine">
      <div className="magazine-container">

        <div className="magazine-heading">
          <div className="magazine-eyebrow">
            <span />
            MAGAZINE & REPORTS
          </div>

          <h1>
            Stories,
            <span> Achievements & Memories.</span>
          </h1>

          <p>
            Explore departmental magazines and annual reports documenting
            our academic journey, activities and achievements.
          </p>
        </div>

        <div className="magazine-grid">
          {magazines.map((magazine) => (
            <article
              className="magazine-card"
              key={magazine.year}
            >
              <div className="magazine-year">
                {magazine.year}
              </div>

              <div className="magazine-content">
                <h2>{magazine.title}</h2>
                <p>{magazine.description}</p>

                <button type="button">
                  View Publication
                  <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}