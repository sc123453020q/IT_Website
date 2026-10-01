import Back from "@/components/common/Carousel/Back";

export default function BenefitsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Benefits" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Student Benefits
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              IT Department students enjoy a wide range of benefits and facilities designed to enhance their academic experience and overall development.
            </p>

            {/* 2x2 GRID OF CARDS (WITHOUT TOP IMAGES) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Campus Facilities */}
              <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                    Campus Facilities
                  </h2>
                  
                  <ul className="space-y-3 text-sm md:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Separate Boys&apos; &amp; Girls&apos; Hostel Facility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Separate Boys&apos; &amp; Girls&apos; Common Room</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>AC Canteen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Bus Services for Students</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Health & Insurance */}
              <div className="bg-[#fff8eb] rounded-2xl p-6 md:p-8 border border-amber-100/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                    Health &amp; Insurance
                  </h2>
                  
                  <ul className="space-y-3 text-sm md:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Medical Unit for Free Health Checkups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Free Vaccination Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Mediclaim Policy — Sum Assured ₹50,000 per Student</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Global Exposure & Financial Support */}
              <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-8 border border-emerald-100/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                    Global Exposure &amp; Financial Support
                  </h2>
                  
                  <ul className="space-y-3 text-sm md:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>5-Country Study Abroad Program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Scholarships</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Industrial Internships */}
              <div className="bg-[#f5f8ff] rounded-2xl p-6 md:p-8 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                    Industrial Internships
                  </h2>
                  
                  <ul className="space-y-3 text-sm md:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>All students undergo at least 3 internships during their course</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Example employers: NTPC Ltd., WBSETCL, N.F. Railway, Damodar Valley Corporation, Metal &amp; Steel Factory Ishapore</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
