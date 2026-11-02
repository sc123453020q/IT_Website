import Back from "@/components/common/Carousel/Back";

const syllabusUrl = "/syllabus/B.Tech-IT2021-Detailed%20Syllabus.pdf";

export default function SyllabusPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Back title="Syllabus" />
      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-28" aria-labelledby="syllabus-title">
        <div className="grid gap-10 border-t border-content/30 pt-6 lg:grid-cols-[.43fr_.57fr] lg:gap-20">
          <div>
            <p className="site-section-kicker">Academic document / B.Tech IT</p>
            <h2 id="syllabus-title" className="mt-5 text-[clamp(2.8rem,4.7vw,5.2rem)] font-semibold leading-[1.02] tracking-[-.055em] text-content">A closer look at the course.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-content-muted">The detailed 2021 syllabus includes the semester structure, courses and academic framework for B.Tech Information Technology.</p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              <a href={syllabusUrl} download className="border-b-2 border-primary pb-2 text-sm font-semibold text-content hover:text-primary">Download syllabus <span aria-hidden="true">&darr;</span></a>
              <a href={syllabusUrl} target="_blank" rel="noopener noreferrer" className="border-b-2 border-content/30 pb-2 text-sm font-semibold text-content hover:text-primary">Open PDF in new tab <span aria-hidden="true">&nearr;</span></a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid border border-border bg-[#f3f1eb] lg:grid-cols-[300px_1fr]">
          <div className="flex min-h-[360px] flex-col justify-between bg-[#18263b] p-7 text-white sm:p-9">
            <p className="border-t border-white/40 pt-4 text-xs font-semibold uppercase tracking-[.18em] text-white/70">IEM / IT / Document 01</p>
            <div><span className="text-xs font-semibold uppercase tracking-[.18em] text-[#ff9ba3]">2021 curriculum</span><h3 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight">Detailed<br />Syllabus</h3><p className="mt-5 text-sm leading-6 text-white/70">Bachelor of Technology<br />Information Technology</p></div>
            <p className="border-t border-white/40 pt-4 text-xs text-white/60">For viewing and download</p>
          </div>
          <div className="min-w-0">
            <iframe title="B.Tech IT detailed 2021 syllabus" src={`${syllabusUrl}#view=FitH`} className="h-[70vh] min-h-[560px] w-full bg-white" />
            <p className="border-t border-border px-5 py-4 text-sm text-content-muted">If the preview is unavailable on your device, <a href={syllabusUrl} className="font-semibold text-primary underline">open the PDF directly</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
