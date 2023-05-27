import { ApiProperty } from "@nestjs/swagger";
import { AccessGroup } from "src/modules/access-group/entities/access-group.entity";
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('access_group_credential')
export class AccessGroupCredential extends BaseEntity {
    @ApiProperty({
        description: 'The id of the mapping table',
        example: 1,
    })
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    id: number;
    
    @ApiProperty({
        description: 'The id of the access group',
        example: 1,
    })
    accessGroupId: number;

    @ApiProperty({
        description: 'The id of the credential',
        example: 1,
    })
    credentialId: number;

    // relation to access group
    @ManyToOne(() => AccessGroup, accessGroup => accessGroup.accessGroupCredentials)
    accessGroup: AccessGroup;

    // relation to credential
    @ManyToOne(() => AccessGroup, accessGroup => accessGroup.accessGroupCredentials)
    credential: AccessGroup;
}
