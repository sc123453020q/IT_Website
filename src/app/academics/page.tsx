import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

import Back from "@/components/common/Carousel/Back";
import AcademicsCard from "@/components/academics/Academics/Academics";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Page Hero */}
      <Back title="Explore Academics" />

      {/* Academic Information */}
      <section aria-label="Academic programs and information">
        <AcademicsCard />
      </section>

      <GoToTop />

      <Footer />
    </main>
  );
}