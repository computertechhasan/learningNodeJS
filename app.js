const expressModule = require('express');
const app = expressModule();

app.use(expressModule.json());

app.get('/', function(req, res) {
    return res.send("Hello world!");
});
let courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'}
];
app.get('/api/courses/:id', function(req, res){
    return res.send(req.params.id); //send back param
})
app.get('/api/courses', function(req, res) {
    return res.send(req.query); //Send back query string
});

app.post('api/courses', function(req, res){
    const course = {id: courses.length + 1,
    name: req.body.name
    };
    courses.push(course);
    return res.send(course);
});


app.listen(3000, function() {
    console.log('Listening on port 3000...');
});

/* Using Express to handle routes

const expressModule = require('express');
const app = expressModule();

app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.get('/api/courses', function(req, res){
    res.send([1,2,3]);
})

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});

*/
/* slightly more advanced web server
const httpModule = require('http');

const webServer = httpModule.createServer( function(req, res) {
    if (req.url === '/') {
        res.write('Hello world!');
        res.end();
    }
    if (req.url ==='/api/getList') {
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

webServer.listen(3000);

console.log('Listening on port 3000...');

*/



/* ultra basic web server
const httpModule = require('http');
const server = httpModule.createServer(); //an event emitter

server.on('connection', function(socket) {
    console.log('New connection created!');
});

server.listen(3000);

console.log('Listening on port 3000...');
*/


/* Event listening

const Logger = require('./logger.js');
const logger = new Logger();

logger.on('messageLogged', function(arg){
    console.log('i called the listenerer');
});

logger.log("I'm a message!", "I'm an arg!");

*/ 




/* The File I/O module, never ever use synchronous versions

const fsModule = require('fs');

const files = fsModule.readdirSync('./');
console.log(files);

fsModule.readdir('$', function(err, afiles) {
    if (err) console.log('Error', err);
    else console.log('Result', afiles);
});
*/




/* The OS Module 

const osModule = require('os');
totalMem = osModule.totalmem;
freeMem = osModule.freemem;

console.log('Total Mem: ' + totalMem);
console.log('Free Mem ' + freeMem);
*/


/* The path module
const log = require('./logger.js');
const pathModule = require('path');

var currPath = pathModule.parse(__filename);
console.log(currPath);

*/


/* Node Tuts
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("World!");
var check = "Heyo";
sayHello(check);
log("I'm a message!");*/