import Hero from "@/components/home/Hero/Hero";

import Hodmsg from "@/components/home/HODMessage/HODMessage";
import NaacCert from "@/components/home/NaacCertificate/NaacCertificate";

import Statistics from "@/components/home/Statistics/Statistics";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section aria-label="IEM Information Technology">
        <Hero />
      </section>

      {/* Department Statistics */}
      <section aria-label="Department Statistics">
        <Statistics />
      </section>

      {/* Head of Department Message */}
      <section aria-label="Head of Department message">
        <Hodmsg />
      </section>

      {/* Accreditation */}
      <section aria-label="Accreditation">
        <NaacCert />
      </section>
    </main>
  );
}