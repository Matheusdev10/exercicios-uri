var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines.shift()
var B = A.split(' ')
var C = B[1]
var D = B[2]
var E = C * D
var F = lines.shift()
var G = F.split(' ')
var H = G[1]
var I = G[2]
var J = H * I
var X = E + J
console.log(`VALOR A PAGAR: R$ ${X.toFixed(2)}`)
