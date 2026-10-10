import Back from "@/components/common/Carousel/Back";

interface Member {
  name: string;
  role: string;
}

const cgcMembers: Member[] = [
  {
    name: "Prof. Dr. Sanchita Ghosh",
    role: "CGC Member",
  },
  {
    name: "Prof. Dr. Baisakhi Das",
    role: "CGC Member",
  },
  {
    name: "Prof. Dr. Rupayan Das",
    role: "CGC Member",
  },
  {
    name: "Prof. Dr. Avijit Bose",
    role: "CGC Member",
  },
  {
    name: "Prof. Partha Chakraborty",
    role: "CGC Member",
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

            {/* CGC MEMBERS */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#0f2744] mb-4">
                CGC Members
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cgcMembers.map((member, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 mb-2">
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



