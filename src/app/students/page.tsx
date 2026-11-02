import Back from "@/components/common/Carousel/Back";

import StudentsList from "@/components/students/Students/Students";
import Placements from "@/components/students/Placements/Placements";
import Achievements from "@/components/students/Achievements/Achievements";
import IndustryVisit from "@/components/students/IndustryVisit/IndustryVisit";
import StudyMaterials from "@/components/students/StudyMaterials/StudyMaterials";
import SectionIndex from "@/components/common/SectionIndex/SectionIndex";

export default function StudentsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Students' Corner" />
      <SectionIndex eyebrow="Student life & resources" title="Make the most of your time here." description="Discover achievements and visits alongside the practical resources students need throughout the programme." items={[{ label: "Student life", href: "#student-life" }, { label: "Placements", href: "#placement" }, { label: "Achievements", href: "#students-achievement" }, { label: "Industry visits", href: "#industrial-visit" }, { label: "Study materials", href: "#study-materials" }]} />
      
      <section aria-label="Student Life" id="student-life">
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
