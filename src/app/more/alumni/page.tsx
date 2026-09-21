import Back from "@/components/common/Carousel/Back";
import Alumni from "@/components/innovation/Alumni/Alumni";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Alumni" />
      
      <section aria-label="Alumni">
        <Alumni />
      </section>
    </main>
  );
}
