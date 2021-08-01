import faker from "faker";

import { GenSemester } from "./semester";

export interface Subject {
  name?: string;
  semesterId: number;
}

export class GenSubject implements Subject {
  private static _id: number = 1;

  public id: number;
  public name: string;
  public semesterId: number;

  constructor({ name = faker.random.word(), semesterId }: Subject) {
    this.id = GenSubject._id++;
    this.name = name;
    this.semesterId = semesterId;
  }
}

export function genSubjects(semesters: GenSemester[], amount: number = 5) {
  const subjects: GenSubject[] = [];
  for (let i = 0; i < semesters.length; i++)
    for (let j = 0; j < amount; j++)
      subjects.push(new GenSubject({ semesterId: semesters[i].id }));
  return subjects;
}
