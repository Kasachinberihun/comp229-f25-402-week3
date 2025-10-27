
// Layout.jsx
// Provides the main navigation bar for the portfolio site.
// Includes links to all pages (Home, About, Projects, Services, Education, Contact)
// plus a direct link to the Resume PDF in /public.

import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Home link */}
      <Link to="/" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}>
        Home
      </Link>

      {/* About page link */}
      <Link to="/about" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}>
        About
      </Link>

      {/* Projects page link */}
      <Link to="/projects" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}>
        Projects
      </Link>

      {/* Services page link */}
      <Link to="/services" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}>
        Services
      </Link>

      {/* Education page link */}
      <Link to="/education" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}>
        Education
      </Link>

      {/* Contact page link */}
      <Link to="/contact" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}>
        Contact
      </Link>

      {/* Resume link (static PDF in /public) */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
      >
        Resume
      </a>
    </nav>
  );
};

export default Layout;

