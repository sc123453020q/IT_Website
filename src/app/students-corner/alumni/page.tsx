import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Alumni" />
      
      <section aria-label="Alumni">
        <UnpublishedPage area="Alumni" href="/students" linkLabel="Explore student life" />
      </section>
    </main>
  );
}
