import Back from "@/components/common/Carousel/Back";
import Curriculum from "@/components/academics/Curriculum/Curriculum";

export default function CurriculumPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Course Curriculum" />
      
      <section aria-label="Course Curriculum">
        <Curriculum hideHeader={true} />
      </section>
    </main>
  );
}
