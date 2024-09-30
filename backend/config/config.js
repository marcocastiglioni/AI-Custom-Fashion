import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

// Definir configuraciones para diferentes entornos
const config = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  
  // Configuración de MongoDB
  mongo: { uri: process.env.MONGODB_URI },

  // Configuración de PostgreSQL
  postgres: {
    uri: process.env.POSTGRESQL_URI,
    poolConfig: {
      max: 10, // Máximo de conexiones simultáneas en el pool
      min: 2,  // Mínimo de conexiones en el pool
      idleTimeoutMillis: 30000, // Tiempo máximo de inactividad de una conexión
    }
  },

  // Otros ajustes o servicios (API de fábrica automatizada, por ejemplo)
  factoryAPI: {
    baseURL: process.env.FACTORY_API_BASE_URL || 'https://api.factory.example.com',
    apiKey: process.env.FACTORY_API_KEY || 'default-api-key'
  }
};

// Exportar la configuración para ser usada en toda la aplicación
export default config;
