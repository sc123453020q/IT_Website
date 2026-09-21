"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";

export default function HODMessage() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Profile Column */}
          <motion.div 
            className="w-full lg:w-1/3 flex flex-col items-center text-center sticky top-32"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 rounded-full overflow-hidden transition-all duration-700 shadow-xl">
              <Image
                src="/images/hod_img.jpg"
                alt="Prof. Dr. Moutushi Singh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 300px"
              />
            </div>
            
            <h3 className="text-3xl font-semibold text-content mb-2 tracking-tight">
              Prof. Dr. Moutushi Singh
            </h3>
            <p className="text-content-muted font-medium mb-6 tracking-wide">
              Head of the Department
            </p>
            <Link 
              href="mailto:moutushi.singh@iem.edu.in"
              className="inline-flex items-center gap-2 text-content-muted hover:text-content transition-colors text-sm bg-surface-alt hover:bg-black/5 px-6 py-3 rounded-full font-medium"
            >
              <LuMail className="text-lg" /> moutushi.singh@iem.edu.in
            </Link>
          </motion.div>

          {/* Message Column */}
          <motion.div 
            className="w-full lg:w-2/3 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">
              Leadership
            </span>
            <h2 className="text-5xl md:text-6xl font-semibold text-content mb-12 tracking-tight leading-tight">
              Vision & Leadership.
            </h2>
            
            <div className="space-y-8 text-xl text-content/80 leading-relaxed font-light tracking-wide">
              <p className="text-3xl text-content font-medium leading-snug tracking-tight mb-12 border-l-4 border-primary pl-8">
                I invite you to explore our academic programs, state of the art facilities, and dedicated faculty. It will give you our clear intention towards excellence.
              </p>
              
              <p>
                It gives me immense pride and pleasure to introduce the Department of Information Technology, founded in 1999. The Bachelor degree program was started in 1999 and the Master degree program in 2011. 
              </p>
              <p>
                The department focuses on strong academic programs based on both theoretical and practical knowledge. We are committed to students by offering short-term courses and pre-placement training classes that foster critical and analytical thinking and build the necessary skills to succeed in the industry.
              </p>
              <p>
                Thanks to the efforts of our researchers, teachers, and our students too, we persevere to play a primary role in our discipline, both nationally and internationally.
              </p>
            </div>

            <div className="mt-16 pt-8 flex flex-col items-end text-right border-t border-black/5">
              <span className="text-content-muted text-xs uppercase tracking-widest mb-2 font-semibold">With best wishes</span>
              <span className="text-2xl font-semibold text-content tracking-tight">Moutushi Singh</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}