import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js'; // Importamos el middleware

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// 🔹 Ruta protegida con JWT
router.get('/perfil', verifyToken, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', user: req.user });
});

export default router;
