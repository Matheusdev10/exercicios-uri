var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = Number(lines.shift())
var B = Number(lines.shift())
var C = A / B
console.log(`${C.toFixed(3)} km/l`)
