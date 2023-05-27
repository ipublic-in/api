import { ApiProperty } from "@nestjs/swagger";
import { AccessGroupCredential } from "src/modules/access-group-credential/entities/access-group-credential.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('access_group')
export class AccessGroup extends BaseEntity {
    @ApiProperty({
        description: 'The id of the access group',
        example: 1,
    })
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    id: number;

    @ApiProperty({
        description: 'The name of the access group',
        example: 'Admin',
    })
    @Column({ type: 'varchar', length: 255, nullable: true, name: 'name' })
    name: string;

    @ApiProperty({
        description: 'The Code of the access group',
        example: 'ADM',
    })
    @Column({ type: 'varchar', length: 255, nullable: true, name: 'code' })
    code: string;

    // relation to access group credential
    @OneToMany(() => AccessGroupCredential, accessGroupCredential => accessGroupCredential.accessGroup)
    accessGroupCredentials: AccessGroupCredential[];
}
