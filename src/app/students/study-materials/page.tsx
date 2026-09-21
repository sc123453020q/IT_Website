import Navbar from "@/components/layout/Navbar/Navbar";

import Back from "@/components/common/Carousel/Back";
import StudyMaterials from "@/components/students/StudyMaterials/StudyMaterials";

export default function StudyMaterialsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      <Navbar />

      <Back title="Study Materials & Assignments" />

      <StudyMaterials />

    </main>
  );
}