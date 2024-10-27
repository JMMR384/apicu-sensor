const Metric = require('../models/metric');
const fs = require('fs');
const csv = require('csv-parser');

exports.uploadMetrics = (req, res) => {
    const results = [];
    const hiveId = req.body.id_colmena; // Asumimos que el ID de la colmena viene en el cuerpo de la solicitud

    // Comprueba que se ha subido un archivo
    if (!req.file) {
        return res.status(400).send('No se ha subido ningún archivo');
    }

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            results.forEach(async (metric) => {
                // Se espera que el CSV tenga columnas "humedad" y "temperatura"
                await Metric.addMetric({
                    id_colmena: hiveId,
                    humedad: parseFloat(metric.humedad),
                    temperatura: parseFloat(metric.temperatura)
                }, (err) => {
                    if (err) {
                        console.error('Error al insertar métrica:', err);
                    }
                });
            });
            res.status(200).send('Datos cargados correctamente');
        });
};