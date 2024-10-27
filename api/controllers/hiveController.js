const Hive = require('../models/hive');

exports.getHives = (req, res) => {
    Hive.getAllHives((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.addHive = (req, res) => {
    const hive = req.body;
    Hive.addHive(hive, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id: results.insertId, ...hive });
    });
};