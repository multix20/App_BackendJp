// Propuesta inicial de login

import * as sql from '../models/login.model.js'

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Se requiere usuario y contraseña' })
  }

  try {
    const { token, user } = await sql.loginUser(email, password)
    res.status(200).json({ message: 'Inicio de sesión exitoso', token, user })
  } catch (error) {
    if (error.message === 'Credenciales inválidas') {
      return res.status(401).json({ message: error.message })
    }
    console.error('[loginUser] => error:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
