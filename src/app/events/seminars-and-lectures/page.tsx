import Back from "@/components/common/Carousel/Back";
import Workshop from "@/components/events/SeminarsWorkshops/Workshop01/Event";
import TechTalk from "@/components/events/TechTalks/TechTalk";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Seminars and Lectures" />
      
      <section aria-label="Seminars and Lectures">
        <Workshop />
        <TechTalk />
      </section>
    </main>
  );
}
