"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "B.Tech Intake", value: 120, suffix: "+", prefix: "" },
  { label: "Faculty Members", value: 30, suffix: "+", prefix: "" },
  { label: "Student Placements", value: 95, suffix: "%", prefix: "" },
  { label: "Research Papers", value: 250, suffix: "+", prefix: "" },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Statistics() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-8 border-b border-black/5">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Department in Numbers
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-content tracking-tight leading-tight">
              A Legacy of Excellence.
            </h2>
          </div>
          <p className="text-content-muted font-medium mt-6 md:mt-0 max-w-sm">
            Consistently delivering quality education and producing industry-ready professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start px-4 lg:px-8 border-l border-black/5"
            >
              <div className="text-5xl lg:text-7xl font-semibold text-content mb-4 flex items-baseline tracking-tighter">
                <span>{stat.prefix}</span>
                <CountUp end={stat.value} duration={2.5} />
                <span className="text-3xl lg:text-5xl ml-1 text-primary">{stat.suffix}</span>
              </div>
              <div className="text-content-muted font-semibold text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
