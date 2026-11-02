import Image from "next/image";
import Link from "next/link";

export default function Spotlight() {
  return (
    <section className="bg-[#111c2d] text-white" aria-labelledby="spotlight-title">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[540px] lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/images/hackoasis1 (2).jpeg"
            alt="Students and a mentor discussing a project at IEM HackOasis"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#111c2d]/10" />
        </div>
        <div className="flex flex-col justify-between px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.23em] text-white/60">Beyond the classroom / 01</span>
          <div className="py-12 lg:py-0">
            <h2 id="spotlight-title" className="max-w-xl text-[clamp(2.6rem,4.5vw,5rem)] font-semibold leading-[1.04] tracking-tight">
              Ideas are built together.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/70">
              Hackathons, workshops and industry visits bring learning into the room with real people and real problems.
            </p>
          </div>
          <Link href="/events" className="w-fit border-b border-[#e45a63] pb-2 text-sm font-semibold text-white transition-colors hover:text-[#ffb7bc]">
            Explore department events &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
