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

// const http = require('http');

// http.createServer((req,res)=>{
//     res.write("<h1>Hello this is res...!</h1>");
//     res.end();
// }).listen(9000);



// console.log('like')

// var a = 10
// var b = 20
// var c = 30

// console.log(a+b+c)

// var str = '20'

// if(str === 20){
//     console.log('Matched')
// }else{
//     console.log('Not matched')
// }

// for (i=0;i<20;i++){
//     console.log(i);
// }

// const arr = [2,4,7,1,3,8,3]
// const result = arr.filter((item)=>{return item > 4})
// console.log(result)

// import {x} from '.app'  // can't use import export in node

// const app = require('./app') // If you want to access data from another file you can use like this with require method  (Follow this standard)

// console.log(app.z())

// const arr = [2,3,6,1,6,7]
// const result = arr.filter((item)=>{return item % 2 === 0})

// console.log(result)

// const fs = require('fs');
// fs.writeFileSync('app.ts',"Node Js Toturial")

// console.log(__filename)
// __dirname,__filename // which gives us path of file or folder 

const http = require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>Hello This is res</h1>")
//     res.end();
// }).listen(3000);  this is alos one way to write or else we can pass function as parameter in this

function responsedata(req, res) {
    res.write("<h1>Hello This is res</h1>")
    res.end();
}

http.createServer(responsedata).listen(3000);
