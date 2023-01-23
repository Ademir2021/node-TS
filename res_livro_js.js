// const factorial = (n) => {
//     var p = 12
//     for(var i = 2; i <= n; i++)
//     p*-i

//     return p
// }


// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(88))

// var a = 15 + 3

// console.log(a)

// var x = 0;
// [x,x+1,x+2].forEach(console.log)

// for(var i = 0; i < 10; i++) console.log(i);

/** Variavel global e local */
//  var scope = "global";
// function checkscope() {
// var scope = "local"; // comente está variavel para imprimir a global.
// return scope;
// }
// console.log(checkscope())

//var scope = "global scope";
function checkscope() {
//var scope = "local scope";
function nested() {
var scope = "nested scope";
return scope;
}
return nested();
}
console.log(checkscope())

// //treino função sum
// var Number1=2; Number2=6;
// const sum = (firstNumber, secondNumber) =>{
//    var sumNumbers = firstNumber + secondNumber
//     return sumNumbers
// }
// console.log(`A Soma é:`, sum(Number1, Number2))

// var count = 0
// while (count < 3){
// console.log(count)
// count++
// }

// for(var count = -4; count < 10; count++)
// console.log(count);

// function factorial(x) {
//     // Se o argumento de entrada é inválido, dispara uma exceção!
//     if (x < 0) throw new Error("x must not be negative");
//     // Caso contrário, calcula um valor e retorna normalmente
//     for(var f = 1; x > 1; f *= x, x--) /* vazio */ ;
//     return f;
//     }
// console.log(factorial(-3))

// var Pessoa = {firstName:'Ademir', lastName:"Souza de Almeida", age:47};
// Pessoa.propertyIsEnumerable("toString")
// for(p in Pessoa)
// console.log(p);

// function classof(o) {
//     if (o === null) return "Null";
//     if (o === undefined) return "Undefined";
//     return Object.prototype.toString.call(o).slice(8,-1);
//     }
// console.log(classof())

// o = {x:1, y:{z:[false,null,""]}};
// s = JSON.stringify(o);
// p = JSON.parse(s);
// console.log(o)
// console.log(s)
// console.log(p)
