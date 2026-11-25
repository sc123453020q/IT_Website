import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Explore",
    links: [
      ["About the department", "/about"],
      ["Faculty", "/faculty"],
      ["Research", "/research"],
      ["Events", "/events"],
    ],
  },
  {
    title: "Academics",
    links: [
      ["Course curriculum", "/course-curriculum/curriculum"],
      ["Syllabus", "/course-curriculum/syllabus"],
      ["Class routine", "/course-curriculum/routine"],
      ["Infrastructure", "/course-curriculum/infrastructure"],
    ],
  },
  {
    title: "Students",
    links: [
      ["Student life", "/students"],
      ["Placements", "/students-corner/placement"],
      ["Achievements", "/students-corner/students-achievement"],
      ["Feedback", "/feedback"],
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#182238] text-white">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link href="/" className="mb-7 inline-flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center bg-white p-1.5">
                <Image src="/iem_logo_.png" alt="IEM" width={48} height={48} className="h-full w-full object-contain" />
              </span>
              <span className="text-sm font-semibold leading-snug">Department of<br />Information Technology</span>
            </Link>
            <p className="text-sm leading-7 text-white/65">Institute of Engineering & Management<br />Salt Lake, Kolkata</p>
            <Link href="/more/contact-us" className="mt-6 inline-block border-b border-[#e95b68] pb-1 text-sm font-semibold text-white hover:text-[#ffb7bf]">Contact the department</Link>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[.14em] text-white/55">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-sm leading-6 text-white/85 transition-colors hover:text-white hover:underline">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Department of Information Technology, IEM.</p>
          <p>IEM Gurukul, Sector V, Salt Lake, Kolkata 700091</p>
        </div>
        <p className="mt-4 text-xs leading-6 text-white/55">
          Designed and Developed by{" "}
          <a href="https://www.linkedin.com/in/saraswata-chatterjee-b560972b3/" target="_blank" rel="noopener noreferrer" className="font-medium text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white">Saraswata Chatterjee</a>
          {" and "}
          <a href="https://www.linkedin.com/in/debanurag" target="_blank" rel="noopener noreferrer" className="font-medium text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white">Anurag Deb</a>
        </p>
      </div>
    </footer>
  );
}
