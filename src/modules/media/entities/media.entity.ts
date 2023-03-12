import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Creator } from '../../creator/entities/creator.entity';
import { Rating } from '../../rating/entities/rating.entity';
import { Review } from '../../review/entities/review.entity';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  file_url: string;

  @Column()
  thumbnail_url: string;

  @ManyToOne(() => Category, (category) => category.media)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Creator, (creator) => creator.creations)
  @JoinColumn({ name: 'creator_id' })
  creator: Creator;

  @OneToMany(() => Rating, (rating) => rating.media)
  ratings: Rating[];

  @OneToMany(() => Review, (review) => review.media)
  reviews: Review[];

  @OneToMany(() => Transaction, (transaction) => transaction.media)
  transactions: Transaction[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
