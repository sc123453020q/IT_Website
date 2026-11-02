const milestones = [
  { marker: "1999", title: "The department begins", text: "Information Technology was established at IEM Salt Lake, Kolkata, with its first B.Tech cohort." },
  { marker: "2011", title: "Postgraduate study follows", text: "The department introduced its M.Tech programme and continued expanding its academic work." },
  { marker: "Today", title: "Learning through practice", text: "Laboratories, projects, internships and student chapters extend learning beyond lectures." },
] as const;

export default function AboutProgram() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 md:py-28" aria-labelledby="about-program-heading">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 border-t border-content/30 pt-6 lg:grid-cols-[.43fr_.57fr] lg:gap-20">
          <div><p className="site-section-kicker">Our story / Since 1999</p><h2 id="about-program-heading" className="mt-5 max-w-lg text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[1.02] tracking-[-.055em] text-content">Built to turn ideas into work.</h2></div>
          <div className="max-w-2xl space-y-5 self-end text-lg leading-8 text-content-muted">
            <p>The Department of Information Technology began with a commitment to value-based education and research. It has grown from its first cohort into a community of students and faculty working across software, data and digital systems.</p>
            <p>Alongside its academic programmes, the department encourages practical projects, internships, student chapters and entrepreneurial thinking. These experiences help students connect technical knowledge with the people and problems it can serve.</p>
          </div>
        </div>
        <div className="mt-16 grid border-t border-content/25 lg:grid-cols-3">
          {milestones.map((item, index) => (
            <div key={item.marker} className="border-b border-content/20 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <p className="text-sm font-semibold text-primary">0{index + 1} / {item.marker}</p>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-content">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-content-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
