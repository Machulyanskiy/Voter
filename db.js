const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: "SG-Voter-28-master.servers.mongodirector.com",
    user: 'qwer',
    password: '12345678qW$',
    database: 'mysql',
    port: 3306
});