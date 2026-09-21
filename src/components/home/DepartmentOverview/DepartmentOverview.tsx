"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

import { deptCard } from "@/lib/dummydata";

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
    <section className="py-32 bg-surface-alt">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Heading */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Our Department
          </span>
          <h2 className="text-5xl md:text-7xl font-semibold text-content mb-8 tracking-tight leading-[1.1]">
            Explore the IT Experience.
          </h2>
          <p className="text-xl text-content-muted leading-relaxed font-light">
            Discover the academic environment, people, opportunities and resources that make our department a place to learn, innovate, and create.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(deptCard as DepartmentCard[]).map((item, index) => {
            const destination = getDestination(item.deptName);
            const external = destination.startsWith("http");

            return (
              <motion.article
                key={item.deptName}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full border border-black/5 hover:-translate-y-2"
              >
                <div className="relative h-56 w-full overflow-hidden bg-surface-muted m-2 rounded-[1.5rem] w-[calc(100%-1rem)]">
                  <Image
                    // Use bg_1.jpg fallback if item.cover is hero.jpg or missing
                    src={item.cover === "/images/hero.jpg" ? "/images/bg_1.jpg" : item.cover || "/images/bg_1.jpg"}
                    alt={item.deptName}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-content font-semibold text-sm shadow-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-content mb-4 tracking-tight">
                    {item.deptName}
                  </h3>
                  <p className="text-content-muted text-sm leading-relaxed mb-8 flex-grow font-medium">
                    {item.desc}
                  </p>
                  
                  <Link
                    href={destination}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-between w-full text-content font-semibold text-sm group-hover:text-primary transition-colors mt-auto pt-6 border-t border-black/5"
                  >
                    Explore 
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <LuArrowRight className="text-lg" />
                    </div>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}