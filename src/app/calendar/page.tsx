"use client";

import { useState } from "react";
import Back from "@/components/common/Carousel/Back";
import { LuCalendar, LuClock, LuTag, LuDownload } from "react-icons/lu";

interface CalendarEvent {
  id: number;
  title: string;
  category: "Academic" | "Examinations" | "Holidays" | "Events";
  date: string;
  time: string;
  description: string;
  status: "Upcoming" | "Completed" | "Ongoing";
}

const academicEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Commencement of Odd Semester Classes (2026-27)",
    category: "Academic",
    date: "July 15, 2026",
    time: "10:00 AM",
    description: "Orientation and start of regular theory and lab classes for 3rd, 5th, and 7th semester students.",
    status: "Completed",
  },
  {
    id: 2,
    title: "Mid-Semester Internal Assessment - I",
    category: "Examinations",
    date: "September 08 - 12, 2026",
    time: "10:00 AM - 01:00 PM",
    description: "First mid-term internal evaluations for all B.Tech IT batches.",
    status: "Completed",
  },
  {
    id: 3,
    title: "Durga Puja & Festive Vacation",
    category: "Holidays",
    date: "October 18 - 28, 2026",
    time: "All Day",
    description: "Institutional break on the occasion of Durga Puja and Lakshmi Puja.",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Departmental Tech Fest & Hackathon",
    category: "Events",
    date: "November 10 - 11, 2026",
    time: "09:30 AM onwards",
    description: "Annual Information Technology Technical Festival featuring coding challenges and project demos.",
    status: "Upcoming",
  },
  {
    id: 5,
    title: "End Semester Practical & Viva Examinations",
    category: "Examinations",
    date: "December 01 - 07, 2026",
    time: "10:00 AM - 05:00 PM",
    description: "Practical laboratory exams and project thesis vivas evaluated by external examiners.",
    status: "Upcoming",
  },
  {
    id: 6,
    title: "End Semester Theory Examinations",
    category: "Examinations",
    date: "December 14 - 24, 2026",
    time: "10:00 AM - 01:00 PM",
    description: "University end semester theory exams for Odd Semester.",
    status: "Upcoming",
  },
  {
    id: 7,
    title: "Commencement of Even Semester Classes",
    category: "Academic",
    date: "January 11, 2027",
    time: "10:00 AM",
    description: "Reopening of classes for 4th, 6th, and 8th semester students.",
    status: "Upcoming",
  },
];

export default function CalendarPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Academic", "Examinations", "Holidays", "Events"];

  const filteredEvents = activeTab === "All"
    ? academicEvents
    : academicEvents.filter((ev) => ev.category === activeTab);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 dark:bg-slate-950 pb-20">
      <Back title="Academic Calendar" />

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Academic Calendar 2026 - 2027
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              Important dates, schedules, holidays, and examination events for the Department of IT.
            </p>
          </div>

          <button
            onClick={() => alert("Downloading official Academic Calendar PDF...")}
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl transition-all shadow-md active:scale-95 text-sm shrink-0"
          >
            <LuDownload className="w-4 h-4" />
            Download PDF Schedule
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Timeline List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <LuCalendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {event.category}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        event.status === "Completed"
                          ? "bg-slate-100 dark:bg-slate-800 text-slate-500"
                          : event.status === "Ongoing"
                          ? "bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
                          : "bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-1 shrink-0 text-sm text-slate-500 dark:text-slate-400 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                  <LuCalendar className="w-4 h-4 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <LuClock className="w-3.5 h-3.5" />
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
