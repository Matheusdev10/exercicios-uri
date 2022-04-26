var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = Number(lines.shift())
var B = A + 1
var C = B + 2
var D = C + 2
var E = D + 2
var F = E + 2
var G = F + 2
console.log(B, C, D, E, F, G)
// como colocar um em baixo do outro?
