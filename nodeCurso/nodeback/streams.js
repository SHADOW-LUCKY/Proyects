const fs = require('fs')
const http = require('http').createServer()
let port = 3000

http.on('request', (req, res) => {
   //normal solving
 /*    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data)
    }) */

    //stream solving
    const readable = fs.createReadStream('test.txt')
    readable.on('data', (chunk) => {
        res.write(chunk) 
    })
    readable.on('end', () => {
        res.end()
        
    })
})

http.listen(port, () => {
    console.log(`listening on port ${port}`);
})