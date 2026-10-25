"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { achievements } from "@/lib/dummydata";
import "./Achievements.css";

interface AchievementItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export default function Achievements({ hideHeader = false }: { hideHeader?: boolean }) {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAchievement]);

  /* Close modal on ESC key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedAchievement(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        {!hideHeader && (
          <div className="achievements-header">
            <span>CELEBRATING EXCELLENCE</span>
            <h1>
              Student
              <strong>Achievements</strong>
            </h1>
            <p>
              Celebrating the dedication, creativity and achievements of
              students who continue to make our department proud.
            </p>
          </div>
        )}

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article
              className="achievement-card-grid"
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
            >
              <div className="achievement-image-wrapper">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="achievement-card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="achievement-card-body">
                <h3 className="achievement-card-title">{item.title}</h3>
                <p className="achievement-card-desc">{item.desc}</p>
                <span className="achievement-read-more">Read More →</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedAchievement && (
        <div
          className="achievement-modal-overlay"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="achievement-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="achievement-modal-close"
              onClick={() => setSelectedAchievement(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div className="achievement-modal-image">
              <Image
                src={selectedAchievement.img}
                alt={selectedAchievement.title}
                fill
                className="object-contain"
                sizes="(max-width: 900px) 100vw, 800px"
              />
            </div>

            <div className="achievement-modal-content">
              <h2>{selectedAchievement.title}</h2>
              <div className="achievement-modal-desc">
                {selectedAchievement.desc}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}