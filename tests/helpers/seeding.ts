import { getRepository } from "typeorm";

import { genCategories, GenCategory } from "../factories/category";
import { genProfessors, GenProfessor } from "../factories/professor";
import { genSemesters, GenSemester } from "../factories/semester";
import { genSubjects, GenSubject } from "../factories/subject";
import {
  genProfessorsSubjects,
  GenProfessorsSubjects,
} from "../factories/professors_subjects";
import { genTests, GenTest } from "../factories/test";



export interface Seed {
  categories: GenCategory[];
  semesters: GenSemester[];
  subjects: GenSubject[];
  professors: GenProfessor[];
  professors_subjects: GenProfessorsSubjects[];
  tests: GenTest[];
}

const seed: Seed = {
  categories: [],
  semesters: [],
  subjects: [],
  professors: [],
  professors_subjects: [],
  tests: [],
};

export default async function seedDB() {
  const subjectsPerSemester = 5;
  const professorsToGen = subjectsPerSemester * 5;

  seed.categories = genCategories();
  await Promise.all(
    seed.categories.map(
      async (category) =>
        await getRepository("categories").insert({ name: category.name })
    )
  );

  seed.semesters = genSemesters();
  await Promise.all(
    seed.semesters.map(
      async (semester) =>
        await getRepository("semesters").insert({ name: semester.name })
    )
  );

  seed.subjects = genSubjects(seed.semesters, subjectsPerSemester);
  await Promise.all(
    seed.subjects.map(
      async (subject) =>
        await getRepository("subjects").insert({ name: subject.name, semesterId: subject.semesterId})
    )
  );

  seed.professors = genProfessors(professorsToGen);
  await Promise.all(
    seed.professors.map(
      async (professor) =>
        await getRepository("professors").insert({ name: professor.name })
    )
  );

  seed.professors_subjects = genProfessorsSubjects(
    seed.professors,
    seed.subjects
  );
  await Promise.all(
    seed.professors_subjects.map(
      async (professor_subject) =>
        await getRepository("subjects_professors_professors").insert(
          professor_subject
        )
    )
  );

  seed.tests = genTests(seed.professors_subjects, seed.categories);
  await Promise.all(
    seed.tests.map(async (test) => await getRepository("tests").insert(test))
  );

  return seed;
}
