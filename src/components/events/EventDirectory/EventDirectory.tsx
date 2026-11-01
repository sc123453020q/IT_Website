"use client";

import { useMemo, useState } from "react";
import { LuExternalLink, LuFileText, LuSearch, LuUsers } from "react-icons/lu";
import Back from "@/components/common/Carousel/Back";
import type { EventGroup, EventRecord } from "@/data/events";

const labels: Record<string, string> = {
  topic_name: "Topic",
  competition_name: "Competition",
  competition_type: "Category",
  name_of_the_event: "Event",
  name_of_activity: "Activity",
  name_of_chapter: "Chapter / Club",
  name_of_the_magazine: "Magazine",
  personality_name_and_organization: "Speaker & Organization",
  organizing_institute: "Organized by",
  conducted_by: "Conducted by",
  industry_name: "Industry",
  nature_of_industrial_tour: "Tour type",
  attended_by: "Attended by",
  no_of_participants: "Participants",
  activity_status: "Status",
  volume_number: "Volume",
  date_of_publication: "Published",
  date_of_event: "Date",
  date_of_activity: "Date",
  start_date: "Starts",
  end_date: "Ends",
  event_type: "Event type",
  type: "Format",
  date: "Date",
};

const titleKeys = ["topic_name", "competition_name", "name_of_the_event", "name_of_activity", "name_of_the_magazine", "industry_name"];
const documentKeys = ["proof_of_document", "proof_of_documents"];

function getTitle(record: EventRecord) {
  const key = titleKeys.find((candidate) => record[candidate]);
  return key ? record[key] : "Department Event";
}

function isWebLink(value: string) {
  return /^https?:\/\//i.test(value);
}

export default function EventDirectory({ group }: { group: EventGroup }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const records = useMemo(
    () => group.records.filter((record) => !normalizedQuery || Object.values(record).some((value) => value.toLowerCase().includes(normalizedQuery))),
    [group.records, normalizedQuery],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Back title={group.title} />

      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-black/5 pb-10 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">Department activities</span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-content md:text-5xl">Event archive.</h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed tracking-wide text-content-muted">{group.description}</p>
            <p className="mt-4 text-sm font-semibold text-content-muted">{group.records.length} {group.records.length === 1 ? "record" : "records"}</p>
          </div>
          <label className="flex w-full items-center gap-3 border-b border-black/15 py-3 transition-colors focus-within:border-primary md:max-w-sm">
            <LuSearch className="shrink-0 text-content-muted" />
            <span className="sr-only">Search events</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this archive" className="min-w-0 flex-1 bg-transparent text-sm text-content outline-none placeholder:text-content-muted" />
          </label>
        </div>

        {records.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {records.map((record, index) => {
              const title = getTitle(record);
              const documentKey = documentKeys.find((key) => record[key]);
              const details = Object.entries(record).filter(([key]) => !titleKeys.includes(key) && !documentKeys.includes(key));
              return (
                <article key={`${title}-${index}`} className="flex min-w-0 flex-col rounded-[2rem] border border-black/5 bg-surface-alt p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                  <div className="mb-8 font-mono text-4xl font-bold text-black/5">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-content">{title}</h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    {details.map(([key, value]) => (
                      <div key={key} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-3 border-t border-black/5 pt-3 first:border-0 first:pt-0">
                        <dt className="text-xs font-bold uppercase tracking-wide text-content-muted">{labels[key] ?? key.replaceAll("_", " ")}</dt>
                        <dd className="min-w-0 whitespace-pre-line break-words font-medium leading-relaxed text-content/80">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {documentKey && (
                    <div className="mt-auto pt-6">
                      {isWebLink(record[documentKey]) ? (
                        <a href={record[documentKey]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70">View document <LuExternalLink /></a>
                      ) : (
                        <div className="flex items-start gap-2 border-t border-black/5 pt-4 text-sm text-content-muted"><LuFileText className="mt-0.5 shrink-0" /><span className="break-all">{record[documentKey]}</span></div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-surface-alt px-6 py-16 text-center"><LuUsers className="mx-auto mb-4 text-3xl text-content-muted" /><p className="font-semibold text-content">No events match “{query}”.</p></div>
        )}
        </div>
      </section>
    </main>
  );
}

