import Back from "@/components/common/Carousel/Back";

import InnovationList from "@/components/innovation/Innovation/Innovation";
import Publications from "@/components/innovation/Publications/Publications";
import Books from "@/components/innovation/Books/Books";
import Magazine from "@/components/innovation/Magazine/Magazine";
import Alumni from "@/components/innovation/Alumni/Alumni";

export default function InnovationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Innovation & Research" />
      
      <section aria-label="Innovation Hub" id="innovation">
        <InnovationList />
      </section>

      <section aria-label="Publications" id="publications">
        <Publications />
      </section>

      <section aria-label="Books Published" id="books">
        <Books />
      </section>

      <section aria-label="Department Magazine" id="magazine">
        <Magazine />
      </section>

      <section aria-label="Alumni Startup" id="alumni">
        <Alumni />
      </section>
    </main>
  );
}