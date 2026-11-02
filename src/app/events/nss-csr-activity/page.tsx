import Back from "@/components/common/Carousel/Back";
import UnpublishedPage from "@/components/layout/UnpublishedPage/UnpublishedPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="NSS & CSR Activity" />
      
      <section aria-label="NSS & CSR Activity">
        <UnpublishedPage area="NSS & CSR activity" href="/events" linkLabel="Browse events" />
      </section>
    </main>
  );
}
