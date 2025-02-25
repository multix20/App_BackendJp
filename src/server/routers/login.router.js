import { Router } from 'express'
import * as loginController from '../controllers/login.controller.js'

const router = Router()

router.post('/login', loginController.loginUser)

export default router
