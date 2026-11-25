import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    number: "01",
    title: "Learn in the lab",
    description: "Explore the programme and the spaces where theory becomes practice.",
    href: "/course-curriculum/curriculum",
    image: "/images/infrastructure/Lab2.jpg",
    className: "lg:row-span-2 lg:min-h-[650px]",
  },
  {
    number: "02",
    title: "Find your people",
    description: "Meet the students and faculty who make this a department.",
    href: "/faculty",
    image: "/images/bg_3.JPG",
    className: "lg:min-h-[310px]",
  },
  {
    number: "03",
    title: "Go beyond campus",
    description: "Follow the connections between study, industry and research.",
    href: "/research",
    image: "/images/ericsson_visit1.jpeg",
    className: "lg:min-h-[310px]",
  },
] as const;

export default function Explore() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 md:py-28" aria-labelledby="explore-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 grid gap-7 border-t border-content/25 pt-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="site-section-kicker">Inside IEM IT / The department</p>
            <h2 id="explore-title" className="mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-.06em] text-content">
              A place to learn by doing.
            </h2>
          </div>
          <div className="flex flex-col justify-end lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-content-muted">
              Since 1999, the Department of Information Technology has brought together classroom learning, practical work and a community of people who share ideas.
            </p>
            <Link href="/course-curriculum/curriculum" className="mt-7 w-fit border-b-2 border-primary pb-2 text-sm font-semibold text-content transition-colors hover:text-primary">
              Explore the curriculum <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1.08fr_.92fr] lg:grid-rows-2">
          {paths.map((path) => (
            <Link key={path.number} href={path.href} className={`group relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-[#111c2d] p-7 text-white sm:p-9 ${path.className}`}>
              <Image src={path.image} alt="" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1728]/90 via-[#0b1728]/20 to-transparent" />
              <span className="relative mb-auto text-xs font-bold uppercase tracking-[.2em] text-white/85">{path.number} / IEM IT</span>
              <span className="relative max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{path.title}</span>
              <span className="relative mt-2 max-w-md text-sm leading-6 text-white/80">{path.description}</span>
              <span className="relative mt-6 text-sm font-semibold text-white">Explore <span aria-hidden="true">&rarr;</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
