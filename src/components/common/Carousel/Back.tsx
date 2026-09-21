'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type BackProps = {
  title: string;
};

export default function Back({ title }: BackProps) {
  const pathname = usePathname();
  const path = pathname.split('/')[1] || 'home';

  return (
    <section className="relative w-full pt-48 pb-24 md:pt-56 md:pb-32 bg-surface flex flex-col items-center justify-center text-center px-4 border-b border-black/5 overflow-hidden">
      
      {/* Decorative blurred background element (optional, very subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-surface-alt border border-black/5 text-content-muted text-xs font-semibold tracking-widest uppercase">
          Home <span className="opacity-50">/</span> <span className="text-content">{path}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-content tracking-tighter leading-[1.1]">
          {title}.
        </h1>
      </motion.div>
    </section>
  );
}
