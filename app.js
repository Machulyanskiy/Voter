const express = require('express');
const themeRoutes = require('./routes/theme');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

db.connect(function (err) {
    if (err) return console.error('Error: ' + err.message);
    const createThemes = ` CREATE TABLE IF NOT EXISTS themes(
                            id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                            name VARCHAR (1024) NOT NULL,
                            yes SMALLINT UNSIGNED NOT NULL DEFAULT 0,
                            no SMALLINT UNSIGNED NOT NULL DEFAULT 0,
                            UNIQUE (name)
                        );`;
    db.query(createThemes, function(err, results, fields) {
        if (err) console.log(err.message);
    });
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/theme', themeRoutes);

module.exports = app;