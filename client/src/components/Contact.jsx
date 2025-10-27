
// Contact.jsx
// Displays static contact details (name, email, phone, location).
// Includes a contact form. On submit: shows alert, then redirects to Home using useNavigate.

import { useNavigate } from "react-router-dom"; // ✅ needed for redirect

const Contact = () => {
  const navigate = useNavigate(); // hook to redirect user

  // ✅ Handle form submission: prevent reload + redirect to Home
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been recorded."); // optional confirmation
    navigate("/"); // redirect to Home
  };

  return (
    <section
      // ✅ Main container for Contact section
      style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}
    >
      {/* Section Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px", // larger heading size
          color: "#1d4ed8", // blue accent color
          marginBottom: "20px",
        }}
      >
        Get In Touch
      </h2>

      {/* Introductory text */}
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          color: "#374151", // gray text for readability
          marginBottom: "40px",
        }}
      >
        I’m always open to new opportunities—whether it’s working together on a
        project, answering a question, or simply starting a conversation. Don’t
        hesitate to reach out!
      </p>

      {/* ✅ Contact Details (static information) */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <p>
          <strong>Name:</strong> Kasachin Geberetinsia
        </p>
        <p>
          <strong>Email:</strong> kasachinberihun@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> 416-302-9103
        </p>
        <p>
          <strong>Location:</strong> Toronto, Canada
        </p>
      </div>

      {/* ✅ Contact Form */}
      <form
        onSubmit={handleSubmit} // <-- added handler
        style={{
          display: "grid", // form fields stacked vertically
          gap: "15px", // spacing between inputs
          backgroundColor: "#fff",
          padding: "20px",
          border: "1px solid #e5e7eb", // light gray border
          borderRadius: "10px", // rounded corners
        }}
      >
        {/* Input fields: First + Last Name */}
        <div style={{ display: "flex", gap: "15px" }}>
          <input type="text" placeholder="First Name" style={{ flex: 1 }} />
          <input type="text" placeholder="Last Name" style={{ flex: 1 }} />
        </div>

        {/* Input fields: Email + Phone */}
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />

        {/* Message box */}
        <textarea placeholder="Your Message" rows={5}></textarea>

        {/* Submit button */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; // export component for use in App
