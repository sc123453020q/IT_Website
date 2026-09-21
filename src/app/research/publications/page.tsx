import Back from "@/components/common/Carousel/Back";
import Publications from "@/components/innovation/Publications/Publications";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Publications" />
      
      <section aria-label="Publications">
        <Publications />
      </section>
    </main>
  );
}
