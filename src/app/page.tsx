import Hero from "@/components/home/Hero/Hero";

import Hodmsg from "@/components/home/HODMessage/HODMessage";

import Explore from "@/components/home/Explore/Explore";
import Spotlight from "@/components/home/Spotlight/Spotlight";
import FieldNotes from "@/components/home/FieldNotes/FieldNotes";
import ResearchPreview from "@/components/home/ResearchPreview/ResearchPreview";
import NextStep from "@/components/home/NextStep/NextStep";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section aria-label="IEM Information Technology">
        <Hero />
      </section>

      <Explore />
      <Spotlight />

      <FieldNotes />
      <ResearchPreview />

      {/* Head of Department Message */}
      <section aria-label="Head of Department message">
        <Hodmsg />
      </section>

      <NextStep />
    </main>
  );
}
