import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

import Back from "@/components/common/Carousel/Back";
import Achievements from "@/components/students/Achievements/Achievements";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      <Navbar />

      <Back title="Students Achievements" />

      <Achievements />

      <GoToTop />

      <Footer />

    </main>
  );
}