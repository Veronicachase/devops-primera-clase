const express = require('express');

const app = express();
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
    res.status(200).json({ message:'Esta es una prueba para comprobar que funciona el despliegue'});
});

// Ruta de ejemplo para pruebas
app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;