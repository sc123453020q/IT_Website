import Back from "@/components/common/Carousel/Back";
import InnovationList from "@/components/innovation/Innovation/Innovation";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="IEDC-IT" />
      
      <section aria-label="IEDC-IT">
        <InnovationList />
      </section>
    </main>
  );
}
