import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Back from "@/components/common/Carousel/Back";
import Workshop01 from "@/components/events/SeminarsWorkshops/Workshop01/Event";

export default function Workshop01Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      

      <Back title="Workshop 01" />

      <Workshop01 />

      <GoToTop />

      <Footer />
    </main>
  );
}