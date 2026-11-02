import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Outreach Activity" />
      
      <section aria-label="Outreach Activity">
        <UnpublishedPage area="Outreach activity" href="/events" linkLabel="Browse events" />
      </section>
    </main>
  );
}
