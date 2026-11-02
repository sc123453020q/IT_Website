"use client";

import { useMemo, useState } from "react";
import Back from "@/components/common/Carousel/Back";
import type { EventGroup, EventRecord } from "@/data/events";

const labels: Record<string, string> = {
  competition_type: "Category", event_type: "Event type", type: "Format",
  organizing_institute: "Organised by", conducted_by: "Conducted by",
  personality_name_and_organization: "Speaker", attended_by: "Attended by",
  industry_name: "Industry", nature_of_industrial_tour: "Tour type",
  no_of_participants: "Participants", activity_status: "Status",
  name_of_chapter: "Chapter / club", volume_number: "Volume",
  date: "Date", date_of_event: "Date", date_of_activity: "Date",
  date_of_publication: "Published", start_date: "Starts", end_date: "Ends",
};
const titleKeys = ["topic_name", "competition_name", "name_of_the_event", "name_of_activity", "name_of_the_magazine", "industry_name"];
const documentKeys = ["proof_of_document", "proof_of_documents"];
const dateKeys = ["date", "date_of_event", "date_of_activity", "date_of_publication", "start_date"];

function titleFor(record: EventRecord) {
  const key = titleKeys.find((candidate) => record[candidate]);
  return key ? record[key] : "Department event";
}

export default function EventDirectory({ group }: { group: EventGroup }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return group.records.filter((record) => !term || Object.values(record).some((value) => value.toLocaleLowerCase().includes(term)));
  }, [group.records, query]);

  return (
    <main className="min-h-screen bg-surface">
      <Back title={group.title} />
      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-10 grid gap-8 border-b border-border pb-9 lg:grid-cols-[1fr_20rem] lg:items-end">
          <div>
            <span className="site-section-kicker">Department archive · {group.records.length} records</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-content sm:text-3xl">{group.title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-content-muted">{group.description}</p>
          </div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-content-muted">
            Search this archive
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, topic or date" className="mt-2 block h-12 w-full border border-border bg-white px-4 text-sm font-normal normal-case tracking-normal text-content outline-none focus:border-primary" />
          </label>
        </div>
        <p className="mb-4 text-sm text-content-muted" aria-live="polite">Showing {results.length} of {group.records.length}</p>
        {results.length ? (
          <div className="divide-y divide-border border-y border-border">
            {results.map((record, index) => {
              const title = titleFor(record);
              const dateKey = dateKeys.find((key) => record[key]);
              const documentKey = documentKeys.find((key) => record[key]);
              const details = Object.entries(record).filter(([key]) => !titleKeys.includes(key) && !documentKeys.includes(key) && !dateKeys.includes(key));
              const document = documentKey && record[documentKey];
              return (
                <article key={`${title}-${index}`} className="grid gap-5 py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8 md:py-9">
                  <div><span className="site-section-kicker">{String(index + 1).padStart(2, "0")}</span>{dateKey && <p className="mt-2 text-sm font-medium text-content-muted">{record[dateKey]}</p>}</div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-snug text-content md:text-2xl">{title}</h3>
                    {details.length > 0 && <dl className="mt-4 flex flex-wrap gap-x-7 gap-y-2 text-sm leading-6">{details.map(([key, value]) => <div key={key} className="min-w-0 max-w-full"><dt className="inline font-semibold text-content-muted">{labels[key] ?? key.replaceAll("_", " ")}: </dt><dd className="inline whitespace-pre-line break-words text-content">{value}</dd></div>)}</dl>}
                    {document && (/^https?:\/\//i.test(document) ? <a href={document} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border-b border-primary pb-1 text-sm font-semibold text-primary hover:text-primary-hover">View document ↗</a> : <p className="mt-4 break-words text-sm text-content-muted">Document reference: {document}</p>)}
                  </div>
                </article>
              );
            })}
          </div>
        ) : <div className="border-y border-border py-16 text-center text-content-muted">No records match your search.</div>}
      </section>
    </main>
  );
}
