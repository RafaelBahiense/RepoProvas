import { getRepository } from "typeorm";

import Test from "../../src/entities/Test";
import Category from "../../src/entities/Category";
import Subject from "../../src/entities/Subject";
import Professor from "../../src/entities/Professor";

export default async function cleanDB () {
  await getRepository(Test).clear();
  await getRepository(Category).clear();
  await getRepository(Subject).clear();
  await getRepository(Professor).clear();
}