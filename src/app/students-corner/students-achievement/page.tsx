import Back from "@/components/common/Carousel/Back";
import Achievements from "@/components/students/Achievements/Achievements";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Student's Achievement" />
      
      <section aria-label="Student's Achievement">
        <Achievements />
      </section>
    </main>
  );
}
