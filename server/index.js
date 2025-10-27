// server/index.js  (ESM)
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

// ---- Load .env from the project root (../.env) ----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// ---- Connect to MongoDB (dbName = Portfolio per assignment) ----
const MONGO_URI = process.env.MONGODB_URI; // Make sure .env has NO quotes
if (!MONGO_URI) {
  console.error('❌ MONGODB_URI is missing. Check your .env (no quotes around the URI).');
  process.exit(1);
}

try {
  await mongoose.connect(MONGO_URI, { dbName: 'Portfolio' });
  console.log('✅ MongoDB connected: Portfolio');
} catch (err) {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
}

// ---- Import Routes ----
import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/project.js';
import qualificationRoutes from './routes/qualification.js';
import userRoutes from './routes/user.js';

// ---- Initialize Express App ----
const app = express();
const PORT = process.env.PORT || 3000;

// ---- Middleware ----
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ---- Required root route for screenshot ----
app.get('/', (_req, res) => res.send('MyPortfolio API is running ✅'));

// ---- Debug route (optional) ----
app.get('/debug', (_req, res) => res.json({ ok: true, at: '/debug' }));

// ---- Mount API routes with assignment prefixes ----
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

// ---- Start Server ----
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/`);
});

