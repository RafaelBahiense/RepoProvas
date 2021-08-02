import supertest from "supertest";

import "../../src/config/env";
import app, { init } from "../../src/app";
import seedDB, { Seed } from "../helpers/seeding";
import cleanDB from "../helpers/cleanDatabase";
import { GenTest } from "../factories/test";

let seed: Seed;
jest.setTimeout(10000);

beforeAll(async () => {
  await init();
  await cleanDB();
  seed = await seedDB();
});

afterAll(async () => {
  await cleanDB();
});

describe("POST /tests", () => {
  const Route = "/api/tests";
  const agent = supertest(app);

  it("returns status 400 for invalid name", async () => {
    const result = await agent
      .post(Route)
      .send(
        new GenTest({ name: "", categoryId: 1, subjectId: 1, professorId: 1 })
      );
    expect(result.status).toEqual(400);
  });

  it("returns status 400 for invalid categoryId", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: null, subjectId: 1, professorId: 1 }));
    expect(result.status).toEqual(400);
  });

  it("returns status 404 for not existent categoryId", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: 1000, subjectId: 1, professorId: 1 }));
    expect(result.status).toEqual(404);
  });

  it("returns status 400 for invalid subjectId", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: 1, subjectId: null, professorId: 1 }));
    expect(result.status).toEqual(400);
  });

  it("returns status 404 for not existent subjectId", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: 1, subjectId: 1000, professorId: 1 }));
    expect(result.status).toEqual(404);
  });

  it("returns status 400 for invalid professorId", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: 1, subjectId: 1, professorId: null }));
    expect(result.status).toEqual(400);
  });

  it("returns status 404 for not existent professorId", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: 1, subjectId: 1, professorId: 1000 }));
    expect(result.status).toEqual(404);
  });

  it("returns status 400 for invalid link", async () => {
    const result = await agent.post(Route).send(
      new GenTest({
        categoryId: 1,
        subjectId: 1,
        professorId: 1,
        link: "test",
      })
    );
    expect(result.status).toEqual(400);
  });

  it("returns status 200 for valid params", async () => {
    const result = await agent
      .post(Route)
      .send(new GenTest({ categoryId: 1, subjectId: 1, professorId: 1 }));
    expect(result.status).toEqual(200);
  });
});
