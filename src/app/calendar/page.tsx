"use client";

import React, { useState } from "react";
import Back from "@/components/common/Carousel/Back";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LuCalendar, 
  LuExternalLink, 
  LuChevronLeft, 
  LuChevronRight,
  LuPlus,
  LuSparkles
} from "react-icons/lu";

type CalendarCategory = "academic" | "holidays" | "events";

interface HolidayItem {
  date: string;
  month: number; // 0-11
  day: number;
  year: number;
  name: string;
  type: "National" | "Festival" | "Institutional";
  dayOfWeek: string;
}

const yearHolidays2026: HolidayItem[] = [
  { date: "2026-01-01", month: 0, day: 1, year: 2026, name: "New Year's Day", type: "National", dayOfWeek: "Thursday" },
  { date: "2026-01-23", month: 0, day: 23, year: 2026, name: "Netaji Subhas Chandra Bose Jayanti", type: "National", dayOfWeek: "Friday" },
  { date: "2026-01-26", month: 0, day: 26, year: 2026, name: "Republic Day", type: "National", dayOfWeek: "Monday" },
  { date: "2026-02-03", month: 1, day: 3, year: 2026, name: "Saraswati Puja (Vasant Panchami)", type: "Festival", dayOfWeek: "Tuesday" },
  { date: "2026-03-03", month: 2, day: 3, year: 2026, name: "Dol Jatra / Holi", type: "Festival", dayOfWeek: "Tuesday" },
  { date: "2026-03-20", month: 2, day: 20, year: 2026, name: "Id-ul-Fitr", type: "Festival", dayOfWeek: "Friday" },
  { date: "2026-04-03", month: 3, day: 3, year: 2026, name: "Good Friday", type: "National", dayOfWeek: "Friday" },
  { date: "2026-04-14", month: 3, day: 14, year: 2026, name: "Dr. B.R. Ambedkar Jayanti / Poila Baisakh", type: "National", dayOfWeek: "Tuesday" },
  { date: "2026-05-01", month: 4, day: 1, year: 2026, name: "May Day / International Workers' Day", type: "National", dayOfWeek: "Friday" },
  { date: "2026-05-09", month: 4, day: 9, year: 2026, name: "Rabindra Jayanti", type: "Festival", dayOfWeek: "Saturday" },
  { date: "2026-05-27", month: 4, day: 27, year: 2026, name: "Id-uz-Zoha (Bakrid)", type: "Festival", dayOfWeek: "Wednesday" },
  { date: "2026-08-15", month: 7, day: 15, year: 2026, name: "Independence Day", type: "National", dayOfWeek: "Saturday" },
  { date: "2026-10-02", month: 9, day: 2, year: 2026, name: "Mahatma Gandhi Jayanti", type: "National", dayOfWeek: "Friday" },
  { date: "2026-10-11", month: 9, day: 11, year: 2026, name: "Mahalaya", type: "Festival", dayOfWeek: "Sunday" },
  { date: "2026-10-18", month: 9, day: 18, year: 2026, name: "Maha Saptami (Durga Puja Begins)", type: "Festival", dayOfWeek: "Sunday" },
  { date: "2026-10-19", month: 9, day: 19, year: 2026, name: "Maha Ashtami", type: "Festival", dayOfWeek: "Monday" },
  { date: "2026-10-20", month: 9, day: 20, year: 2026, name: "Maha Navami / Dussehra", type: "Festival", dayOfWeek: "Tuesday" },
  { date: "2026-10-21", month: 9, day: 21, year: 2026, name: "Vijaya Dashami", type: "Festival", dayOfWeek: "Wednesday" },
  { date: "2026-10-25", month: 9, day: 25, year: 2026, name: "Lakshmi Puja", type: "Festival", dayOfWeek: "Sunday" },
  { date: "2026-11-08", month: 10, day: 8, year: 2026, name: "Kali Puja / Diwali", type: "Festival", dayOfWeek: "Sunday" },
  { date: "2026-11-10", month: 10, day: 10, year: 2026, name: "Bhai Phota", type: "Festival", dayOfWeek: "Tuesday" },
  { date: "2026-12-25", month: 11, day: 25, year: 2026, name: "Christmas Day", type: "National", dayOfWeek: "Friday" },
];

