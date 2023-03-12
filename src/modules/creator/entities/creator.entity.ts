import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Media } from '../../media/entities/media.entity';

@Entity()
export class Creator extends BaseEntity {
  static creators(creators: any): Creator {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column({ nullable: true })
  donation_link?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  insta?: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  user_id: number;

  @OneToMany(() => Media, (media) => media.creator)
  creations: Media[];

  @OneToOne(() => User, (user) => user.creator)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
