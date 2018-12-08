var db = require('../db');

module.exports.create = function (name, up = 0, down = 0, cb) {
    const values = [name, up, down];

    db.query('INSERT INTO themes (name, yes, no) VALUES (?, ?, ?)', values, function(err, result) {
        if (err) return cb(err);
        cb(null, result.insertId);
    });
};

module.exports.getById = function (id, cb) {
    db.query('SELECT * FROM themes WHERE id = ?', id, function(err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
};

module.exports.up = function (id, cb){
    db.query('UPDATE themes SET yes = yes + 1 WHERE id = ?', id, function(err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
};

module.exports.down = function (id, cb){
    db.query('UPDATE themes SET no = no + 1 WHERE id = ?', id, function(err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
};

module.exports.getAll = function (cb) {
    db.query('SELECT * FROM themes', function(err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
};


module.exports.delete = function (id, cb) {
    db.query('DELETE FROM themes WHERE id = ?', id, function(err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
};
