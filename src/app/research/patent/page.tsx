import Back from "@/components/common/Carousel/Back";
import PatentComponent from "@/components/research/Patent/Patent";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Patents & Intellectual Property" />
      
      <section aria-label="Patent">
        <PatentComponent />
      </section>
    </main>
  );
}

