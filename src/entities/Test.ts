import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import Category from "./Categories";
import Subject from "./Subject";
import Professor from "./Professor";

@Entity("tests")
export default class Test {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  categoryId!: number;

  @ManyToOne(() => Category, (category) => category.id)
  category!: Category;

  @Column()
  subjectId!: number;

  @ManyToOne(() => Subject, (subject) => subject.id)
  subject!: Subject;

  @Column()
  professorId!: number;

  @ManyToOne(() => Professor, (professor) => professor.id)
  professor!: Professor;

  @Column()
  link!: string;
}
