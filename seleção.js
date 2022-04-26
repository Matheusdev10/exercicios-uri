var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines.shift()
var B = A.split(' ')
var C = B[0]
var D = B[1]
var E = B[2]
var F = B[3]

if (D > E && F > C && E + F > C + D && C > 0 && D > 0 && C % 2 == 0) {
  console.log('Valores aceitos')
} else {
  console.log('Valores nao aceitos')
}

// console.log(B)
// for (let i = 0; i < B.length; i++) {
//   const numeros = B[i]
//   console.log(numeros)
// }
