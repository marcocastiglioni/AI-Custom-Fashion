// Importar dependencias principales
const express = require('express');
const cors = require('cors');
const pool = require('./database/postgresql');
const connectToMongoDB = require('./database/mongodb');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { notFoundHandler, errorHandler } = require('./utils/errorHandling');
const logger = require('./utils/logger');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); 

// Crear una instancia de Express
const app = express();

// Middleware
// Habilitar CORS para todas las solicitudes
app.use(cors({
  origin: 'http://localhost:3000',  // Solo permitir el frontend desde localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Métodos permitidos
  credentials: true  // Si necesitas manejar cookies o autenticación
}));
app.options('*', cors());  // Permitir preflight requests en todas las rutas
app.use(bodyParser.json());

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Conexión a MongoDB
connectToMongoDB();

// Ejemplo de una ruta que consulta a PostgreSQL
app.get('/api/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);  // Enviar los datos de PostgreSQL al frontend
  } catch (err) {
    console.error('[APP.js] Error al ejecutar la consulta', err);
    res.status(500).json({ error: '[APP.js] Error al obtener los pedidos' });
  }
});

// Rutas
const userRoutes = require('./routes/userRoutes');
const customizationRoutes = require('./routes/customizationRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Configurar rutas
app.use((req, res, next) => {
  console.log(`[APP.js] Solicitud recibida: ${req.method} ${req.originalUrl}`);
  next();
});
app.use('/api/users', userRoutes);
app.use('/api/customizations', customizationRoutes);
app.use('/api/orders', orderRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  logger.info('[APP.js] Ruta principal solicitada');
  res.send('[APP.js] Bienvenido a AI-Custom-Fashion Backend');
});


// Manejar rutas no encontradas
app.use(notFoundHandler); // Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  const error = new Error(`[ERROR HANDLING] Ruta no encontrada - ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Middleware de manejo de errores generales
app.use(errorHandler); 

// Middleware de manejo de errores
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

// Configuración del puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`[APP.js] Servidor corriendo en el puerto ${PORT}`);
});


const initDB = async () => {
    try {
        const initSQL = fs.readFileSync(path.join(__dirname, 'database/init.sql')).toString();
        await pool.query(initSQL);
        console.log('[APP.js] Base de datos inicializada correctamente');
    } catch (error) {
        console.error('[APP.js] Error al inicializar la base de datos:', error);
    }
};

initDB();