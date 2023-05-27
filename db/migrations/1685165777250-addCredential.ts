import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCredential1685165777250 implements MigrationInterface {
    name = 'AddCredential1685165777250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`credential\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, \`code\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`credential\``);
    }

}
