CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" serial NOT NULL,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
