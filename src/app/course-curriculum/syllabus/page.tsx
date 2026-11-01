import { LuDownload, LuExternalLink, LuFileText } from "react-icons/lu";
import Back from "@/components/common/Carousel/Back";

const syllabusUrl = "/syllabus/B.Tech-IT2021-Detailed%20Syllabus.pdf";

export default function SyllabusPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Back title="Syllabus" />

      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-6 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-black/5 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">Course & Curriculum</span>
            <h2 className="text-3xl font-semibold tracking-tight text-content md:text-5xl">B.Tech Information Technology.</h2>
            <p className="mt-5 text-lg font-light leading-relaxed tracking-wide text-content-muted">The detailed 2021 curriculum, including the semester structure, course content and academic framework.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href={syllabusUrl} download className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"><LuDownload /> Download PDF</a>
            <a href={syllabusUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-content transition-opacity hover:opacity-70">Open full screen <LuExternalLink /></a>
          </div>
        </div>

        <div className="mb-5 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-surface-alt text-primary"><LuFileText /></span>
          <div><h3 className="font-semibold text-content">Detailed syllabus</h3><p className="text-sm text-content-muted">B.Tech IT · 2021 curriculum</p></div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-surface-alt">
          <iframe title="B.Tech IT detailed syllabus" src={`${syllabusUrl}#view=FitH`} className="h-[72vh] min-h-[560px] w-full" />
          <div className="border-t border-black/5 p-5 text-center text-sm text-content-muted">If the preview is unavailable on your device, <a href={syllabusUrl} className="font-semibold text-primary">open or download the PDF</a>.</div>
        </div>
        </div>
      </section>
    </main>
  );
}
