import pg from 'pg';
import dotenv from 'dotenv';

// 🔹 Usar ruta absoluta para cargar `.env`
dotenv.config({ path: 'C:/Users/multi/OneDrive/Documentos/Desafio Latam/Desafío Final/Hito 3/Cursos_App_Backtend-main/.env' });

// Verificar que las variables de entorno están cargando
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

export default pool;
