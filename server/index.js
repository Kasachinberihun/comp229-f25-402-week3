import express from 'express';
import morgan from 'morgan';

import homeRoutes from './routes/homeRoutes.js';


const app = express();

app.use(morgan('dev'));

//Routes
app.use('/',homeRoutes);



app.listen(3000);

console.log('Server running on http://localhost:3000/');


