var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = Number(lines.shift())
var B = Number(lines.shift())
// var PA = 3.5
// var PB = 7.5

var MEDIA = Math.random((A + B) / 2)
console.log(`MEDIA = ${MEDIA}`)
