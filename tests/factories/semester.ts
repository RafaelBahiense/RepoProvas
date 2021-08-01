import faker from "faker";

export interface Semester {
  name?: string;
}

export class GenSemester implements Semester {
  private static _id: number = 1;

  public id: number;
  public name: string;

  constructor({ name = faker.random.word() }: Semester) {
    this.id = GenSemester._id++;
    this.name = name;
  }
}

const sampleSemesters = [
  "1° Período",
  "2° Período",
  "3° Período",
  "4° Período",
  "5° Período",
  "6° Período",
  "7° Período",
  "8° Período",
  "9° Período",
  "10° Período",
];

export function genSemesters(semesters: string[] = sampleSemesters) {
  const subjects: GenSemester[] = [];
  for (let i = 0; i < semesters.length; i++) subjects.push(new GenSemester({name: semesters[i]}));
  return subjects;
}
