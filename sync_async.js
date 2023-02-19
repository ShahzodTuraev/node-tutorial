const { readFile } = require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
getText('../content/first.txt')
.then(result => console.log(result))
.catch(err => console.log(err))

readFile('./content/first.txt', 'utf8', (err, data) =>{
    if(err){
        return
    }else{
        console.log(data);
    }
})

// const http = require('http');
// const server = http.createServer((req, res) =>{
//     if(req.url === '/'){
//         res.end('Home Page')
//     }
//     if(req.url === '/about'){
//         res.end('About Page')
//     }
//     res.end('error page')
// })
// server.listen(5000, ()=> {
//     console.log('Server Listening on port 5000');
// })


// const http = require('http')
// const server = http.createServer((req, res) =>{
//     console.log('request event');
//     res.end('Hello World')
// })
// server.listen(5000, ()=> {
//     console.log('Server listening on port : 5000....');
// })


// const {readFile} = require('fs');
// const { result } = require('lodash');
// console.log('started a furst task');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('completed first task');``
// })
// console.log('starting next task');