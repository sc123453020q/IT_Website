import Back from "@/components/common/Carousel/Back";
import ICDC from "@/components/events/Conferences/ICDC/ICDC";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Conference" />
      
      <section aria-label="Conference">
        <ICDC />
      </section>
    </main>
  );
}
