import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

import Back from "@/components/common/Carousel/Back";
import Students from "@/components/students/Students/Students";

export default function StudentsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Page Banner */}
      <Back title="Student's Corner" />

      {/* Students */}
      <Students />

      {/* Go To Top */}
      <GoToTop />

      {/* Footer */}
      <Footer />

    </main>
  );
}