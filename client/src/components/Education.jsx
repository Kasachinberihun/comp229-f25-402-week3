// Education.jsx
// This component displays the Education section of the portfolio site.
// It uses an array of education objects (educationList) and maps through them
// to dynamically render each education entry with styling.

const Education = () => {
  // ✅ List of education records (each object holds degree, school, and period)
  const educationList = [
    {
      degree: "Diploma in Software Engineering (In Progress)",
      school: "Centennial College, Toronto, Canada",
      period: "2023 – Expected Graduation: April 2026",
    },
    {
      degree: "Office Administration Certificate",
      school: "Addis Ababa University College of Commerce, Ethiopia",
      period: "Completed 2018",
    },
    {
      degree: "Google IT Support Certificate",
      school: "Google",
      period: "Completed 2021",
    },
    {
      degree: "SharePoint Developer Certificate",
      school: "Independent Study",
      period: "Completed 2022",
    },
    {
      degree: "Ontario Secondary School Diploma (with Honors)",
      school: "City Adult Learning Centre, Toronto, Canada",
      period: "Completed 2020",
    },
  ];

  return (
    <section
      // ✅ Main container for the education section
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
        My Education
      </h2>

      {/* ✅ Education list displayed as grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr", // single column layout
          gap: "20px", // space between cards
        }}
      >
        {/* Loop through educationList and render each entry */}
        {educationList.map((edu, index) => (
          <div
            key={index} // unique key for each item
            style={{
              border: "1px solid #e5e7eb", // light gray border
              borderRadius: "10px", // rounded corners
              padding: "20px",
              backgroundColor: "#fff", // white card background
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)", // subtle shadow
            }}
          >
            {/* Degree Title */}
            <h3
              style={{
                fontSize: "18px",
                color: "#1d4ed8",
                marginBottom: "8px",
              }}
            >
              {edu.degree}
            </h3>

            {/* School Name */}
            <p
              style={{
                fontSize: "16px",
                color: "#111827", // dark text
                marginBottom: "5px",
              }}
            >
              {edu.school}
            </p>

            {/* Period / Completion Date */}
            <p style={{ fontSize: "14px", color: "#6b7280" }}>{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; // export component for use in App


