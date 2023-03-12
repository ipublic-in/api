import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rating } from '../../rating/entities/rating.entity';
import { Review } from '../../review/entities/review.entity';
import { Transaction } from '../../transaction/entities/transaction.entity';
import { Creator } from '../../creator/entities/creator.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  @OneToMany(() => Creator, (creator) => creator.user)
  creators: Creator[];
}
