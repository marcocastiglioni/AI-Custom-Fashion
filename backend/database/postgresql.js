const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' }); // Para cargar las variables de entorno desde el archivo .env

// Conectar usando la URI correcta desde el archivo .env
const pool = new Pool({
  connectionString: process.env.POSTGRESQL_URI,  // Usa POSTGRESQL_URI definida en el .env
});

// Probar la conexión
pool.connect((err) => {
  if ( err ) {
    console.error('[POSTGRES.js] Error al conectar a PostgreSQL:', err);
  } else {
    console.log('[POSTGRES.js] Conectado a PostgreSQL');
  }
});

// Exportar el pool para usar en otros módulos
module.exports = pool;
