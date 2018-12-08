const Theme = require('../models/Theme');
module.exports.create = async function(req, res) {
    try {
        let json = ({
          error : null
        });
        if (req.body.name.length > 1024) {
            json.error = "Name length cannot be greater than 1024";
            res.writeHead(416, {
                "Content-Range": "bytes */1024"
            });
            res.end(JSON.stringify(json));
        } else {
            await Theme.create(req.body.name, req.body.yes, req.body.no, function (err, themeId) {
                if (err) res.status(500).json(err);
                else {
                    json.themeId = themeId;
                    res.status(201).json(json);
                }
            });
        }
    } catch (e) {
        console.error(e.message);
    }
};

module.exports.getById = async function(req, res) {
    try {
         Theme.getById(req.params.id, function(err, result){
            if (err) res.status(500).json(err);
            else if (result.length === 0) res.status(404).json("Theme with current id is absent");
            else {
                console.log(result.length);
                const json = ({
                   "name" : result[0].name,
                   "votes" : {
                       "yes" : result[0].yes,
                       "no" : result[0].no
                   }
                });
                res.status(200).json(json);
            }
        });
    } catch (e) {
        console.error(e.message);
    }
};

module.exports.up = function(req, res) {
    try {
        Theme.up(req.params.id, function(err, result){
            if (err) res.status(500).json(err);
            else if (result.length === 0) res.status(404).json("Theme with current id is absent");
            else res.status(200).send("OK");
        });
    } catch (e) {
        console.error(e.message);
    }
};

module.exports.down = function(req, res) {
    try {
        Theme.down(req.params.id, function(err, result){
            if (err) res.status(500).json(err);
            else if (result.length === 0) res.status(404).json("Theme with current id is absent");
            else res.status(200).send("OK");
        });
    } catch (e) {
        console.error(e.message);
    }
};

module.exports.getAll = function(req, res) {
    try {
        Theme.getAll(function(err, result){
            if (err) res.status(500).json(err);
            else res.status(200).json(result);
        });
    } catch (e) {
        console.error(e.message);
    }
};

module.exports.delete = function(req, res) {
    try {
        Theme.delete(req.params.id, function(err, result){
            if (err) res.status(500).json(err);
            else if (result.length === 0) res.status(404).json("Theme with current id is absent");
            else res.status(200).json(result);
        });
    } catch (e) {
        console.error(e.message);
    }
};