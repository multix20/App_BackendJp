// Controlador de usuarios

import * as sql from '../models/User.js'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
  const { email, password, rol, lenguage } = req.body

  if (!email || !password || !rol || !lenguage) {
    return res.status(400).json({ message: 'Se requieren todos los campos' })
  }

  try {
    const newUser = await sql.createUser({ email, password, rol, lenguage })
    res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser })
  } catch (error) {
    console.error('[createUser] => error:', error)
    if (error.code === '23505') {
      return res.status(409).json({ message: 'No se pudo crear el usuario' })
    }
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const getUser = async (req, res) => {
  try {
    // Extraer el token de las cabeceras Authorization
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token no proporcionado o inválido' })
    }

    const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_KEY)
    const email = decoded.email
    const user = await sql.getUser(email)
    delete user.password

    res.status(200).json({ user })
  } catch (error) {
    console.error('[getUserData] => error:', error)
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token inválido' })
    } else if (error.message === 'Usuario no encontrado') {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
