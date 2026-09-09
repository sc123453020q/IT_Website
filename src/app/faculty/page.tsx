import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

import Back from "@/components/common/Carousel/Back";
import ItFaculty from "@/components/faculty/Faculty/Faculty";

export default function FacultyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Page Hero */}
      <Back title="Faculty Corner" />

      {/* Faculty */}
      <section aria-label="IEM Information Technology faculty">
        <ItFaculty />
      </section>

      <GoToTop />

      <Footer />
    </main>
  );
}