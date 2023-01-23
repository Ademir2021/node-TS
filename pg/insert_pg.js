const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
var user = []

user = {name:"Luiz da Costa Silva", username:"luiz@provider.com", password:"abc123"}

setUser(user)

async function setUser(user){
    try{
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")
        await client.query('insert into users("name", "username", "password") values ('+"'"+user.name+"', '"+user.username+"', '"+user.password+"');")
        console.log("User inserido na tabela!")

        const resultado = await client.query("select * from users")
        console.table(resultado.rows)
    }
    catch(ex){
        console.log("Ocorreu um erro no setUser. Erro: "+ ex)
    }
    finally{
        await client.end()
        console.log("Cliente desconectado.")
    }
}