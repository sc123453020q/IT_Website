import Image from "next/image";

export default function NaacCertificate() {
  return (
    <section className="border-t border-content/15 bg-[#f2f0eb] px-5 py-20 sm:px-8 md:py-28" aria-labelledby="accreditation-title">
      <div className="mx-auto grid max-w-[1320px] gap-12 border-t border-content/30 pt-6 lg:grid-cols-[.55fr_.45fr] lg:gap-20">
        <div className="flex flex-col justify-between">
          <div>
            <p className="site-section-kicker">Institutional record / NAAC</p>
            <h2 id="accreditation-title" className="mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-.06em] text-content">
              A record of quality assurance.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-content-muted">
              The National Assessment and Accreditation Council awarded the Institute of Engineering and Management an A grade in the accreditation cycle documented here. This is an institute-level certificate, shared as part of our history.
            </p>
          </div>
          <div className="mt-12 border-t border-content/30 pt-6">
            <div>
              <span className="block text-3xl font-semibold tracking-tight text-content">A grade</span>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-[.14em] text-content-muted">NAAC certificate</span>
            </div>
          </div>
        </div>
        <a href="/images/naac_certificate.jpg" target="_blank" rel="noopener noreferrer" className="group block" aria-label="Open the 2017 to 2022 NAAC certificate image in a new tab">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[450px] overflow-hidden border border-content/20 bg-white shadow-[12px_12px_0_#ddd8cf]">
            <Image src="/images/naac_certificate.jpg" alt="NAAC certificate for IEM, valid until June 8, 2022" fill sizes="(max-width: 1024px) 90vw, 450px" className="object-contain transition-transform duration-500 group-hover:scale-[1.025]" />
          </div>
          <span className="mt-6 block text-center text-sm font-semibold text-content group-hover:text-primary">View certificate <span aria-hidden="true">↗</span></span>
        </a>
      </div>
    </section>
  );
}
