'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LuFacebook, LuInstagram, LuYoutube, LuChevronRight, LuMapPin, LuMail, LuSend } from 'react-icons/lu';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('footerScrollPosition');
    const fromFooter = sessionStorage.getItem('fromFooter');

    if (savedPosition && fromFooter === 'true') {
      setTimeout(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }, 100);
      sessionStorage.removeItem('fromFooter');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  const handleNavigate = (path: string) => {
    sessionStorage.setItem('footerScrollPosition', window.scrollY.toString());
    sessionStorage.setItem('fromFooter', 'true');
    router.push(path);
  };

  return (
    <div className="flex flex-col mt-20">
      {/* Newsletter Section - Apple Style */}
      <section className="bg-content text-white py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Stay Connected.
            </h2>
            <p className="text-white/60 font-medium tracking-wide">
              Get the latest updates on research, events, and academic achievements.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center max-w-md ml-auto relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-white/10 backdrop-blur-md text-white placeholder-white/40 rounded-2xl px-6 py-4 focus:outline-none focus:bg-white/20 transition-colors border border-white/10"
            />
            <button className="absolute right-2 bg-white text-content hover:bg-gray-100 p-2.5 rounded-xl transition-colors flex items-center justify-center">
              <LuSend className="text-lg" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-surface-alt pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-semibold text-content mb-1 tracking-tight">
              Department of <br />Information Technology
            </h3>
            <p className="text-content-muted font-semibold tracking-widest text-[10px] uppercase mb-6">
              Institute of Engineering & Management
            </p>
            <p className="text-content-muted text-sm leading-relaxed mb-8 font-medium">
              Empowering students through cutting-edge technology, innovative research, and industry-oriented learning since 1999.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-content-muted hover:bg-black/10 hover:text-content transition-colors">
                <LuFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-content-muted hover:bg-black/10 hover:text-content transition-colors">
                <LuInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-content-muted hover:bg-black/10 hover:text-content transition-colors">
                <LuYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-semibold text-content mb-6 tracking-widest uppercase">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Academics', path: '/academics' },
                { label: 'Students', path: '/students' },
                { label: 'Faculty', path: '/faculty' },
                { label: 'Innovation', path: '/innovation_initiatives' }
              ].map((link) => (
                <li key={link.path}>
                  <button 
                    onClick={() => handleNavigate(link.path)}
                    className="text-content-muted hover:text-content font-medium transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <LuChevronRight className="text-xs opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-content mb-6 tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'IEM Website', url: 'https://iem.edu.in/' },
                { label: 'IEM Learning', url: 'https://www.iemlearning.com/' },
                { label: "Student's Forum", url: 'https://iem-iete-students-forum.netlify.app/' }
              ].map((link) => (
                <li key={link.url}>
                  <Link 
                    href={link.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-content-muted hover:text-content font-medium transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <LuChevronRight className="text-xs opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-content mb-6 tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <LuMapPin className="text-content-muted text-lg flex-shrink-0 mt-0.5" />
                <span className="text-content-muted text-sm leading-relaxed font-medium">
                  Gurukul, Y-12, Block-EP, Sector-V, Salt Lake Electronics Complex, Kolkata – 700 091
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <LuMail className="text-content-muted text-lg flex-shrink-0" />
                <a href="mailto:admissions@iem.edu.in" className="text-content-muted font-medium text-sm hover:text-content transition-colors">
                  admissions@iem.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-content-muted font-medium text-xs tracking-wide">
            © {new Date().getFullYear()} IEM IT Department. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium tracking-wide text-content-muted">
            <Link href="#" className="hover:text-content transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-content transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
