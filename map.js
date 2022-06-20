// -------------------------------MAP-----------------------------

// MAP passa por todos os valores do array e executa uma função
const numbers = [1, 3, 6, 8, 9, 17];
// console.log(numbers)
// const doubledNumbers = numbers.map(function (elem) {
//   return elem * 2
// })
const doubledNumbers = numbers.map((elem) => elem * 2);
// console.log(doubledNumbers)

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
// const celcius = fahrenheit.map(function (elem) {
//   return Math.round(((elem - 32) * 5) / 9)
// })
const celcius = fahrenheit.map((elem) => Math.round(((elem - 32) * 5) / 9));
// console.log(celcius)

// ------------------------FILTER-------------------------------//
// quando eu preciso remover elementos indesejados usando algumas regras ( ou seja vou filtrar os elementos)

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 12, 19];
const uniqueArray = yetAnotherArray.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);
console.log(uniqueArray);

// ------------------------REDUCE--------------------------------
const rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'Us', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe', launches: 7 },
  { country: 'India', launches: 5 },
  { country: 'Japan', launches: 3 },
];
const totalLaunches = rockets.reduce(
  (preVal, elem) => preVal + elem.launches,
  0
);
// console.log(totalLaunches)

// -------------------------------EVERY-----------------------------

// every verifica todos os elementos de um array retornando se isso é true or false (boolean)

const anotherArray = [12, 5, 8, 120, 140];
const allAbove10 = anotherArray.every((elem) => elem > 10);
// console.log(allAbove10)

// neste problema identificar se todas as pessoas tem mais de 18 anos
const tchurma = [
  { id: 12, name: 'Marcos', age: 19 },
  { id: 47, name: 'Fred', age: 18 },
  { id: 77, name: 'Lara', age: 25 },
  { id: 85, name: 'Luisa', age: 30 },
];

const allAbove18 = tchurma.every((p) => p.age >= 18);
// console.log(allAbove18)

// -------------------------------SOME-----------------------------
// testar se pelo ou menos 1 elemento do array passa por algum teste específico ( se for verdade vai retornar um true e se for falso vai retornar um false)

// exemplo: verificar se há algum numero primo

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
const oneMoreArray = [6, 8, 11, 14, 42];
const B = oneMoreArray.some(isPrime);
// console.log(isPrime)

const team = [
  { id: 12, name: 'Matheus', pilot: true },
  { id: 44, name: 'Yago', pilot: true },
  { id: 59, name: 'Lucas', pilot: false },
  { id: 122, name: 'João', pilot: false },
];
const pilot = team.some((person) => person.pilot);
// console.log(pilot)

// --------------------------------API REAL----------------------------

function soma(a, b) {
  var soma = a + b;
  return soma;
}
var somaUm = soma(2, 5);
// console.log(somaUm)

function dizerNome(nome) {
  // console.log(' O nome é ' + nome)
}

dizerNome('Matheus');

function parimp(n) {
  if (n % 2 == 0) {
    return 'par';
  } else {
    return 'impar';
  }
}
let res = parimp(12);
// console.log(res)

const ages = [32, 33, 16, 40];
const result = ages.filter((checkAdult) => checkAdult >= 18);
console.log(result);

function checkAdult(age) {
  return age >= 18;
}

var nome = window.prompt('qual é o seu nome?');
window.alert('É um grande prazer te conhecer' + nome);
