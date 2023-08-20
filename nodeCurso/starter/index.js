const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemp = require('./modules/replaceTemp.js');
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


//templates
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`,'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const dataObj = JSON.parse(data)

const slugs = dataObj.map(el => slugify(el.productName, {lower: true}))
console.log(slugs);

const server = http.createServer((req, res) => {
    
    const {query, pathname} = url.parse(req.url, true)

    if(pathname == '/overview' || pathname == '/'){
        res.writeHead(200, {'content-type': 'text/html'})
         
        const cards = dataObj.map(el => replaceTemp(tempCard, el)).join('')
        const result = tempOverview.replace('{%CARDS%}', cards)

        res.end(result)

    }else if(pathname == '/product'){
        res.writeHead(200, {'content-type': 'text/html'})

        const product = dataObj[query.id]
        const output = replaceTemp(tempProduct, product)

        res.end(output)
    }else if(pathname == '/users'){
        res.end('This is the USERS')
    }else if(pathname == '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
    }else{
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }
    
})

server.listen(4000, () => {
    console.log('Listening on port 4000');
});