import Link from "next/link";

export default function UnpublishedPage({ area, href, linkLabel }: { area: string; href: string; linkLabel: string }) {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 md:py-28">
      <div className="grid gap-10 border-y border-border py-12 md:grid-cols-[12rem_1fr] md:py-16">
        <div className="site-section-kicker">{area}</div>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-content sm:text-4xl">No material has been published here yet.</h2>
          <p className="mt-5 text-base leading-8 text-content-muted">Please explore the related department pages while this section is being prepared.</p>
          <Link href={href} className="mt-7 inline-block border-b border-primary pb-1 text-sm font-semibold text-primary hover:text-primary-hover">{linkLabel} ↗</Link>
        </div>
      </div>
    </section>
  );
}
