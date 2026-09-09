import "./Achievements.css";

const achievements = [
  {
    year: "2026",
    category: "Hackathon",
    title: "Hackathon Excellence",
    description:
      "Our students demonstrated innovation, teamwork and technical excellence through competitive hackathon participation.",
  },
  {
    year: "2026",
    category: "Academic",
    title: "Academic Excellence",
    description:
      "Students continue to achieve outstanding academic results through consistent effort and dedication.",
  },
  {
    year: "2025",
    category: "Research",
    title: "Research & Innovation",
    description:
      "Students actively participate in research, innovation initiatives and technology-driven projects.",
  },
  {
    year: "2025",
    category: "Competition",
    title: "Competition Achievements",
    description:
      "Our students have represented the department in various technical and extracurricular competitions.",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section">

      <div className="achievements-container">

        <div className="achievements-header">

          <span>CELEBRATING EXCELLENCE</span>

          <h1>
            Student
            <strong>Achievements</strong>
          </h1>

          <p>
            Celebrating the dedication, creativity and achievements of
            students who continue to make our department proud.
          </p>

        </div>

        <div className="achievements-list">

          {achievements.map((achievement, index) => (

            <article
              className="achievement-card"
              key={`${achievement.title}-${index}`}
            >

              <div className="achievement-year">
                {achievement.year}
              </div>

              <div className="achievement-content">

                <span className="achievement-category">
                  {achievement.category}
                </span>

                <h2>{achievement.title}</h2>

                <p>{achievement.description}</p>

              </div>

              <div className="achievement-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}