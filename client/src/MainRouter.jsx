import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Services from "./components/Services";

const MainRouter = () => {
  return (
    <>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          backgroundColor: "#f9fafb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Left side: Logo + Name under it */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <h3 style={{ margin: "5px 0 0", fontSize: "14px", color: "#1d4ed8" }}>
            Kasachin Geberetinsia
          </h3>
        </div>

        {/* Right side: Nav Links */}
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#1d4ed8" }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#1d4ed8" }}>
            About
          </Link>
          <Link to="/projects" style={{ textDecoration: "none", color: "#1d4ed8" }}>
            Projects
          </Link>
          <Link to="/services" style={{ textDecoration: "none", color: "#1d4ed8" }}>
            Services
          </Link>
          <Link to="/education" style={{ textDecoration: "none", color: "#1d4ed8" }}>
            Education
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "#1d4ed8" }}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainRouter;

