import Back from "@/components/common/Carousel/Back";

import EventsList from "@/components/events/Events/Events";
import ICDC from "@/components/events/Conferences/ICDC/ICDC";
import TechTalk from "@/components/events/TechTalks/TechTalk";
import HackOasis from "@/components/events/Hackathons/HackOasis/HackOasis";
import Workshop from "@/components/events/SeminarsWorkshops/Workshop01/Event";
import FunEvent from "@/components/events/FunEvents/FunEvent01/Event";

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Events & Activities" />
      
      <section aria-label="Events Overview">
        <EventsList />
      </section>

      <section aria-label="Conferences" id="conference">
        <ICDC />
      </section>

      <section aria-label="Tech Talks" id="tech-talks">
        <TechTalk />
      </section>

      <section aria-label="Hackathons" id="hackathons">
        <HackOasis />
      </section>

      <section aria-label="Workshops" id="workshops">
        <Workshop />
      </section>

      <section aria-label="Fun Events" id="fun-events">
        <FunEvent />
      </section>
    </main>
  );
}