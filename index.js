import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Endpoint GET que devuelve "Hola Mundo"
app.get('/', (req, res) => {
  res.json({
    message: 'Hola Mundo',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Endpoint adicional para health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📡 Endpoint disponible: GET /`);
});
