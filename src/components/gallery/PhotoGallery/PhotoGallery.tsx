"use client";

import { useState } from "react";
import { LuMaximize2, LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const galleryImages = [
  { id: 1, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.52.jpeg" },
  { id: 2, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.53.jpeg" },
  { id: 3, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54.jpeg" },
  { id: 4, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (1).jpeg" },
  { id: 5, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (2).jpeg" },
  { id: 6, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (3).jpeg" },
  { id: 7, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (4).jpeg" },
  { id: 8, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (5).jpeg" },
  { id: 9, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (6).jpeg" },
  { id: 10, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (7).jpeg" },
  { id: 11, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (8).jpeg" },
  { id: 12, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (9).jpeg" },
  { id: 13, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (10).jpeg" },
  { id: 14, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (11).jpeg" },
  { id: 15, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (12).jpeg" },
  { id: 16, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (13).jpeg" },
  { id: 17, src: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (14).jpeg" },
];

export default function PhotoGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? galleryImages.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === galleryImages.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
        
        {/* MAIN HEADING */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Moments, events, workshops, technical sessions, and student life at the Information Technology Department.
          </p>
        </div>

        {/* 4 LARGE SPACIOUS WIDE PHOTO FRAMES IN ONE ROW GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedIdx(idx)}
              className="group bg-slate-50 rounded-2xl border border-slate-200/90 p-2.5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              {/* LARGE SPACIOUS PHOTO CONTAINER */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[320px] bg-slate-900/5 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={img.src}
                  alt={`Gallery Photo ${img.id}`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <span className="bg-white/90 text-slate-900 font-semibold text-xs md:text-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 backdrop-blur-sm">
                    <LuMaximize2 className="text-base" /> View Photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white bg-slate-800/80 hover:bg-slate-700 p-2.5 rounded-full transition-colors z-50"
            aria-label="Close modal"
          >
            <LuX className="text-2xl" />
          </button>

          {/* PREVIOUS BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-3 md:left-6 text-white bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full transition-colors z-50"
            aria-label="Previous photo"
          >
            <LuChevronLeft className="text-2xl" />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-3 md:right-6 text-white bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full transition-colors z-50"
            aria-label="Next photo"
          >
            <LuChevronRight className="text-2xl" />
          </button>

          {/* MODAL IMAGE */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedIdx].src}
              alt={`Gallery Photo ${selectedIdx + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-slate-700"
            />
            <p className="text-slate-400 text-xs md:text-sm mt-3">
              Photo {selectedIdx + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
