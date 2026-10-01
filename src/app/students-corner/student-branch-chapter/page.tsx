import Back from "@/components/common/Carousel/Back";
import Link from "next/link";

export default function StudentBranchChapterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Student Branch Chapter" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-3 tracking-tight">
              Student Branch Chapter
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Explore student chapters, professional bodies and student forums.
            </p>

            <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80">
              <Link 
                href="https://iem-iete-students-forum.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aa7827] hover:text-[#885c18] font-semibold text-base md:text-lg underline underline-offset-4 decoration-[#aa7827]/60 hover:decoration-[#aa7827] transition-all inline-block"
              >
                IEM-IETE STUDENT&apos;S FORUM
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
