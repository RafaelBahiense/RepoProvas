import faker from "faker";

import { GenProfessorsSubjects } from "./professors_subjects";
import { GenCategory } from "./category";

export interface Test {
  name?: string;
  categoryId: number;
  subjectId: number;
  professorId: number;
  link?: string;
}

export class GenTest implements Test {
  private static _id: number = 1;

  public id: number;
  public name: string;
  public categoryId: number;
  public subjectId: number;
  public professorId: number;
  public link: string;

  constructor({
    name = faker.random.word(),
    categoryId,
    subjectId,
    professorId,
    link = faker.internet.url(),
  }: Test) {
    this.id = GenTest._id++;
    this.name = name;
    this.categoryId = categoryId;
    this.subjectId = subjectId;
    this.professorId = professorId;
    this.link = link;
  }
}

const testsNamesSamples = ["2020.1", "2020.2", "2021.1", "2021.2"];

export function genTests(
  professors_subjects: GenProfessorsSubjects[],
  categories: GenCategory[]
) {
  const tests: GenTest[] = [];
  for (let i = 0; i < professors_subjects.length; i++)
    for (let j = 0; j < categories.length; j++)
      for (let l = 0; l < testsNamesSamples.length; l++)
        tests.push(
          new GenTest({
            professorId: professors_subjects[i].professorsId,
            subjectId: professors_subjects[i].subjectsId,
            categoryId: categories[j].id,
            name: testsNamesSamples[l],
          })
        );
  return tests;
}
