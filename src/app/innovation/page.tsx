import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Back from "@/components/common/Carousel/Back";

import Innovation from "@/components/innovation/Innovation/Innovation";
import Publications from "@/components/innovation/Publications/Publications";
import Books from "@/components/innovation/Books/Books";
import Alumni from "@/components/innovation/Alumni/Alumni";
import Magazine from "@/components/innovation/Magazine/Magazine";

export default function InnovationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Innovation" />

      <Innovation />

      <Publications />

      <Books />

      <Alumni />

      <Magazine />

      <GoToTop />

      <Footer />
    </main>
  );
}