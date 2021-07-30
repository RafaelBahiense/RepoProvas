import faker from "faker";

export interface Test {
  name?: string;
  categoryId?: number;
  subjectId?: number;
  professorId?: number;
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
    link = faker.internet.url(),
  }: Test) {
    this.id = GenTest._id++;
    this.name = name;
    this.link = link;
  }
}
