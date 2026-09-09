import "./IndustryVisit.css";

const industryVisits = [
  {
    title: "Industry Visit 01",
    place: "Company / Organization Name",
    date: "Date of Visit",
    description:
      "Write the details of the industry visit here. This section can contain information about the organization, purpose of the visit, activities conducted, technologies explored and the overall experience of the students.",
    image: "/images/students/industry-visit/visit-1.jpg",
  },
  {
    title: "Industry Visit 02",
    place: "Company / Organization Name",
    date: "Date of Visit",
    description:
      "Write the details of the industry visit here. Add information about what students learned, the sessions attended and the practical exposure received during the visit.",
    image: "/images/students/industry-visit/visit-2.jpg",
  },
  {
    title: "Industry Visit 03",
    place: "Company / Organization Name",
    date: "Date of Visit",
    description:
      "Write the details of the industry visit here. You can describe the organization, the interaction with industry professionals and the knowledge gained by the students.",
    image: "/images/students/industry-visit/visit-3.jpg",
  },
];

export default function IndustryVisit() {
  return (
    <section className="industry-visit-section">
      <div className="industry-visit-container">

        {/* Heading */}
        <div className="industry-visit-heading">
          <div className="industry-visit-eyebrow">
            <span />
            INDUSTRY EXPOSURE
            <span />
          </div>

          <h1>
            Industry
            <span>Visits</span>
          </h1>

          <p>
            Explore the industry visits organized for our students,
            providing valuable exposure to real-world technologies,
            workplaces and professional environments.
          </p>
        </div>

        {/* Industry Visits */}
        <div className="industry-visit-list">
          {industryVisits.map((visit, index) => (
            <article
              className="industry-visit-card"
              key={visit.title}
            >
              {/* Image */}
              <div className="industry-visit-image">
                <img
                  src={visit.image}
                  alt={visit.title}
                />

                <div className="industry-visit-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="industry-visit-content">

                <div className="industry-visit-meta">
                  <span>{visit.date}</span>
                  <span>{visit.place}</span>
                </div>

                <h2>{visit.title}</h2>

                <p>{visit.description}</p>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}