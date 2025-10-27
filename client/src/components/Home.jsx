// Home.jsx
// This component displays the Home (landing) section of the portfolio site.
// It introduces the portfolio, the mission, and includes a navigation link to the About page.

import { Link } from "react-router-dom"; // Import Link for navigation between pages

const Home = () => {
  return (
    <section
      // ✅ Main container for Home section
      style={{
        maxWidth: "1000px",
        margin: "50px auto", // center the section with top/bottom spacing
        textAlign: "center", // center-align text
        padding: "0 20px", // responsive side padding
      }}
    >
      {/* Main Heading */}
      <h1
        style={{
          fontSize: "40px", // large heading
          fontWeight: "bold",
          color: "#1d4ed8", // blue accent color
          marginBottom: "20px",
        }}
      >
        Welcome to My Portfolio
      </h1>

      {/* Mission Statement */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#374151", // dark gray text
          marginBottom: "30px",
          lineHeight: "1.6",
        }}
      >
        My mission is to keep learning, improving, and building applications
        that make life easier, more creative, and more connected.
      </p>

      {/* Personal Introduction */}
      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px" }}>
        Hello! My name is Kasachin Geberetinsia, and this is my personal
        portfolio website.
      </p>

      {/* About Background and Goals */}
      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px" }}>
        I’m a Software Engineering student at Centennial College with a strong
        interest in web development and building creative, practical solutions.
        This site showcases my projects, highlights the skills I’m developing,
        and reflects my journey as a developer. My goal is to continue learning,
        improve with every project, and create applications that make a real
        impact.
      </p>

      {/* Problem-Solving & Passion */}
      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px" }}>
        I enjoy solving problems, experimenting with new technologies, and
        turning ideas into useful tools. Whether it’s coding, designing, or
        collaborating, I approach every challenge with curiosity and
        determination.
      </p>

      {/* Closing Invitation */}
      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "30px" }}>
        Thank you for visiting my portfolio. I invite you to explore my work,
        learn more about my background, and connect if you’d like to collaborate
        on future projects.
      </p>

      {/* ✅ Navigation Link to About Page */}
      <Link
        to="/about" // link to About component
        style={{
          display: "inline-block",
          padding: "14px 28px", // button-like padding
          backgroundColor: "#1d4ed8", // blue button background
          color: "#fff", // white text
          borderRadius: "8px", // rounded corners
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Learn More About Me
      </Link>
    </section>
  );
};

export default Home; // export component for use in App


