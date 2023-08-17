const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////

/* 
const hello = "hello"
console.log(hello) */

/* blocking synchronous way */

/* const txtIn = fs.readFileSync('txt/alo.txt', 'utf-8')
console.log(txtIn);

const txtOut = `hey my friend, ${txtIn} || Created at: ${Date.now()}`
fs.writeFileSync('txt/out.txt', txtOut)
console.log("Done"); 
 */
/* non-blocking asynchronous way */

/* fs.readFile('txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log(err);
    fs.readFile(`txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2); 
        fs.readFile('txt/notes.txt', 'utf-8', (err, data3) => {
            console.log(data3);
        });
    });
}); */ 

//////////////////////////////7
//server

const data = fs.readFileSync(`${__dirname}/json/data.json`,'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName == '/overview'){
        res.end('This is the OVERVIEW')
    }else if(pathName == '/product'){
        res.end('This is the PRODUCT')
    }else if(pathName == '/users'){
        res.end('This is the USERS')
    }else if(pathName == '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
    }else{
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }
    
})

server.listen(8000, () => {
    console.log('Listening on port 8000');
});