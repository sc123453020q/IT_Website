import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Extra Curricular Activity" />
      
      <section aria-label="Extra Curricular Activity">
        <UnpublishedPage area="Student activities" href="/students" linkLabel="Explore student life" />
      </section>
    </main>
  );
}
