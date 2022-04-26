var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = Number(lines.shift())
var B = Number(lines.shift())
var C = A * 3.5 + B * 7.5
var D = C / 11.0
console.log(`MEDIA = ${D.toFixed(5)}`)
