import { User } from 'src/modules/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Media } from '../../media/entities/media.entity';

@Entity()
export class Creator {
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

  @OneToMany(() => User, (user) => user.creators)
  user: Media[];
}
