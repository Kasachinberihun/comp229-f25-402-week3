
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).end('<h1>Hello World</h1>');
}; 

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Goodbye World</h1>');
}
export { helloWorld, goodbyeWorld };