import Back from "@/components/common/Carousel/Back";

import Publications from "@/components/innovation/Publications/Publications";
import PatentComponent from "@/components/research/Patent/Patent";
import Books from "@/components/innovation/Books/Books";
import Magazine from "@/components/innovation/Magazine/Magazine";
import Alumni from "@/components/innovation/Alumni/Alumni";
import SectionIndex from "@/components/common/SectionIndex/SectionIndex";

export default function InnovationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Back title="Innovation & Research" />
      <SectionIndex eyebrow="Explore research" title="Follow the work." description="Browse publications, patents and other work documented by the department." items={[{ label: "Publications", href: "#publications" }, { label: "Patents", href: "#patent" }, { label: "Books & chapters", href: "#books" }, { label: "Department magazine", href: "#magazine" }, { label: "Alumni startups", href: "#alumni" }]} />

      <section aria-label="Publications" id="publications">
        <Publications />
      </section>

      <section aria-label="Patents" id="patent">
        <PatentComponent />
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
