import Back from "@/components/common/Carousel/Back";
import Routine from "@/components/academics/Routine/Routine";

export default function RoutinePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Routine" />
      
      <section aria-label="Class Routine">
        <Routine hideHeader={true} />
      </section>
    </main>
  );
}
