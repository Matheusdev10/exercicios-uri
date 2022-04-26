var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = Number(lines.shift())
var Y = 2
var D = X * Y
console.log(`${D} minutos`)
