import supertest from "supertest";
import faker from "faker";

import "../../src/config/env";
import app from "../../src/app";
import { truncateTable, endConnection } from "../helpers/database";

beforeAll(async () => {
  await truncateTable("users");
});

afterAll(async () => {
  await truncateTable("users");
  endConnection();
});

describe("GET /", () => {
  const Route = "/";
  const agent = supertest(app);

  it("returns status 200 for valid params", async () => {
    const result = await agent.post(Route).send({});
    expect(result.status).toEqual(200);
  });
});
