
// About.jsx
// Displays the About Me section of the portfolio site.
// Includes profile picture, personal introduction, certifications, and resume link.
// Layout: Image left, text right. Title and resume link are centered for emphasis.


const About = () => {
  return (
    <section
      // ✅ Main container for About section
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "0 20px",
        textAlign: "left",
        display: "flex",
        gap: "30px",
        alignItems: "center", // <-- center vertically instead of top
        flexWrap: "wrap", // responsive support
      }}
    >
      {/* ✅ Profile picture on the left */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <img
          src="/profile.jpg"
          alt="Kasachin Geberetinsia"
          style={{
            width: "100%",
            maxWidth: "250px", // slightly smaller for balance
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // subtle shadow for lift
          }}
        />
      </div>

      {/* ✅ About text on the right */}
      <div style={{ flex: "2" }}>
        {/* Center only the About Me heading */}
        <h2
          style={{
            fontSize: "28px",
            color: "#1d4ed8",
            marginBottom: "20px",
            textAlign: "center", // centered heading
          }}
        >
          About Me
        </h2>

        {/* Paragraph 1: Personal introduction */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px" }}>
          Hello! My name is <strong>Kasachin Geberetinsia</strong>. I am a
          Software Engineering student at Centennial College with a strong
          passion for web development, problem-solving, and building practical,
          creative solutions. My journey started with curiosity about technology,
          which grew into a dedication to coding and learning new tools.
        </p>

        {/* Paragraph 2: Education and certifications */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px" }}>
          I have worked on several projects, including websites, platforms, and
          IT support roles that highlight my skills and adaptability. Beyond
          academics, I have completed professional certifications, including the{" "}
          <strong>Google IT Support Certificate</strong> and a{" "}
          <strong>SharePoint Developer Certificate</strong>. These experiences
          have strengthened my technical knowledge and practical IT skills.
        </p>

        {/* Paragraph 3: Community involvement & passion */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px" }}>
          Outside of school, I also help with IT support and community-focused
          projects. I love sharing knowledge, solving technical challenges, and
          continuously improving my craft. Thank you for visiting my portfolio.
          I’m excited for what the future holds and always open to connecting,
          collaborating, and sharing ideas.
        </p>

        {/* ✅ Resume link centered */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              backgroundColor: "#1d4ed8",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; // export component for use in App

