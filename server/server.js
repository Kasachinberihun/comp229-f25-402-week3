
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

// Import routes (no extra "server/" prefix)
import contactsRoutes from './routes/contact.js';
import projectsRoutes from './routes/project.js';
import qualificationsRoutes from './routes/qualification.js';
import usersRoutes from './routes/user.js';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Test route for browser check
app.get('/', (_req, res) => res.send('Portfolio API running… (root server.js)'));

// API routes
app.use('/api/contacts', contactsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/qualifications', qualificationsRoutes);
app.use('/api/users', usersRoutes);

// Environment variables
const PORT = process.env.PORT || 3000;
const { MONGODB_URI } = process.env;

// Check if MongoDB connection string is provided
if (!MONGODB_URI) {
  console.error('❌ Missing MONGODB_URI in .env');
  process.exit(1);
}

// Connect to MongoDB and start the server
(async () => {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
})();
