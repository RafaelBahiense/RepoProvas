import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Test from "./Test";
import Professor from "./Professor";
import Semester from "./Semester";

@Entity("subjects")
export default class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Subject, (subject) => subject.id)
  tests!: Test[];

  @ManyToOne(() => Semester, (semester) => semester.id)
  semester!: Semester;

  @ManyToMany(() => Professor, (professor) => professor.subjects)
  @JoinTable()
  professors!: Professor[];


}
