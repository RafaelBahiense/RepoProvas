import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

export class Seed1627619825483 implements MigrationInterface {

    categories = ["P1", "P2", "VR", "VS"];

    subjects = ["Cálculo 1", "Cálculo 2", "Cálculo 3", "Geometria analítica", "Álgebra linear"];
  
    professors = ["Alex", "Leandro", "Aline", "Paulo", "Amanda"];

    professors_subjects = [
        {professorsId: 1, subjectsId: 1},
        {professorsId: 3, subjectsId: 1},
        {professorsId: 3, subjectsId: 3},
        {professorsId: 2, subjectsId: 2},
        {professorsId: 4, subjectsId: 4},
        {professorsId: 5, subjectsId: 5},
    ]

    tests = [
        {name: "2020.1", categoryId: 1, subjectId: 1, professorId: 1, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 2, subjectId: 1, professorId: 1, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 3, subjectId: 1, professorId: 1, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 4, subjectId: 1, professorId: 1, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 1, subjectId: 1, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 2, subjectId: 1, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 3, subjectId: 1, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 4, subjectId: 1, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 1, subjectId: 3, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 2, subjectId: 3, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 3, subjectId: 3, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 4, subjectId: 3, professorId: 3, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 1, subjectId: 2, professorId: 2, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 2, subjectId: 2, professorId: 2, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 3, subjectId: 2, professorId: 2, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 4, subjectId: 2, professorId: 2, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 1, subjectId: 4, professorId: 4, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 2, subjectId: 4, professorId: 4, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 3, subjectId: 4, professorId: 4, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 4, subjectId: 4, professorId: 4, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 1, subjectId: 5, professorId: 5, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 2, subjectId: 5, professorId: 5, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 3, subjectId: 5, professorId: 5, link: "https://postimg.cc/8jwnvC7N"},
        {name: "2020.1", categoryId: 4, subjectId: 5, professorId: 5, link: "https://postimg.cc/8jwnvC7N"},
    ]
  

    public async up(_: QueryRunner) {

        await Promise.all(
            this.categories.map(
                async (category) =>
                await getRepository('categories').insert({name: category})
            )
        );

        await Promise.all(
            this.subjects.map(
                async (subject) =>
                await getRepository('subjects').insert({name: subject})
            )
        );

        await Promise.all(
            this.professors.map(
                async (professor) =>
                await getRepository('professors').insert({name: professor})
            )
        );

        await Promise.all(
            this.professors_subjects.map(
                async (professor_subject) =>
                await getRepository('subjects_professors_professors').insert(professor_subject)
            )
        );

        await Promise.all(
            this.tests.map(
                async (test) =>
                await getRepository('tests').insert(test)
            )
        );
    }

    public async down(_: QueryRunner): Promise<void> {

    }
}
