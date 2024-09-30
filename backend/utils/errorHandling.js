import logger from './logger.js';

// Middleware de manejo de errores generales
const errorHandler = (error, req, res, next) => {
  logger.error(`${err.message} - ${req.method} ${req.url}`);

  const statusCode = error.status || 500;
  console.error(`[ERROR HANDLING.js] ${error.message}`);

  res.status(statusCode).json({
    message: error.message || '[ERROR HANDLING.js] Error en el servidor',
    error: process.env.NODE_ENV === 'production' ? {} : error.stack, // En producción no se debe mostrar el stack trace
  });
};

// Middleware para manejar rutas no encontradas (404)
const notFoundHandler = (req, res, next) => {
  const error = new Error(`[ERROR HANDLING.js] Ruta no encontrada - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export {
  errorHandler,
  notFoundHandler
}