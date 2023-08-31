const fs = require('fs')
const http = require('http').createServer()
let port = 4000

http.on('request', (req, res) => {
   //normal solving
 /*    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data)
    }) */

    //stream solving
 /*    const readable = fs.createReadStream('test.txt')
    readable.on('data', (chunk) => {
        res.write(chunk) 
    })
    readable.on('end', () => {
        res.end()
        
    })
    readable.on('error', (err) => {
        console.log(err)
        res.statusCode = 500
        res.end('file not found')
    }) */
    // solution 3
    const readable = fs.createReadStream('test.txt')
    readable.pipe(res)

})

http.listen(port, () => {
    console.log(`listening on port ${port}`);
})