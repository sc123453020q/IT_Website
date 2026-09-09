import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Back from "@/components/common/Carousel/Back";
import IndustryVisit from "@/components/students/IndustryVisit/IndustryVisit";

export default function IndustryVisitPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      <Back title="Industry Visit" />

      <IndustryVisit />

      <GoToTop />

      <Footer />
    </main>
  );
}