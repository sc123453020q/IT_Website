import Back from "@/components/common/Carousel/Back";

export default function StudentScholarshipPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Student Scholarship" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Scholarship Programs
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              IEM offers various scholarship programs to support meritorious and economically disadvantaged students in pursuing their engineering education.
            </p>

            <div className="space-y-6">
              {/* ROW 1: ACADEMIC & SPORTS SCHOLARSHIPS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Academic Scholarships */}
                <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                      Academic Scholarships
                    </h2>
                    
                    <ul className="space-y-3 text-sm md:text-base text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span><strong className="font-semibold text-slate-900">School Toppers</strong> — 100% tuition waiver for top Class XII board result</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span><strong className="font-semibold text-slate-900">State Toppers</strong> — Rank 1-10 statewide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span><strong className="font-semibold text-slate-900">WBJEE Scholarship</strong> — Rank 1-1000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span><strong className="font-semibold text-slate-900">JEE MAINS Scholarship</strong> — Rank 1-10,000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sports Scholarship */}
                <div className="bg-[#fff8eb] rounded-2xl p-6 md:p-8 border border-amber-100/80 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                      Sports Scholarship
                    </h2>
                    
                    <ul className="space-y-3 text-sm md:text-base text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>Sports Scholarship</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* ROW 2: GOVERNMENT SCHOLARSHIPS */}
              <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-8 border border-emerald-100/80">
                <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                  Government Scholarships
                </h2>
                
                <p className="text-sm md:text-base text-slate-600 mb-4">
                  Students can also apply for various government scholarship schemes:
                </p>
                
                <ul className="space-y-2.5 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span>West Bengal State Scholarship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span>Central Sector Scholarship Scheme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span>National Scholarship Portal (NSP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span>AICTE Pragati & Saksham Scholarships</span>
                  </li>
                </ul>
              </div>

              {/* ROW 3: HOW TO APPLY */}
              <div className="bg-[#f5f8ff] rounded-2xl p-6 md:p-8 border border-slate-200/80">
                <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                  How to Apply
                </h2>
                
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  For scholarship applications and eligibility criteria, contact the department office or visit the IEM website for detailed information.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
