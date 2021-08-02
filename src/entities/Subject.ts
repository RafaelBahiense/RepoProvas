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

  @OneToMany(() => Test, (test) => test.subject)
  tests!: Test[];

  @Column()
  semesterId!: number;

  @ManyToOne(() => Semester, (semester) => semester.id)
  semester!: Semester;

  @ManyToMany(() => Professor, (professor) => professor.subjects)
  @JoinTable()
  professors!: Professor[];


}
