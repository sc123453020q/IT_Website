"use client";

import Image from "next/image";

import "./Alumni.css";

const alumniItems = [
  {
    image: "/images/alumni_talk/Slide1.PNG",
    title: "Legacy Builders",
    description:
      "Empowering the next generation with wisdom and experience.",
  },
  {
    image: "/images/alumni_talk/Slide2.PNG",
    title: "Innovation & Impact",
    description:
      "Alumni shaping the future with cutting-edge ideas.",
  },
  {
    image: "/images/alumni_talk/Slide3.PNG",
    title: "Success Stories",
    description:
      "Celebrating milestones, achievements and inspiring journeys.",
  },
  {
    image: "/images/alumni_talk/Slide4.PNG",
    title: "Networking",
    description:
      "Connecting minds and building meaningful opportunities.",
  },
  {
    image: "/images/alumni_talk/Slide5.PNG",
    title: "Inspiring Journeys",
    description:
      "Turning dreams into reality through dedication and perseverance.",
  },
  {
    image: "/images/alumni_talk/Slide6.PNG",
    title: "Future Leaders",
    description:
      "Shaping tomorrow's world through knowledge and leadership.",
  },
];

export default function Alumni() {
  return (
    <div className="alumni-wrapper">

      {/* Heading */}

      <div className="alumni-heading">

        <span>
          ALUMNI COMMUNITY
        </span>

        <h2>
          Alumni <strong>Report</strong>
        </h2>

        <p>
          From the department to the world, discover the
          achievements, journeys and memories of our alumni.
        </p>

      </div>


      {/* Cards */}

      <div className="alumni-grid">

        {alumniItems.map((item, index) => (

          <article
            className="alumni-card"
            key={item.title}
          >

            <div className="alumni-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="alumni-image-wrapper">

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 33vw"
                className="alumni-image"
              />

            </div>


            <div className="alumni-content">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

            <div className="alumni-accent" />

          </article>

        ))}

      </div>

    </div>
  );
}