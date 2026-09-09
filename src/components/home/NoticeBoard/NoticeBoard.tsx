"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./NoticeBoard.css";

interface Notice {
  id: number | string;
  img: string;
  user: string;
  desc: string;
  link: string;
}

const notices: Notice[] = [
  /*
   * IMPORTANT:
   * Replace this array with your existing notices
   * from your current NoticeBoard/dummydata.
   *
   * The component structure is already ready.
   */
];

export default function NoticeBoard() {

  const [selectedNotice, setSelectedNotice] =
    useState<Notice | null>(null);

  const [time, setTime] =
    useState("");

  const [date, setDate] =
    useState("");

  useEffect(() => {

    const updateDateTime = () => {

      const now = new Date();

      setTime(
        now.toLocaleTimeString(
          "en-IN",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )
      );

      setDate(
        now.toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )
      );
    };

    updateDateTime();

    const interval =
      setInterval(updateDateTime, 30000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    const handleKeyDown =
      (event: KeyboardEvent) => {

        if (event.key === "Escape") {
          setSelectedNotice(null);
        }

      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, []);

  return (
    <section className="notice-section">

      <div className="notice-container">

        {/* Header */}

        <div className="notice-header">

          <div>

            <span>
              DEPARTMENT UPDATES
            </span>

            <h2>
              Notice
              <strong> Board</strong>
            </h2>

          </div>

          <div className="notice-time">

            <div>
              <span>TIME</span>
              <strong>{time}</strong>
            </div>

            <div>
              <span>DATE</span>
              <strong>{date}</strong>
            </div>

          </div>

        </div>

        {/* Notice feed */}

        {notices.length > 0 ? (

          <div className="notice-grid">

            {notices.map(
              (notice, index) => (

                <motion.article
                  key={notice.id}
                  className="notice-card"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  onClick={() =>
                    setSelectedNotice(notice)
                  }
                >

                  <div className="notice-image">

                    <Image
                      src={notice.img}
                      alt={notice.user}
                      fill
                      sizes="(max-width: 768px) 90vw, 30vw"
                    />

                    <div className="notice-image-overlay">
                      VIEW
                    </div>

                  </div>

                  <div className="notice-card-content">

                    <span className="notice-tag">
                      UPDATE
                    </span>

                    <h3>
                      {notice.user}
                    </h3>

                    <p>
                      {notice.desc.length > 180
                        ? `${notice.desc.substring(
                            0,
                            180
                          )}...`
                        : notice.desc}
                    </p>

                    <Link
                      href={notice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      Read More
                      <span>↗</span>
                    </Link>

                  </div>

                </motion.article>

              )
            )}

          </div>

        ) : (

          <div className="notice-empty">

            <div className="notice-empty-icon">
              !
            </div>

            <h3>
              No new notices
            </h3>

            <p>
              Department announcements and updates
              will appear here.
            </p>

          </div>

        )}

      </div>

      {/* Modal */}

      <AnimatePresence>

        {selectedNotice && (

          <motion.div
            className="notice-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedNotice(null)
            }
          >

            <motion.div
              className="notice-modal-content"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                type="button"
                className="notice-close"
                onClick={() =>
                  setSelectedNotice(null)
                }
                aria-label="Close notice"
              >
                ×
              </button>

              <div className="notice-modal-image">

                <Image
                  src={selectedNotice.img}
                  alt={selectedNotice.user}
                  fill
                  sizes="90vw"
                />

              </div>

              <div className="notice-modal-body">

                <span className="notice-tag">
                  DEPARTMENT UPDATE
                </span>

                <h2>
                  {selectedNotice.user}
                </h2>

                <p>
                  {selectedNotice.desc}
                </p>

                <Link
                  href={selectedNotice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Original Notice
                  <span>↗</span>
                </Link>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}