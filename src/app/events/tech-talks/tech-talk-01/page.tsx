import Back from "@/components/common/Carousel/Back";
import Events from "@/components/events/Events/Events";

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Events" />
      <Events />
    </main>
  );
}