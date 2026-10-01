import Back from "@/components/common/Carousel/Back";
import Link from "next/link";
import { LuUser } from "react-icons/lu";

interface CommitteeMember {
  name: string;
  role?: string;
  email: string;
  imageSrc?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "Faculty Member 01",
    role: "CHAIRMAN",
    email: "member01@iem.edu.in",
  },
  {
    name: "Faculty Member 02",
    email: "member02@iem.edu.in",
  },
  {
    name: "Faculty Member 03",
    email: "member03@iem.edu.in",
  },
  {
    name: "Faculty Member 04",
    email: "member04@iem.edu.in",
  },
  {
    name: "Faculty Member 05",
    email: "member05@iem.edu.in",
  },
];

export default function ADCPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="Academic Disciplinary Committee (ADC)" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            {/* MAIN HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-2 tracking-tight">
              Academic Disciplinary Committee (ADC)
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              The Academic Disciplinary Committee (ADC) helps maintain a well-structured academic environment by monitoring class routines and faculty punctuality.
            </p>

            {/* RESPONSIBILITIES CARD */}
            <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80 mb-8">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                Responsibilities
              </h2>
              
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Monitoring adherence to the class routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Ensuring students remain in class and do not loiter in corridors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Verifying that no scheduled class is left vacant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Tracking faculty punctuality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span>Overseeing classroom cleanliness</span>
                </li>
              </ul>
            </div>

            {/* COMMITTEE MEMBERS (BLANK IMAGE SPACES) */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                Committee Members
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committeeMembers.map((member, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-5 flex items-center gap-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* BLANK AVATAR/IMAGE SPACE */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-full shrink-0 overflow-hidden flex items-center justify-center border border-slate-200/80">
                      {member.imageSrc ? (
                        <img 
                          src={member.imageSrc} 
                          alt={member.name} 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-slate-400">
                          <LuUser className="text-2xl" />
                        </div>
                      )}
                    </div>

                    {/* MEMBER DETAILS */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug">
                        {member.name}
                      </h3>
                      
                      {member.role && (
                        <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 my-1">
                          {member.role}
                        </span>
                      )}
                      
                      <p className="text-xs md:text-sm text-slate-600 truncate mt-0.5">
                        {member.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM 2-COL ROW: DOCUMENTS & NOTICES + CONTACT ADC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Documents & Notices */}
              <div className="bg-[#fffbeb] rounded-2xl p-6 md:p-8 border border-amber-100/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                    Documents &amp; Notices
                  </h2>
                  
                  <ul className="space-y-3 text-sm md:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-1">•</span>
                      <span>Academic Disciplinary Committee (ADC) Formation Notice: <Link href="#" className="text-[#aa7827] underline font-semibold hover:text-[#885c18]">Click Here</Link></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact ADC */}
              <div className="bg-[#faf5ff] rounded-2xl p-6 md:p-8 border border-purple-100/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                    Contact ADC
                  </h2>
                  
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    For queries regarding class routines or faculty punctuality, students can reach out to the ADC through the department office.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
