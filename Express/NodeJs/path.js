const path = require('path')

console.log('dirname-------------------------')
console.log(path.dirname('E:/Node/myfile.text'))
console.log('basename-------------------------')
console.log(path.basename('E:/Node/myfile.text'))
console.log('extname-------------------------')
console.log(path.extname('E:/Node/myfile.text'))
console.log('resolve-------------------------')
console.log(path.resolve('E:/Node', './new'))

console.log('isAbsolute-------------------------')
console.log(path.isAbsolute('E:/Node/myfile.text'))
console.log('normalize-------------------------')
console.log(path.normalize('E://///\\\/Node/\\/myfile.text'))
console.log('format-------------------------')
console.log(path.format({
    root: 'E:',
    dir: 'node',
    base: 'file',
    ext : '.text'
  }))

console.log('parse-------------------------')
console.log(path.parse('E:/Node/myfile.text'))

console.log('join -------------------------')
console.log(path.join(__dirname, 'myfile.text'))
console.log('join with __dirname-------------------------')
console.log(path.join(__dirname, 'myfile.text'))
console.log('join with __filename-------------------------')
console.log(path.join( __filename))


console.log('delimiter-------------------------')
console.log(path.delimiter)
console.log('posix-------------------------')
console.log(path.posix)

/*
console.log(path)
console.log(path)
console.log(path)
console.log(path)
console.log(path)
console.log(path)
*/