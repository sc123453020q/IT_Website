import Back from "@/components/common/Carousel/Back";
import { LuImage } from "react-icons/lu";

interface GalleryItem {
  title: string;
  category: string;
  imageSrc?: string;
}

const galleryItems: GalleryItem[] = [
  { title: "Departmental Event 01", category: "Events" },
  { title: "Technical Seminar 01", category: "Seminars" },
  { title: "Student Workshop 01", category: "Workshops" },
  { title: "Industrial Visit 01", category: "Visits" },
  { title: "Hackathon Highlights", category: "Competition" },
  { title: "Cultural Activity 01", category: "Student Life" },
  { title: "Departmental Event 02", category: "Events" },
  { title: "Faculty Interaction", category: "Academics" },
  { title: "Annual Tech Fest", category: "Tech Fest" },
];

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Photo Gallery" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Photo Gallery
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Explore moments, campus events, technical sessions, and student life at the Information Technology Department.
            </p>

            {/* 3 IN ONE ROW GRID OF EMPTY PHOTO SECTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* EMPTY PHOTO CONTAINER (ASPECT 4/3) */}
                  <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center border-b border-slate-100">
                    {item.imageSrc ? (
                      <img 
                        src={item.imageSrc} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-200/60 flex items-center justify-center mb-2 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                          <LuImage className="text-2xl" />
                        </div>
                        <span className="text-xs font-semibold text-slate-500">Photo Space</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">Click to upload photo</span>
                      </div>
                    )}
                  </div>

                  {/* CAPTION / CATEGORY */}
                  <div className="p-4 bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
