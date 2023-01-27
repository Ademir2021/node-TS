const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
var num = 1
getUsers()

async function getUsers(){
try{
    console.log("Iniciando a conexão!")
    await client.connect()
    console.log('Bem sucedida!')
    const resultado = await client.query("select * from users")
    let user = resultado.rows
    for(let i=0; i < user.length; i++){
        let id = "\nID usuário: " + user[i].id
        let data = "\nData insersão usuário: " + user[i].created_at
        let name =  "\nNome usuário: " + user[i].name
        let username = "\nEmail usúario: " + user[i].username
        let password = "\nSenha usúario: " + user[i].password
        console.log("\n\nFicha número: " + num++ + id + data + name + username + password)
        }
 }
    catch(ex){
    console.log("Ocorreu erro em users", + ex)
    }
    finally{
        await client.end()
        console.log("\nCliente desconectado")
    }
}
