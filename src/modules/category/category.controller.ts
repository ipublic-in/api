import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Category } from './../category/entities/category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { plainToInstance } from 'class-transformer';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const category = plainToInstance(Category, createCategoryDto);
    return this.categoryService.create(category);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const existingCategory = await this.categoryService.findOne(id);
    if (!existingCategory) {
      throw new Error('Category not found');
    }
    const updatedCategory = plainToInstance(Category, updateCategoryDto);
    updatedCategory.id = id;
    return this.categoryService.update(id, updatedCategory);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.categoryService.delete(id);
  }
}
