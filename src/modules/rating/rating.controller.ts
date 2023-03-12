import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Rating } from './../rating/entities/rating.entity';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { plainToInstance } from 'class-transformer';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  async findAll(): Promise<Rating[]> {
    return this.ratingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Rating> {
    return this.ratingService.findOne(id);
  }

  @Post()
  async create(@Body() createRatingDto: CreateRatingDto): Promise<Rating> {
    const rating = plainToInstance(Rating, createRatingDto);
    return this.ratingService.create(rating);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRatingDto: UpdateRatingDto,
  ): Promise<Rating> {
    const existingRating = await this.ratingService.findOne(id);
    if (!existingRating) {
      throw new Error('Rating not found');
    }
    const updatedRating = plainToInstance(Rating, updateRatingDto);
    updatedRating.id = id;
    return this.ratingService.update(id, updatedRating);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.ratingService.delete(id);
  }
}
