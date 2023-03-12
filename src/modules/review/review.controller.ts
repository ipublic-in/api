import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Review } from './entities/review.entity';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { plainToInstance } from 'class-transformer';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Review> {
    return this.reviewService.findOne(id);
  }

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    const review = plainToInstance(Review, createReviewDto);
    return this.reviewService.create(review);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ): Promise<Review> {
    const existingReview = await this.reviewService.findOne(id);
    if (!existingReview) {
      throw new Error('Review not found');
    }
    const updatedReview = plainToInstance(Review, updateReviewDto);
    updatedReview.id = id;
    return this.reviewService.update(id, updatedReview);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.reviewService.delete(id);
  }
}
