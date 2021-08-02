import { getRepository } from "typeorm";

import Test from "../../src/entities/Test";
import Category from "../../src/entities/Category";
import Subject from "../../src/entities/Subject";
import Professor from "../../src/entities/Professor";
import Semester from "../../src/entities/Semester";

export default async function cleanDB () {
  await getRepository(Test).query(`TRUNCATE TABLE tests RESTART IDENTITY CASCADE`);
  await getRepository(Category).query(`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`);
  await getRepository(Subject).query(`TRUNCATE TABLE subjects RESTART IDENTITY CASCADE`);
  await getRepository(Professor).query(`TRUNCATE TABLE professors RESTART IDENTITY CASCADE`);
  await getRepository(Professor).query(`TRUNCATE TABLE subjects_professors_professors RESTART IDENTITY CASCADE`);
  await getRepository(Semester).query(`TRUNCATE TABLE semesters RESTART IDENTITY CASCADE`);
}