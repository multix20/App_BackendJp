// Modelo de usuarios

import db from '../database/db_connect.js'
import bcrypt from 'bcrypt'
// import format from 'pg-format'

const saltRounds = 10

export const createUser = async (usuario) => {
  try {
    const { email, password, rol, lenguage } = usuario
    if (!email || !password || !rol || !lenguage) {
      throw new Error('Todos los campos son requeridos')
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const values = [email, hashedPassword, rol, lenguage]
    const query = `
      INSERT INTO usuarios (email, password, rol, lenguage)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`

    const result = await db(query, values)

    return result[0]
  } catch (error) {
    console.error('[createUser] => error:', error)
    throw error
  }
}

export const getUser = async (email) => {
  try {
    const query = 'SELECT * FROM usuarios WHERE email = $1;'
    const users = await db(query, [email])

    if (users.length === 0) {
      throw new Error('Usuario no encontrado')
    }

    return users[0]
  } catch (error) {
    console.error('[getUserByEmail] => error:', error)
    throw error
  }
}
