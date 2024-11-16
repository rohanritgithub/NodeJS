// var a = "10"
// var a = "20"
// console.log(`Hello here is answer${a }`)

// const array = [2,3,4,5,2]

// let multi = array.filter((e)=>{
//     if(e === 2){
//         return e
//     }
// })
// console.log(multi)
// console.log(array)
// for(i=0; i < 10; i++){
//     console.log(i)
// }

// import { demo } from "./app.js"
// const app = require('./app')


// console.log(app)
// fs,Buffer,HTTP
// const fs = require('fs')
// fs.writeFileSync('fs.txt',"Hello here is your new File..")
// console.log(__filename)

const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello this is res...!</h1>");
    res.end();
}).listen(9000);

console.log('Hello ROHAN')
