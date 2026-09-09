"use client";

import Image from "next/image";
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vision-mission__container">

        {/* Header */}
        <div className="vision-mission__header">
          <span>OUR DIRECTION</span>
          <h2>Vision & Mission</h2>
          <p>
            A clear vision, meaningful mission and commitment to
            excellence shape the future of our students.
          </p>
        </div>

        {/* Vision */}
        <article className="vision-mission__block">
          <div className="vision-mission__content">
            <span className="vision-mission__label">
              01 — VISION
            </span>

            <h3>Vision of the Program</h3>

            <p>
              The Department of Information Technology at IEM Kolkata
              strives to achieve excellence in academics, innovation,
              research, and student development. It is well-equipped to
              tackle novel challenges in this fast-evolving era of
              Information Technology through research and
              entrepreneurial initiatives, thereby creating true value
              for society.
            </p>

            <p>
              The department is internationally recognized in
              distinctive areas of education and research, driven by a
              professional and technology-oriented focus, based on a
              culture of innovation and excellence.
            </p>
          </div>

          <div className="vision-mission__image">
            <Image
              src="/images/vision.jpg"
              alt="Vision of the Information Technology program"
              width={1280}
              height={720}
            />
          </div>
        </article>

        {/* Mission */}
        <article className="vision-mission__block vision-mission__block--reverse">
          <div className="vision-mission__image">
            <Image
              src="/images/mission.jpg"
              alt="Mission of the Information Technology program"
              width={855}
              height={680}
            />
          </div>

          <div className="vision-mission__content">
            <span className="vision-mission__label">
              02 — MISSION
            </span>

            <h3>Mission of the Program</h3>

            <p>
              To assist students in understanding and enjoying the
              seamless nature of knowledge, encouraging them to apply
              acquired knowledge to practical use, ensuring they become
              socially responsible individuals sought after for their
              leadership qualities.
            </p>

            <p>
              To foster creativity, innovation, and excellence through
              an example-based teaching-learning process imparted in
              the most simple and understandable way.
            </p>

            <p>
              To continuously upgrade knowledge bases, improve
              infrastructure, adopt the latest technological tools,
              and update curricula based on periodic stakeholder
              feedback, enabling students to meet professional
              requirements and expectations.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}