export default function CalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState<CalendarCategory | "all">("all");
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [selectedMonth, setSelectedMonth] = useState<number>(9); // Oct (0-indexed: 9 = Oct)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const filteredHolidays = yearHolidays2026.filter((h) => {
    if (selectedMonth !== -1 && h.month !== selectedMonth) return false;
    return true;
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50/70 pb-20">
      <Back title="Department Calendar" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        
        {/* MAIN CONTAINER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80">
          
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2744] tracking-tight mb-2">
              Department Calendar
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Stay updated with all department events, academic schedules, holidays, and important dates.
            </p>
          </div>

          {/* 3 FEATURE CARDS (ACADEMIC CALENDAR, HOLIDAY LIST, EVENTS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            {/* CARD 1: ACADEMIC CALENDAR */}
            <div 
              onClick={() => setSelectedCategory(selectedCategory === "academic" ? "all" : "academic")}
              className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedCategory === "academic" 
                  ? "bg-indigo-100/80 border-indigo-300 shadow-md scale-[1.02]" 
                  : "bg-[#eef2ff] border-[#e0e7ff] hover:shadow-md hover:border-indigo-200"
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/90 text-2xl flex items-center justify-center mb-4 shadow-sm">
                  🗓️
                </div>
                <h3 className="text-lg font-bold text-[#0f2744] mb-1.5">
                  Academic Calendar
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Semester schedules, exam dates, and academic activities
                </p>
              </div>
            </div>

            {/* CARD 2: HOLIDAY LIST */}
            <div 
              onClick={() => setSelectedCategory(selectedCategory === "holidays" ? "all" : "holidays")}
              className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedCategory === "holidays" 
                  ? "bg-amber-100/80 border-amber-300 shadow-md scale-[1.02]" 
                  : "bg-[#fef3c7]/60 border-[#fde68a] hover:shadow-md hover:border-amber-200"
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/90 text-2xl flex items-center justify-center mb-4 shadow-sm">
                  🎉
                </div>
                <h3 className="text-lg font-bold text-[#0f2744] mb-1.5">
                  Holiday List
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  National holidays, festivals, and semester breaks
                </p>
              </div>
            </div>

            {/* CARD 3: EVENTS */}
            <div 
              onClick={() => setSelectedCategory(selectedCategory === "events" ? "all" : "events")}
              className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedCategory === "events" 
                  ? "bg-emerald-100/80 border-emerald-300 shadow-md scale-[1.02]" 
                  : "bg-[#ecfdf5] border-[#d1fae5] hover:shadow-md hover:border-emerald-200"
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/90 text-2xl flex items-center justify-center mb-4 shadow-sm">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-[#0f2744] mb-1.5">
                  Events
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Technical events, workshops, seminars, and conferences
                </p>
              </div>
            </div>

          </div>

          {/* LIVE CALENDAR SECTION */}
          <div className="bg-slate-100/80 border border-slate-200/90 rounded-3xl p-5 sm:p-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0f2744]">
                  Live Calendar
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Interactive real-time view of national holidays and department schedules.
                </p>
              </div>

              {/* MONTH SELECTOR */}
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm shrink-0">
                <button
                  onClick={() => setSelectedMonth((prev) => (prev > 0 ? prev - 1 : 11))}
                  className="p-1 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
                  title="Previous Month"
                >
                  <LuChevronLeft className="text-base" />
                </button>
                <span className="min-w-[100px] text-center font-bold text-[#0f2744]">
                  {monthNames[selectedMonth]} {currentYear}
                </span>
                <button
                  onClick={() => setSelectedMonth((prev) => (prev < 11 ? prev + 1 : 0))}
                  className="p-1 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
                  title="Next Month"
                >
                  <LuChevronRight className="text-base" />
                </button>
                <button
                  onClick={() => setSelectedMonth(-1)}
                  className={`ml-2 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    selectedMonth === -1 ? "bg-[#0f2744] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All Year
                </button>
              </div>
            </div>

            {/* LIVE GOOGLE CALENDAR EMBED IFRAME */}
            <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showPrint=1&showTabs=1&showCalendars=0&showTz=1"
                style={{ border: 0 }}
                width="100%"
                height="560"
                frameBorder="0"
                scrolling="no"
                title="Live India Holidays & Academic Calendar"
                className="w-full min-h-[480px] sm:min-h-[560px]"
              ></iframe>
            </div>

            {/* GOOGLE CALENDAR FOOTER INFO & LINK (MATCHING SCREENSHOT) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-slate-500 border-t border-slate-200/80">
              <div>
                <span className="font-bold text-slate-700">Holidays in India</span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Events shown in timezone: [GMT+05:30] India Standard Time - Kolkata
                </p>
                <a
                  href="https://calendar.google.com/calendar/r?cid=en.indian%23holiday%40group.v.calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-[11px] font-semibold mt-1 inline-flex items-center gap-1"
                >
                  <LuPlus className="text-xs" /> Add to Google Calendar
                </a>
              </div>

              <div className="text-right sm:text-right text-[11px] text-slate-400">
                <span className="font-semibold text-slate-600 flex items-center justify-end gap-1">
                  <span className="text-blue-500 font-bold">Google</span> Calendar
                </span>
                <span className="block mt-0.5 font-mono text-[10px]">
                  Calendar source: en.indian#holiday@group.v.calendar.google.com
                </span>
              </div>
            </div>

          </div>

          {/* ALL-YEAR HOLIDAY DIRECTORY LIST */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#0f2744]">
                  {selectedMonth === -1 ? `All Holidays for ${currentYear}` : `${monthNames[selectedMonth]} ${currentYear} Holidays`}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete official list of national, regional, and festival holidays.
                </p>
              </div>

              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                {filteredHolidays.length} {filteredHolidays.length === 1 ? "Holiday" : "Holidays"} Listed
              </span>
            </div>

            {filteredHolidays.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl p-8 text-center text-slate-500 border border-slate-100">
                No official holidays scheduled for {monthNames[selectedMonth]}. Select "All Year" to view the full holiday schedule.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredHolidays.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1.5 ${
                        h.type === "National" 
                          ? "bg-blue-100 text-blue-800 border border-blue-200" 
                          : "bg-amber-100 text-amber-800 border border-amber-200"
                      }`}>
                        {h.type}
                      </span>
                      <h4 className="text-sm font-bold text-[#0f2744] leading-snug">
                        {h.name}
                      </h4>
                      <span className="text-xs text-slate-500 mt-1 block font-medium">
                        {h.dayOfWeek}
                      </span>
                    </div>

                    <div className="shrink-0 bg-slate-900 text-white rounded-xl px-3 py-1.5 text-center min-w-[54px] shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-amber-300">
                        {monthNames[h.month].slice(0, 3)}
                      </span>
                      <span className="text-lg font-extrabold leading-none block mt-0.5">
                        {h.day}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </section>
    </main>
  );
}
