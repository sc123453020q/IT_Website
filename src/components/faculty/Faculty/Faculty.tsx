"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGraduationCap } from "react-icons/fa";

import { itfaculty } from "@/lib/dummydata";

import ClassTeachers from "@/components/faculty/ClassTeachers/ClassTeachers";
import Mentors from "@/components/faculty/Mentors/Mentors";

import "./Faculty.css";

interface FacultyMember {
  id: string | number;
  title: string;
  desg: string;
  img?: string;
  linkedin?: string;
  gscholar?: string;
}

interface FacultyGroup {
  hod?: FacultyMember[];
  prof?: FacultyMember[];
  asso_prof?: FacultyMember[];
  assi_prof?: FacultyMember[];
  faculty?: FacultyMember[];
}

/* ---------------------------------------------------------
   FLATTEN FACULTY DATA
--------------------------------------------------------- */

const getFacultyMembers = (data: FacultyGroup): FacultyMember[] => {
  const members = [
    ...(data.hod ?? []),
    ...(data.prof ?? []),
    ...(data.asso_prof ?? []),
    ...(data.assi_prof ?? []),
    ...(data.faculty ?? []),
  ];

  /*
   * Faculty priority:
   * 1. HOD
   * 2. Program Incharge
   * 3. Everyone else
   */

  return members.sort((a, b) => {
    const aDesg = a.desg?.toLowerCase() || "";
    const bDesg = b.desg?.toLowerCase() || "";

    const aTitle = a.title?.toLowerCase() || "";
    const bTitle = b.title?.toLowerCase() || "";

    // HOD gets first priority
    const aIsHOD =
      aDesg.includes("head of department") ||
      aDesg.includes("hod");

    const bIsHOD =
      bDesg.includes("head of department") ||
      bDesg.includes("hod");

    if (aIsHOD && !bIsHOD) return -1;
    if (!aIsHOD && bIsHOD) return 1;

    // Program Incharge gets second priority
    const aIsProgramIncharge =
      aDesg.includes("program incharge") ||
      aDesg.includes("program in-charge") ||
      aDesg.includes("programme incharge") ||
      aDesg.includes("programme in-charge") ||
      aTitle.includes("baisakhi das");

    const bIsProgramIncharge =
      bDesg.includes("program incharge") ||
      bDesg.includes("program in-charge") ||
      bDesg.includes("programme incharge") ||
      bDesg.includes("programme in-charge") ||
      bTitle.includes("baisakhi das");

    if (aIsProgramIncharge && !bIsProgramIncharge) return -1;
    if (!aIsProgramIncharge && bIsProgramIncharge) return 1;

    return 0;
  });
};

/* ---------------------------------------------------------
   FACULTY COMPONENT
--------------------------------------------------------- */

