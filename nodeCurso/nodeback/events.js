const Event = require('events')
const http = require('http')

class sales extends Event {
    constructor() {
        super()
    }
}

const myEvent = new sales()

myEvent.on('newSale', () => {
    console.log('there is a new sale')
})

myEvent.on('newSale', () => {
    console.log('customer is buying')
})

myEvent.on('newSale', stock => {
    console.log(`there is ${stock} stock left`);
})

myEvent.emit('newSale',9)

////////////////////////////////////


const server = http.createServer((req, res) => {
    console.log('server running');
})

server.on ('request', (req, res) => {
    console.log('request received'); 
    res.end('request received')   
})

server.on('request', (req, res) => {
    console.log('request XD')
})

server.on('close', () => {
    console.log('server closed');
})

server.listen(3000, () => {
    console.log('waiting for request'); 
})