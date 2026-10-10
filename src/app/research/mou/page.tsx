import Back from "@/components/common/Carousel/Back";

export default function MoUPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Memorandum of Understanding (MoU)" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Memorandum of Understanding (MoU)
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              The Information Technology Department has entered into Memoranda of Understanding with academic and industry partners to foster collaboration in research and technology development.
            </p>

            {/* TOP 3-COLUMN HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              {/* Card 1: IIT Guwahati */}
              <div className="bg-[#eef4ff] rounded-2xl p-6 border border-blue-100/80 flex flex-col justify-between shadow-sm">
                <div>
                  <h2 className="text-lg font-bold text-[#0f2744] mb-2">
                    IIT Guwahati
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Academic and research cooperation <span className="font-semibold text-slate-800">(IEM is a SPOKE Institute of IIT Guwahati)</span>
                  </p>
                </div>
              </div>

              {/* Card 2: WEBEL */}
              <div className="bg-[#fffbeb] rounded-2xl p-6 border border-amber-100/80 flex flex-col justify-between shadow-sm">
                <div>
                  <h2 className="text-lg font-bold text-[#0f2744] mb-2">
                    WEBEL
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cyber Security Centre of Excellence partner for technical research and training
                  </p>
                </div>
              </div>

              {/* Card 3: Industry Leaders */}
              <div className="bg-[#f0fdf4] rounded-2xl p-6 border border-emerald-100/80 flex flex-col justify-between shadow-sm">
                <div>
                  <h2 className="text-lg font-bold text-[#0f2744] mb-2">
                    Capgemini, PEGA &amp; TCS
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Academy-industry collaboration, skill development &amp; talent transformation
                  </p>
                </div>
              </div>

            </div>

            {/* INDUSTRY CONSULTANCY / COLLABORATION */}
            <div className="bg-[#f3f6fc] rounded-2xl p-6 md:p-8 border border-slate-200/60 mb-8">
              <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                Industry Consultancy
              </h2>
              
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Faculty of the department hold advisory and consultancy engagements with industry, disclosed to the institute and reported to the Research Board.
              </p>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="border-l-4 border-amber-400 pl-4 py-1">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    WEBEL – Cyber Security Centre of Excellence
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Collaborative framework under the Cyber Security Centre of Excellence: conducting specialized technical workshops and skill-building programs.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="border-l-4 border-amber-400 pl-4 py-1">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    Capgemini &amp; PEGA – Technology Training &amp; Skill Development
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Strategic partner initiatives focused on advanced technology curriculum integration and industry-ready software engineering.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="border-l-4 border-amber-400 pl-4 py-1">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    TCS – Industry-Academia Ecosystem
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Joint technical sessions, industrial consultancy engagements, and internship opportunities for students.
                  </p>
                </div>
              </div>
            </div>

            {/* 2-COLUMN DETAILS ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Left Column: IIT Guwahati Details */}
              <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80">
                <h2 className="text-xl font-bold text-[#0f2744] mb-3">
                  IIT Guwahati
                </h2>
                
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  MoU for academic and research cooperation <span className="font-semibold text-slate-800">(IEM is a SPOKE Institute of IIT Guwahati)</span>, covering:
                </p>

                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                    <span>Information exchange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                    <span>Joint seminars, conferences &amp; workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                    <span>Joint project supervision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                    <span>Student internships</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: WEBEL, Capgemini, PEGA, TCS Details */}
              <div className="bg-[#faf5ff] rounded-2xl p-6 md:p-8 border border-purple-100/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-3">
                    WEBEL, Capgemini, PEGA &amp; TCS
                  </h2>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Collaborations with WEBEL (Cyber Security Centre of Excellence), Capgemini, PEGA, and TCS to cover specialized technical training, industry mentorship, cybersecurity research, and career growth pathways for students.
                  </p>
                </div>

                <p className="text-xs text-slate-500 italic mt-4">
                  These MoUs serve to bridge academia and industry for students and faculty.
                </p>
              </div>

            </div>

            {/* ESTABLISH PARTNERSHIP */}
            <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-8 border border-emerald-100/80">
              <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                Establish Partnership
              </h2>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Organizations interested in establishing MoU with the Information Technology Department for collaborative activities can contact the department office.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
