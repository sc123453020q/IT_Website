"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaUserTie, FaTimes, FaUsers, FaBuilding } from "react-icons/fa";
import { industrialVisits } from "@/lib/dummydata";
import "./IndustryVisit.css";

interface IndustrialVisitItem {
  id: number;
  industry: string;
  subtitle?: string;
  date: string;
  organizedBy: string;
  attendedBy?: string;
  nature?: string;
  image?: string;
}

export default function IndustryVisit({ hideHeader = false }: { hideHeader?: boolean }) {
  const [selectedVisit, setSelectedVisit] = useState<IndustrialVisitItem | null>(null);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedVisit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVisit]);

  /* Close modal on ESC key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVisit(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="industry-visit-section">
      <div className="industry-visit-container">

        {/* Heading */}
        {!hideHeader && (
          <div className="industry-visit-heading">
            <div className="industry-visit-eyebrow">
              <span />
              PRACTICAL EXPOSURE
              <span />
            </div>

            <h1>
              Industrial
              <span>Visits</span>
            </h1>

            <p>
              Bridging classroom learning with corporate industry practices through curated technical visits, facility walkthroughs, and professional interactions.
            </p>
          </div>
        )}

        {/* Visits Grid */}
        <div className="industry-visit-grid">
          {industrialVisits.map((visit, index) => {
            const hasImage = Boolean(visit.image && visit.image.trim() !== "");

            return (
              <article
                className={`industry-card ${hasImage ? "has-image" : "no-image-block"}`}
                key={visit.id}
                onClick={() => {
                  if (hasImage) setSelectedVisit(visit);
                }}
              >
                {/* PHOTO FRAME - ONLY IF IT HAS AN ACCURATE PHOTO */}
                {hasImage ? (
                  <div className="industry-card-image-wrapper">
                    <Image
                      src={visit.image!}
                      alt={`${visit.industry} Industry Visit`}
                      fill
                      className="industry-card-img"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="industry-card-badge">
                      {visit.nature || "Physical"}
                    </div>

                    <div className="industry-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                ) : (
                  /* TOP BAR FOR CARDS WITHOUT PHOTO FRAME (e.g. TCS & Sundarbans) */
                  <div className="industry-block-top">
                    <span className="industry-mode-badge">
                      {visit.nature || "Physical"}
                    </span>
                    <span className="industry-number-badge">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Card Body */}
                <div className="industry-card-body">
                  <div className="industry-header-row">
                    {!hasImage && (
                      <div className="industry-icon-wrapper">
                        <FaBuilding />
                      </div>
                    )}
                    <div>
                      <h3 className="industry-card-title">{visit.industry}</h3>
                      {visit.subtitle && (
                        <p className="industry-card-subtitle">{visit.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* Details List */}
                  <div className="industry-card-details">
                    {/* Date */}
                    <div className="industry-detail-row">
                      <span className="industry-detail-icon date-icon">
                        <FaCalendarAlt />
                      </span>
                      <div className="industry-detail-text">
                        <span className="industry-detail-label">Date</span>
                        <strong className="industry-detail-value">{visit.date}</strong>
                      </div>
                    </div>

                    {/* Organized By */}
                    <div className="industry-detail-row">
                      <span className="industry-detail-icon organizer-icon">
                        <FaUserTie />
                      </span>
                      <div className="industry-detail-text">
                        <span className="industry-detail-label">Organized By</span>
                        <strong className="industry-detail-value">{visit.organizedBy}</strong>
                      </div>
                    </div>

                    {/* Attended By */}
                    {visit.attendedBy && (
                      <div className="industry-detail-row">
                        <span className="industry-detail-icon attendees-icon">
                          <FaUsers />
                        </span>
                        <div className="industry-detail-text">
                          <span className="industry-detail-label">Attended By</span>
                          <strong className="industry-detail-value">{visit.attendedBy}</strong>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action button only for cards with photo */}
                  {hasImage && (
                    <button
                      type="button"
                      className="industry-view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVisit(visit);
                      }}
                    >
                      View Photo & Details →
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* MODAL VIEW FOR CARDS WITH REAL PHOTOS */}
      {selectedVisit && selectedVisit.image && (
        <div
          className="industry-modal-overlay"
          onClick={() => setSelectedVisit(null)}
        >
          <div
            className="industry-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="industry-modal-close"
              onClick={() => setSelectedVisit(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div className="industry-modal-image">
              <Image
                src={selectedVisit.image}
                alt={`${selectedVisit.industry} Visit Photo`}
                fill
                className="object-contain"
                sizes="(max-width: 900px) 100vw, 850px"
              />
            </div>

            <div className="industry-modal-info">
              <h2>{selectedVisit.industry} Industry Visit</h2>

              {selectedVisit.subtitle && (
                <p className="industry-modal-subtitle">{selectedVisit.subtitle}</p>
              )}

              <div className="industry-modal-meta-grid">
                <div className="industry-modal-meta-item">
                  <span>Industry Name</span>
                  <strong>{selectedVisit.industry}</strong>
                </div>

                <div className="industry-modal-meta-item">
                  <span>Date</span>
                  <strong>{selectedVisit.date}</strong>
                </div>

                <div className="industry-modal-meta-item">
                  <span>Organized By</span>
                  <strong>{selectedVisit.organizedBy}</strong>
                </div>

                {selectedVisit.attendedBy && (
                  <div className="industry-modal-meta-item">
                    <span>Attended By</span>
                    <strong>{selectedVisit.attendedBy}</strong>
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