var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = Number(lines.shift())
var B = Number(lines.shift())
var C = Number(lines.shift())
var D = A * 2.0 + B * 3.0 + C * 5.0
var E = D / 10.0
console.log(`MEDIA = ${E.toFixed(1)}`)
