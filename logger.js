const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
    this.emit('messageLogged', "i'm an arg");
    }
}
module.exports = Logger;