export default function Faculty() {
  const facultyData = itfaculty as FacultyGroup;

  const facultyMembers = getFacultyMembers(facultyData);

  return (
    <>
      {/* =====================================================
          FACULTY SECTION
      ===================================================== */}

      <section
        className="faculty-section"
        id="faculty-section"
      >

        {/* Background decorations */}
        <div className="faculty-bg-glow faculty-bg-glow-one" />
        <div className="faculty-bg-glow faculty-bg-glow-two" />

        <div className="faculty-container">

          {/* -------------------------------------------------
              HEADER
          ------------------------------------------------- */}

          <div className="faculty-heading">

            <div className="faculty-eyebrow">
              <span className="faculty-eyebrow-line" />
              OUR PEOPLE
            </div>

            <h1>
              Meet Our
              <span>Faculty</span>
            </h1>

            <p>
              Meet the educators, researchers and academic leaders
              who contribute to the growth and development of the
              Department of Information Technology.
            </p>

          </div>


          {/* -------------------------------------------------
              FACULTY GRID
          ------------------------------------------------- */}

          {facultyMembers.length > 0 ? (

            <div className="faculty-grid">

              {facultyMembers.map((faculty, index) => {

                const designation =
                  faculty.desg?.toLowerCase() || "";

                const title =
                  faculty.title?.toLowerCase() || "";

                const isHOD =
                  designation.includes("head of department") ||
                  designation.includes("hod");

                const isProgramIncharge =
                  designation.includes("program incharge") ||
                  designation.includes("program in-charge") ||
                  designation.includes("programme incharge") ||
                  designation.includes("programme in-charge") ||
                  title.includes("baisakhi das");

                return (

                  <article
                    className={`faculty-card ${
                      isHOD
                        ? "faculty-card-hod"
                        : isProgramIncharge
                        ? "faculty-card-program"
                        : ""
                    }`}
                    key={faculty.id}
                  >

                    {/* Card number */}
                    <div className="faculty-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* -------------------------------------------------
                        FACULTY IMAGE
                    ------------------------------------------------- */}

                    <div className="faculty-image-wrapper">

                      <div className="faculty-image-glow" />

                      <div className="faculty-image">

                        <Image
                          src={
                            faculty.img ||
                            "/default-profile.png"
                          }
                          alt={faculty.title}
                          fill
                          sizes="
                            (max-width: 768px) 80vw,
                            (max-width: 1100px) 40vw,
                            30vw
                          "
                        />

                      </div>


                      {/* -------------------------------------------------
                          SOCIAL LINKS
                      ------------------------------------------------- */}

                      {(faculty.linkedin ||
                        faculty.gscholar) && (

                        <div className="faculty-socials">

                          {faculty.linkedin && (

                            <Link
                              href={faculty.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${faculty.title} LinkedIn profile`}
                              className="faculty-social linkedin"
                            >
                              <FaLinkedinIn />
                            </Link>

                          )}

                          {faculty.gscholar && (

                            <Link
                              href={faculty.gscholar}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${faculty.title} Google Scholar profile`}
                              className="faculty-social scholar"
                            >
                              <FaGraduationCap />
                            </Link>

                          )}

                        </div>

                      )}

                    </div>


                    {/* -------------------------------------------------
                        FACULTY INFORMATION
                    ------------------------------------------------- */}

                    <div className="faculty-info">

                      {/* HOD badge */}
                      {isHOD && (

                        <span className="faculty-role-badge">
                          HEAD OF DEPARTMENT
                        </span>

                      )}


                      {/* Program Incharge badge */}
                      {isProgramIncharge && !isHOD && (

                        <span className="faculty-role-badge faculty-program-badge">
                          PROGRAM INCHARGE
                        </span>

                      )}


                      <h2>
                        {faculty.title}
                      </h2>

                      <p>
                        {faculty.desg}
                      </p>

                    </div>


                    {/* Bottom accent */}
                    <div className="faculty-card-accent" />

                  </article>

                );

              })}

            </div>

          ) : (

            /* -------------------------------------------------
               EMPTY STATE
            ------------------------------------------------- */

            <div className="faculty-empty">

              <h2>
                Faculty information unavailable
              </h2>

              <p>
                Faculty information will be displayed here once
                the department data is available.
              </p>

            </div>

          )}


          {/* -------------------------------------------------
              BOTTOM NAVIGATION
          ------------------------------------------------- */}

          <div className="faculty-navigation">

            <div className="faculty-navigation-text">

              <span>
                EXPLORE MORE
              </span>

              <p>
                Discover our class teachers and mentors.
              </p>

            </div>


            <div className="faculty-navigation-buttons">

              {/* Class Teachers Button */}
              <a
                href="#class-teachers-section"
                className="faculty-nav-button"
              >
                <span>
                  Class Teachers
                </span>

                <span className="faculty-nav-arrow">
                  ↓
                </span>
              </a>


              {/* Mentors Button */}
              <a
                href="#mentors-section"
                className="faculty-nav-button faculty-nav-button-outline"
              >
                <span>
                  Mentors
                </span>

                <span className="faculty-nav-arrow">
                  ↓
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLASS TEACHERS SECTION
      ===================================================== */}

      <ClassTeachers />


      {/* =====================================================
          MENTORS SECTION
      ===================================================== */}

      <Mentors />

    </>
  );
}