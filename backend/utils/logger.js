import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;

// Definir el formato personalizado para los logs
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Crear el logger
export const logger = createLogger({
  format: combine(
    colorize(), // Colores para mayor claridad en consola
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new transports.Console(), // Imprimir los logs en la consola
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Guardar errores en un archivo
    new transports.File({ filename: 'logs/combined.log' }) // Guardar todos los logs
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
}

// Exportar como exportación por defecto
export default logger;