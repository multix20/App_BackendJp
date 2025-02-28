import { Router } from "express";
import { register, login } from "../controllers/authController.js"; // 📌 Importación correcta
import { verifyToken } from "../middlewares/authMiddleware.js";

console.log("🔍 authController importado:", { register, login });

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/perfil", verifyToken, (req, res) => {
  res.json({ mensaje: "Acceso autorizado", user: req.user });
});

export default router;
