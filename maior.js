var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var a = lines.shift()
var b = a.split(' ')

for (let index = 0; index < b.length; index++) {
  const element = b[index]
  numeros.push(Number(element))
}
var c = Math.max.apply(null, b)
console.log(`${c} eh o maior`)
