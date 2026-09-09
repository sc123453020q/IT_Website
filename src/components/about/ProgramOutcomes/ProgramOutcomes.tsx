"use client";

import { peo, po, pso } from "@/lib/dummydata";
import "./ProgramOutcomes.css";

type OutcomeItem = {
  id: string | number;
  title: string;
  desc: string;
};

function OutcomeSection({
  eyebrow,
  title,
  data,
}: {
  eyebrow: string;
  title: string;
  data: OutcomeItem[];
}) {
  return (
    <section className="outcomes__section">
      <div className="outcomes__section-header">
        <span>{eyebrow}</span>
        <h3>{title}</h3>
      </div>

      <div className="outcomes__grid">
        {data.map((item, index) => (
          <article
            className="outcome-card"
            key={`${item.id}-${index}`}
          >
            <div className="outcome-card__number">
              {String(item.id).padStart(2, "0")}
            </div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProgramOutcomes() {
  return (
    <section className="outcomes">
      <div className="outcomes__container">

        <header className="outcomes__header">
          <span>ACADEMIC FRAMEWORK</span>

          <h2>
            Program Educational Objectives
            <br />
            & Outcomes
          </h2>

          <p>
            Our academic framework defines the knowledge, skills and
            professional qualities students are expected to develop
            throughout the program.
          </p>
        </header>

        <OutcomeSection
          eyebrow="PEO"
          title="Programme Educational Objectives"
          data={peo}
        />

        <OutcomeSection
          eyebrow="PO"
          title="Program Outcomes"
          data={po}
        />

        <OutcomeSection
          eyebrow="PSO"
          title="Program Specific Outcomes"
          data={pso}
        />

      </div>
    </section>
  );
}