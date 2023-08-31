const fs = require('fs');
const crypto = require('crypto'); 

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1

setTimeout(() => {
   console.log('timer done'); 
}, 0);

setImmediate(() => {
   console.log('immediate done');
})

fs.readFile('test.txt', 'utf-8', () => {
    console.log('done reading');
    console.log('---------------------');

    setTimeout(() => {console.log('timer 2 done')},0)

    setTimeout(() => {console.log('timer 3 done')},3000)

    setImmediate(() => {console.log('immediate 2 done')})

    process.nextTick(() => {console.log('next tick done')})

    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
        console.log(Date.now() - start,'password done');
    })
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
        console.log(Date.now() - start,'password done');
    })
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
        console.log(Date.now() - start,'password done');
    })
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
        console.log(Date.now() - start,'password done');
    })
})
 
console.log('top of code');

