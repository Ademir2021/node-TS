const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
getUsers()

async function getUsers(){
try{
    console.log("Iniciando a conexão!")
    await client.connect()
    console.log('Bem sucedida!')
    const resultado = await client.query("select * from users")
    let user = resultado.rows
    console.log(user[0].id + "\n" + user[0].name) 
 }
    catch(ex){
    console.log("Ocorreu erro em users", + ex)
    }
    finally{
        await client.end()
        console.log("\nCliente desconectado")
    }
}
