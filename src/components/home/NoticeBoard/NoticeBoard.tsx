"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuClock, LuCalendar, LuBellOff, LuExternalLink, LuX, LuArrowRight } from "react-icons/lu";

interface Notice {
  id: number | string;
  img: string;
  user: string;
  desc: string;
  link: string;
}

const notices: Notice[] = [
  {
    id: 1,
    img: "/images/bg_1.jpg",
    user: "Mid-Term Examination Schedule",
    desc: "The mid-term examination for all B.Tech IT students will commence from the 2nd week of next month. Please check the detailed schedule.",
    link: "#"
  },
  {
    id: 2,
    img: "/images/bg_1.jpg",
    user: "Tech Fest 2026 Registration",
    desc: "Registration for the annual Tech Fest is now open. Participate in coding competitions, hackathons, and win exciting prizes.",
    link: "#"
  },
  {
    id: 3,
    img: "/images/bg_1.jpg",
    user: "New AI Lab Inauguration",
    desc: "The department is thrilled to announce the inauguration of the new Artificial Intelligence Lab, equipped with state-of-the-art workstations.",
    link: "#"
  }
];

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedNotice(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header - Apple Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-black/5">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Department Updates
            </span>
            <h2 className="text-5xl md:text-6xl font-semibold text-content tracking-tight leading-tight">
              Notice Board
            </h2>
          </div>
          
          <div className="flex gap-10 mt-8 md:mt-0">
            <div className="flex flex-col gap-1">
              <span className="text-content-muted font-semibold uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                <LuClock className="text-sm" /> Local Time
              </span>
              <strong className="text-content text-xl font-medium tracking-tight">{time || "—:—"}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-content-muted font-semibold uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                <LuCalendar className="text-sm" /> Today
              </span>
              <strong className="text-content text-xl font-medium tracking-tight">{date || "—"}</strong>
            </div>
          </div>
        </div>

        {/* Notice Feed */}
        {notices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notices.map((notice, index) => (
              <motion.article
                key={notice.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedNotice(notice)}
                className="group cursor-pointer flex flex-col bg-surface-alt rounded-[2rem] overflow-hidden hover:bg-white transition-colors duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-black/5"
              >
                <div className="relative h-56 w-full overflow-hidden bg-black/5 m-2 rounded-[1.5rem]">
                  <Image
                    src={notice.img}
                    alt={notice.user}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-4 block">
                    Announcement
                  </span>
                  <h3 className="text-2xl font-semibold text-content mb-4 tracking-tight leading-snug">
                    {notice.user}
                  </h3>
                  <p className="text-content-muted text-sm leading-relaxed mb-8 flex-grow font-medium">
                    {notice.desc.length > 120 ? `${notice.desc.substring(0, 120)}...` : notice.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5">
                    <span className="text-content font-semibold text-sm">Read Details</span>
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <LuArrowRight />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-surface-alt rounded-[3rem]">
            <div className="w-20 h-20 bg-white shadow-sm rounded-full flex items-center justify-center text-content-muted text-3xl mb-6">
              <LuBellOff />
            </div>
            <h3 className="text-2xl font-semibold text-content mb-3 tracking-tight">No Active Notices</h3>
            <p className="text-content-muted font-medium">
              You're all caught up. Check back later for updates.
            </p>
          </div>
        )}

      </div>

      {/* Modal - Apple Style Frosted Glass */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedNotice(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-content/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/80 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col relative max-h-[90vh] border border-white/50"
            >
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center text-content hover:bg-black/10 transition-colors"
                aria-label="Close notice"
              >
                <LuX className="text-lg" />
              </button>

              <div className="relative h-72 w-full bg-black/5 flex-shrink-0">
                <Image
                  src={selectedNotice.img}
                  alt={selectedNotice.user}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">
                  Announcement Details
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-content mb-6 tracking-tight leading-tight">
                  {selectedNotice.user}
                </h2>
                <p className="text-content-muted font-medium text-lg leading-relaxed mb-10">
                  {selectedNotice.desc}
                </p>

                <Link
                  href={selectedNotice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-content hover:bg-black text-white font-semibold rounded-full transition-all duration-300 w-full sm:w-auto active:scale-95"
                >
                  Open Original Notice <LuExternalLink className="text-lg" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}