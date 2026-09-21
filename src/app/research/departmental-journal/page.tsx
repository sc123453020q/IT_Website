import Back from "@/components/common/Carousel/Back";
import Magazine from "@/components/innovation/Magazine/Magazine";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Departmental Journal" />
      
      <section aria-label="Departmental Journal">
        <Magazine />
      </section>
    </main>
  );
}
