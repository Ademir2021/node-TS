const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
var users = []

 users = [
    {name:'Ademir Souza de Almeida', username:'ademir@provider.com', password:'123abc'},
    {name:'Maria Luiza de Almeida', username:'maria@provider.com', password:'123abc'},
    {name:'Augusto Muller de Almeida', username:'augusto@provider.com', password:'123abc'},
    {name:'Gustavo Souza de Almeida', username:'gustavo@provider.com', password:'123abc'},
    {name:'Francieli Dalsente de Almeida', username:'francieli@provider.com', password:'123abc'}
    ]

setUsers(users)
    async function setUsers(users){
        try{
            console.log("iniciando a conexão.!")
            await client.connect()
            console.log("Conexão bem sucedida!")
            for (let i = 0; users.length > i; i++){
            await client.query('insert into users("name", "username", "password") values ('+"'"+users[i].name+"', '"+users[i].username+"', '"+users[i].password+"');")
            }
            console.log("Users inseridos na tabela com sucesso!")
            const resultado = await client.query("select * from users")
            //console.table(resultado.rows)
            let result = resultado.rows
            console.table (result)
        }
        catch(ex){
            console.log("Ocorreu um erro no setUsers. Erro: "+ ex)
        }
        finally{
            await client.end()
            console.log("Cliente desconectado.")
        }
    }