import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[#111c2d] px-5 py-28 text-white sm:px-8">
      <div className="mx-auto w-full max-w-[1080px] border-t border-white/25 pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">IEM · Information Technology</p>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
          <p className="text-[clamp(6rem,20vw,14rem)] font-semibold leading-none tracking-[-0.09em] text-white/15">404</p>
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Page not found.</h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/65">
              This page may have moved. You can return to the department homepage or explore the site from there.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/" className="border border-[#b3202b] bg-[#b3202b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#951923]">Back to home</Link>
              <Link href="/about" className="border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">About the department</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
