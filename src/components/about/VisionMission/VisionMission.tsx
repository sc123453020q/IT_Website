const missions = [
  {
    title: "Experiential education",
    text: "Deliver multidisciplinary, outcome-based IT education that connects theory with practice and supports ethical, socially responsible professional work.",
  },
  {
    title: "Research and transformation",
    text: "Foster applied research, industry collaboration and entrepreneurship in emerging areas of Information Technology.",
  },
  {
    title: "Continuous improvement",
    text: "Keep developing the curriculum, infrastructure and faculty expertise through stakeholder engagement and contemporary teaching practice.",
  },
] as const;

export default function VisionMission() {
  return (
    <section aria-labelledby="vision-heading">
      <div className="bg-[#18263b] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 border-t border-white/30 pt-6 lg:grid-cols-[.35fr_.65fr] lg:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#ff9ba3]">01 / Our vision</p><h2 id="vision-heading" className="mt-5 text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[1] tracking-[-.055em]">Purpose, made practical.</h2></div>
          <div className="max-w-3xl self-end font-serif text-[clamp(1.5rem,2.5vw,2.7rem)] leading-[1.3] text-white/90">
            <p>To be a distinguished Department of Information Technology advancing digital solutions through experiential learning, interdisciplinary collaboration and research excellence.</p>
            <p className="mt-7 text-white/65">To develop responsible technology leaders who use data, intelligent systems and digital infrastructure for inclusive, sustainable growth.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f0eb] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px] border-t border-content/30 pt-6">
          <div className="grid gap-8 lg:grid-cols-[.35fr_.65fr] lg:gap-20"><div><p className="site-section-kicker">02 / Our mission</p><h3 className="mt-5 text-[clamp(2.8rem,4.6vw,5.2rem)] font-semibold leading-[1] tracking-[-.055em] text-content">How we move forward.</h3></div><p className="max-w-2xl self-end text-lg leading-8 text-content-muted">The mission connects teaching, research and continuous improvement to the work of preparing students for a changing field.</p></div>
          <div className="mt-12 border-t border-content/25">
            {missions.map((mission, index) => (
              <div key={mission.title} className="grid gap-4 border-b border-content/25 py-7 md:grid-cols-[90px_1fr_1.4fr] md:gap-8 md:py-9">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span><h4 className="text-xl font-semibold tracking-tight text-content sm:text-2xl">{mission.title}</h4><p className="max-w-xl text-base leading-7 text-content-muted">{mission.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
