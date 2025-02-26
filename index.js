import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Importa tus rutas, por ejemplo:
import authRoutes from './src/server/routers/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
