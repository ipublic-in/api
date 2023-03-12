import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1678602723614 implements MigrationInterface {
    name = 'Initial1678602723614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rating\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` int NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`mediaId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`review\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` text NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`mediaId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`creator\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`bio\` varchar(255) NOT NULL, \`donation_link\` varchar(255) NULL, \`twitter\` varchar(255) NULL, \`insta\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`media\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`file_url\` varchar(255) NOT NULL, \`thumbnail_url\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`category_id\` int NULL, \`creator_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transaction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`amount\` decimal(10,2) NOT NULL, \`payment_method\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`mediaId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rating\` ADD CONSTRAINT \`FK_39c0116c53061c2157dfa3149df\` FOREIGN KEY (\`mediaId\`) REFERENCES \`media\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rating\` ADD CONSTRAINT \`FK_a6c53dfc89ba3188b389ef29a62\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_da7c5a8f531b8b52dea7380bf5b\` FOREIGN KEY (\`mediaId\`) REFERENCES \`media\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_1337f93918c70837d3cea105d39\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_326851e1eda929d9a682fc62657\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_23a06164f1c6976ffc1fa862b78\` FOREIGN KEY (\`creator_id\`) REFERENCES \`creator\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_dc51fa0959a28e0fa6032c02531\` FOREIGN KEY (\`mediaId\`) REFERENCES \`media\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_605baeb040ff0fae995404cea37\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_605baeb040ff0fae995404cea37\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_dc51fa0959a28e0fa6032c02531\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_23a06164f1c6976ffc1fa862b78\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_326851e1eda929d9a682fc62657\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_1337f93918c70837d3cea105d39\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_da7c5a8f531b8b52dea7380bf5b\``);
        await queryRunner.query(`ALTER TABLE \`rating\` DROP FOREIGN KEY \`FK_a6c53dfc89ba3188b389ef29a62\``);
        await queryRunner.query(`ALTER TABLE \`rating\` DROP FOREIGN KEY \`FK_39c0116c53061c2157dfa3149df\``);
        await queryRunner.query(`DROP TABLE \`transaction\``);
        await queryRunner.query(`DROP TABLE \`media\``);
        await queryRunner.query(`DROP TABLE \`creator\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`review\``);
        await queryRunner.query(`DROP TABLE \`rating\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
