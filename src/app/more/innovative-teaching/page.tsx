import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Innovative Teaching" />
      
      <section aria-label="Innovative Teaching">
        <UnpublishedPage area="Innovative teaching" href="/about" linkLabel="About the department" />
      </section>
    </main>
  );
}
