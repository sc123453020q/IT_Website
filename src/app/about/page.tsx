import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

import Back from "@/components/common/Carousel/Back";

import AboutProgram from "@/components/about/AboutProgram/AboutProgram";
import VisionMission from "@/components/about/VisionMission/VisionMission";
import ProgramOutcomes from "@/components/about/ProgramOutcomes/ProgramOutcomes";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* Page Banner */}
      <Back title="About Us" />

      {/* About the IT Program */}
      <section aria-label="About the Information Technology program">
        <AboutProgram />
      </section>

      {/* Vision & Mission */}
      <section aria-label="Vision and mission">
        <VisionMission />
      </section>

      {/* PEO / PO / PSO */}
      <section aria-label="Program outcomes">
        <ProgramOutcomes />
      </section>

      <GoToTop />

      <Footer />
    </main>
  );
}