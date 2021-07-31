import faker from "faker";

export interface Professor {
  name?: string;
}

export class GenProfessor implements Professor {
  private static _id: number = 1;

  public id: number;
  public name: string;

  constructor({ name = faker.name.findName() }: Professor) {
    this.id = GenProfessor._id++;
    this.name = name;
  }
}

export function genProfessors(amount: number) {
    const professors: GenProfessor[] = [];
    for(let i = 0; i < amount; i++)
        professors.push(new GenProfessor({}))
    return professors
}
