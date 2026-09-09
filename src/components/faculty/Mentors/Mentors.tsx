"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGraduationCap,
  FaTimes,
} from "react-icons/fa";

import { mentorsList } from "@/lib/dummydata";

import "./Mentors.css";

type MenteeData = (string | number)[];

interface Mentor {
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

interface MentorGroup {
  hod?: Mentor[];
  prof?: Mentor[];
  asso_prof?: Mentor[];
  assi_prof?: Mentor[];
  faculty?: Mentor[];
}

/* ---------------------------------------------------------
   GET ALL MENTORS
--------------------------------------------------------- */

const getMentors = (data: MentorGroup): Mentor[] => {
  return [
    ...(data.hod ?? []),
    ...(data.prof ?? []),
    ...(data.asso_prof ?? []),
    ...(data.assi_prof ?? []),
    ...(data.faculty ?? []),
  ];
};

/* ---------------------------------------------------------
   MENTORS COMPONENT
--------------------------------------------------------- */

export default function Mentors() {
  const mentorData = mentorsList as MentorGroup;

  const mentors = getMentors(mentorData);

  const [selectedMentor, setSelectedMentor] =
    useState<Mentor | null>(null);

  /* -------------------------------------------------------
     ESCAPE KEY
  ------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMentor(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* -------------------------------------------------------
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ------------------------------------------------------- */

  useEffect(() => {
    if (selectedMentor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMentor]);

  return (
    <section
      className="mentors-section"
      id="mentors-section"
    >

      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <div className="mentors-container">

        <div className="mentors-heading">

          <div className="mentors-eyebrow">
            <span className="mentors-eyebrow-line" />
            ACADEMIC SUPPORT
          </div>

          <h1>
            Meet Our
            <span>Mentors</span>
          </h1>

          <p>
            Our mentors guide students throughout their academic
            journey, providing support, direction and encouragement.
          </p>

        </div>


        {/* =================================================
            MENTOR CARDS
        ================================================= */}

        {mentors.length > 0 ? (

          <div className="mentors-grid">

            {mentors.map((mentor, index) => (

              <button
                type="button"
                className="mentor-card"
                key={mentor.id}
                onClick={() => setSelectedMentor(mentor)}
              >

                {/* Card Number */}
                <div className="mentor-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* Mentor Image */}

                <div className="mentor-image-wrapper">

                  <div className="mentor-image-glow" />

                  <div className="mentor-image">

                    <Image
                      src={
                        mentor.img ||
                        "/default-profile.png"
                      }
                      alt={mentor.title}
                      fill
                      sizes="
                        (max-width: 650px) 85vw,
                        (max-width: 1000px) 45vw,
                        30vw
                      "
                    />

                  </div>

                </div>


                {/* Mentor Information */}

                <div className="mentor-info">

                  <h2>
                    {mentor.title}
                  </h2>

                  <p>
                    {mentor.desg}
                  </p>

                  <span className="mentor-view">
                    View Mentees →
                  </span>

                </div>


                {/* Bottom Accent */}
                <div className="mentor-card-accent" />

              </button>

            ))}

          </div>

        ) : (

          <div className="mentor-empty">

            <h2>
              Mentor information unavailable
            </h2>

            <p>
              Mentor information will be displayed here once
              the department data is available.
            </p>

          </div>

        )}

      </div>


      {/* =================================================
          MENTOR DETAILS MODAL
      ================================================= */}

      {selectedMentor && (

        <div
          className="mentor-modal-overlay"
          onClick={() => setSelectedMentor(null)}
        >

          <div
            className="mentor-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}

            <button
              type="button"
              className="mentor-modal-close"
              onClick={() => setSelectedMentor(null)}
              aria-label="Close mentor details"
            >
              <FaTimes />
            </button>


            {/* =================================================
                LEFT SIDE - MENTOR PHOTO
            ================================================= */}

            <div className="mentor-modal-left">

              <div className="mentor-modal-image-wrapper">

                <Image
                  src={
                    selectedMentor.img ||
                    "/default-profile.png"
                  }
                  alt={selectedMentor.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                />

              </div>

              <div className="mentor-modal-profile">

                <h2>
                  {selectedMentor.title}
                </h2>

                <p>
                  {selectedMentor.desg}
                </p>


                {/* Social Links */}

                {(selectedMentor.linkedin ||
                  selectedMentor.gscholar) && (

                  <div className="mentor-socials">

                    {selectedMentor.linkedin && (

                      <Link
                        href={selectedMentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedMentor.title} LinkedIn`}
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >
                        <FaLinkedinIn />
                      </Link>

                    )}

                    {selectedMentor.gscholar && (

                      <Link
                        href={selectedMentor.gscholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedMentor.title} Google Scholar`}
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >
                        <FaGraduationCap />
                      </Link>

                    )}

                  </div>

                )}

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE - MENTEES
            ================================================= */}

            <div className="mentor-modal-right">

              <div className="mentees-heading">

                <span>
                  STUDENT GUIDANCE
                </span>

                <h2>
                  Mentees
                </h2>

              </div>


              <div className="mentees-container">

                {selectedMentor.mentees ? (

                  Object.entries(
                    selectedMentor.mentees
                  ).map(([year, mentees]) => (

                    mentees && mentees.length > 0 ? (

                      <div
                        className="mentees-year"
                        key={year}
                      >

                        <h3>
                          {year}
                        </h3>

                        <div className="mentees-list">

                          {mentees.map(
                            (mentee, index) => {

                              const roll =
                                mentee[0];

                              const serial =
                                mentee[1];

                              const name =
                                mentee[2];

                              return (

                                <div
                                  className="mentee-item"
                                  key={`${roll}-${index}`}
                                >

                                  <span className="mentee-serial">
                                    {serial}.
                                  </span>

                                  <div className="mentee-details">

                                    <strong>
                                      {name}
                                    </strong>

                                    <span>
                                      {roll}
                                    </span>

                                  </div>

                                </div>

                              );

                            }
                          )}

                        </div>

                      </div>

                    ) : null

                  ))

                ) : (

                  <div className="no-mentees">
                    No mentees assigned.
                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}