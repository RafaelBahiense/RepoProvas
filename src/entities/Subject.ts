import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Test from "./Test";
import Professor from "./Professor";

@Entity("subjects")
export default class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Subject, (subject) => subject.id)
  tests!: Test[];

  @ManyToMany(() => Professor, (professor) => professor.subjects)
  @JoinTable()
  professors!: Professor[];
}
