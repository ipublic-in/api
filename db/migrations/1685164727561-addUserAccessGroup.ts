import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAccessGroup1685164727561 implements MigrationInterface {
    name = 'AddUserAccessGroup1685164727561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_access_group\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`user_id\` int UNSIGNED NOT NULL, \`access_group_id\` int UNSIGNED NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user_access_group\``);
    }

}
