import pkg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

const { Pool } = pkg;

// Cargar el archivo .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

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

// Exportar el pool para usarlo en otros archivos
export default pool;