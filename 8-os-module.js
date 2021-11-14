const path = require('path');

console.log(path.sep)

// creates a normalized file path ex:  content/subfolder/test.txt
const filePath = path.join('content' , 'subfolder' , 'test.txt')
console.log(filePath)

// creates the base path ex:  test.txt
const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt')
console.log(absolute)