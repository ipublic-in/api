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
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => Media, (media) => media.transactions)
  media: Media;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  payment_method: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
