import { getRepository } from "typeorm";

import Subject from "../entities/Subject";

export async function getAll() {
  return await getRepository(Subject).find({ relations: ["professors"] });
}
