import Back from "@/components/common/Carousel/Back";
import Achievements from "@/components/students/Achievements/Achievements";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Students Achievements" />

      <Achievements />

    </main>
  );
}