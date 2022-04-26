var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines.shift()
var B = A.split(' ')
var C = Number(B[0])
var D = Number(B[1])
var E = Number(B[2])
if (D + E > C) {
  console.log(`Perimetro = ${C + D + E}`)
} else {
  console.log(`Area = ${C + (D * E) / 2}`)
}

// console.log(`MEDIA = ${D.toFixed(5)}`)

var numeros = [6.0, 4.0, 2.0]
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i]
}
