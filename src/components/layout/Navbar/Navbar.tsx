"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

const navItems = [
  { 
    label: "Home", 
    href: "/",
    dropdown: [
      { label: "About", href: "/about" }
    ]
  },
  { 
    label: "Course & Curriculum", 
    href: "#",
    dropdown: [
      { label: "Course Curriculum", href: "/course-curriculum/curriculum" },
      { label: "Routine", href: "/course-curriculum/routine" },
      { label: "Infrastructure", href: "/course-curriculum/infrastructure" },
      { label: "Library", href: "https://iemgurukul-opac.l2c2.co.in/" }
    ]
  },
  { label: "Faculty", href: "/faculty" },
  { 
    label: "Student's Corner", 
    href: "#",
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
    href: "#",
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
  { 
    label: "Events", 
    href: "#",
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
    label: "More", 
    href: "#",
    dropdown: [
      { label: "Contact Us", href: "/more/contact-us" },
      { label: "Innovative Teaching", href: "/more/innovative-teaching" },
      { label: "Alumni", href: "/more/alumni" },
      { label: "Gallery", href: "/more/gallery" },
      { label: "Calendar", href: "/calendar" }
    ]
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

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

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.href && item.href !== "#") {
      if (item.href === "/" && pathname === "/") return true;
      if (item.href !== "/" && pathname.startsWith(item.href)) return true;
    }
    if (item.dropdown) {
      return item.dropdown.some((drop) => pathname.startsWith(drop.href));
    }
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid 
          ? "bg-white/95 backdrop-blur-2xl border-b border-black/10 py-3.5 shadow-md" 
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1440px]">
        <div className="flex items-center justify-between">
          
          {/* ================= BRAND ================= */}
          <Link href="/" className="flex items-center gap-3.5 group" onClick={() => setMenuOpen(false)}>
            <div className="w-12 h-12 md:w-13 md:h-13 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)] flex items-center justify-center border border-black/5">
              <img
                src="/iem_logo_.png"
                alt="IEM Logo"
                className="w-9 h-9 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-semibold text-base md:text-lg leading-tight tracking-tight transition-colors duration-300 ${isSolid ? 'text-content' : 'text-white'}`}>
                Department of<br className="hidden md:block" /> Information Technology
              </span>
              <span className={`text-[11px] uppercase tracking-wider hidden md:block font-medium mt-0.5 transition-colors duration-300 ${isSolid ? 'text-content-muted' : 'text-white/80'}`}>
                Institute of Engineering and Management
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.dropdown && item.href === "#") {
                      e.preventDefault();
                    }
                  }}
                  className={`px-4 py-2.5 rounded-full font-semibold text-base transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap
                    ${isSolid 
                      ? (isActive(item) ? "text-primary bg-primary/10" : "text-content/80 hover:text-primary hover:bg-black/5") 
                      : (isActive(item) ? "text-white bg-white/25 backdrop-blur-md" : "text-white/90 hover:text-white hover:bg-white/15")
                    }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <LuChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                  )}
                </Link>
                
                {/* MEGA MENU / DROPDOWN WITH GAP BRIDGE */}
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-out transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                    <div className={`relative bg-white/98 backdrop-blur-3xl rounded-2xl shadow-[0_15px_50px_-10px_rgba(0,0,0,0.18)] ring-1 ring-black/10 p-3.5 overflow-hidden before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-[''] ${
                      item.dropdown.length > 8 ? "w-max min-w-[34rem]" : "w-max min-w-[17rem]"
                    }`}>
                      <div className={`max-h-[70vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black/15 pr-2 -mr-1 ${
                        item.dropdown.length > 8 ? "grid grid-cols-2 gap-x-4 gap-y-1" : "flex flex-col gap-1"
                      }`}>
                        {item.dropdown.map(drop => {
                          const isExternal = drop.href.startsWith("http");
                          return (
                            <Link 
                              key={drop.href} 
                              href={drop.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className="group/link flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-content/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-150"
                            >
                              <span>{drop.label}</span>
                              <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200 text-primary">
                                &rarr;
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className={`lg:hidden p-3 rounded-full transition-colors ${
                isSolid ? "text-content hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <LuX className="text-2xl" /> : <LuMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div 
        className={`lg:hidden fixed inset-0 top-[76px] bg-white/98 backdrop-blur-3xl z-40 transition-all duration-300 ease-out ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto pb-32">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <div 
                key={item.label} 
                className="flex flex-col border-b border-black/5 pb-2"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.dropdown ? (
                  <button
                    type="button"
                    onClick={() => {
                      setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label);
                    }}
                    className={`w-full py-3.5 text-2xl font-semibold tracking-tight transition-colors flex items-center justify-between text-left ${
                      isActive(item) ? "text-primary" : "text-content/85 hover:text-content"
                    }`}
                  >
                    <span>{item.label}</span>
                    <LuChevronDown className={`text-xl opacity-50 transition-transform duration-300 ${openMobileDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`w-full py-3.5 text-2xl font-semibold tracking-tight transition-colors flex items-center justify-between text-left ${
                      isActive(item) ? "text-primary" : "text-content/85 hover:text-content"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
                
                {item.dropdown && (openMobileDropdown === item.label || openMobileDropdown === null) && (
                  <div className="flex flex-col pl-4 mt-1 gap-3 mb-2 border-l-2 border-primary/20 ml-2">
                    {item.dropdown.map(drop => {
                      const isExternal = drop.href.startsWith("http");
                      return (
                        <Link 
                          key={drop.href} 
                          href={drop.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          onClick={() => setMenuOpen(false)}
                          className="text-lg font-semibold text-content/70 hover:text-primary transition-colors py-1"
                        >
                          {drop.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}