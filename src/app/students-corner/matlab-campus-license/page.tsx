import Back from "@/components/common/Carousel/Back";
import Link from "next/link";

export default function MatlabCampusLicensePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <Back title="MatLab Campus License" />
      
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
            
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2744] mb-3 tracking-tight">
              MATLAB Campus License
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Access MATLAB through the Institute of Engineering and Management&apos;s MathWorks campus portal.
            </p>

            <div className="bg-[#eef4ff] rounded-2xl p-6 md:p-8 border border-blue-100/80">
              <Link 
                href="https://in.mathworks.com/academia/tah-portal/institute-of-engineering-and-management-31600358.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aa7827] hover:text-[#885c18] font-semibold text-base md:text-lg underline underline-offset-4 decoration-[#aa7827]/60 hover:decoration-[#aa7827] transition-all inline-block"
              >
                MathWorks Portal — Institute of Engineering and Management
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
