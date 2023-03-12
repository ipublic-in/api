import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Media } from '../../media/entities/media.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Media, (media) => media.category)
  media: Media[];
}
