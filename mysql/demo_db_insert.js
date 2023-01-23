var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "leao"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO clientes (cli_chave, cli_razaosocial, cli_nomefantasia) VALUES ?";
    var values = [
      [19, 'Maria', 'Rosa'],
    //   [6, 'Peter', 'Lowstreet 4'],
    //   [7, 'Amy', 'Apple st 652'],
    //   [8, 'Hannah', 'Mountain 21'],
    //   [9, 'Michael', 'Valley 345'],
    //   [10, 'Sandy', 'Ocean blvd 2'],
    //   [11, 'Betty', 'Green Grass 1'],
    //   [12, 'Richard', 'Sky st 331'],
    //   [13, 'Susan', 'One way 98'],
    //   [14, 'Vicky', 'Yellow Garden 2'],
    //   [15, 'Ben', 'Park Lane 38'],
    //   [16, 'William', 'Central st 954'],
    //   [17, 'Chuck', 'Main Road 989'],
    //   [18, 'Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });