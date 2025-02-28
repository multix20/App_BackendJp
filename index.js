import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/server/routers/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// 📌 Registrar rutas
app.use("/api/auth", authRoutes);

// 📌 Solo inicia el servidor si NO está en modo de prueba
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

export default app;
