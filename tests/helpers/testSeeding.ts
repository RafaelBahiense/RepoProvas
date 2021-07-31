import { getRepository } from "typeorm";

import { categories } from "../factories/category";
import { genProfessors } from "../factories/professor";
import { subjects, professors_subjects } from "../factories/subject";

interface SeedInfos {
  professors: number;
}

export default async function seedDB({ professors = 0 }: SeedInfos) {
  await Promise.all(
    categories.map(
      async (category) =>
        await getRepository("categories").insert({ name: category })
    )
  );

  await Promise.all(
    subjects.map(
      async (subject) =>
        await getRepository("subjects").insert({ name: subject })
    )
  );

  await Promise.all(
    genProfessors(professors).map(
      async (professor) =>
        await getRepository("professors").insert({ name: professor })
    )
  );

  await Promise.all(
    professors_subjects.map(
      async (professor_subject) =>
        await getRepository("subjects_professors_professors").insert(
          professor_subject
        )
    )
  );
}
