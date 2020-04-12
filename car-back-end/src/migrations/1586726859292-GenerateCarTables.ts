import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenerateCarTables1586726859292 implements MigrationInterface {
  name = 'GenerateCarTables1586726859292';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "manufacturers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "phone" text NOT NULL, "siret" double precision NOT NULL, CONSTRAINT "PK_138520de32c379a48e703441975" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE TABLE "owners" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "purchase_date" TIMESTAMP NOT NULL DEFAULT current_timestamp, "carId" uuid, CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" double precision NOT NULL, "first_registration_date" TIMESTAMP NOT NULL DEFAULT current_timestamp, "manufacturerId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`ALTER TABLE "owners" ADD CONSTRAINT "FK_8df327abd68acdd1de6bf0edd2b" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_f6c27062077d25785bd1ac742b1" FOREIGN KEY ("manufacturerId") REFERENCES "manufacturers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_f6c27062077d25785bd1ac742b1"`, undefined);
    await queryRunner.query(`ALTER TABLE "owners" DROP CONSTRAINT "FK_8df327abd68acdd1de6bf0edd2b"`, undefined);
    await queryRunner.query(`DROP TABLE "cars"`, undefined);
    await queryRunner.query(`DROP TABLE "owners"`, undefined);
    await queryRunner.query(`DROP TABLE "manufacturers"`, undefined);
  }

}
