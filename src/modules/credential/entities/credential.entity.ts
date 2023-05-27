import { ApiProperty } from "@nestjs/swagger";
import { AccessGroupCredential } from "src/modules/access-group-credential/entities/access-group-credential.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('credential')
export class Credential {
    @ApiProperty({
        description: 'The id of the credential',
        example: 1,
    })
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    id: number;

    @ApiProperty({
        description: 'The name of the credential',
        example: 'Create User',
    })
    @Column({ type: 'varchar', length: 255, nullable: true, name: 'name' })
    name: string;

    @ApiProperty({
        description: 'The code of the credential',
        example: 'CREATE_USER',
    })
    @Column({ type: 'varchar', length: 255, nullable: true, name: 'code' })
    code: string;

    // relation to access group credential
    @OneToMany(() => AccessGroupCredential, accessGroupCredential => accessGroupCredential.credential)
    accessGroupCredentials: AccessGroupCredential[];
}
