import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";

import Test from "./Test";
import Subject from "./Subject";

@Entity("professors")
export default class Professor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Professor, (professor) => professor.id)
  tests!: Test[];

  @ManyToMany(() => Subject, (subject) => subject.professors)
  subjects!: Subject[];
}
