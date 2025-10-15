import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);



const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error:"));
connection.once('open', () => { console.log('Connected to MongoDB '); });

  


import homeRoutes from './routes/homeRoutes.js';
import projectRoutes from './routes/project.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/',homeRoutes);
app.use('/projects', projectRoutes);


app.listen(3000);

console.log('Server running on http://localhost:3000/');


