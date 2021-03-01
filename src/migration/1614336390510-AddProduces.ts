import {MigrationInterface, QueryRunner} from "typeorm";

export class AddProduces1614336390510 implements MigrationInterface {
  name = "AddProduces1614336390510";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Produces" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "UQ_a493b76124890752bbe466e24db" UNIQUE ("name"), CONSTRAINT "PK_4e60764c69c577dcec959f461a7" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Produces"`);
  }
}
