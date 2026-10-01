import Back from "@/components/common/Carousel/Back";

interface BatchPhotoCardProps {
  title: string;
  batch: string;
  imageSrc?: string;
}

const batchList: BatchPhotoCardProps[] = [
  {
    title: "M.Tech - Department of Information Technology",
    batch: "Batch of 2022-2024",
  },
  {
    title: "Department of Information Technology (Sec-B)",
    batch: "Batch of 2020-2024",
  },
  {
    title: "Department of Information Technology (Sec-A)",
    batch: "Batch of 2020-2024",
  },
  {
    title: "Department of Information Technology",
    batch: "Batch of 2021-2025",
  },
  {
    title: "Department of Information Technology",
    batch: "Batch of 2023-2027",
  },
];

export default function BatchPhotographyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Batch Photography" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Batch Photography
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Photographs of Information Technology batches.
            </p>

            {/* BATCH PHOTO CARDS GRID (BLANK IMAGE SPACES AS REQUESTED) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {batchList.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* CARD HEADER BANNER (PIC 3 STYLE) */}
                  <div className="bg-white border-b border-slate-100 p-4 text-center">
                    <h2 className="text-sm md:text-base font-bold text-blue-900 leading-tight">
                      {item.title}
                    </h2>
                    <span className="text-xs font-semibold text-blue-800 block mt-0.5">
                      {item.batch}
                    </span>
                  </div>

                  {/* BLANK PHOTO FRAME */}
                  <div className="relative aspect-[16/10] bg-white overflow-hidden flex items-center justify-center border-t border-slate-100">
                    {item.imageSrc ? (
                      <img 
                        src={item.imageSrc} 
                        alt={`${item.title} ${item.batch}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                        <span className="text-xs font-medium text-slate-400">Photo Space</span>
                      </div>
                    )}
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
