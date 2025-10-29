// server/index.js (ESM)

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

// ─── Load .env from project root (../.env) ─────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ─── MongoDB connect ───────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
  console.error(
    "❌ MONGODB_URI is missing. Add it to your ../.env (no quotes around the URI)."
  );
  process.exit(1);
}

try {
  await mongoose.connect(MONGO_URI, { dbName: "Portfolio" });
  console.log("✅ MongoDB connected: Portfolio");
} catch (err) {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
}

// ─── Import routes ────────────────────────────────────────────────────────────
import contactRoutes from "./routes/contact.js";
import projectRoutes from "./routes/project.js";
import qualificationRoutes from "./routes/qualification.js";
import userRoutes from "./routes/user.js";

// ─── App init ─────────────────────────────────────────────────────────────────
const app = express();

// CORS: allow your dev client
const CLIENT_ORIGIN =
  process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: [CLIENT_ORIGIN],
    credentials: false,
  })
);
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// ─── Health + root ────────────────────────────────────────────────────────────
app.get("/", (_req, res) => res.send("MyPortfolio API is running ✅"));
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// ─── API routes (mount BEFORE any catch-alls) ─────────────────────────────────
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);

// 404 for unknown API routes
app.use("/api", (_req, res) => res.status(404).json({ error: "Not found" }));

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("💥 Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// ─── Start server ─────────────────────────────────────────────────────────────
const PORT = Number(process.env.PORT) || 3000; // you can set PORT=4000 in ../.env if needed
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://127.0.0.1:${PORT}`);
  console.log(`🌐 CORS allowed origin: ${CLIENT_ORIGIN}`);
});

