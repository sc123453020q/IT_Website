import Back from "@/components/common/Carousel/Back";
import Infrastructure from "@/components/academics/Infrastructure/Infrastructure";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Infrastructure" />
      
      <section aria-label="Infrastructure">
        <Infrastructure />
      </section>
    </main>
  );
}
