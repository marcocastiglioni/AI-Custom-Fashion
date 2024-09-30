import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Cargar el archivo .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

// URL de conexión a MongoDB, obtenida desde las variables de entorno
const mongoUri = process.env.MONGODB_URI;

// Función para conectar a MongoDB
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect( mongoUri )
    .then(() => {
      console.log('[MONGODB.js] Conectado a MongoDB');
    })
    .catch((error) => {
      console.error('[MONGODB.js] Error al conectar a MongoDB:', error);
    });;
  } catch (error) {
    console.error('[MONGODB.js] Catch: Error al conectar a MongoDB:', error);
    process.exit(1); // Terminar el proceso si la conexión falla
  }
};
