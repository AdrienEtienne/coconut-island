import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSeasonColumnsToProduces1614674910823 implements MigrationInterface {
  name = "AddSeasonColumnsToProduces1614674910823";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Produces" ADD "seasonFirstMonth" smallint NOT NULL DEFAULT '0'`);
    await queryRunner.query(`ALTER TABLE "Produces" ADD "seasonMonthsCount" smallint NOT NULL DEFAULT '0'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Produces" DROP COLUMN "seasonMonthsCount"`);
    await queryRunner.query(`ALTER TABLE "Produces" DROP COLUMN "seasonFirstMonth"`);
  }
}
