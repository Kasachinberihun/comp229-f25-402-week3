import express from 'express';

const app = express();

// my first middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
}; 

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Goodbye World</h1>');
}


app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);

console.log('Server running on http://localhost:3000/');


