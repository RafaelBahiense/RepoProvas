import random from "../helpers/random";
import { GenProfessor } from "./professor";
import { GenSubject } from "./subject";

export class GenProfessorsSubjects {
  public professorsId: number;
  public subjectsId: number;

  constructor(professorsId: number, subjectsId: number) {
    this.professorsId = professorsId;
    this.subjectsId = subjectsId;
  }
}

export function genProfessorsSubjects(professors: GenProfessor[], subjects: GenSubject[]) {
  const professors_subjects: GenProfessorsSubjects[] = [];
  for(let i = 0; i < 2; i++)
    for (let i = 1; i <= professors.length; i++) {
      const index = random(subjects.length); 
      const subject = subjects[index];
      professors_subjects.push(new GenProfessorsSubjects(i, subject.id));
      subjects.splice(index, 1);
    }
  return professors_subjects;
}
