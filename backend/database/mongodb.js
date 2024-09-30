const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); // Para cargar las variables de entorno desde el archivo .env

// URL de conexión a MongoDB, obtenida desde las variables de entorno
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("[MONGODB.js] Error: MONGO_URI no está definido en el archivo .env");
  process.exit(1);  // Termina el proceso si la URI no está definida
}

// Función para conectar a MongoDB
const connectToMongoDB = async () => {
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

// Llamar a la función de conexión
connectToMongoDB();

// Exportar la conexión de mongoose
module.exports = connectToMongoDB;
