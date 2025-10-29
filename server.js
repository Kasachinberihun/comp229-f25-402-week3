
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import contactsRoutes from './server/routes/contact.js';
import projectsRoutes from './server/routes/project.js';
import qualificationsRoutes from './server/routes/qualification.js';
import usersRoutes from './server/routes/user.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Test route
app.get('/', (_req, res) => res.send('Portfolio API running… (root server.js)'));

// Routes with /api prefix (as rubric requires)
app.use('/api/contacts', contactsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/qualifications', qualificationsRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
})();
