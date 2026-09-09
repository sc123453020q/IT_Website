import "./Placements.css";

const placementStats = [
  {
    number: "95%",
    label: "Placement Rate",
  },
  {
    number: "₹12.5 LPA",
    label: "Highest Package",
  },
  {
    number: "₹4.8 LPA",
    label: "Average Package",
  },
  {
    number: "50+",
    label: "Recruiters",
  },
];

const recruiters = [
  "TCS",
  "Infosys",
  "Accenture",
  "IBM",
  "Deloitte",
  "Cognizant",
  "Capgemini",
  "Wipro",
];

export default function Placements() {
  return (
    <section className="placements-section">

      <div className="placements-container">

        {/* Header */}
        <div className="placements-header">

          <span>CAREER & PROFESSIONAL GROWTH</span>

          <h1>
            Placements
            <strong>That Build Careers.</strong>
          </h1>

          <p>
            Our placement ecosystem connects students with leading
            organizations while preparing them for successful professional
            careers.
          </p>

        </div>

        {/* Statistics */}
        <div className="placement-stats">

          {placementStats.map((stat) => (
            <div className="placement-stat-card" key={stat.label}>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}

        </div>

        {/* Recruiters */}
        <div className="recruiters-section">

          <div className="section-mini-heading">
            <span>OUR RECRUITERS</span>
            <h2>Industry Connections</h2>
          </div>

          <div className="recruiters-grid">

            {recruiters.map((company) => (
              <div className="recruiter-card" key={company}>
                {company}
              </div>
            ))}

          </div>

        </div>

        {/* Placement Process */}
        <div className="placement-process">

          <div className="section-mini-heading">
            <span>PLACEMENT JOURNEY</span>
            <h2>From Classroom to Career</h2>
          </div>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Skill Development</h3>
              <p>
                Build strong technical and professional skills through
                academic learning and practical exposure.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Industry Preparation</h3>
              <p>
                Prepare for aptitude tests, technical interviews,
                communication rounds and professional assessments.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Recruitment</h3>
              <p>
                Connect with recruiters through campus placement drives
                and career opportunities.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}