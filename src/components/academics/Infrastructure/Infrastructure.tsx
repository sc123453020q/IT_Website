"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuCircleCheck, LuWifi, LuMonitor, LuZap } from "react-icons/lu";

const galleryImages = [
  {
    title: "LG 2.1 Room",
    img: "/images/infrastructure/class3.jpg",
  },
  {
    title: "Competitive Coding Class",
    img: "/images/infrastructure/class1.jpg",
  },
  {
    title: "Theoretical Class at LG 4.7",
    img: "/images/infrastructure/class4.jpg",
  },
  {
    title: "Theoretical Class at Annex 5th Floor",
    img: "/images/infrastructure/class5.jpg",
  },
  {
    title: "DAA LAB",
    img: "/images/infrastructure/Lab1.jpg",
  },
  {
    title: "AIML LAB",
    img: "/images/infrastructure/Lab2.jpg",
  },
  {
    title: "OOPS LAB",
    img: "/images/infrastructure/Lab3.jpg",
  },
  {
    title: "COA LAB",
    img: "/images/infrastructure/Lab5.jpg",
  },
];

const labCategories = [
  {
    title: "Software & Programming",
    labs: [
      "Object-Oriented Programming Lab",
      "Data Structures Lab",
      "Design and Analysis of Algorithms Lab",
      "Software Engineering Lab",
    ],
  },
  {
    title: "IT & Emerging Technologies",
    labs: [
      "IT Workshop Lab",
      "Cyber Security Lab",
      "Cloud Computing & IoT Lab",
      "Artificial Intelligence & Machine Learning Lab",
    ],
  },
  {
    title: "Database and Systems",
    labs: [
      "Database Management Systems Lab",
      "Operating Systems Lab",
    ],
  },
  {
    title: "Networking & Language",
    labs: [
      "Computer Networking Lab",
      "Compiler Design Lab",
    ],
  },
  {
    title: "Computer Hardware and Electronics",
    labs: [
      "Digital Electronics Lab",
      "Analog Electronics Lab",
      "Computer Organization & Architecture Lab",
    ],
  },
];

const amenities = [
  "Rooftop mini-golf course",
  "Cricket net practice area",
  "Table tennis boards",
  "Carrom boards",
  "Two basketball courts",
  "Gymnasium",
];

const stats = [
  {
    value: "2.4 Gbps",
    label: "Campus Internet",
    icon: LuZap,
  },
  {
    value: "Wi-Fi",
    label: "Enabled Campus",
    icon: LuWifi,
  },
  {
    value: "5000+",
    label: "Computers for Students",
    icon: LuMonitor,
  },
];

export default function Infrastructure() {
  const totalLabs = labCategories.reduce(
    (total, category) => total + category.labs.length,
    0
  );

  return (
    <section className="py-24 bg-white" id="infrastructure-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">

        {/* =================================================
            HEADER
        ================================================= */}
        <motion.div 
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Campus & Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-content mb-6 tracking-tight">
            Infrastructure & Facilities.
          </h2>
          <p className="text-xl text-content-muted leading-relaxed font-light tracking-wide max-w-2xl">
            A learning environment designed to support practical education, experimentation, collaboration and innovation.
          </p>
        </motion.div>

        {/* =================================================
            OVERVIEW
        ================================================= */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lg:w-1/2 flex flex-col">
            <span className="text-content-muted font-bold tracking-widest text-[10px] uppercase mb-4 block">
              Department Infrastructure
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-content tracking-tight mb-6">
              Facilities built for hands-on engineering.
            </h3>
            <p className="text-lg text-content-muted leading-relaxed font-light tracking-wide">
              The IT Department is equipped with laboratories, modern classrooms and facilities that provide students with practical exposure to information technology and modern software development.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 p-6 rounded-[2rem] bg-surface-alt border border-black/5">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-primary flex-shrink-0">
                  <stat.icon className="text-2xl" />
                </div>
                <div>
                  <strong className="block text-3xl font-semibold tracking-tighter text-content mb-1">
                    {stat.value}
                  </strong>
                  <span className="text-sm font-semibold tracking-wide text-content-muted uppercase">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            LABORATORIES
        ================================================= */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-black/5">
            <div>
              <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">
                Laboratory Facilities
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold text-content tracking-tight">
                {totalLabs} Labs. Multiple Specializations.
              </h3>
            </div>
            <p className="text-content-muted font-medium mt-4 md:mt-0 max-w-xs text-right">
              From core programming to emerging technologies and computer hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {labCategories.map((category, index) => (
              <div key={category.title} className="p-8 rounded-[2rem] bg-surface-alt border border-black/5 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="text-4xl font-mono font-bold text-black/5 mb-8">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xl font-semibold text-content tracking-tight mb-6">
                  {category.title}
                </h4>
                <div className="flex flex-col gap-4 mt-auto">
                  {category.labs.map((lab) => (
                    <div key={lab} className="flex items-start gap-3">
                      <LuCircleCheck className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-content-muted leading-relaxed">
                        {lab}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            AMENITIES
        ================================================= */}
        <motion.div 
          className="mb-32 p-10 lg:p-16 rounded-[2rem] bg-content text-white border border-black/5 flex flex-col lg:flex-row gap-12 lg:gap-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lg:w-1/3">
            <span className="text-white/50 font-bold tracking-widest text-[10px] uppercase mb-4 block">
              Beyond the Classroom
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Campus Amenities
            </h3>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                <LuCircleCheck className="text-xl text-primary" />
                <span className="font-semibold tracking-wide text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            GALLERY
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">
              Infrastructure Gallery
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-content tracking-tight mb-4">
              Inside the Department
            </h3>
            <p className="text-lg text-content-muted leading-relaxed font-light tracking-wide">
              A glimpse of classrooms, laboratories and facilities used by our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={image.title} className="group relative aspect-square rounded-3xl overflow-hidden bg-black/5 border border-black/5">
                <Image
                  src={image.img}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Fig. {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-white font-semibold text-sm tracking-wide">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}