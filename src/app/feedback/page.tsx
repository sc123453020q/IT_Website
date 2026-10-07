"use client";

import React, { useState } from "react";
import Back from "@/components/common/Carousel/Back";
import { motion, AnimatePresence } from "framer-motion";
import { LuCheck, LuX, LuStar, LuSend } from "react-icons/lu";

type StakeholderType = "student" | "alumni" | "employer" | "faculty";

interface StakeholderCardData {
  id: StakeholderType;
  title: string;
  description: string;
  actionText: string;
  bgClass: string;
  borderClass: string;
}

const stakeholderCards: StakeholderCardData[] = [
  {
    id: "student",
    title: "Student Feedback",
    description: "Students can provide feedback on courses, teaching methods, infrastructure, and overall learning experience.",
    actionText: "Submit Student Feedback →",
    bgClass: "bg-[#eef2ff]",
    borderClass: "border-[#e0e7ff]"
  },
  {
    id: "alumni",
    title: "Alumni Feedback",
    description: "Alumni can share their experiences and suggestions for curriculum improvement and industry alignment.",
    actionText: "Submit Alumni Feedback →",
    bgClass: "bg-[#fef3c7]/60",
    borderClass: "border-[#fde68a]"
  },
  {
    id: "employer",
    title: "Employer Feedback",
    description: "Employers can provide feedback on graduate competencies and suggest improvements to our curriculum.",
    actionText: "Submit Employer Feedback →",
    bgClass: "bg-[#ecfdf5]",
    borderClass: "border-[#d1fae5]"
  },
  {
    id: "faculty",
    title: "Faculty Feedback",
    description: "Faculty members can provide feedback on academic processes, infrastructure, and administrative support.",
    actionText: "Submit Faculty Feedback →",
    bgClass: "bg-[#eff6ff]",
    borderClass: "border-[#dbeafe]"
  }
];

export default function FeedbackPage() {
  const [activeModal, setActiveModal] = useState<StakeholderType | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSubmitted(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50/70 pb-20">
      <Back title="Feedback System" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        
        {/* MAIN CONTAINER CARD MATCHING THE SPECIFIED UI */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80">
          
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2744] tracking-tight mb-3">
              Feedback System
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl">
              The IT Department values feedback from <span className="font-semibold text-slate-800">all</span> stakeholders to continuously improve our academic programs, infrastructure, and services.
            </p>
          </div>

          {/* 4 STAKEHOLDER CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {stakeholderCards.map((card) => (
              <div
                key={card.id}
                className={`${card.bgClass} border ${card.borderClass} rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md`}
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f2744] mb-3">
                    {card.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <button
                    onClick={() => setActiveModal(card.id)}
                    className="text-[#b47818] hover:text-[#925f0e] font-semibold text-sm inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {card.actionText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FEEDBACK PROCESS SECTION */}
          <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f2744] mb-4">
              Feedback Process
            </h2>
            <ol className="space-y-3 text-sm md:text-base text-slate-700 font-normal leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[#0f2744] shrink-0">1.</span>
                <span>Feedback is collected online and brought to IQAC for analysis</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[#0f2744] shrink-0">2.</span>
                <span>Data is compiled with deliberation at department, Board of Studies, and Governing Body levels</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[#0f2744] shrink-0">3.</span>
                <span>Suggestions are reviewed for feasibility before departmental action</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[#0f2744] shrink-0">4.</span>
                <span>Implemented improvements are communicated to stakeholders</span>
              </li>
            </ol>
          </div>

          {/* IMPROVEMENTS FROM FEEDBACK SECTION */}
          <div className="bg-gradient-to-r from-[#fefce8] to-[#fef9c3]/50 border border-[#fef08a] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f2744] mb-4">
              Improvements from Feedback
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span>Added certificate courses based on industry requirements</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span>Extended library access to 24-hour availability</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span>Increased internet bandwidth capacity</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span>Implemented mentor-mentee programs and remedial coaching</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span>Enhanced career guidance and entrepreneurship development programs</span>
              </li>
            </ul>
          </div>

        </div>

      </section>

      {/* FEEDBACK SUBMISSION MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* MODAL HEADER */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0f2744]">
                    Submit {activeModal.charAt(0).toUpperCase() + activeModal.slice(1)} Feedback
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Department of Information Technology, IEM Kolkata
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors"
                >
                  <LuX className="text-lg" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <LuCheck className="text-3xl" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Thank You for Your Feedback!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your valuable input has been submitted to the Department IQAC committee for review and improvement.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-4 px-6 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Overall Rating
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 text-2xl transition-transform hover:scale-110 focus:outline-none"
                        >
                          <LuStar
                            className={`${
                              star <= rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-slate-300"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-xs font-semibold text-slate-600">
                        {rating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/30 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/30 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Course Curriculum, Facilities, Pedagogy..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/30 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Feedback & Suggestions *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your detailed feedback or recommendations..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/30 text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 bg-[#0f2744] hover:bg-blue-900 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <LuSend className="text-base" />
                    Submit Response
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
