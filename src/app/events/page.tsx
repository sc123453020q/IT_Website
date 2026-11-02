import Image from "next/image";
import Link from "next/link";
import Back from "@/components/common/Carousel/Back";
import { eventGroups } from "@/data/events";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Back title="Events & Activities" />
      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-28" aria-labelledby="events-index-title">
        <div className="grid gap-10 border-t border-content/30 pt-6 lg:grid-cols-[.45fr_.55fr]">
          <div><p className="site-section-kicker">The department in motion</p><h2 id="events-index-title" className="mt-5 text-[clamp(2.8rem,4.8vw,5.3rem)] font-semibold leading-[1.02] tracking-[-.055em] text-content">More than a calendar.</h2></div>
          <p className="max-w-xl self-end text-lg leading-8 text-content-muted">Explore the department’s records of talks, competitions, visits and student-led activities. Every collection is drawn from the event files provided by the department.</p>
        </div>

        <Link href="/events/hackathons" className="group relative mt-12 flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#111c2d] p-7 text-white sm:p-10 lg:min-h-[470px]">
          <Image src="/images/hackoasis2 (2).JPG" alt="Students working together at IEM HackOasis" fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1728]/90 via-[#0b1728]/45 to-transparent" />
          <span className="relative text-xs font-bold uppercase tracking-[.2em] text-[#ffb7bc]">Featured collection / Hackathons</span>
          <div className="relative max-w-2xl"><h3 className="text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[1] tracking-[-.055em]">Build something together.</h3><p className="mt-5 max-w-lg text-base leading-7 text-white/80">Explore the department’s record of collaborative, time-bound building events.</p><span className="mt-7 inline-block border-b border-[#ff9ba3] pb-2 text-sm font-semibold">Open the archive <span aria-hidden="true">&rarr;</span></span></div>
        </Link>

        <div className="mt-20 grid gap-10 lg:grid-cols-[.3fr_.7fr]">
          <div><p className="site-section-kicker">Browse by type</p><h3 className="mt-4 max-w-xs text-3xl font-semibold leading-tight tracking-tight text-content">Eight ways to take part.</h3></div>
          <div className="border-t border-content/30">
            {eventGroups.map((group, index) => (
              <Link key={group.slug} href={`/events/${group.slug}`} className="group grid gap-4 border-b border-border py-6 transition-colors hover:text-primary sm:grid-cols-[52px_1fr_100px_28px] sm:items-start">
                <span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span><span className="block text-xl font-semibold text-content transition-colors group-hover:text-primary sm:text-2xl">{group.title}</span><span className="mt-2 block max-w-xl text-sm leading-6 text-content-muted">{group.description}</span></span>
                <span className="text-xs font-semibold uppercase tracking-wide text-content-muted sm:pt-2">{group.records.length} {group.records.length === 1 ? "record" : "records"}</span>
                <span className="text-lg text-primary sm:pt-1" aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
