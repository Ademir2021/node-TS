
const users = [
{name:'Ademir Souza de Almeida', username:'ademir@provider.com', password:'123abc'},
{name:'Maria Luiza de Almeida', username:'maria@provider.com', password:'123abc'},
{name:'Augusto Muller de Almeida', username:'augusto@provider.com', password:'123abc'},
{name:'Gustavo Souza de Almeida', username:'gustavo@provider.com', password:'123abc'},
{name:'Francieli Dalsente de Almeida', username:'francieli@provider.com', password:'123abc'}
]

// for (let i = 0; users.length > i; i++){
//     console.log(users[i])
// }

users.forEach(element => {
    let _nome = (element.name) + " |"
    let _username = (element.username) + " |"
    let _password = (element.password) + "\n"
    console.log("Nome: " + _nome,
                "Email: " + _username,
                "Password: " + _password);
})