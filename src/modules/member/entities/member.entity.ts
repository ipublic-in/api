import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity.entity';

@Entity('member')
export class Member extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  name: String;
}
