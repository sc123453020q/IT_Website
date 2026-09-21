import Back from "@/components/common/Carousel/Back";
import IndustryVisit from "@/components/students/IndustryVisit/IndustryVisit";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Industrial Visit" />
      
      <section aria-label="Industrial Visit">
        <IndustryVisit />
      </section>
    </main>
  );
}
