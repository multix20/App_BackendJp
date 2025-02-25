// Controlador general de errores

export const errors = (req, res) => {
  res.status(404).json({ status: false, message: 'Ruta no encontrada' })
}
