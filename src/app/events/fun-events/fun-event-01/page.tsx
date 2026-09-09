import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Back from "@/components/common/Carousel/Back";
import FunEvent01 from "@/components/events/FunEvents/FunEvent01/Event";

export default function FunEvent01Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      

      <Back title="Fun Event 01" />

      <FunEvent01 />

      <GoToTop />

      <Footer />
    </main>
  );
}