const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)

getUsers()

async function getUsers(){
try{
    console.log("Iniciando a conexão!")
    await client.connect()
    console.log('Bem sucedida!')
    const resultado = await client.query("SELECT MAX(id) FROM users;")
    let id = 0
    let numNota = 0
    id = resultado.rows[0].max
    numNota = id + 1
    console.log(numNota)
 }
    catch(ex){
    console.log("Ocorreu erro em users", + ex)
    }
    finally{
        await client.end()
        console.log("Cliente desconectado")
    }
}
