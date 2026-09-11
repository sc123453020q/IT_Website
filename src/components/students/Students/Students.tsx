"use client";

import Image from "next/image";
import Link from "next/link";

import "./Students.css";

const studentSections = [
  {
    title: "Placements",
    description:
      "Explore placement opportunities, recruiters, statistics and career guidance for our students.",
    image: "/images/students.jpg",
    href: "/students/placements",
    number: "01",
  },
  {
    title: "Study Materials & Assignments",
    description:
      "Access study materials, notes, assignments and academic resources in one place.",
    image: "/images/books.jpg",
    href: "/students/study-materials",
    number: "02",
  },
  {
    title: "Students Achievements",
    description:
      "Discover the accomplishments, awards, competitions and milestones achieved by our students.",
    image: "/images/trophy.jpg",
    href: "/students/achievements",
    number: "03",
  },
  {
    title: "Industry Visit",
    description:
      "Explore workshops, seminars, competitions, celebrations and other department activities.",
    image: "/images/students/events.jpg",
    href: "/students/industry-visit",
    number: "04",
  },
];

export default function Students() {
  return (
    <section className="students-section">
      <div className="students-container">

        {/* Heading */}
        <div className="students-heading">

          <div className="students-eyebrow">
            <span className="students-eyebrow-line" />
            STUDENT LIFE
          </div>

          <h1>
            Our Students.
            <span>Your Journey.</span>
          </h1>

          <p>
            Explore everything you need to make your academic journey,
            professional growth and student life more meaningful.
          </p>

        </div>

        {/* Cards */}
        <div className="students-grid">

          {studentSections.map((item) => (
            <Link
              href={item.href}
              key={item.number}
              className="student-feature-card"
            >

              {/* Image */}
              <div className="student-card-image">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />

                <div className="student-card-overlay" />

                <span className="student-card-number">
                  {item.number}
                </span>

              </div>

              {/* Content */}
              <div className="student-card-content">

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <span className="student-card-link">
                  Explore
                  <span>→</span>
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}