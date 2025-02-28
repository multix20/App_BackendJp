import request from "supertest";
import app from "../index.js"; // Asegúrate de que `index.js` exporta `app` correctamente

describe("Pruebas API REST", () => {
  it("✅ Debe registrar un usuario (POST /api/auth/register)", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        username: "usuario_test",
        email: `test${Date.now()}@email.com`,
        password: "123456",
      });

    expect([201, 400]).toContain(res.statusCode);
    if (res.statusCode === 201) {
      expect(res.body).toHaveProperty("token");
    } else {
      expect(res.body.error).toBe("El usuario ya existe");
    }
  });

  it("✅ Debe autenticar un usuario (POST /api/auth/login)", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@email.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("✅ Debe acceder a la ruta protegida con un token válido (GET /api/auth/perfil)", async () => {
    const login = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@email.com",
        password: "123456",
      });

    const res = await request(app)
      .get("/api/auth/perfil")
      .set("Authorization", `Bearer ${login.body.token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("user");
  });

  it("❌ No debe permitir acceso sin token (GET /api/auth/perfil)", async () => {
    const res = await request(app).get("/api/auth/perfil");

    expect(res.statusCode).toBe(403);
    expect(res.body.error).toBe("Acceso denegado, token no proporcionado");
  });
});
