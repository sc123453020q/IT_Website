import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="IoT Research Lab" />
      
      <section aria-label="IoT Research Lab">
        <UnpublishedPage area="Research facilities" href="/research" linkLabel="Explore research" />
      </section>
    </main>
  );
}
