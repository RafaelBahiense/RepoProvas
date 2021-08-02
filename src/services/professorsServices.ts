import { getRepository } from "typeorm";

import Professor from "../entities/Professor";
import { idSchema } from "../schemas/schema";


export async function getAll() {
  return await getRepository(Professor)
  .createQueryBuilder("professors")
  .select("professors")
  .leftJoin("professors.tests", "tests")
  .loadRelationCountAndMap("professors.testsCount", "professors.tests")
  .getMany();
}
