const fs = require('fs')
// const { promisify } = require('util')

// const readFile = promisify(fs.readFile)
// const execute = async () => {
// const content = await readFile('./index.js');
// const content = await readFile('./index.js','utf8');
//    console.log(content.toString());
//    console.log(String(content));
// }
// execute()


const promisify = func => (...args) => new Promise((resolve,reject) => {
    console.log('ARGS',args)
    func(...args,(err,data) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})

const readFile = promisify(fs.readFile)
const execute = async () => {
   const content = await readFile('./index.js','utf8')
   const files = await promisify(fs.readdir)('./')
   console.log(content)
   console.log(files)
}
execute()
// readFile('./index.js','utf8')
// .then(item => {
//     console.log(item)
// })



// const promisify = file => new Promise((resolve,reject) => {
//     fs.readFile(file,(err,data) => {
//         if(err){
//             reject(err)
//         }else{
//             resolve(data.toString())
//         }
//     })
// })

// promisify('./index.js')
// .then(item => {
//     console.log(item)
// })