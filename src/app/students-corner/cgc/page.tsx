import Back from "@/components/common/Carousel/Back";
import Link from "next/link";
import { LuImage } from "react-icons/lu";

interface GalleryCard {
  name: string;
  roleOrEmail: string;
  imageSrc?: string;
}

const galleryItems: GalleryCard[] = [
  {
    name: "Member Name 01",
    roleOrEmail: "Systems Engineer, IT Firm",
  },
  {
    name: "Faculty Member 01",
    roleOrEmail: "Email: member01@iem.edu.in",
  },
  {
    name: "Faculty Member 02",
    roleOrEmail: "Email: member02@iem.edu.in",
  },
  {
    name: "Faculty Member 03",
    roleOrEmail: "Email: member03@iem.edu.in",
  },
  {
    name: "External Researcher",
    roleOrEmail: "Post Doctoral Researcher, Technical Institute",
  },
  {
    name: "Faculty Member 04",
    roleOrEmail: "Email: member04@iem.edu.in",
  },
];

export default function CGCPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Career Guidance Cell (CGC)" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Career Guidance Cell (CGC)
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              The Career Guidance Cell provides comprehensive support to students in planning and achieving their career goals through counseling, training, and industry interaction programs.
            </p>

            {/* RESPONSIBILITIES CARD */}
            <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80 mb-8">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                Responsibilities
              </h2>
              
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>One-on-one and group counseling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Maintaining career progress records, including CV and ATS score tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Early intervention for at-risk students through remedial sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Promoting higher education &amp; research, guiding GATE/GRE/UPSC preparation</span>
                </li>
              </ul>
            </div>

            {/* CGC ACTIVITIES GALLERY (BLANK IMAGE SPACES) */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                CGC Activities Gallery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* BLANK IMAGE PLACEHOLDER */}
                    <div className="w-24 h-28 md:w-28 md:h-32 bg-slate-100 rounded-xl shrink-0 overflow-hidden flex items-center justify-center border border-slate-200/80">
                      {item.imageSrc ? (
                        <img 
                          src={item.imageSrc} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                          <LuImage className="text-xl mb-1" />
                          <span className="text-[10px] font-medium text-slate-400">Photo Space</span>
                        </div>
                      )}
                    </div>

                    {/* MEMBER TEXT INFO */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-snug break-words">
                        {item.roleOrEmail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MEMBERS SECTION (2-COL GRID) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Internal Members */}
              <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80">
                <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                  Internal Members
                </h2>
                
                <ul className="space-y-3 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 01</strong> (Chairman) — member01@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 02</strong> — member02@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 03</strong> — member03@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 04</strong> — member04@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 05</strong> — member05@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 06</strong> — member06@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 07</strong> — member07@iem.edu.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">Faculty Member 08</strong> — member08@iem.edu.in</span>
                  </li>
                </ul>
              </div>

              {/* External Members */}
              <div className="bg-[#faf5ff] rounded-2xl p-6 md:p-8 border border-purple-100/80">
                <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                  External Members
                </h2>
                
                <ul className="space-y-3 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">External Member 01</strong> — Systems Engineer, Tech Organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">External Member 02</strong> — Lead Engineer (Senior), Industry Firm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">External Member 03</strong> — Post Doctoral Researcher, University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">External Member 04</strong> — Assistant Professor, University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong className="font-semibold text-slate-900">External Member 05</strong> — Founder and CEO, Startup</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* DOCUMENTS & NOTICES */}
            <div className="bg-[#fffbeb] rounded-2xl p-6 md:p-8 border border-amber-100/80 mb-6">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                Documents &amp; Notices
              </h2>
              
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Career Guidance Cell (CGC) Formation Notice: <Link href="#" className="text-[#aa7827] underline font-semibold hover:text-[#885c18]">Click Here</Link></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>CDC_MOM_Dt.06.08.2025: <Link href="#" className="text-[#aa7827] underline font-semibold hover:text-[#885c18]">Click Here</Link></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Collection of CV and ATS score_Notice Dt.08.08.2025: <Link href="#" className="text-[#aa7827] underline font-semibold hover:text-[#885c18]">Click Here</Link></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>To know more about Applicant Tracking System (ATS): <Link href="#" className="text-[#aa7827] underline font-semibold hover:text-[#885c18]">Click Here</Link></span>
                </li>
              </ul>
            </div>

            {/* CONTACT CGC */}
            <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-8 border border-emerald-100/80">
              <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                Contact CGC
              </h2>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                For career counseling appointments and program details, reach out to the Career Guidance Cell.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
