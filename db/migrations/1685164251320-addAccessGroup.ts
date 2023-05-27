import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAccessGroup1685164251320 implements MigrationInterface {
    name = 'AddAccessGroup1685164251320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`access_group\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, \`code\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`access_group\``);
    }

}
