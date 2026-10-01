import Back from "@/components/common/Carousel/Back";
import Link from "next/link";

export default function AcademicErpPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Academic ERP" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Academic ERP System
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Access your academic records, attendance, grades, and course materials through our integrated Enterprise Resource Planning (ERP) system.
            </p>

            <div className="space-y-6">
              {/* 2-COLUMN GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* ERP Features */}
                <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                      ERP Features
                    </h2>
                    
                    <ul className="space-y-3 text-sm md:text-base text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>View Attendance Records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>Check Examination Results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>Access Course Materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>Download Admit Cards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>Fee Payment Status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>Academic Calendar</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Access Portal */}
                <div className="bg-[#fff8eb] rounded-2xl p-6 md:p-8 border border-amber-100/80 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#0f2744] mb-3">
                      Access Portal
                    </h2>
                    
                    <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                      Login to the IEM Academic ERP portal using your student credentials to access all academic services and information.
                    </p>

                    <div>
                      <Link 
                        href="https://www.iemcrp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#0f2744] hover:bg-[#1a3a60] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
                      >
                        Access ERP Portal
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM CARD: NEED HELP? */}
              <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80">
                <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                  Need Help?
                </h2>
                
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  For any issues with ERP access or technical support, contact the IT helpdesk or department office.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
