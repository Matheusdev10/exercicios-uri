var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines.shift()
var B = Number(lines.shift())
var C = Number(lines.shift())
var D = C * 0.15
var TOTAL = B + D
console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`)

// var A = 500.0
// var B = 1230.3 * 0.15
// var TOTAL = A + B
// console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`)
