import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

import Back from "@/components/common/Carousel/Back";
import StudyMaterials from "@/components/students/StudyMaterials/StudyMaterials";

export default function StudyMaterialsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      <Navbar />

      <Back title="Study Materials & Assignments" />

      <StudyMaterials />

      <GoToTop />

      <Footer />

    </main>
  );
}