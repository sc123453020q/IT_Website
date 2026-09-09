import Link from "next/link";
import "./Events.css";

const eventCategories = [
  {
    number: "01",
    title: "Conferences",
    subtitle: "RESEARCH • IDEAS • COLLABORATION",
    description:
      "Conferences that bring together students, researchers, academics and industry professionals to exchange ideas and knowledge.",
    events: [
      {
        title: "ICDC",
        description:
          "International conference bringing together ideas, research and innovation.",
        image: "/images/events/icdc.jpg",
        href: "/events/conferences/icdc",
      },
      {
        title: "Conference 02",
        description:
          "A platform for presenting research, ideas and emerging technologies.",
        image: "/images/events/conference-2.jpg",
        href: "/events/conferences/conference-02",
      },
      {
        title: "Conference 03",
        description:
          "An academic and professional gathering focused on innovation.",
        image: "/images/events/conference-3.jpg",
        href: "/events/conferences/conference-03",
      },
    ],
  },

  {
    number: "02",
    title: "Tech Talks",
    subtitle: "LEARN • CONNECT • EXPLORE",
    description:
      "Interactive sessions featuring experts and professionals sharing knowledge about technologies, trends and real-world applications.",
    events: [
      {
        title: "Tech Talk 01",
        description:
          "An interactive technology session with industry professionals.",
        image: "/images/events/tech-talk-1.jpg",
        href: "/events/tech-talks/tech-talk-01",
      },
      {
        title: "Tech Talk 02",
        description:
          "Explore emerging technologies and industry trends.",
        image: "/images/events/tech-talk-2.jpg",
        href: "/events/tech-talks/tech-talk-02",
      },
      {
        title: "Tech Talk 03",
        description:
          "A knowledge-sharing session focused on modern technology.",
        image: "/images/events/tech-talk-3.jpg",
        href: "/events/tech-talks/tech-talk-03",
      },
    ],
  },

  {
    number: "03",
    title: "Hackathons",
    subtitle: "BUILD • INNOVATE • COMPETE",
    description:
      "Collaborative coding events where students transform ideas into innovative solutions through technology.",
    events: [
      {
        title: "HackOasis",
        description:
          "A platform where students collaborate, build and compete with innovative ideas.",
        image: "/images/events/hackoasis.jpg",
        href: "/events/hackathons/hackoasis",
      },
      {
        title: "Hackathon 02",
        description:
          "Build innovative solutions while collaborating with fellow students.",
        image: "/images/events/hackathon-2.jpg",
        href: "/events/hackathons/hackathon-02",
      },
      {
        title: "Hackathon 03",
        description:
          "A competitive environment for creativity and problem solving.",
        image: "/images/events/hackathon-3.jpg",
        href: "/events/hackathons/hackathon-03",
      },
    ],
  },

  {
    number: "04",
    title: "Seminars & Workshops",
    subtitle: "LEARN • BUILD • GROW",
    description:
      "Hands-on workshops and expert-led seminars designed to develop practical knowledge and professional skills.",
    events: [
      {
        title: "Workshop 01",
        description:
          "A practical learning session focused on developing technical skills.",
        image: "/images/events/workshop-1.jpg",
        href: "/events/seminars-workshops/workshop-01",
      },
      {
        title: "Seminar 01",
        description:
          "An expert-led seminar exploring new ideas and technologies.",
        image: "/images/events/seminar-1.jpg",
        href: "/events/seminars-workshops/seminar-01",
      },
      {
        title: "Workshop 02",
        description:
          "A hands-on session designed to enhance practical knowledge.",
        image: "/images/events/workshop-2.jpg",
        href: "/events/seminars-workshops/workshop-02",
      },
    ],
  },

  {
    number: "05",
    title: "Fun Events",
    subtitle: "CONNECT • CELEBRATE • ENJOY",
    description:
      "Fun activities and celebrations that bring students together and create memorable experiences beyond academics.",
    events: [
      {
        title: "Fun Event 01",
        description:
          "An engaging activity designed to bring students together.",
        image: "/images/events/fun-event-1.jpg",
        href: "/events/fun-events/fun-event-01",
      },
      {
        title: "Fun Event 02",
        description:
          "A fun-filled experience for students and the department community.",
        image: "/images/events/fun-event-2.jpg",
        href: "/events/fun-events/fun-event-02",
      },
      {
        title: "Fun Event 03",
        description:
          "A memorable event celebrating student life and community.",
        image: "/images/events/fun-event-3.jpg",
        href: "/events/fun-events/fun-event-03",
      },
    ],
  },
];

export default function Events() {
  return (
    <section className="events-section">
      <div className="events-container">

        {/* PAGE INTRO */}
        <div className="events-heading">
          <div className="events-eyebrow">
            <span />
            DEPARTMENT ACTIVITIES
            <span />
          </div>

          <h1>
            Events at
            <span>IT Department</span>
          </h1>

          <p>
            Explore conferences, tech talks, hackathons, seminars,
            workshops and fun events organized by the Department of
            Information Technology.
          </p>
        </div>

        {/* EVENT CATEGORIES */}
        <div className="events-categories">
          {eventCategories.map((category) => (
            <section
              className="events-category"
              key={category.title}
            >
              {/* CATEGORY HEADER */}
              <div className="events-category-header">
                <div className="events-category-number">
                  {category.number}
                </div>

                <div className="events-category-info">
                  <span className="events-category-subtitle">
                    {category.subtitle}
                  </span>

                  <h2>{category.title}</h2>

                  <p>{category.description}</p>
                </div>
              </div>

              {/* EVENT CARDS */}
              <div className="events-grid">
                {category.events.map((event, index) => (
                  <Link
                    href={event.href}
                    className="event-card"
                    key={event.title}
                  >
                    <div className="event-card-image">
                      <img
                        src={event.image}
                        alt={event.title}
                      />

                      <div className="event-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="event-card-overlay">
                        <span>VIEW EVENT</span>
                        <strong>→</strong>
                      </div>
                    </div>

                    <div className="event-card-content">
                      <span className="event-card-category">
                        {category.title}
                      </span>

                      <h3>{event.title}</h3>

                      <p>{event.description}</p>

                      <div className="event-card-footer">
                        <span>Explore Event</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}