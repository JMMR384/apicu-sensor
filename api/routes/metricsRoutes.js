const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Carpeta temporal para archivos subidos

router.get('/', metricsController.getMetrics);
router.post('/', metricsController.addMetric);
router.post('/upload', upload.single('data'), metricsController.uploadMetrics); // Ruta para cargar datos

module.exports = router;