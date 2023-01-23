//let a = 12
//let b = 22
//const c = a + b
//console.log (c);

//let a = 3
//a++ //postfix
//++a //prefix
//console.log(a)

// operadores (aritimeticos, atribuição, relacional, ternario)

let a = 3
a += 3
a = a + 3
a *= 7
a /= 2
console.log (a);

console.log (!(2 > 3));

console.log (!!'teste');

let temSol = true
let estouComDinheiro = false
let vouSair = temSol && estouComDinheiro
let resultado = vouSair ? 'Ebaa' : 'Que chato'
console.log(resultado);

let nota = 9.2
let temBomComportamento = true

if (nota >= 9 && temBomComportamento){
	console.log('Quadro de honra')
	console.log('Parabens')
}else if (nota >= 7){
	console.log('Aprovado')
}else{
	console.log('Recuperação')
	console.log('é uma pena')
}

//for(let i = 0; i <= 100; i+= 10){
//	console.log(i,'Ola')
//}

// Array ->    0     1    1   3    4
const notas = [6.5, 7.7, 3.2, 8.1, 9.7]
for (let i = 0; i < notas.length; i++){
	console.log(notas[i])
}

//Array de cores ->

const cores = ['red', 'blue', 'orange']
for(i = 0; i < 3; i++){
	console.log(cores[i])
}

// for (let nota of notas){
// console.log(nota)
//}

// notas.forEach(nota => console.log(nota * 2))


//função (Rei!!!)
function soma(a,b){
	console.log(a + b)
}

soma(3, 4)

console.log ( 2 === 2, '2 - igual')

//Objeto

