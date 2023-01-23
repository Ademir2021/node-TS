var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  //port: "",
  //database: "leao"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!"); //Desabilitado para usar o metodo abaixo.
});

/**
 * Consultar um banco de dados
 * Use instruções SQL para ler (ou gravar) em um banco de dados MySQL.
 * este também é chamado de "consultar" o banco de dados.
 * O objeto de conexão criado no exemplo acima, possui um método de consulta ao banco de dados: 
 * 
 * O método de consulta recebe instruções sql como parâmetro e retorna o resultado.
 * Aprenda a ler, escrever, excluir e atualizar um banco de dados nos próximos capítulos.
 * Leia mais sobre instruções SQL em nosso Tutorial SQL . 
 */

//  con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// }); 
