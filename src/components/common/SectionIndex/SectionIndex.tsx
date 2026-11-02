import Link from "next/link";

type SectionIndexProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: { label: string; href: string }[];
};

export default function SectionIndex({ eyebrow, title, description, items }: SectionIndexProps) {
  return (
    <section className="bg-[#f2f0eb] px-5 py-16 sm:px-8 md:py-20" aria-label={`${title} index`}>
      <div className="mx-auto grid max-w-[1320px] gap-10 border-t border-content/30 pt-6 lg:grid-cols-[.46fr_.54fr] lg:gap-16">
        <div><p className="site-section-kicker">{eyebrow}</p><h2 className="mt-5 max-w-xl text-[clamp(2.6rem,4vw,4.7rem)] font-semibold leading-[1.03] tracking-[-.055em] text-content">{title}</h2><p className="mt-6 max-w-lg text-base leading-7 text-content-muted">{description}</p></div>
        <div className="border-t border-content/25">
          {items.map((item, index) => (
            <Link key={item.href} href={item.href} className="group grid grid-cols-[44px_1fr_24px] items-center gap-4 border-b border-content/25 py-5 text-content transition-colors hover:text-primary">
              <span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span><span className="text-lg font-semibold tracking-tight sm:text-xl">{item.label}</span><span className="text-lg" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
