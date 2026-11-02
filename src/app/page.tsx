import Hero from "@/components/home/Hero/Hero";

import Hodmsg from "@/components/home/HODMessage/HODMessage";

import NaacCertificate from "@/components/home/NaacCertificate/NaacCertificate";
import ResearchPreview from "@/components/home/ResearchPreview/ResearchPreview";
import NextStep from "@/components/home/NextStep/NextStep";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section aria-label="IEM Information Technology">
        <Hero />
      </section>

      {/* Head of Department Message */}
      <section aria-label="Head of Department message">
        <Hodmsg />
      </section>

      <ResearchPreview />
      <NaacCertificate />
      <NextStep />
    </main>
  );
}
