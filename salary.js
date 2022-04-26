var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var NUMBER = Number(lines.shift())
var A = Number(lines.shift())
var B = Number(lines.shift())
var SALARY = A * B
console.log(`NUMBER = ${NUMBER}`)
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`)
