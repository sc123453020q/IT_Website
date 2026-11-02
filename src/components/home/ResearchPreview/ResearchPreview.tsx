import Link from "next/link";

const papers = [
  { topic: "A Novel Handoff Algorithm for 5G", authors: "Prithwijit Mukherjee, Sanchita Ghosh, Anisha Halder Roy" },
  { topic: "A Blockchain-Based Secure Approach to Access Genomic Data using Smart Contracts", authors: "Puja Das, Moutushi Singh, Kajari Sur" },
  { topic: "The Visual Assistant — Image-to-Speech Generator", authors: "Amrit Raj, Sanchita Ghosh, Bharat Gupta" },
] as const;

export default function ResearchPreview() {
  return (
    <section className="bg-[#18263b] px-5 py-20 text-white sm:px-8 md:py-28" aria-labelledby="research-preview-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 border-t border-white/30 pt-6 lg:grid-cols-[.43fr_.57fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#ff9ba3]">Research / Selected work</p>
            <h2 id="research-preview-title" className="mt-5 max-w-lg text-[clamp(2.8rem,4.8vw,5.3rem)] font-semibold leading-[1.03] tracking-[-.055em]">Questions worth pursuing.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/65">A small selection from the department’s recorded conference publications. Explore the full catalogue for more work by faculty and students.</p>
            <Link href="/research/publications" className="mt-9 inline-block border-b border-[#ff9ba3] pb-2 text-sm font-semibold hover:text-[#ffb7bc]">Explore publications <span aria-hidden="true">&rarr;</span></Link>
          </div>
          <ol className="border-t border-white/25">
            {papers.map((paper, index) => (
              <li key={paper.topic} className="grid gap-5 border-b border-white/25 py-7 sm:grid-cols-[56px_1fr] sm:py-9">
                <span className="text-sm font-semibold text-[#ff9ba3]">0{index + 1}</span>
                <div><h3 className="max-w-2xl text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{paper.topic}</h3><p className="mt-3 text-sm leading-6 text-white/55">{paper.authors}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
