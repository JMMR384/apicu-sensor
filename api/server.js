const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hiveRoutes = require('./routes/hiveRoutes');

app.use(bodyParser.json());
app.use(express.static('public'));

// Rutas de la API
app.use('/api/hives', hiveRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});