import faker from "faker";

export interface Professor {
  name?: string;
}

export class GenProfessor implements Professor {
  private static _id: number = 1;

  public id: number;
  public name: string;

  constructor({ name = faker.random.word() }: Professor) {
    this.id = GenProfessor._id++;
    this.name = name;
  }
}

export const professors = ["Alex", "Leandro", "Aline", "Paulo", "Amanda"];
