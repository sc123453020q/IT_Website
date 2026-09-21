"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Course & Curriculum", 
    href: "/course-curriculum",
    dropdown: [
      { label: "Infrastructure", href: "/course-curriculum/infrastructure" },
      { label: "Library", href: "/course-curriculum/library" }
    ]
  },
  { 
    label: "Events", 
    href: "/events",
    dropdown: [
      { label: "Conference", href: "/events/conference" },
      { label: "Seminars and Lectures", href: "/events/seminars-and-lectures" },
      { label: "Faculty Development Program", href: "/events/faculty-development-program" },
      { label: "Workshops", href: "/events/workshops" },
      { label: "Event Reports", href: "/events/event-reports" },
      { label: "Newsletter", href: "/events/newsletter" },
      { label: "Magazine", href: "/events/magazine" },
      { label: "NSS & CSR Activity", href: "/events/nss-csr-activity" },
      { label: "Outreach Activity", href: "/events/outreach-activity" }
    ]
  },
  { 
    label: "Student's Corner", 
    href: "/students-corner",
    dropdown: [
      { label: "Placement", href: "/students-corner/placement" },
      { label: "Academic ERP", href: "/students-corner/academic-erp" },
      { label: "Student Scholarship", href: "/students-corner/student-scholarship" },
      { label: "CGC", href: "/students-corner/cgc" },
      { label: "ADC", href: "/students-corner/adc" },
      { label: "Alumni", href: "/students-corner/alumni" },
      { label: "Benefits", href: "/students-corner/benefits" },
      { label: "Batch Photography", href: "/students-corner/batch-photography" },
      { label: "Tech-Fest", href: "/students-corner/tech-fest" },
      { label: "Student's Achievement", href: "/students-corner/students-achievement" },
      { label: "Student Branch Chapter", href: "/students-corner/student-branch-chapter" },
      { label: "Industrial Visit", href: "/students-corner/industrial-visit" },
      { label: "MatLab Campus License", href: "/students-corner/matlab-campus-license" },
      { label: "Photo Gallery", href: "/students-corner/photo-gallery" },
      { label: "Extra Curricular Activity", href: "/students-corner/extra-curricular-activity" }
    ]
  },
  { 
    label: "Research", 
    href: "/research",
    dropdown: [
      { label: "IEDC-IT", href: "/research/iedc-it" },
      { label: "AMRL Facility", href: "/research/amrl-facility" },
      { label: "IoT Research Lab", href: "/research/iot-research-lab" },
      { label: "Publications", href: "/research/publications" },
      { label: "Patent", href: "/research/patent" },
      { label: "MoU", href: "/research/mou" },
      { label: "Departmental Journal", href: "/research/departmental-journal" }
    ]
  },
  { label: "Feedback", href: "/feedback" },
  { label: "Calendar", href: "/calendar" },
  { 
    label: "More", 
    href: "#more",
    dropdown: [
      { label: "Contact Us", href: "/more/contact-us" },
      { label: "Innovative Teaching", href: "/more/innovative-teaching" },
      { label: "Alumni", href: "/more/alumni" },
      { label: "Gallery", href: "/more/gallery" }
    ]
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isSolid = scrolled || !isHomePage;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid 
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-2.5 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          {/* ================= BRAND ================= */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center">
              <img
                src="/iem_logo_.png"
                alt="IEM Logo"
                className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-sm md:text-base leading-tight tracking-tight transition-colors duration-500 ${isSolid ? 'text-content' : 'text-white'}`}>
                Department of<br className="hidden md:block" /> Information Technology
              </span>
              <span className={`text-[10px] uppercase tracking-widest hidden md:block transition-colors duration-500 ${isSolid ? 'text-content-muted' : 'text-white/70'}`}>
                Institute of Engineering and Management
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1.5
                    ${isSolid 
                      ? (isActive(item.href) ? "text-primary bg-primary/5" : "text-content/70 hover:text-content hover:bg-black/5") 
                      : (isActive(item.href) ? "text-white bg-white/20 backdrop-blur-md" : "text-white/80 hover:text-white hover:bg-white/10")
                    }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <LuChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180 opacity-60" />
                  )}
                </Link>
                
                {/* MEGA MENU / DROPDOWN */}
                {item.dropdown && (
                  <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50 pt-2">
                    <div className={`relative bg-white backdrop-blur-3xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-3 overflow-hidden ${
                      item.dropdown.length > 8 ? "w-max min-w-[32rem]" : "w-max min-w-[16rem]"
                    }`}>
                      <div className={`max-h-[65vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black/10 pr-2 -mr-2 ${
                        item.dropdown.length > 8 ? "grid grid-cols-2 gap-x-4 gap-y-1" : "flex flex-col gap-1"
                      }`}>
                        {item.dropdown.map(drop => (
                          <Link 
                            key={drop.href} 
                            href={drop.href}
                            className="group/link flex items-center justify-between px-4 py-3 text-[14px] font-medium text-content/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                          >
                            <span>{drop.label}</span>
                            <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-primary">
                              &rarr;
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ================= CTA & MOBILE MENU ================= */}
          <div className="flex items-center gap-3">
            <Link 
              href="/portal" 
              className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                isSolid 
                  ? "text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5" 
                  : "text-primary bg-white hover:bg-white/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              }`}
            >
              Student Portal
            </Link>

            <button
              type="button"
              className={`lg:hidden p-2.5 rounded-full transition-colors ${
                isSolid ? "text-content hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <LuX className="text-xl" /> : <LuMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-3xl z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto pb-32">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <div 
                key={item.href} 
                className="flex flex-col border-b border-black/5 pb-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => !item.dropdown && setMenuOpen(false)}
                  className={`py-3 text-2xl font-semibold tracking-tight transition-colors flex items-center justify-between ${
                    isActive(item.href) ? "text-primary" : "text-content/80 hover:text-content"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <LuChevronDown className="text-lg opacity-40" />}
                </Link>
                {item.dropdown && (
                  <div className="flex flex-col pl-4 mt-2 gap-3 mb-2">
                    {item.dropdown.map(drop => (
                      <Link 
                        key={drop.href} 
                        href={drop.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg font-medium text-content/60 hover:text-content transition-colors"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-10">
            <Link 
              href="/portal" 
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-content rounded-2xl shadow-xl shadow-black/10 active:scale-[0.98] transition-all"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}