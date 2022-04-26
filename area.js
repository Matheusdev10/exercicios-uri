var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines.shift()
var B = A.split(' ')
var C = Number(B[0])
var D = B[2]
var E = (C * D) / 2
console.log(`TRIANGULO: ${E.toFixed(3)}`)
var F = 3.14159
var G = F * Math.pow(D, 2)
console.log(`CIRCULO: ${G.toFixed(3)}`)
var H = Number(B[1])
var I = ((C + H) * D) / 2
console.log(`TRAPEZIO: ${I.toFixed(3)}`)
var J = H * H
console.log(`QUADRADO: ${J.toFixed(3)}`)
var K = C * H
console.log(`RETANGULO: ${K.toFixed(3)}`)
