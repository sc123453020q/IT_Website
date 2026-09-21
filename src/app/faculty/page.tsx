import Back from "@/components/common/Carousel/Back";

import FacultyList from "@/components/faculty/Faculty/Faculty";
import ClassTeachers from "@/components/faculty/ClassTeachers/ClassTeachers";
import Mentors from "@/components/faculty/Mentors/Mentors";

export default function FacultyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Our Faculty" />
      
      <section aria-label="Faculty Directory" id="faculty-list">
        <FacultyList />
      </section>

      <section aria-label="Class Teachers" id="class-teachers">
        <ClassTeachers />
      </section>

      <section aria-label="Mentors" id="mentors">
        <Mentors />
      </section>
    </main>
  );
}