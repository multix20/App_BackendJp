import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    console.log("❌ No se proporcionó token");
    return res.status(403).json({ error: 'Acceso denegado, token no proporcionado' });
  }

  try {
    // 🔹 Remover "Bearer " antes de verificar el token
    const tokenWithoutBearer = token.replace('Bearer ', '').trim();
    console.log('🔍 Token recibido:', tokenWithoutBearer);

    console.log('🔑 Clave secreta usada para verificar:', process.env.JWT_SECRET);

    // 🔹 Verificar el token con `JWT_SECRET`
    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    console.log('✅ Token verificado correctamente:', verified);

    req.user = verified;
    next();
  } catch (error) {
    console.error('❌ Error al verificar token:', error.message);
    res.status(401).json({ error: 'Token inválido' });
  }
};
