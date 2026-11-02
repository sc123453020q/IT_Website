"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Academics",
    href: "#",
    dropdown: [
      { label: "Course Curriculum", href: "/course-curriculum/curriculum" },
      { label: "Syllabus", href: "/course-curriculum/syllabus" },
      { label: "Routine", href: "/course-curriculum/routine" },
      { label: "Infrastructure", href: "/course-curriculum/infrastructure" },
      { label: "Library", href: "https://iemgurukul-opac.l2c2.co.in/" }
    ]
  },
  { label: "Faculty", href: "/faculty" },
  { 
    label: "Students",
    href: "/students",
    dropdown: [
      { label: "Placement", href: "/students-corner/placement" },
      { label: "Academic ERP", href: "/students-corner/academic-erp" },
      { label: "Student Scholarship", href: "/students-corner/student-scholarship" },
      { label: "CGC", href: "/students-corner/cgc" },
      { label: "ADC", href: "/students-corner/adc" },
      { label: "Alumni", href: "/students-corner/alumni" },
      { label: "Benefits", href: "/students-corner/benefits" },
      { label: "Batch Photography", href: "/students-corner/batch-photography" },
      { label: "Student's Achievement", href: "/students-corner/students-achievement" },
      { label: "Student Branch Chapter", href: "/students-corner/student-branch-chapter" },
      { label: "Industrial Visit", href: "/students-corner/industrial-visit" },
      { label: "MatLab Campus License", href: "/students-corner/matlab-campus-license" },
      { label: "Extra Curricular Activity", href: "/students-corner/extra-curricular-activity" }
    ]
  },
  { 
    label: "Research", 
    href: "/research",
    dropdown: [
      { label: "Publications", href: "/research/publications" },
      { label: "Patent", href: "/research/patent" },
      { label: "MoU", href: "/research/mou" }
    ]
  },
  { label: "Feedback", href: "/feedback" },
  { 
    label: "Events", 
    href: "/events",
    dropdown: [
      { label: "Seminars & Workshops", href: "/events/seminars-workshops" },
      { label: "Competitions", href: "/events/competitions" },
      { label: "Departmental Magazines", href: "/events/departmental-magazines" },
      { label: "Distinguished Lecture Series", href: "/events/distinguished-lectures" },
      { label: "Faculty Development Programs", href: "/events/faculty-development-programs" },
      { label: "Hackathons", href: "/events/hackathons" },
      { label: "Industrial Tours", href: "/events/industrial-tours" },
      { label: "Student Chapter & Club Activities", href: "/events/student-chapter-activities" }
    ]
  },
  { 
    label: "More", 
    href: "#",
    dropdown: [
      { label: "Contact Us", href: "/more/contact-us" },
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
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileDropdown(null);
    setOpenDesktopDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid 
          ? "border-b border-border bg-surface/95 py-2.5 backdrop-blur-md"
          : "border-b border-white/20 bg-[#101827]/65 py-2.5 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 2xl:gap-5">
          
          {/* ================= BRAND ================= */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden bg-white p-1">
              <img
                src="/iem_logo_.png"
                alt="IEM Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-[13px] font-semibold leading-tight tracking-tight transition-colors duration-300 ${isSolid ? 'text-content' : 'text-white'}`}>
                Department of<br /> Information Technology
              </span>
              <span className={`mt-0.5 hidden text-[9px] font-medium uppercase tracking-wide transition-colors duration-300 sm:block ${isSolid ? 'text-content-muted' : 'text-white/80'}`}>
                Institute of Engineering & Management
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav aria-label="Primary navigation" className="hidden min-w-0 items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <div key={item.label} className="relative group" onMouseLeave={() => setOpenDesktopDropdown(null)}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.dropdown && item.href === "#") {
                      e.preventDefault();
                      setOpenDesktopDropdown(openDesktopDropdown === item.label ? null : item.label);
                    }
                  }}
                  className={`flex cursor-pointer items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[14px] font-medium transition-colors duration-200
                    ${isSolid 
                      ? (isActive(item) ? "text-primary" : "text-content hover:text-primary")
                      : (isActive(item) ? "text-white" : "text-white/85 hover:text-white")
                    }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <LuChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                  )}
                </Link>
                
                {/* MEGA MENU / DROPDOWN WITH GAP BRIDGE */}
                {item.dropdown && (
                  <div className={`absolute top-full z-50 pt-2 opacity-0 invisible pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto ${openDesktopDropdown === item.label ? "!visible !opacity-100 !pointer-events-auto" : ""} ${["Events", "More"].includes(item.label) ? "right-0" : "left-0"}`}>
                    <div className={`max-w-[min(34rem,calc(100vw-2rem))] border border-border bg-surface p-2 shadow-lg ${
                      item.dropdown.length > 8 ? "w-[30rem]" : "w-[19rem]"
                    }`}>
                      <div className={`max-h-[70vh] overflow-y-auto ${
                        item.dropdown.length > 8 ? "grid grid-cols-2 gap-x-2" : "flex flex-col"
                      }`}>
                        {item.dropdown.map(drop => {
                          const isExternal = drop.href.startsWith("http");
                          return (
                            <Link 
                              key={drop.href} 
                              href={drop.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className="group/link flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium text-content transition-colors hover:bg-surface-alt hover:text-primary"
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
              className={`p-3 transition-colors xl:hidden ${
                isSolid ? "text-content hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <LuX className="text-2xl" /> : <LuMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div 
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-surface transition-all duration-300 ease-out xl:hidden ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[760px] flex-col overflow-y-auto px-5 pb-32 pt-4 sm:px-8">
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
                    className={`flex w-full items-center justify-between py-3 text-left text-xl font-semibold tracking-tight transition-colors ${
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
                    className={`flex w-full items-center justify-between py-3 text-left text-xl font-semibold tracking-tight transition-colors ${
                      isActive(item) ? "text-primary" : "text-content/85 hover:text-content"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
                
                {item.dropdown && openMobileDropdown === item.label && (
                  <div className="flex flex-col pl-4 mt-1 gap-3 mb-2 border-l-2 border-primary/20 ml-2">
                    {item.href !== "#" && (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-1 text-base font-semibold text-primary transition-colors hover:underline"
                      >
                        {item.label} overview
                      </Link>
                    )}
                    {item.dropdown.map(drop => {
                      const isExternal = drop.href.startsWith("http");
                      return (
                        <Link 
                          key={drop.href} 
                          href={drop.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          onClick={() => setMenuOpen(false)}
                          className="py-1 text-base font-semibold text-content/70 transition-colors hover:text-primary"
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
    </>
  );
}
