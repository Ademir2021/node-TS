var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "teste"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM itens where id_item = 2", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});