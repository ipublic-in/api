import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_access_group')
export class UserAccessGroup extends BaseEntity {
    @ApiProperty({
        description: 'The id of mapping table',
        example: 1,
    })
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
    id: number;

    @ApiProperty({
        description: 'The id of the user',
        example: 1,
    })
    @Column({ type: 'int', unsigned: true, name: 'user_id' })
    userId: number;

    @ApiProperty({
        description: 'The id of the access group',
        example: 1,
    })
    @Column({ type: 'int', unsigned: true, name: 'access_group_id' })
    accessGroupId: number;
}
