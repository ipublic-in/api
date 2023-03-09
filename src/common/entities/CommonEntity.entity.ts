import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CommonEntity extends BaseEntity {
  @ApiProperty({
    description: 'Created By',
    example: 'XD4G87NB',
  })
  @Column({
    nullable: true,
    length: 8,
  })
  created_by: String;

  @ApiProperty({
    description: 'Created At',
    example: '2022-01-14 18:05:07',
  })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({
    description: 'Deleted By',
    example: 'XD4G87NB',
  })
  @Column({
    nullable: true,
    length: 8,
  })
  deleted_by: String;

  @ApiProperty({
    description: 'Deleted At',
    example: '2022-01-14 18:05:07',
  })
  @DeleteDateColumn()
  deleted_at: Date;

  @ApiProperty({
    description: 'Updated By',
    example: 'XD4G87NB',
  })
  @Column({
    nullable: true,
    length: 8,
  })
  updated_by: String;

  @ApiProperty({
    description: 'Updated At',
    example: '2022-01-14 18:05:07',
  })
  @UpdateDateColumn()
  updated_at: Date;
}
