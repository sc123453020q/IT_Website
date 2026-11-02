"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGraduationCap, FaTimes } from "react-icons/fa";

import { itfaculty, mentorsList } from "@/lib/dummydata";

import ClassTeachers from "@/components/faculty/ClassTeachers/ClassTeachers";
import "@/components/faculty/Mentors/Mentors.css";
import "./Faculty.css";

type MenteeData = (string | number)[];

interface FacultyMember {
  id: string | number;
  title: string;
  desg: string;
  img?: string;
  linkedin?: string;
  gscholar?: string;
  mentees?: {
    [year: string]: MenteeData[] | undefined;
  };
}

interface FacultyGroup {
  hod?: FacultyMember[];
  prof?: FacultyMember[];
  asso_prof?: FacultyMember[];
  assi_prof?: FacultyMember[];
  faculty?: FacultyMember[];
}

/* ---------------------------------------------------------
   FLATTEN FACULTY DATA & ATTACH MENTEES
--------------------------------------------------------- */

const getFacultyMembers = (data: FacultyGroup): FacultyMember[] => {
  const members = [
    ...(data.hod ?? []),
    ...(data.prof ?? []),
    ...(data.asso_prof ?? []),
    ...(data.assi_prof ?? []),
    ...(data.faculty ?? []),
  ];

  const allMentors = [
    ...(mentorsList.hod ?? []),
    ...(mentorsList.prof ?? []),
    ...(mentorsList.asso_prof ?? []),
    ...(mentorsList.assi_prof ?? []),
  ];

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/^(prof\.|dr\.|prof|dr)\s*/gi, "")
      .replace(/[^a-z]/g, "");

  const membersWithMentees = members.map((faculty) => {
    const norm = normalize(faculty.title);
    const mentorMatch = allMentors.find(
      (m) => m.id === faculty.id || normalize(m.title) === norm
    );
    return {
      ...faculty,
      mentees: mentorMatch?.mentees || faculty.mentees,
    };
  });

  /*
   * Faculty priority:
   * 1. HOD
   * 2. Program Incharge
   * 3. Everyone else
   */

  return membersWithMentees.sort((a, b) => {
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

  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  /* Lock body scroll on modal open */
  useEffect(() => {
    if (selectedFaculty) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFaculty]);

  /* Escape key to close modal */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedFaculty(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
          <div className="faculty-intro">
            <span className="site-section-kicker">Faculty directory</span>
            <div><h2>Meet the people behind the teaching.</h2><p>Explore the department’s faculty and their roles. Select a profile for mentoring details and available links.</p></div>
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
                    onClick={() => setSelectedFaculty(faculty)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedFaculty(faculty);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${faculty.title} profile`}
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
                            "/profile.png"
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
                              onClick={(e) => e.stopPropagation()}
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
                              onClick={(e) => e.stopPropagation()}
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

                      <button
                        type="button"
                        className="faculty-view-mentees"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFaculty(faculty);
                        }}
                      >
                        View Mentees →
                      </button>

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
                Discover our class teachers.
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

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MENTOR DETAILS MODAL
      ===================================================== */}

      {selectedFaculty && (
        <div
          className="mentor-modal-overlay"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="mentor-modal"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="mentor-modal-close"
              onClick={() => setSelectedFaculty(null)}
              aria-label="Close mentor details"
            >
              <FaTimes />
            </button>

            {/* LEFT SIDE - PHOTO & DETAILS */}
            <div className="mentor-modal-left">
              <div className="mentor-modal-image-wrapper">
                <Image
                  src={selectedFaculty.img || "/profile.png"}
                  alt={selectedFaculty.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>

              <div className="mentor-modal-profile">
                <h2>{selectedFaculty.title}</h2>
                <p>{selectedFaculty.desg}</p>

                {(selectedFaculty.linkedin || selectedFaculty.gscholar) && (
                  <div className="mentor-socials">
                    {selectedFaculty.linkedin && (
                      <Link
                        href={selectedFaculty.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedFaculty.title} LinkedIn`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FaLinkedinIn />
                      </Link>
                    )}

                    {selectedFaculty.gscholar && (
                      <Link
                        href={selectedFaculty.gscholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedFaculty.title} Google Scholar`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FaGraduationCap />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE - MENTEES */}
            <div className="mentor-modal-right">
              <div className="mentees-heading">
                <span>STUDENT GUIDANCE</span>
                <h2>Mentees</h2>
              </div>

              <div className="mentees-container">
                {selectedFaculty.mentees && Object.keys(selectedFaculty.mentees).length > 0 ? (
                  Object.entries(selectedFaculty.mentees).map(([year, mentees]) =>
                    mentees && mentees.length > 0 ? (
                      <div className="mentees-year" key={year}>
                        <h3>{year}</h3>
                        <div className="mentees-list">
                          {mentees.map((mentee, index) => {
                            const roll = mentee[0];
                            const serial = mentee[1];
                            const name = mentee[2];

                            return (
                              <div
                                className="mentee-item"
                                key={`${roll}-${index}`}
                              >
                                <span className="mentee-serial">
                                  {serial}.
                                </span>
                                <div className="mentee-details">
                                  <strong>{name}</strong>
                                  <span>{roll}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null
                  )
                ) : (
                  <div className="no-mentees">No mentees assigned.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          CLASS TEACHERS SECTION
      ===================================================== */}

      <ClassTeachers />

    </>
  );
}
