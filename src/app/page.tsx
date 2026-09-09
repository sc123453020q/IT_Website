import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Hero from "@/components/home/Hero/Hero";

import Habout from "@/components/home/DepartmentOverview/DepartmentOverview";
import Hodmsg from "@/components/home/HODMessage/HODMessage";
import NaacCert from "@/components/home/NaacCertificate/NaacCertificate";
import NoticeBoard from "@/components/home/NoticeBoard/NoticeBoard";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section aria-label="IEM Information Technology">
        <Hero />
      </section>

      {/* Important Notices */}
      <section aria-label="Important notices">
        <NoticeBoard />
      </section>

      {/* Head of Department Message */}
      <section aria-label="Head of Department message">
        <Hodmsg />
      </section>

      {/* Department Overview */}
      <section aria-label="About the department">
        <Habout />
      </section>

      {/* Accreditation */}
      <section aria-label="Accreditation">
        <NaacCert />
      </section>

      <GoToTop />

      <Footer />
    </main>
  );
}