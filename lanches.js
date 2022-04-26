var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = lines.shift()
var B = A.split(' ')
var codigo = Number(B[0])
var quantidade = Number(B[1])

var lanches = [
  { codigo: 1, preço: 4.0 },
  { codigo: 2, preço: 4.5 },
  { codigo: 3, preço: 5.0 },
  { codigo: 4, preço: 2.0 },
  { codigo: 5, preço: 1.5 }
]
for (let i = 0; i < lanches.length; i++) {
  const lanche = lanches[i]
  if (lanche.codigo === codigo) {
    var numberFormated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(lanche.preço * quantidade)
    numberFormated = numberFormated.replace(',', '.')

    console.log(`Total: ${numberFormated}`)
  }
}
