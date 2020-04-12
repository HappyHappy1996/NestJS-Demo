import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenerateCarTables1586720743772 implements MigrationInterface {
  name = 'GenerateCarTables1586720743772';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "manufacturers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "phone" text NOT NULL, "siret" double precision NOT NULL, CONSTRAINT "PK_138520de32c379a48e703441975" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE TABLE "owners" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "purchase_date" TIMESTAMP NOT NULL DEFAULT current_timestamp, CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" double precision NOT NULL, "first_registration_date" TIMESTAMP NOT NULL DEFAULT current_timestamp, "manufacturerId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE TABLE "owners_cars_cars" ("ownersId" uuid NOT NULL, "carsId" uuid NOT NULL, CONSTRAINT "PK_5855e0c2bf35e0d87520e1f9c60" PRIMARY KEY ("ownersId", "carsId"))`, undefined);
    await queryRunner.query(`CREATE INDEX "IDX_122d91bb5c8536623519d4f158" ON "owners_cars_cars" ("ownersId") `, undefined);
    await queryRunner.query(`CREATE INDEX "IDX_c1a7ec4b34d230219aef37da36" ON "owners_cars_cars" ("carsId") `, undefined);
    await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_f6c27062077d25785bd1ac742b1" FOREIGN KEY ("manufacturerId") REFERENCES "manufacturers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    await queryRunner.query(`ALTER TABLE "owners_cars_cars" ADD CONSTRAINT "FK_122d91bb5c8536623519d4f1584" FOREIGN KEY ("ownersId") REFERENCES "owners"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    await queryRunner.query(`ALTER TABLE "owners_cars_cars" ADD CONSTRAINT "FK_c1a7ec4b34d230219aef37da361" FOREIGN KEY ("carsId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "owners_cars_cars" DROP CONSTRAINT "FK_c1a7ec4b34d230219aef37da361"`, undefined);
    await queryRunner.query(`ALTER TABLE "owners_cars_cars" DROP CONSTRAINT "FK_122d91bb5c8536623519d4f1584"`, undefined);
    await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_f6c27062077d25785bd1ac742b1"`, undefined);
    await queryRunner.query(`DROP INDEX "IDX_c1a7ec4b34d230219aef37da36"`, undefined);
    await queryRunner.query(`DROP INDEX "IDX_122d91bb5c8536623519d4f158"`, undefined);
    await queryRunner.query(`DROP TABLE "owners_cars_cars"`, undefined);
    await queryRunner.query(`DROP TABLE "cars"`, undefined);
    await queryRunner.query(`DROP TABLE "owners"`, undefined);
    await queryRunner.query(`DROP TABLE "manufacturers"`, undefined);
  }

}
