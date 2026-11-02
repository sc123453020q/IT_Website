import Back from "@/components/common/Carousel/Back";
import Curriculum from "@/components/academics/Curriculum/Curriculum";
import SectionIndex from "@/components/common/SectionIndex/SectionIndex";

export default function CurriculumPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Course Curriculum" />
      <SectionIndex eyebrow="Your academic path" title="Start with the essentials." description="Find the programme structure, detailed syllabus, teaching spaces and routine without searching through the site." items={[{ label: "Detailed syllabus", href: "/course-curriculum/syllabus" }, { label: "Laboratories & infrastructure", href: "/course-curriculum/infrastructure" }, { label: "Academic routine", href: "/course-curriculum/routine" }]} />
      
      <section aria-label="Course Curriculum">
        <Curriculum hideHeader={true} />
      </section>
    </main>
  );
}
