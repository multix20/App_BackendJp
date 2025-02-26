// src/server/models/User.js

import pool from '../database/db.js'; // Importa la conexión a PostgreSQL

const User = {
  async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0]; // Devuelve el primer usuario encontrado o undefined
  },

  async create({ username, email, password }) {
    const { rows } = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    return rows[0]; // Devuelve el usuario recién creado
  }
};

export default User;
