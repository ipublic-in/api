import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDob1685162198439 implements MigrationInterface {
    name = 'AddDob1685162198439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`dob\` date NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`dob\``);
    }

}
