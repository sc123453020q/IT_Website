"use client";

import Image from "next/image";
import Link from "next/link";

import Publications from "../Publications/Publications";
import Books from "../Books/Books";
import Alumni from "../Alumni/Alumni";

import "./Innovation.css";

const innovationItems = [
  {
    number: "01",
    title: "Publications",
    description:
      "Explore conference and journal publications contributed by our faculty and students.",
    icon: "/images/innovation/public-relation.png",
    href: "#publications",
  },
  {
    number: "02",
    title: "Book Chapters",
    description:
      "Discover academic book chapters authored by faculty members and researchers.",
    icon: "/images/innovation/chapter.png",
    href: "#book-chapters",
  },
  {
    number: "03",
    title: "Annual Report",
    description:
      "Explore the department's annual publication highlighting academic activities and achievements.",
    icon: "/images/innovation/annual-report.png",
    href: "#annual-report",
  },
  {
    number: "04",
    title: "Alumni Report",
    description:
      "Explore the stories, achievements and contributions of our alumni community.",
    icon: "/images/innovation/alumni.png",
    href: "#alumni-report",
  },
];

export default function Innovation() {
  return (
    <section className="innovation-section" id="innovation">

      {/* Background decoration */}
      <div className="innovation-bg-glow innovation-bg-glow-one" />
      <div className="innovation-bg-glow innovation-bg-glow-two" />

      <div className="innovation-container">

        {/* =====================================================
            MAIN HEADER
        ===================================================== */}

        <div className="innovation-heading">

          <div className="innovation-eyebrow">
            <span className="innovation-eyebrow-line" />
            INNOVATION &amp; RESEARCH
          </div>

          <h1>
            Ideas That
            <span>Create Impact.</span>
          </h1>

          <p>
            Explore research contributions, publications, academic
            reports and the achievements of the Department of
            Information Technology.
          </p>

        </div>


        {/* =====================================================
            MAIN CARDS
        ===================================================== */}

        <div className="innovation-grid">

          {innovationItems.map((item) => (

            <Link
              href={item.href}
              className="innovation-card"
              key={item.title}
            >

              {/* Number */}
              <div className="innovation-card-number">
                {item.number}
              </div>


              {/* Icon */}
              <div className="innovation-icon-wrapper">

                <div className="innovation-icon-glow" />

                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="innovation-icon"
                />

              </div>


              {/* Content */}
              <div className="innovation-card-content">

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.description}
                </p>

              </div>


              {/* Arrow */}
              <div className="innovation-card-arrow">
                ↗
              </div>


              {/* Bottom accent */}
              <div className="innovation-card-line" />

            </Link>

          ))}

        </div>


        {/* =====================================================
            PUBLICATIONS
        ===================================================== */}

        <section
          id="publications"
          className="innovation-detail-section"
        >
          <Publications />
        </section>


        {/* =====================================================
            BOOK CHAPTERS
        ===================================================== */}

        <section
          id="book-chapters"
          className="innovation-detail-section"
        >
          <Books />
        </section>


        {/* =====================================================
            ANNUAL REPORT
        ===================================================== */}

        <section
          id="annual-report"
          className="innovation-detail-section"
        >

          <div className="annual-report-wrapper">

            <div className="annual-report-heading">

              <span>
                DEPARTMENT DOCUMENT
              </span>

              <h2>
                Annual <strong>Report</strong>
              </h2>

              <p>
                Explore the annual report of the Department of
                Information Technology.
              </p>

            </div>

            <div className="annual-report-viewer">

              <iframe
                src="/pdfs/Harmony-2nd_Edition.pdf"
                title="Department Annual Report"
                className="annual-report-pdf"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            ALUMNI REPORT
        ===================================================== */}

        <section
          id="alumni-report"
          className="innovation-detail-section"
        >
          <Alumni />
        </section>

      </div>

    </section>
  );
}