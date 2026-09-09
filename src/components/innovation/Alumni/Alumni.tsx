"use client";

import "./Alumni.css";

const alumniItems = [
  {
    number: "01",
    title: "Alumni Network",
    description:
      "Stay connected with graduates of the Information Technology department and build meaningful professional relationships.",
  },
  {
    number: "02",
    title: "Alumni Achievements",
    description:
      "Celebrating the professional achievements and contributions of our alumni across different industries.",
  },
  {
    number: "03",
    title: "Industry Connect",
    description:
      "Creating opportunities for students to interact with alumni and gain valuable industry insights.",
  },
];

export default function Alumni() {
  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-container">

        <div className="alumni-heading">
          <div className="alumni-eyebrow">
            <span />
            OUR ALUMNI
          </div>

          <h1>
            From Campus
            <span> To The World.</span>
          </h1>

          <p>
            Our alumni continue to make an impact across technology,
            research, entrepreneurship and leading organizations worldwide.
          </p>
        </div>

        <div className="alumni-grid">
          {alumniItems.map((item) => (
            <article className="alumni-card" key={item.number}>
              <span className="alumni-number">
                {item.number}
              </span>

              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}