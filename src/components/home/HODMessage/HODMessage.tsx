import Image from "next/image";
import Link from "next/link";

export default function HODMessage() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 md:py-28" aria-labelledby="hod-heading">
      <div className="mx-auto max-w-[1320px] border-t border-content/30 pt-6">
        <div className="grid gap-10 lg:grid-cols-[.42fr_.58fr] lg:gap-20">
          <div>
            <p className="site-section-kicker">A note from the Head of Department</p>
            <h2 id="hod-heading" className="mt-5 max-w-md text-[clamp(2.8rem,4.5vw,5rem)] font-semibold leading-[1.03] tracking-[-.055em] text-content">A department shaped by its people.</h2>
            <div className="relative mt-9 aspect-[4/4.3] max-w-[440px] overflow-hidden bg-surface-alt">
              <Image src="/images/hod_img.jpg" alt="Prof. Dr. Moutushi Singh" fill sizes="(max-width: 1024px) 100vw, 440px" className="object-cover object-center" />
            </div>
            <div className="mt-5 max-w-[440px] border-t-2 border-primary pt-4">
              <p className="text-lg font-semibold text-content">Prof. Dr. Moutushi Singh</p>
              <p className="mt-1 text-sm text-content-muted">Head of the Department</p>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:pt-20">
            <blockquote className="max-w-3xl border-l-4 border-primary pl-6 font-serif text-[clamp(1.7rem,3vw,3.3rem)] leading-[1.18] tracking-tight text-content sm:pl-9">
              “I invite you to explore our academic programs, facilities, and dedicated faculty.”
            </blockquote>
            <div className="mt-10 max-w-2xl space-y-5 text-base leading-8 text-content-muted sm:text-lg">
              <p>The Department of Information Technology was founded in 1999. Its bachelor’s degree programme began that year, followed by a master’s programme in 2011.</p>
              <p>Our academic approach brings theoretical and practical knowledge together. Short-term courses and pre-placement training help students strengthen critical thinking and prepare for professional work.</p>
              <p>Through the efforts of our teachers, researchers and students, we continue to contribute to our discipline and to the wider community.</p>
            </div>
            <Link href="mailto:moutushi.singh@iem.edu.in" className="mt-10 w-fit border-b border-primary pb-2 text-sm font-semibold text-content transition-colors hover:text-primary">Contact the department <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
