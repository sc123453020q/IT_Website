"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const paths = [
  { number: "01", title: "Academics", href: "/course-curriculum/curriculum" },
  { number: "02", title: "Research", href: "/research" },
  { number: "03", title: "Student life", href: "/students" },
] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] flex-col justify-end overflow-hidden bg-[#111827] text-white lg:min-h-[min(920px,100svh)]">
      <div className="absolute inset-0">
        <Image src="/images/bg_1.jpg" alt="IEM students and faculty at HackOasis" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101827]/90 via-[#101827]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/85 via-transparent to-[#101827]/25" />
      </div>
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-40 sm:px-8 lg:px-10 lg:pb-16">
        <motion.div className="max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <div className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[.16em] text-white/85"><span className="h-0.5 w-9 bg-[#f36c78]" /> Institute of Engineering & Management · Kolkata</div>
          <h1 className="text-[clamp(2.65rem,7.8vw,8.5rem)] font-semibold leading-[.98] tracking-[-.055em]">Leading the future of <span className="block text-white">Information <em className="font-normal not-italic text-[#ff9ba3]">Technology.</em></span></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-xl">Study, research and student experience in a department shaped by practical learning and new ideas.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/about" className="inline-flex min-h-12 items-center gap-4 bg-white px-6 py-3 text-sm font-semibold text-[#182238] transition-colors hover:bg-[#f7e8e9]">Explore the department <span aria-hidden="true">↗</span></Link>
            <Link href="/course-curriculum/curriculum" className="inline-flex min-h-12 items-center border border-white/65 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">Academic programs</Link>
          </div>
        </motion.div>
        <div className="mt-16 grid border-t border-white/30 sm:grid-cols-3 lg:mt-20">
          {paths.map((path) => <Link key={path.title} href={path.href} className="group flex items-center gap-4 border-b border-white/25 py-5 text-white transition-colors hover:bg-white/10 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"><span className="text-xs font-bold text-[#ff9ba3]">{path.number}</span><span className="flex-1 text-sm font-semibold sm:text-base">{path.title}</span><span className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}
        </div>
      </div>
    </section>
  );
}
