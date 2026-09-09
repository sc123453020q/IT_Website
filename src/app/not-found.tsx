import React from 'react'

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#10051a] px-6 py-20 text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Error code */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-purple-300">
          IEM IT
        </p>

        <h1 className="text-[clamp(6rem,18vw,12rem)] font-black leading-none tracking-tight text-white/10">
          404
        </h1>

        <div className="-mt-12 sm:-mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to the IEM IT homepage.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#10051a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
            >
              Back to Home
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Explore IEM IT
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
