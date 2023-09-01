const fs = require('fs');
const superagent = require('superagent');


const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err)reject('could not read file');
            resolve(data);
        })
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if(err) reject('could not write file');
            resolve('success');
        })
    })
}

const getDogPic = async() => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`breed: ${data}`);
    
        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
    
        await writeFilePro('dog-imgs.txt',res.body.message)
        console.log('done writing to file'); 
    } catch (err) {
        console.log(err);
    }
}
getDogPic();

(async()=>{
    try {
        console.log('1: started');
        await getDogPic();
        console.log('3: done')
    } catch (error) {
        console.log(error);
    }
})()

//usando el then
/*     readFilePro(`${__dirname}/dog.txt`).then(data => {
        console.log(`breed: ${data}`);
    
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`
    )})
    .then(res => {
        return writeFilePro('dog-imgs.txt',res.body.message)
    })
    .then(() => {
        console.log('done writing to file');
    })
    .catch(err => {
        console.log(err.message);
    })
 */
    