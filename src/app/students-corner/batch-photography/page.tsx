'use client';

import React, { useState } from "react";
import Back from "@/components/common/Carousel/Back";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMaximize2, 
  FiDownload, 
  FiX, 
  FiCalendar, 
  FiUsers, 
  FiImage, 
  FiZoomIn
} from "react-icons/fi";

interface BatchPhotoItem {
  id: string;
  title: string;
  batch: string;
  category: string;
  imageSrc: string;
  description: string;
  studentCount: string;
}

const batchList: BatchPhotoItem[] = [
  {
    id: "batch-2019-2023",
    title: "Department of Information Technology",
    batch: "Batch of 2019 - 2023",
    category: "B.Tech",
    imageSrc: "/images/batch1.jpg",
    description: "Official graduation batch photograph of B.Tech Information Technology, Batch of 2019-2023, featuring students and faculty members.",
    studentCount: "120+ Students"
  },
  {
    id: "batch-2022-2026",
    title: "Department of Information Technology",
    batch: "Batch of 2022 - 2026",
    category: "B.Tech",
    imageSrc: "/images/batch2.jpg",
    description: "Official batch photograph of B.Tech Information Technology, Batch of 2022-2026, featuring students and faculty members.",
    studentCount: "120+ Students"
  }
];

export default function BatchPhotographyPage() {
  const [selectedImage, setSelectedImage] = useState<BatchPhotoItem | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50/60 pb-20">
      <Back title="Batch Photography" />
      
      <section className="py-10 md:py-14 px-4 sm:px-6 max-w-7xl mx-auto">
        
        {/* INTRO HEADER */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-slate-200/80 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <FiImage className="text-blue-600" /> IEM IT Memories & Legacy
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2744] tracking-tight">
                Batch Photography
              </h1>
              <p className="text-slate-600 text-base md:text-lg mt-2 max-w-2xl leading-relaxed">
                Photographs of Information Technology batches at Institute of Engineering & Management, Kolkata.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  {batchList.length}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0f2744]">Featured Batches</div>
                  <div className="text-[11px] text-slate-500 font-medium">Department of IT</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ONLY THE TWO BATCH PHOTO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {batchList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
            >
              {/* CARD HEADER */}
              <div className="bg-gradient-to-r from-slate-900 via-[#0f2744] to-blue-950 p-5 text-white flex items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/10 text-blue-200 mb-1 backdrop-blur-sm border border-white/10">
                    {item.category}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold leading-tight text-white group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h2>
                </div>
                <div className="shrink-0 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-bold shadow-sm">
                    <FiCalendar className="text-amber-400 text-xs" />
                    {item.batch}
                  </span>
                </div>
              </div>

              {/* SUFFICIENT IMAGE FRAME CONTAINER THAT SHOWS THE ENTIRE IMAGE WITHOUT CUTTING */}
              <div className="relative bg-slate-950 p-3 sm:p-4 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[320px]">
                
                {/* Frame Accent */}
                <div className="w-full relative bg-slate-900 border border-slate-800 rounded-2xl p-2 sm:p-3 overflow-hidden shadow-inner group/frame">
                  <div 
                    className="relative w-full flex items-center justify-center cursor-pointer overflow-hidden rounded-xl bg-slate-950"
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* High-fidelity full visible photo without cropping */}
                    <img
                      src={item.imageSrc}
                      alt={`${item.title} ${item.batch}`}
                      className="w-full h-auto max-h-[480px] sm:max-h-[540px] object-contain mx-auto rounded-lg transition-transform duration-500 group-hover/frame:scale-[1.015]"
                    />

                    {/* Interactive Hover Overlay with Fullscreen Indicator */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/95 text-[#0f2744] px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 border border-white transform translate-y-2 group-hover/frame:translate-y-0 transition-transform duration-300">
                        <FiZoomIn className="text-base text-blue-600" />
                        Click to View Full Photo Frame
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* CARD FOOTER & DETAILS */}
              <div className="p-5 bg-white flex-grow flex flex-col justify-between gap-4 border-t border-slate-100">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-medium text-slate-600">
                    <FiUsers className="text-blue-900" />
                    <span>{item.studentCount}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 hover:bg-blue-100 font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <FiMaximize2 className="text-xs" /> Full View
                    </button>
                    <a
                      href={item.imageSrc}
                      download={`IEM_IT_${item.batch.replace(/\s+/g, "_")}.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                      title="Download Image"
                    >
                      <FiDownload className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* MODAL HEADER */}
              <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    {selectedImage.batch}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedImage.imageSrc}
                    download={`IEM_IT_${selectedImage.batch.replace(/\s+/g, "_")}.jpg`}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-lg shadow-blue-600/30"
                  >
                    <FiDownload /> Download Original
                  </a>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <FiX className="text-lg" />
                  </button>
                </div>
              </div>

              {/* MODAL FULL IMAGE DISPLAY AREA */}
              <div className="flex-1 bg-black p-2 sm:p-4 overflow-auto flex items-center justify-center min-h-0">
                <img
                  src={selectedImage.imageSrc}
                  alt={`${selectedImage.title} ${selectedImage.batch}`}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* MODAL FOOTER */}
              <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400">
                {selectedImage.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
