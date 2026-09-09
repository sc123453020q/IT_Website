"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
  return (
    <section className="home-hero">
      {/* Background decorations */}
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-grid" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Institute of Engineering & Management
          </div>

          <h1>
            Information
            <span>Technology</span>
          </h1>

          <p className="hero-description">
            Creating technology-driven thinkers, innovators and
            problem solvers through quality education, research
            and industry-oriented learning.
          </p>

          <div className="hero-actions">
            <Link href="/about" className="hero-primary-btn">
              Explore Department
              <span>→</span>
            </Link>

            <Link href="/academics" className="hero-secondary-btn">
              View Academics
            </Link>
          </div>

          <div className="hero-meta">
            <div>
              <strong>1999</strong>
              <span>Established</span>
            </div>

            <div className="hero-meta-divider" />

            <div>
              <strong>120</strong>
              <span>B.Tech Intake</span>
            </div>

            <div className="hero-meta-divider" />

            <div>
              <strong>NBA</strong>
              <span>Accredited</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >
          <div className="hero-visual-glow" />

          <div className="hero-image-frame">

            <div className="hero-image-corner corner-one" />
            <div className="hero-image-corner corner-two" />
            <div className="hero-image-corner corner-three" />
            <div className="hero-image-corner corner-four" />

            <div className="hero-image-wrapper">
              <Image
                src="/images/hero.jpg"
                alt="IEM Information Technology Department"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 50vw"
                className="hero-image"
              />
            </div>

            <div className="hero-floating-card">
              <div className="hero-floating-icon">
                IT
              </div>

              <div>
                <strong>Tech • Innovation</strong>
                <span>Learn. Build. Innovate.</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}