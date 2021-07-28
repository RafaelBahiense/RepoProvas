ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("professorId") REFERENCES "professors"("id");

ALTER TABLE "professors_subjects" ADD CONSTRAINT "professors_subjects_fk0" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id");
ALTER TABLE "professors_subjects" ADD CONSTRAINT "professors_subjects_fk1" FOREIGN KEY ("professorId") REFERENCES "professors"("id");
