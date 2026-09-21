import Navbar from "@/components/layout/Navbar/Navbar";

import Back from "@/components/common/Carousel/Back";
import Placements from "@/components/students/Placements/Placements";

export default function PlacementsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      <Navbar />

      <Back title="Placements" />

      <Placements />

    </main>
  );
}