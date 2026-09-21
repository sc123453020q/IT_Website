import Back from "@/components/common/Carousel/Back";
import Placements from "@/components/students/Placements/Placements";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Placement" />
      
      <section aria-label="Placement">
        <Placements />
      </section>
    </main>
  );
}
