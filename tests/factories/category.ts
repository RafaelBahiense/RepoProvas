import faker from "faker";

export interface Category {
  name?: string;
}

export class GenCategory implements Category {
  private static _id: number = 1;

  public id: number;
  public name: string;

  constructor({ name = faker.random.word() }: Category) {
    this.id = GenCategory._id++;
    this.name = name;
  }
}

export const categories = ["P1", "P2", "VR", "VS"];
