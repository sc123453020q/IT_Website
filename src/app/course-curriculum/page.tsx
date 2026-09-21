import Back from "@/components/common/Carousel/Back";

import AcademicsCard from "@/components/academics/Academics/Academics";
import Curriculum from "@/components/academics/Curriculum/Curriculum";
import Infrastructure from "@/components/academics/Infrastructure/Infrastructure";
import Routine from "@/components/academics/Routine/Routine";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Explore Academics" />
      
      <section aria-label="Academic programs and information">
        <AcademicsCard />
      </section>

      <section aria-label="Curriculum" id="curriculum">
        <Curriculum />
      </section>

      <section aria-label="Infrastructure" id="infrastructure">
        <Infrastructure />
      </section>

      <section aria-label="Routine" id="routine">
        <Routine />
      </section>
    </main>
  );
}