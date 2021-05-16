var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database: "kleasdb"
});

con.connect(function(err) {
if (err) throw err;
con.query("SELECT Number, Type, Gender, Fname, Lname, Address, City, State, Zip, Phone FROM customers_kr WHERE Type = '1' ORDER BY state ASC;" , function (err, result) {
if (err) throw err;
console.log(result);
});
});