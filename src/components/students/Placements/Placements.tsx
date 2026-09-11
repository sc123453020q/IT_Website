"use client";

import Image from "next/image";

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
  {
    name: "Abzooaba",
    logo: "/images/companies/abzooba.webp",
  },
  {
    name: "Adobe",
    logo: "/images/companies/adobe.png",
  },
  {
    name: "Alien Brains",
    logo: "/images/companies/alien_brains_logo.jpg",
  },
  {
    name: "Capgemini",
    logo: "/images/companies/capgemini.png",
  },
  {
    name: "Cognizant",
    logo: "/images/companies/cognizant.png",
  },
  {
    name: "EY",
    logo: "/images/companies/ey-logo.png",
  },
  {
    name: "Global IDs",
    logo: "/images/companies/global_ids.avif",
  },
  {
    name: "GreyB",
    logo: "/images/companies/grey_b.png",
  },
  {
    name: "Infosys",
    logo: "/images/companies/infosys.jpg",
  },
  {
    name: "NRI Fintech",
    logo: "/images/companies/nri_fintech.webp",
  },
  {
    name: "Oracle",
    logo: "/images/companies/oracle.webp",
  },
  {
    name: "PwC",
    logo: "/images/companies/pwc.jpg",
  },
  {
    name: "TCG",
    logo: "/images/companies/tcg.jpg",
  },
  {
    name: "TCS",
    logo: "/images/companies/tcs.png",
  },
  {
    name: "Wipro",
    logo: "/images/companies/wipro.png",
  },
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
            <div
              className="placement-stat-card"
              key={stat.label}
            >
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
            <p>
              Our students have opportunities to connect with organizations
              across technology, consulting, finance and other industries.
            </p>
          </div>

          <div className="recruiters-grid">
            {recruiters.map((company) => (
              <div
                className="recruiter-card"
                key={company.name}
              >
                <div className="recruiter-logo-wrapper">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    sizes="(max-width: 600px) 40vw, (max-width: 900px) 25vw, 180px"
                    className="recruiter-logo"
                  />
                </div>

                <div className="recruiter-name">
                  {company.name}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Placement Process */}
        <div className="placement-process">

          <div className="section-mini-heading">
            <span>PLACEMENT JOURNEY</span>
            <h2>From Classroom to Career</h2>
            <p>
              A structured journey that helps students transform their
              academic knowledge into professional opportunities.
            </p>
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