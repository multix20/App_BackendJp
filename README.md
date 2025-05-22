# 📦 App_BackendJp

Backend de una aplicación web desarrollado en Node.js, diseñado para gestionar operaciones relacionadas con usuarios, autenticación y base de datos. Este proyecto forma parte de mi portafolio como desarrollador backend.

---

## 🚀 Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución JavaScript en el servidor.
- **Express.js** – Framework minimalista para aplicaciones web.
- **MongoDB** – Base de datos NoSQL.
- **Mongoose** – ODM para MongoDB.
- **dotenv** – Variables de entorno.
- **bcryptjs** – Encriptación de contraseñas.
- **jsonwebtoken** – Autenticación con JWT.

---

## 📁 Estructura del Proyecto

```
App_BackendJp/
├── database/
│   └── connection.js
├── src/
│   └── server/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── middlewares/
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Configuración y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone git@github.com:multix20/App_BackendJp.git
   cd App_BackendJp
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Renombrar `.env.example` a `.env` y completar con:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/tu_basededatos
   JWT_SECRET=clave-secreta
   ```

4. **Iniciar el servidor:**

   ```bash
   npm start
   ```

---

## 🧪 Endpoints de la API

| Método | Ruta                | Descripción                      |
|--------|---------------------|----------------------------------|
| POST   | `/api/auth/register` | Registro de usuario              |
| POST   | `/api/auth/login`    | Login y generación de token JWT |
| GET    | `/api/users`         | Listado de usuarios (privado)   |
| GET    | `/api/users/:id`     | Ver perfil de usuario (privado) |

---

## 🔐 Seguridad

- JWT para autenticación
- Contraseñas hasheadas con `bcrypt`
- Rutas protegidas con middlewares

---

## ✨ Posibilidades de Mejora

- Validación de entradas con Joi o Express-validator
- Roles y permisos
- Tests con Jest o Supertest
- Documentación Swagger

---

## 📄 Licencia

Distribuido bajo la licencia [MIT](LICENSE).

---

## 👨‍💻 Autor

Desarrollado por **Juan Pablo Monsalve Suazo**  
GitHub: [@multix20](https://github.com/multix20)
