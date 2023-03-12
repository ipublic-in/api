import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from '../../media/entities/media.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => Media, (media) => media.reviews)
  media: Media;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
