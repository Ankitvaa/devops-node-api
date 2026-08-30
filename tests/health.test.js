const request = require("supertest");
const app = require("../src/app");

describe("Health API", () => {
  test("GET / should return 200", async () => {
    const response = await request(app)
      .get("/");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      success: true,
      message: "DevOps Node API is running"
    });
  });

  test("GET /api/health should return UP", async () => {
    const response = await request(app)
      .get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.status).toBe("UP");
  });

  test("GET /api/health/ready should return READY", async () => {
    const response = await request(app)
      .get("/api/health/ready");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.status).toBe("READY");
  });
});
