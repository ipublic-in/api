import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async findAll(): Promise<Review[]> {
    return this.reviewRepository.find({
      relations: ['creator', 'media'],
    });
  }

  async findOne(id: number): Promise<Review> {
    return this.reviewRepository.findOne(id, {
      relations: ['creator', 'media'],
    });
  }

  async create(review: Review): Promise<Review> {
    return this.reviewRepository.save(review);
  }

  async update(id: number, review: Review): Promise<Review> {
    const existingReview = await this.findOne(id);
    if (!existingReview) {
      throw new Error('Review not found');
    }
    review.id = id;
    return this.reviewRepository.save(review);
  }

  async delete(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}
