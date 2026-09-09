import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
];

const exploreLinks = [
  { label: "Innovation", href: "/innovation" },
  { label: "Students", href: "/students" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />

      <div className="footer-container">
        {/* Main footer */}

        <div className="footer-main">
          {/* Brand */}

          <div className="footer-brand">
            <div className="footer-logo">
              IT
            </div>

            <div>
              <h2>IEM IT</h2>
              <p>
                Department of Information Technology
              </p>
            </div>

            <p className="footer-description">
              Empowering students through technology,
              innovation, research and value-based education.
            </p>
          </div>

          {/* Quick links */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <div className="footer-links">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}

          <div className="footer-column">
            <h3>Explore</h3>

            <div className="footer-links">
              {exploreLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div className="footer-column footer-contact">
            <h3>Department</h3>

            <p>
              Institute of Engineering and Management
            </p>

            <p>
              Salt Lake Electronics Complex,
              Sector V, Kolkata – 700091
            </p>

            <a href="mailto:info@iem.edu.in">
              info@iem.edu.in
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} IEM IT. All rights reserved.
          </p>

          <p>
            Built with technology & curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}