const aluno = {a : "Matheus", 
               b : "48", 
               c : "centroserra@gmail.com"
               };

const {a: nome, b: idade, c:email} = aluno;

console.log(nome)
console.log(idade)
console.log(email)

const {a, ...rest} = aluno
console.log(a)
console.log(rest)

//Espalhamento de strung
const string = 'hello'
const stringArray = [...string]
console.log(stringArray)

// Create an object and a copied object with spread
const originalObject = {nome:"Ademir", enabled: true, darkMode: false }
const secondObject = { ...originalObject }
console.log(secondObject)

// Create a function to multiply three items
function multiply(a, b, c) {
    return a * b * c
  }
  const numbers = [1, 2, 3]
  console.log(...numbers)
  console.log(multiply(...numbers))

  // rest
  function restTest(one, two, ...args) {
    console.log(one)
    console.log(two)
    console.log(args)
  } 
  restTest(1, 2, 3, 4, 5, 6)

