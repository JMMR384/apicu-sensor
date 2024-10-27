const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hiveRoutes = require('./routes/hiveRoutes');
const metricsRoutes = require('./routes/metricsRoutes');
const sectorRoutes = require('./routes/sectorRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(express.static('public'));

// Rutas de la API
app.use('/api/hives', hiveRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/sectors', sectorRoutes);
app.use('/api/users', userRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});