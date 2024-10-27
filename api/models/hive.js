const connection = require('../config/database');

const Hive = {
    getAllHives: (callback) => {
        connection.query('SELECT * FROM colmena', callback);
    },
    addHive: (hive, callback) => {
        const sql = 'INSERT INTO colmena (id, id_sector) VALUES (?, ?)';
        connection.query(sql, [hive.id, hive.id_sector], callback);
    },
    // Más métodos según sea necesario...
};

module.exports = Hive;