var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = Number(lines.shift())
var B = Number(lines.shift())
var C = 12
var D = A / C
var E = D * B
console.log(E.toFixed(3))
