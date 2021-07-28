CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" serial NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
