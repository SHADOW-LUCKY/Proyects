/* 
const hello = "hello"
console.log(hello) */

const fs = require('fs')

const txtIn = fs.readFileSync('txt/alo.txt', 'utf-8')
console.log(txtIn);

const txtOut = `hey my friend, ${txtIn} || Created at: ${Date.now()}`
fs.writeFileSync('txt/out.txt', txtOut)
console.log("Done");
