"use client";

import "./Innovation.css";

const innovationItems = [
  {
    number: "01",
    title: "Research & Development",
    description:
      "Encouraging students and faculty to explore emerging technologies, research ideas and innovative solutions.",
  },
  {
    number: "02",
    title: "Innovation Projects",
    description:
      "A platform for transforming creative ideas into practical projects that address real-world challenges.",
  },
  {
    number: "03",
    title: "Technology & Ideas",
    description:
      "Exploring modern technologies including Artificial Intelligence, Machine Learning, IoT, Cloud Computing and more.",
  },
];

export default function Innovation() {
  return (
    <section className="innovation-section" id="innovation">
      <div className="innovation-container">

        <div className="innovation-heading">
          <div className="innovation-eyebrow">
            <span />
            INNOVATION & RESEARCH
          </div>

          <h1>
            Ideas That
            <span> Create Impact.</span>
          </h1>

          <p>
            The Information Technology department encourages curiosity,
            experimentation and research to transform ideas into meaningful
            technological solutions.
          </p>
        </div>

        <div className="innovation-grid">
          {innovationItems.map((item) => (
            <article className="innovation-card" key={item.number}>
              <div className="innovation-card-number">
                {item.number}
              </div>

              <div className="innovation-card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <div className="innovation-card-arrow">↗</div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}