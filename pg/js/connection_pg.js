const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)

/**Maneira  mais simples de conectar ao postgres */
client.connect() //Abrir conexao
client.query("select * from users") //executa query
.then(results =>{ //jogar o resultado da query no result
    const resultado = results.rows //jogar as linhas do  resultado na constante resultado
    console.table(resultado)  // exibir o resultado
})
.finally(() => client.end())  //fecha a conexao