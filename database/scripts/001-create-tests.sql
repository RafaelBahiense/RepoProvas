CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"categoryId" integer NOT NULL,
	"subjectsId" integer NOT NULL,
	"professorId" integer NOT NULL,
	"link" TEXT NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
