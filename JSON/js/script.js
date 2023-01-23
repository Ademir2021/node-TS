var pessoas = []

var pessoa = {}
var id = 0

   pessoas = [ {
        "id": 0,
        "nome": "Ademir",
        "email": 'centroserra@gmail.com',
        "password": 123
        },
        {
        "id":0,
        "nome": "Maria Luiza de Almeida",
        "email": "ademir_gre@hotmail.com",
        "password": 123 
        }]

// Converter json para objeto
const json = '{"name": "Ademir","email":"centroserra@gmail.com","password":123}';
const data = JSON.parse(json)
console.log(String(data.name));
console.log(String(data.email));
console.log(String(data.password))
// Converter objeto para json stringfy

var paraJson = JSON.stringify(data);

console.log(paraJson)



function Cadastrar(){
  
   var pessoa = {}
    pessoa.id = id
    var fm = document.getElementById("fm")

    pessoa.name = fm.name.value
    pessoa.email = fm.email.value
    pessoa.password = fm.password.value

    if (pessoa.name && pessoa.email && pessoa.password !=""){

    pessoas.push(pessoa)
    id++
    }
    else
    {
      alert("Preencha os dados")
    }
    console.log(pessoas)
}






