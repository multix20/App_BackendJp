import pool from './db.js';  // ✅ Asegúrate de que esta línea sea correcta

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa:', res.rows[0]);
  } catch (error) {
    console.error('Error en la conexión:', error);
  }
};

testConnection();
