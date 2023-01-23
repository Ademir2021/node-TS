var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "leao"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM clientes WHERE cli_chave = 18";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});