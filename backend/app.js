
// Point d'entrée de l'application backend

const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Routes
// app.use('/api/auth', require('./routes/authRoutes'));

// Serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur Focus démarré sur le port ${PORT}`));
