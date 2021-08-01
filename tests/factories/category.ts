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

const sampleCategories = ["P1", "P2", "VR", "VS"];

export function genCategories(categoriesList: string[] = sampleCategories) {
  const categories: GenCategory[] = [];
  for (let i = 0; i < categoriesList.length; i++)
    categories.push(new GenCategory({ name: categoriesList[i] }));
  return categories;
}
