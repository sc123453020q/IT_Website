import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";
import Back from "@/components/common/Carousel/Back";
import HackOasis from "@/components/events/Hackathons/HackOasis/HackOasis";

export default function HackOasisPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      

      <Back title="HackOasis" />

      <HackOasis />

      <GoToTop />

      <Footer />
    </main>
  );
}