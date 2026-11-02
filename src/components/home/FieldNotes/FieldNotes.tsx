import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    eyebrow: "Student achievement / Competition",
    title: "Crypto Coders at the SIT ICOE Hackathon",
    description: "An IEM team, including IT students, was recognised among the winners at the SIT ICOE Hackathon.",
    image: "/images/achievements/Picture1.jpg",
    href: "/students/achievements",
    link: "See student achievements",
  },
  {
    eyebrow: "Learning beyond campus / Industry visit",
    title: "Inside Ericsson",
    description: "A department industrial visit brought students into a working technology environment in March 2025.",
    image: "/images/ericsson_visit1.jpeg",
    href: "/events/industrial-tours",
    link: "Explore industrial tours",
  },
] as const;

export default function FieldNotes() {
  return (
    <section className="bg-[#f2f0eb] px-5 py-20 sm:px-8 md:py-28" aria-labelledby="field-notes-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 grid gap-5 border-t border-content/30 pt-6 lg:grid-cols-[1fr_1fr]">
          <div><p className="site-section-kicker">Field notes / From the department</p><h2 id="field-notes-title" className="mt-5 text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[1] tracking-[-.055em] text-content">Proof in practice.</h2></div>
          <p className="max-w-xl self-end text-lg leading-8 text-content-muted">The work and experiences of our students are best understood through the people who take part in them.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-7">
          {stories.map((story, index) => (
            <article key={story.title} className={index === 1 ? "lg:pt-20" : ""}>
              <Link href={story.href} className="group block overflow-hidden bg-content">
                <div className="relative aspect-[16/10] overflow-hidden"><Image src={story.image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
              </Link>
              <div className="grid gap-5 border-t-2 border-content pt-5 sm:grid-cols-[90px_1fr]">
                <span className="text-xs font-bold uppercase tracking-[.17em] text-primary">0{index + 1} / Story</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.14em] text-content-muted">{story.eyebrow}</p>
                  <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-content sm:text-4xl">{story.title}</h3>
                  <p className="mt-4 max-w-lg text-base leading-7 text-content-muted">{story.description}</p>
                  <Link href={story.href} className="mt-6 inline-block border-b border-primary pb-1 text-sm font-semibold text-content transition-colors hover:text-primary">{story.link} <span aria-hidden="true">&rarr;</span></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
