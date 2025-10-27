// Projects.jsx
// Displays a responsive grid of portfolio projects.
// Each card includes an image, title, and description.


const Projects = () => {
  // ✅ Array of project objects (title, description, image path)
  const projects = [
    {
      title: "SmartCare Clinic Website",
      description:
        "Designed and developed a responsive healthcare website for SmartCare Clinic using React and Tailwind CSS. Implemented features such as an appointment booking form, service gallery, and doctor profiles.",
      image: "/project1.png",
    },
    {
      title: "EduTrack Learning Platform",
      description:
        "Built an online learning platform with features for course management, student enrollment, and progress tracking. Integrated a dashboard for instructors and secure login for students.",
      image: "/project2.png",
    },
    {
      title: "LocalEats Restaurant Finder",
      description:
        "Developed a restaurant finder application that allows users to search nearby restaurants, view menus, and book reservations. Integrated Google Maps API for location-based search.",
      image: "/project3.jpg",
    },
  ];

  return (
    <section
      // ✅ Main container for Projects section
      style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}
    >
      {/* Section Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "#1d4ed8", // blue accent color
          marginBottom: "30px",
        }}
      >
        My Projects
      </h2>

      {/* ✅ Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // responsive grid
          gap: "20px", // spacing between cards
        }}
      >
        {/* Loop through projects array and display each project */}
        {projects.map((project, index) => (
          <div
            key={index} // unique key for each project card
            style={{
              border: "1px solid #e5e7eb", // light gray border
              borderRadius: "10px", // rounded corners
              padding: "15px",
              backgroundColor: "#fff", // white card background
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)", // subtle shadow
              textAlign: "center",
            }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover", // ensures consistent image display
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />

            {/* Project Title */}
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#111827", // dark heading
              }}
            >
              {project.title}
            </h3>

            {/* Project Description */}
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#374151", // gray text
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; // export component for use in App


