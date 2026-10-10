import Back from "@/components/common/Carousel/Back";

interface CommitteeMember {
  name: string;
  role: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "Prof. Dr. Baisakhi Das",
    role: "ADC Member",
  },
  {
    name: "Prof. Dr. Susovan Jana",
    role: "ADC Member",
  },
  {
    name: "Prof. Dr. Avipsita Chatterjee",
    role: "ADC Member",
  },
  {
    name: "Prof. Dr. Soumyendu Sekhar Bandyopadhyay",
    role: "ADC Member",
  },
  {
    name: "Prof. Kajari Sur",
    role: "ADC Member",
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

            {/* COMMITTEE MEMBERS */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                Committee Members
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {committeeMembers.map((member, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md border border-amber-200/60 mb-2">
                        {member.role}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT ADC */}
            <div className="bg-[#faf5ff] rounded-2xl p-6 md:p-8 border border-purple-100/80">
              <h2 className="text-xl font-bold text-[#0f2744] mb-2">
                Contact ADC
              </h2>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                For queries regarding class routines or faculty punctuality, students can reach out to the ADC through the department office.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}



