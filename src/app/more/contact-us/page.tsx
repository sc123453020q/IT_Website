import Image from "next/image";
import Back from "@/components/common/Carousel/Back";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Back title="Contact Us" />
      <section className="mx-auto grid max-w-[1280px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-28">
        <div>
          <span className="site-section-kicker">Visit or write to us</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-content sm:text-4xl">Department of Information Technology</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-content-muted">We are based at the Institute of Engineering & Management in Salt Lake, Kolkata.</p>
          <div className="mt-12 space-y-8 border-t border-border pt-8">
            <div><h3 className="site-section-kicker">Address</h3><p className="mt-2 text-lg leading-8 text-content">Gurukul, Y-12, Block EP, Sector V<br />Salt Lake Electronics Complex<br />Kolkata 700091, West Bengal</p></div>
            <div><h3 className="site-section-kicker">Email</h3><a href="mailto:admissions@iem.edu.in" className="mt-2 inline-block border-b border-primary pb-1 text-lg text-content hover:text-primary">admissions@iem.edu.in</a></div>
          </div>
        </div>
        <div className="relative min-h-[340px] bg-surface-muted lg:min-h-[540px]"><Image src="/images/contact_us.jpg" alt="IEM campus" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
      </section>
    </main>
  );
}
