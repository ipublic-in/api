import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './../rating/entities/rating.entity';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
  ) {}

  async findAll(): Promise<Rating[]> {
    return this.ratingRepository.find({
      relations: ['media', 'user'],
    });
  }

  async findOne(id: number): Promise<Rating> {
    return this.ratingRepository.findOne(id, {
      relations: ['media', 'user'],
    });
  }

  async create(rating: Rating): Promise<Rating> {
    return this.ratingRepository.save(rating);
  }

  async update(id: number, rating: Rating): Promise<Rating> {
    const existingRating = await this.findOne(id);
    if (!existingRating) {
      throw new Error('Rating not found');
    }
    rating.id = id;
    return this.ratingRepository.save(rating);
  }

  async delete(id: number): Promise<void> {
    await this.ratingRepository.delete(id);
  }
}
