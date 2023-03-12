import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async create(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async update(id: number, category: Category): Promise<Category> {
    const existingCategory = await this.findOne(id);
    if (!existingCategory) {
      throw new Error('Category not found');
    }
    category.id = id;
    return this.categoryRepository.save(category);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
