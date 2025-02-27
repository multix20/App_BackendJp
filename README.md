README.md - Hito 3: Backend del Marketplace de Cursos
md
Copiar
# 📚 Hito 3 - Backend del Marketplace de Cursos

Este proyecto es el backend de un marketplace de cursos en línea, desarrollado en **Node.js** con **Express** y **PostgreSQL**. Su principal función es gestionar la autenticación de usuarios y el acceso a rutas protegidas mediante **JSON Web Tokens (JWT)**.

## 📌 Tecnologías Utilizadas

- **Node.js** + **Express** → Framework para el backend.
- **PostgreSQL** → Base de datos relacional.
- **jsonwebtoken (JWT)** → Autenticación segura.
- **bcrypt** → Encriptación de contraseñas.
- **pg** → Cliente para PostgreSQL.
- **dotenv** → Gestión de variables de entorno.

## 🔐 Autenticación y Seguridad

El sistema de autenticación implementa:

- **Registro (`POST /register`)** → Crea un usuario en la base de datos.
- **Login (`POST /login`)** → Genera un token JWT válido por 1 hora.
- **Middleware de autenticación (`verifyToken`)** → Protege rutas sensibles.
- **Ruta protegida (`GET /perfil`)** → Solo accesible con un token JWT válido.

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
2️⃣ Instalar dependencias
bash
Copiar
npm install
3️⃣ Configurar las variables de entorno
Crea un archivo .env en la raíz del proyecto y agrega:

ini
Copiar
DB_USER=cursos_user
DB_PASSWORD=multix2025
DB_NAME=cursos_db
DB_PORT=5432
JWT_SECRET=tu_clave_secreta_segura
🔹 Importante: Para JWT_SECRET, usa una clave segura de al menos 256 bits.

4️⃣ Iniciar el servidor
bash
Copiar
node index.js
El servidor se ejecutará en http://localhost:3000.

🛠️ Endpoints Disponibles
📌 Autenticación
Método	Endpoint	Descripción	Protección
POST	/api/auth/register	Registra un usuario en la base de datos.	❌ No requiere autenticación
POST	/api/auth/login	Inicia sesión y devuelve un token JWT.	❌ No requiere autenticación
GET	/api/auth/perfil	Devuelve los datos del usuario autenticado.	✅ Requiere JWT
🧪 Pruebas en Thunder Client
Se realizaron pruebas en Thunder Client para validar el correcto funcionamiento de la autenticación, incluyendo:

Registro de usuario
Inicio de sesión
Acceso a rutas protegidas con JWT
📌 Estado del Proyecto
✅ Autenticación completamente implementada y probada.
✅ Base de datos configurada y funcional.
✅ Rutas protegidas y seguras con JWT.

🔄 Contribuciones y Futuras Mejoras
Este proyecto sigue en desarrollo. Se pueden incluir mejoras como:

Sistema de roles (Admin, Usuario)
Manejo de Refresh Tokens para sesiones más largas
Endpoints adicionales para la gestión de cursos