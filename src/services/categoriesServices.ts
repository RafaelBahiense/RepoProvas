import { getRepository } from "typeorm";

import Category from "../entities/Category";

export async function getAll() {
  return await getRepository(Category).find();
}
