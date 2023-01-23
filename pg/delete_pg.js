const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
var user = []

user = {name:"Luiz da Costa Silva", username:"luiz@provider.com", password:"abc123"}

delUser(user)

async function delUser(user){
try{
    console.log("Iniciando a conexão!")
    await client.connect()
    console.log('Bem sucedida!')
   await client.query("delete from users where name = '"+user.name+"';")
    console.log("user removido da tabela")
    const resultado = await client.query("select * from users")
    console.table(resultado.rows)
 }
    catch(ex){
    console.log("Ocorreu erro em user", + ex)
    }
    finally{
        await client.end()
        console.log("Cliente desconectado")
    }
}

