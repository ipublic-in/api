import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Creator } from '../creator/entities/creator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Creator])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
