import { Router } from 'express'
import * as usuariosController from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/usuarios', usuariosController.getUser)
router.post('/usuarios', usuariosController.createUser)

export default router
