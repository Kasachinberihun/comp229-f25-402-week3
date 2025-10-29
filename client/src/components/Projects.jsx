// client/src/components/Projects.jsx
// Displays a responsive grid of portfolio projects.
// Fetches from the backend (VITE_API_URL) and gracefully falls back to demo data.

import { useEffect, useMemo, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState("");

  // ✅ Demo fallback (your original three)
  const demoProjects = useMemo(
    () => [
      {
        title: "SmartCare Clinic Website",
        description:
          "Designed and developed a responsive healthcare website using React. Includes appointment booking, service gallery, and doctor profiles.",
        image: "/project1.png",
        link: "#",
      },
      {
        title: "EduTrack Learning Platform",
        description:
          "Online learning platform with course management, student enrollment, and progress tracking. Instructor dashboard + secure auth.",
        image: "/project2.png",
        link: "#",
      },
      {
        title: "LocalEats Restaurant Finder",
        description:
          "Restaurant finder with nearby search, menus, reservations, and Google Maps integration for location-based results.",
        image: "/project3.jpg",
        link: "#",
      },
    ],
    []
  );

  const fetchProjects = async () => {
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/projects`, {
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      // Normalize data to expected shape and filter out invalid entries
      const normalized = Array.isArray(data)
        ? data
            .map((p) => ({
              title: p.title ?? "Untitled Project",
              description: p.description ?? "No description provided.",
              image: p.image ?? "/project1.png", // fallback image from /public
              link: p.link ?? "#",
            }))
            .filter((p) => p.title && p.description)
        : [];

      if (normalized.length === 0) {
        // If API returns empty, show demo data
        setProjects(demoProjects);
      } else {
        setProjects(normalized);
      }
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      // On error, still show demo so UI looks good
      setProjects(demoProjects);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      aria-labelledby="projects-heading"
      style={{ maxWidth: 1080, margin: "40px auto", padding: "0 20px" }}
    >
      {/* Section Heading */}
      <h2
        id="projects-heading"
        style={{
          textAlign: "center",
          fontSize: 28,
          color: "#1d4ed8", // blue accent
          marginBottom: 18,
          fontWeight: 700,
        }}
      >
        My Projects
      </h2>

      {/* Status line (loading / error) */}
      {status === "loading" && (
        <p
          role="status"
          style={{ textAlign: "center", marginBottom: 16, color: "#6b7280" }}
        >
          Loading projects…
        </p>
      )}
      {status === "error" && (
        <div
          role="alert"
          style={{
            margin: "0 auto 16px",
            maxWidth: 720,
            background: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          Couldn’t load from API ({error}). Showing demo projects instead.{" "}
          <button
            onClick={fetchProjects}
            style={{
              marginLeft: 8,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {projects.map((project, idx) => (
          <article
            key={`${project.title}-${idx}`}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 10,
                marginBottom: 12,
                background: "#f3f4f6",
              }}
              loading="lazy"
            />

            {/* Title */}
            <h3
              style={{
                fontSize: 20,
                marginBottom: 8,
                color: "#111827",
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#374151" }}>
              {project.description}
            </p>

            {/* Footer actions */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: "auto",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Visit / Demo link (optional) */}
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #1d4ed8",
                  color: "#1d4ed8",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View
              </a>

              {/* Optional: badge if using demo data */}
              {status !== "success" && (
                <span
                  title="Showing demo item"
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    padding: "4px 8px",
                    border: "1px solid #e5e7eb",
                    borderRadius: 999,
                  }}
                >
                  demo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Small helper note for dev */}
      <p
        style={{
          textAlign: "center",
          marginTop: 18,
          fontSize: 12.5,
          color: "#9ca3af",
        }}
      >
        API base: <code>{API_BASE}</code>
      </p>
    </section>
  );
}


