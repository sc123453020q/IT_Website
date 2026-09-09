"use client";

import "./Publications.css";

const publications = [
  {
    number: "01",
    title: "Research Publications",
    description:
      "Research contributions from the faculty and students of the Information Technology department.",
  },
  {
    number: "02",
    title: "Conference Papers",
    description:
      "Academic and technical papers presented at conferences, seminars and research events.",
  },
  {
    number: "03",
    title: "Journal Publications",
    description:
      "Scholarly work published in reputed journals covering emerging areas of Information Technology.",
  },
];

export default function Publications() {
  return (
    <section className="publications-section" id="publications">
      <div className="publications-container">

        <div className="publications-heading">
          <div className="publications-eyebrow">
            <span />
            RESEARCH & PUBLICATIONS
          </div>

          <h1>
            Knowledge
            <span> Published.</span>
          </h1>

          <p>
            Discover research contributions, academic papers and scholarly
            work produced by our faculty and students.
          </p>
        </div>

        <div className="publications-list">
          {publications.map((publication) => (
            <article
              className="publication-item"
              key={publication.number}
            >
              <span className="publication-number">
                {publication.number}
              </span>

              <div className="publication-info">
                <h2>{publication.title}</h2>
                <p>{publication.description}</p>
              </div>

              <span className="publication-arrow">↗</span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}