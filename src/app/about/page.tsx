
import Back from "@/components/common/Carousel/Back";

import AboutProgram from "@/components/about/AboutProgram/AboutProgram";
import VisionMission from "@/components/about/VisionMission/VisionMission";
import ProgramOutcomes from "@/components/about/ProgramOutcomes/ProgramOutcomes";
import Explore from "@/components/home/Explore/Explore";
import Spotlight from "@/components/home/Spotlight/Spotlight";
import FieldNotes from "@/components/home/FieldNotes/FieldNotes";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* Page Banner */}
      <Back title="About Us" />

      {/* About the IT Program */}
      <section aria-label="About the Information Technology program">
        <AboutProgram />
      </section>

      <Explore />
      <Spotlight />
      <FieldNotes />

      {/* Vision & Mission */}
      <section aria-label="Vision and mission">
        <VisionMission />
      </section>

      {/* PEO / PO / PSO */}
      <section aria-label="Program outcomes">
        <ProgramOutcomes />
      </section>
    </main>
  );
}
