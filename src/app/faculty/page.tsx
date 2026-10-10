import Back from "@/components/common/Carousel/Back";
import FacultyList from "@/components/faculty/Faculty/Faculty";

export default function FacultyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Our Faculty" />
      
      <section aria-label="Faculty Directory" id="faculty-list">
        <FacultyList />
      </section>
    </main>
  );
}