import faker from "faker";

export interface Subject {
  name?: string;
}

export class GenSubject implements Subject {
  private static _id: number = 1;

  public id: number;
  public name: string;

  constructor({ name = faker.random.word() }: Subject) {
    this.id = GenSubject._id++;
    this.name = name;
  }
}

export const subjects = [
  "Cálculo 1",
  "Cálculo 2",
  "Cálculo 3",
  "Geometria analítica",
  "Álgebra linear",
];

export const professors_subjects = [
  {professorsId: 1, subjectsId: 1},
  {professorsId: 3, subjectsId: 1},
  {professorsId: 3, subjectsId: 3},
  {professorsId: 2, subjectsId: 2},
  {professorsId: 4, subjectsId: 4},
  {professorsId: 5, subjectsId: 5},
]