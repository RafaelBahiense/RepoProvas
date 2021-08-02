import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";

import Subject from "./Subject";

@Entity("semesters")
export default class Semester {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Subject, (subject) => subject.semester)
  Subjects!: Subject[];
}
