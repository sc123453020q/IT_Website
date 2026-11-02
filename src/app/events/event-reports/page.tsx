import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Event Reports" />
      
      <section aria-label="Event Reports">
        <UnpublishedPage area="Event reports" href="/events" linkLabel="Browse events" />
      </section>
    </main>
  );
}
