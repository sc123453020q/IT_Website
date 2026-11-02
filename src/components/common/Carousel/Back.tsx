"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BackProps = { title: string };

const sectionFeatures: Record<string, { label: string; image: string; description: string; index: string }> = {
  "/about": {
    label: "The department",
    image: "/images/bg_3.JPG",
    description: "People, purpose and a practice-led approach to information technology education.",
    index: "01 / About",
  },
  "/course-curriculum/curriculum": {
    label: "Study at IEM IT",
    image: "/images/infrastructure/Lab2.jpg",
    description: "An academic path built on strong foundations and practical work.",
    index: "02 / Academics",
  },
  "/faculty": {
    label: "The people behind the work",
    image: "/images/gallery/WhatsApp Image 2026-10-10 at 20.05.54 (11).jpeg",
    description: "Meet the educators and researchers shaping the department every day.",
    index: "03 / Faculty",
  },
  "/students": {
    label: "Student life",
    image: "/images/bg_4.JPG",
    description: "Learning happens in the lab, across campus and beyond the classroom.",
    index: "04 / Students",
  },
  "/research": {
    label: "Ideas into practice",
    image: "/images/hackoasis1 (2).jpeg",
    description: "Research, invention and collaboration across the department.",
    index: "05 / Research",
  },
  "/events": {
    label: "The department in motion",
    image: "/images/hackoasis2 (2).JPG",
    description: "Talks, competitions, visits and student-led initiatives, all in one place.",
    index: "06 / Events",
  },
};

export default function Back({ title }: BackProps) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const feature = sectionFeatures[pathname];
  const section = pathname.split("/")[1]?.replaceAll("-", " ") || "home";

  if (feature) {
    return (
      <section className="grid min-h-[560px] bg-[#111c2d] text-white lg:grid-cols-[47%_53%]" aria-label={`${title} introduction`}>
        <div className="flex flex-col justify-between px-5 pb-10 pt-32 sm:px-8 lg:pb-12 lg:pl-12 lg:pr-10 lg:pt-36 xl:pl-20">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-white/60">
            <Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span><span>{section}</span>
          </nav>
          <div className="py-16 lg:py-10">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#ff9ba3]"><span className="h-px w-9 bg-[#ff9ba3]" />{feature.label}</p>
            <h1 className="max-w-[720px] break-words text-[clamp(3rem,6vw,7rem)] font-semibold leading-[.96] tracking-[-.06em]">{title}</h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/72">{feature.description}</p>
          </div>
          <p className="border-t border-white/25 pt-5 text-xs font-semibold uppercase tracking-[.18em] text-white/55">{feature.index}</p>
        </div>
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[560px]">
          <Image src={feature.image} alt="Department of Information Technology at IEM" fill priority sizes="(max-width: 1024px) 100vw, 53vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111c2d]/40 via-transparent to-transparent" />
          <span className="absolute bottom-5 right-5 border border-white/50 bg-[#111c2d]/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-sm">IEM / IT</span>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-surface-alt px-5 pb-14 pt-32 sm:px-8 md:pb-20 md:pt-40">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[290px_1fr]">
        <nav aria-label="Breadcrumb" className="flex items-start gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-content-muted">
          <Link href="/" className="hover:text-primary">Home</Link><span aria-hidden="true">/</span><span className="capitalize">{section}</span>
        </nav>
        <div>
          <p className="site-section-kicker mb-5">IEM / Information Technology</p>
          <h1 className="max-w-5xl text-[clamp(2.8rem,6vw,6.2rem)] font-semibold leading-[1] tracking-[-.055em] text-content">{title}</h1>
          <div className="mt-9 h-[3px] w-20 bg-primary" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
