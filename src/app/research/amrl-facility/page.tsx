import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="AMRL Facility" />
      
      <section aria-label="AMRL Facility">
        <UnpublishedPage area="Research facilities" href="/research" linkLabel="Explore research" />
      </section>
    </main>
  );
}
