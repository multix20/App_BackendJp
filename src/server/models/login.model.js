// Modelo para el login de usuarios

import db from '../database/db_connect.js'
import bcrypt from 'bcrypt'
// import format from 'pg-format'
import { jwtSign } from '../utils/auth/jwt.js'

export const loginUser = async (email, password) => {
  try {
    // Consulta a la base de datos para obtener el mail del usuario
    const query = 'SELECT * FROM usuarios WHERE email = $1;'
    const users = await db(query, [email])

    // Verifica si el usuario existe
    if (users.length === 0) {
      throw new Error('Credenciales inválidas')
    }
    const user = users[0]

    // Verifica la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Credenciales inválidas')
    }

    // Genera un token JWT
    const token = jwtSign({ id: user.id, email: user.email })

    return { token, user }
  } catch (error) {
    console.error('[loginUser] => error:', error)
    throw error
  }
}
