import { getRepository } from "typeorm";

import Test from "../entities/Test";
import { ReceivedTest } from "../interfaces/Test";
import { testSchema, idSchema } from "../schemas/schema";

export async function getById(id: number) {
  await idSchema.validateAsync(id);
  return await getRepository(Test).findOne(
    { id },
    {
      relations: ["category", "subject", "professor"],
      select: ["id", "name", "category", "subject", "professor", "link"],
    }
  );
}

export async function post(test: ReceivedTest) {
  await testSchema.validateAsync(test);
  await getRepository(Test).insert(test);
}
