import { getRepository, createQueryBuilder } from "typeorm";

import Subject from "../entities/Subject";
import Semester from "../entities/Semester";
import Test from "../entities/Test";

export async function getAll() {
  return await getRepository(Subject).find({ relations: ["professors"] });
}

export async function getAllWithCount() {
  return await getRepository(Subject)
  .createQueryBuilder("subjects")
  .select("subjects")
  .leftJoin("subjects.tests", "tests")
  .loadRelationCountAndMap("subjects.testsCount", "subjects.tests")
  .orderBy("subjects.semesterId")
  .getMany();
}