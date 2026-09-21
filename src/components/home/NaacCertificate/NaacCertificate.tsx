"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuAward } from "react-icons/lu";

export default function NaacCertificate() {
  return (
    <section className="py-32 bg-white border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Certificate Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2rem] bg-surface-muted">
              <Image
                src="/images/naac_certificate.jpg"
                alt="NAAC Accreditation Certificate"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <LuAward className="text-2xl text-primary" />
              <span className="text-primary font-bold tracking-widest text-xs uppercase block">
                Quality Assurance
              </span>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-semibold text-content mb-8 leading-[1.1] tracking-tight">
              A commitment to excellence.
            </h3>
            
            <div className="space-y-6 text-xl text-content/80 leading-relaxed font-light tracking-wide mb-16">
              <p>
                The Department of Information Technology at the Institute of Engineering and Management, Salt Lake, Kolkata came into existence in 1999 with a vision to produce creators of creative technological solutions for the benefit of Engineering, Science and Technology and the Nation on a larger scale.
              </p>
              <p>
                The department has always strived to fulfill its mission to impart value-based education and promote research and development at the international level. The department has received accreditation twice by the NBA and has since been running its programs successfully.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/5">
              <div className="flex flex-col">
                <strong className="text-4xl md:text-5xl font-semibold text-content mb-2 tracking-tighter">1999</strong>
                <span className="text-content-muted text-xs uppercase tracking-widest font-semibold">Founded</span>
              </div>
              <div className="flex flex-col border-l border-black/5 pl-8">
                <strong className="text-4xl md:text-5xl font-semibold text-content mb-2 tracking-tighter">2&times;</strong>
                <span className="text-content-muted text-xs uppercase tracking-widest font-semibold">NBA Accredit.</span>
              </div>
              <div className="flex flex-col border-l border-black/5 pl-8">
                <strong className="text-4xl md:text-5xl font-semibold text-content mb-2 tracking-tighter">120</strong>
                <span className="text-content-muted text-xs uppercase tracking-widest font-semibold">UG Intake</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}