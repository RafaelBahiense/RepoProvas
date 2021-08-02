import { getRepository, createQueryBuilder } from "typeorm";

import Test from "../entities/Test";
import Category from "../entities/Category";
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

export async function getByProfessorId(id: number) {
  await idSchema.validateAsync(id);
  const query = await createQueryBuilder(Category)
    .select("categories")
    .from(Category, "categories")
    .leftJoinAndMapMany(
      "categories.tests",
      Test,
      "tests",
      'tests."categoryId" = categories.id'
    )
    .leftJoinAndMapOne("tests.subject", "tests.subject", "subject")
    .where("tests.professorId = :id", { id: id })
    .orderBy("categories.id")
    .getMany();

  for (let category of query)
    for (let test of category.tests) {
      //@ts-ignore
      delete test.professorId;
      //@ts-ignore
      delete test.categoryId;
      //@ts-ignore
      delete test.subjectId;
    }

  return query;
}

export async function getBySubjectId(id: number) {
  await idSchema.validateAsync(id);
  const query = await createQueryBuilder(Category)
    .select("categories")
    .from(Category, "categories")
    .leftJoinAndMapMany(
      "categories.tests",
      Test,
      "tests",
      'tests."categoryId" = categories.id'
    )
    .where("tests.subjectId = :id", { id: id })
    .orderBy("categories.id")
    .getMany();

  for (let category of query)
    for (let test of category.tests) {
      //@ts-ignore
      delete test.professorId;
      //@ts-ignore
      delete test.categoryId;
    }

  return query;
}