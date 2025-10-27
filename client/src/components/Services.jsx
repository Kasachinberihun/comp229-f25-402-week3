
// Services.jsx
// This component displays the Services section of the portfolio site.
// It lists different services/skills as cards with an icon, title, and description.

const Services = () => {
  // ✅ Array of services (each with title, description, and image path)
  const services = [
    {
      title: "Volunteer IT Support",
      description:
        "Assisted individuals and community organizations with computer setup, software installation, and basic troubleshooting. Helped others build confidence in using technology effectively.",
      image: "/service1.jpg", // image stored in /public folder
    },
    {
      title: "Google IT Support",
      description:
        "Completed the Google IT Support Certificate, gaining skills in troubleshooting, networking, system administration, and security essentials. I provide practical IT solutions for day-to-day technical challenges.",
      image: "/service2.png", // image stored in /public folder
    },
    {
      title: "SharePoint Solutions",
      description:
        "Skilled in SharePoint development and customization. Experienced in setting up sites, managing permissions, and organizing content to improve collaboration and productivity for teams.",
      image: "/service3.jpg", // image stored in /public folder
    },
  ];

  return (
    <section
      // ✅ Main container for Services section
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
        My Services
      </h2>

      {/* ✅ Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // responsive grid layout
          gap: "20px", // spacing between cards
        }}
      >
        {/* Loop through services array and display each service card */}
        {services.map((service, index) => (
          <div
            key={index} // unique key for each service card
            style={{
              border: "1px solid #e5e7eb", // light border
              borderRadius: "10px", // rounded corners
              padding: "20px",
              backgroundColor: "#fff", // white card background
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)", // subtle shadow
              textAlign: "center",
            }}
          >
            {/* Service Icon/Image */}
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain", // keeps logo/icon aspect ratio
                marginBottom: "15px",
              }}
            />

            {/* Service Title */}
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#111827", // dark text
              }}
            >
              {service.title}
            </h3>

            {/* Service Description */}
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#374151", // gray text
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; // export component for use in App

