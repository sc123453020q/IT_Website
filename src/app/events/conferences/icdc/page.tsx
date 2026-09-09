import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Back from "@/components/common/Carousel/Back";
import ICDC from "@/components/events/Conferences/ICDC/ICDC";

export default function ICDCPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      

      <Back title="ICDC" />

      <ICDC />

      <GoToTop />

      <Footer />
    </main>
  );
}