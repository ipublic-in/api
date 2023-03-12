import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Media } from '../../media/entities/media.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => Media, (media) => media.ratings)
  media: Media;

  @ManyToOne(() => User, (user) => user.ratings)
  user: User;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
