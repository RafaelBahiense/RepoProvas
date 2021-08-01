import "../../src/config/env";
import { init } from "../../src/app";
import seedDB from "./seeding";
import cleanDB from "./cleanDatabase";

beforeAll(async () => {
  await init();
  await cleanDB();
  await seedDB();
});

jest.setTimeout(10000)

describe("GET /category/:id", () => {


  it("db seeder", async () => {
    expect(200).toEqual(200);
  });
});
