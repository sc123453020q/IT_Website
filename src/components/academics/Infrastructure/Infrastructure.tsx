"use client";

import Image from "next/image";

import "./Infrastructure.css";


const galleryImages = [
  {
    title: "LG 2.1 Room",
    img: "/images/infrastructure/class3.jpg",
  },
  {
    title: "Competitive Coding Class",
    img: "/images/infrastructure/class1.jpg",
  },
  {
    title: "Theoretical Class at LG 4.7",
    img: "/images/infrastructure/class4.jpg",
  },
  {
    title: "Theoretical Class at Annex 5th Floor",
    img: "/images/infrastructure/class5.jpg",
  },
  {
    title: "DAA LAB",
    img: "/images/infrastructure/Lab1.jpg",
  },
  {
    title: "AIML LAB",
    img: "/images/infrastructure/Lab2.jpg",
  },
  {
    title: "OOPS LAB",
    img: "/images/infrastructure/Lab3.jpg",
  },
  {
    title: "COA LAB",
    img: "/images/infrastructure/Lab5.jpg",
  },
];


const labCategories = [
  {
    title: "Software & Programming",
    labs: [
      "Object-Oriented Programming Lab",
      "Data Structures Lab",
      "Design and Analysis of Algorithms Lab",
      "Software Engineering Lab",
    ],
  },

  {
    title: "IT & Emerging Technologies",
    labs: [
      "IT Workshop Lab",
      "Cyber Security Lab",
      "Cloud Computing & IoT Lab",
      "Artificial Intelligence & Machine Learning Lab",
    ],
  },

  {
    title: "Database and Systems",
    labs: [
      "Database Management Systems Lab",
      "Operating Systems Lab",
    ],
  },

  {
    title: "Networking & Language",
    labs: [
      "Computer Networking Lab",
      "Compiler Design Lab",
    ],
  },

  {
    title: "Computer Hardware and Electronics",
    labs: [
      "Digital Electronics Lab",
      "Analog Electronics Lab",
      "Computer Organization & Architecture Lab",
    ],
  },
];


const amenities = [
  "Rooftop mini-golf course",
  "Cricket net practice area",
  "Table tennis boards",
  "Carrom boards",
  "Two basketball courts",
  "Gymnasium",
];


const stats = [
  {
    value: "2.4 Gbps",
    label: "Campus Internet",
  },
  {
    value: "Wi-Fi",
    label: "Enabled Campus",
  },
  {
    value: "5000+",
    label: "Computers for Students",
  },
];


export default function Infrastructure() {
  const totalLabs = labCategories.reduce(
    (total, category) =>
      total + category.labs.length,
    0
  );

  return (
    <section
      className="infrastructure-section"
      id="infrastructure-section"
    >

      <div className="infrastructure-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="infrastructure-heading">

          <div className="infrastructure-eyebrow">
            <span />
            CAMPUS & FACILITIES
          </div>

          <h2>
            Infrastructure
            <strong>& Facilities</strong>
          </h2>

          <p>
            A learning environment designed to support
            practical education, experimentation,
            collaboration and innovation.
          </p>

        </div>


        {/* =================================================
            OVERVIEW
        ================================================= */}

        <div className="infrastructure-overview">

          <div className="infrastructure-overview-content">

            <span className="infra-label">
              DEPARTMENT INFRASTRUCTURE
            </span>

            <h3>
              Facilities built for
              <strong>
                hands-on engineering.
              </strong>
            </h3>

            <p>
              The IT Department is equipped with
              laboratories, modern classrooms and
              facilities that provide students with
              practical exposure to information
              technology and modern software
              development.
            </p>

          </div>


          <div className="infrastructure-stats">

            {stats.map((stat) => (
              <div
                className="infrastructure-stat"
                key={stat.label}
              >
                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
            ))}

          </div>

        </div>


        {/* =================================================
            LABORATORIES
        ================================================= */}

        <div className="infrastructure-block">

          <div className="infrastructure-block-heading">

            <div>
              <span>
                LABORATORY FACILITIES
              </span>

              <h3>
                {totalLabs} Labs.
                <strong>
                  Multiple Specializations.
                </strong>
              </h3>
            </div>

            <p>
              From core programming to emerging
              technologies and computer hardware.
            </p>

          </div>


          <div className="lab-grid">

            {labCategories.map(
              (category, index) => (
                <article
                  className="lab-card"
                  key={category.title}
                >

                  <div className="lab-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="lab-icon">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <h4>
                    {category.title}
                  </h4>

                  <div className="lab-list">

                    {category.labs.map(
                      (lab) => (
                        <span key={lab}>
                          {lab}
                        </span>
                      )
                    )}

                  </div>

                </article>
              )
            )}

          </div>

        </div>


        {/* =================================================
            AMENITIES
        ================================================= */}

        <div className="amenities-card">

          <div>
            <span>
              BEYOND THE CLASSROOM
            </span>

            <h3>
              Campus Amenities
            </h3>
          </div>

          <div className="amenities-list">

            {amenities.map((amenity) => (
              <span key={amenity}>
                {amenity}
              </span>
            ))}

          </div>

        </div>


        {/* =================================================
            GALLERY
        ================================================= */}

        <div className="infrastructure-gallery">

          <div className="gallery-heading">

            <span>
              INFRASTRUCTURE GALLERY
            </span>

            <h3>
              Inside the
              <strong>
                Department
              </strong>
            </h3>

            <p>
              A glimpse of classrooms, laboratories
              and facilities used by our students.
            </p>

          </div>


          <div className="gallery-grid">

            {galleryImages.map(
              (image, index) => (
                <article
                  className="gallery-item"
                  key={image.title}
                >

                  <Image
                    src={image.img}
                    alt={image.title}
                    fill
                    sizes="
                      (min-width: 1200px) 25vw,
                      (min-width: 768px) 33vw,
                      100vw
                    "
                  />

                  <div className="gallery-overlay" />

                  <span className="gallery-number">
                    FIG.{" "}
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h4>
                    {image.title}
                  </h4>

                </article>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}