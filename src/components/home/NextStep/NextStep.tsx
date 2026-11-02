import Link from "next/link";

export default function NextStep() {
  return (
    <section className="bg-[#a91f30] px-5 py-20 text-white sm:px-8 md:py-28" aria-labelledby="next-step-title">
      <div className="mx-auto max-w-[1320px] border-t border-white/40 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/75">Your next step / IEM IT</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
          <h2 id="next-step-title" className="max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[.98] tracking-[-.06em]">There is more to explore.</h2>
          <div className="flex flex-col border-t border-white/40">
            <Link href="/course-curriculum/curriculum" className="flex justify-between border-b border-white/40 py-4 text-sm font-semibold transition-colors hover:text-white/70">Study with us <span aria-hidden="true">&rarr;</span></Link>
            <Link href="/events" className="flex justify-between border-b border-white/40 py-4 text-sm font-semibold transition-colors hover:text-white/70">Explore events <span aria-hidden="true">&rarr;</span></Link>
            <Link href="/more/contact-us" className="flex justify-between border-b border-white/40 py-4 text-sm font-semibold transition-colors hover:text-white/70">Contact the department <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
