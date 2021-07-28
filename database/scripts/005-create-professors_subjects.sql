CREATE TABLE "professors_subjects" (
	"id" serial NOT NULL,
	"subjectId" integer NOT NULL,
	"professorId" integer NOT NULL,
	CONSTRAINT "professors_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
