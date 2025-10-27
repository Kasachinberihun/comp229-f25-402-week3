// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* ✅ Header with logo + navigation links */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 40px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* ✅ Logo + name on the left */}
        <Link to="/" style={{ textAlign: "center", textDecoration: "none" }}>
          <img
            src="/logo.png" // ✅ Place logo.png in your public/ folder
            alt="KG Logo"
            style={{ height: "70px", display: "block", margin: "0 auto" }}
          />
          <span
            style={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#1d4ed8",
              marginTop: "5px",
              display: "block",
            }}
          >
            Kasachin Geberetinsia
          </span>
        </Link>

        {/* ✅ Navigation links on the right */}
        <nav style={{ display: "flex", gap: "25px" }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
          >
            About
          </Link>
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
          >
            Projects
          </Link>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
          >
            Services
          </Link>
          <Link
            to="/education"
            style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
          >
            Education
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600" }}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* ✅ Routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

