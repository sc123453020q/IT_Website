'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuArrowUp } from 'react-icons/lu';

export default function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollUp}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-content hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Back to top"
        >
          <LuArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}