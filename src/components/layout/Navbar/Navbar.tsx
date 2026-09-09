"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import "./navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
  { label: "Innovation", href: "/innovation" },
  { label: "Students", href: "/students" },
  { label: "Events", href: "/events" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">

        {/* ================= BRAND ================= */}

        <Link
          href="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <div className="brand-logo">
            <img
              src="/iem_logo_.png"
              alt="Institute of Engineering and Management"
            />
          </div>

          <div className="brand-content">
            <span className="brand-title">
              Department of Information Technology
            </span>

            <span className="brand-subtitle">
              Institute of Engineering and Management,Kolkata
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${
                isActive(item.href) ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive(item.href) ? "active" : ""
              }`}
            >
              <span className="mobile-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="mobile-label">
                {item.label}
              </span>

              <span className="mobile-arrow">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}