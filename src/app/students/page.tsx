import Back from "@/components/common/Carousel/Back";

import StudentsList from "@/components/students/Students/Students";
import Placements from "@/components/students/Placements/Placements";
import Achievements from "@/components/students/Achievements/Achievements";
import IndustryVisit from "@/components/students/IndustryVisit/IndustryVisit";
import StudyMaterials from "@/components/students/StudyMaterials/StudyMaterials";

export default function StudentsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Students' Corner" />
      
      <section aria-label="Student Life">
        <StudentsList />
      </section>

      <section aria-label="Placements" id="placement">
        <Placements />
      </section>

      <section aria-label="Student Achievements" id="students-achievement">
        <Achievements />
      </section>

      <section aria-label="Industry Visits" id="industrial-visit">
        <IndustryVisit />
      </section>

      <section aria-label="Study Materials" id="study-materials">
        <StudyMaterials />
      </section>
    </main>
  );
}