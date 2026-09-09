"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { deptCard } from "@/lib/dummydata";

import "./DepartmentOverview.css";

interface DepartmentCard {
  deptName: string;
  desc: string;
  cover: string;
}

function getDestination(name: string) {
  switch (name) {
    case "CAMPUS":
      return "/about";

    case "PLACEMENT":
      return "/students";

    case "FACULTY":
      return "/faculty";

    case "DIGITAL LIBRARY":
      return "https://iemgurukul-opac.l2c2.co.in/";

    default:
      return "#";
  }
}

export default function DepartmentOverview() {
  return (
    <section className="department-overview">

      <div className="department-container">

        {/* Heading */}

        <motion.div
          className="department-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>OUR DEPARTMENT</span>

          <h2>
            Explore the
            <strong> IT Experience</strong>
          </h2>

          <p>
            Discover the academic environment, people,
            opportunities and resources that make our
            department a place to learn and create.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="department-grid">

          {(deptCard as DepartmentCard[]).map(
            (item, index) => {

              const destination =
                getDestination(item.deptName);

              const external =
                destination.startsWith("http");

              return (
                <motion.article
                  key={item.deptName}
                  className="department-card"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                >

                  <div className="department-image">
                    <Image
                      src={item.cover}
                      alt={item.deptName}
                      fill
                      sizes="(max-width: 768px) 90vw, 25vw"
                    />

                    <div className="department-number">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="department-card-content">

                    <h3>
                      {item.deptName}
                    </h3>

                    <p>
                      {item.desc}
                    </p>

                    <Link
                      href={destination}
                      target={
                        external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="department-link"
                    >
                      Explore
                      <span>↗</span>
                    </Link>

                  </div>

                </motion.article>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}