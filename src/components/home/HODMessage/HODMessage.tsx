"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "./hodMessage.css";

export default function HODMessage() {
  return (
    <section className="hod-section">
      <div className="hod-container">

        {/* Header */}
        <motion.div
          className="hod-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>LEADERSHIP</span>

          <h2>
            Message from
            <strong> the HOD</strong>
          </h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="hod-main-card"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >

          {/* Profile */}
          <div className="hod-profile">

            <div className="hod-image-wrapper">

              <div className="hod-image-ring" />

              <Image
                src="/images/hod_img.jpg"
                alt="Prof. Dr. Moutushi Singh"
                width={280}
                height={280}
                className="hod-image"
              />

              <div className="hod-status">
                <span />
                Head of Department
              </div>

            </div>

            <div className="hod-name">
              <h3>
                Prof. Dr. Moutushi Singh
              </h3>

              <p>
                PhD · Head of the Department
              </p>

              <Link href="mailto:moutushi.singh@iem.edu.in">
                moutushi.singh@iem.edu.in
              </Link>
            </div>

          </div>

          {/* Message */}
          <div className="hod-message">

            <div className="quote-mark">
              “
            </div>

            <p className="hod-quote">
              I invite you to explore our website and get
              more information about our distinguished
              academic programs, state of the art facilities,
              and dedicated faculty members. It will give you
              our clear intention and commitment towards
              excellence and quality.
            </p>

            <p>
              Thanks to the efforts of our researchers,
              teachers, and our students too, we persevere
              to play a primary role in our discipline, both
              nationally and internationally.
            </p>

            <div className="hod-signature">
              <span>With best wishes</span>

              <strong>
                Prof. Dr. Moutushi Singh
              </strong>
            </div>

          </div>

        </motion.div>

        {/* Department message */}
        <motion.div
          className="hod-department-message"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="hod-message-label">
            ABOUT THE DEPARTMENT
          </div>

          <div className="hod-department-grid">

            <div>
              <h3>
                Building knowledge.
                <br />
                Creating possibilities.
              </h3>
            </div>

            <div className="hod-department-copy">

              <p>
                It gives me immense pride and pleasure to
                introduce the Department of Information
                Technology. The Department of Information
                Technology was founded in 1999.
              </p>

              <p>
                The Bachelor degree program was started in
                1999 and the Master degree program was
                started in 2011. The department focuses on
                strong academic programs based on both
                theoretical and practical knowledge.
              </p>

              <p>
                We are committed to students by offering
                short-term courses and pre-placement training
                classes that foster critical and analytical
                thinking and build the necessary skills to
                succeed in the industry.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}