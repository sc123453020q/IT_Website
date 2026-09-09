"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import "./NaacCertificate.css";

export default function NaacCertificate() {
  return (
    <section className="naac-section">

      <div className="naac-container">

        <motion.div
          className="naac-heading"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>RECOGNITION & QUALITY</span>

          <h2>
            NAAC
            <strong> Accreditation</strong>
          </h2>
        </motion.div>

        <div className="naac-layout">

          {/* Certificate */}

          <motion.div
            className="naac-certificate"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="certificate-label">
              OFFICIAL RECOGNITION
            </div>

            <div className="certificate-image">

              <Image
                src="/images/naac_certificate.jpg"
                alt="NAAC Accreditation Certificate"
                width={600}
                height={800}
                className="certificate-img"
              />

            </div>

          </motion.div>

          {/* Text */}

          <motion.div
            className="naac-content"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="naac-overline">
              QUALITY ASSURANCE
            </div>

            <h3>
              A commitment to
              <span> excellence.</span>
            </h3>

            <p>
              The Department of Information Technology at
              the Institute of Engineering and Management,
              Salt Lake, Kolkata came into existence in 1999
              with a vision to produce creators of creative
              technological solutions for the benefit of
              Engineering, Science and Technology and the
              Nation on a larger scale.
            </p>

            <p>
              The department has always strived to fulfill
              its mission to impart value-based education
              and promote research and development at the
              international level. The department has
              received accreditation twice by the NBA and
              has since been running its programs
              successfully.
            </p>

            <div className="naac-stats">

              <div>
                <strong>1999</strong>
                <span>Department Founded</span>
              </div>

              <div>
                <strong>2×</strong>
                <span>NBA Accreditation</span>
              </div>

              <div>
                <strong>120</strong>
                <span>Current UG Intake</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}