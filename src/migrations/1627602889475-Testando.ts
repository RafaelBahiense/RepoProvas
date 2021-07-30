import {MigrationInterface, QueryRunner} from "typeorm";


export class Testando1627602889475 implements MigrationInterface {
    name = 'Testando1627602889475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "categoryId" integer NOT NULL, "subjectId" integer NOT NULL, "professorId" integer NOT NULL, "link" character varying NOT NULL, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_professors_professors" ("subjectsId" integer NOT NULL, "professorsId" integer NOT NULL, CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "subjects_professors_professors" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "subjects_professors_professors" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_3557744b71edc782e1882c84776" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_3557744b71edc782e1882c84776"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`DROP INDEX "IDX_a951cc9c4c6c77d1c7de8ae883"`);
        await queryRunner.query(`DROP INDEX "IDX_e34e39105e2fb3d152831bd174"`);
        await queryRunner.query(`DROP TABLE "subjects_professors_professors"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
