import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Creator } from './entities/creator.entity';

@Injectable()
export class CreatorService {
  constructor(
    @InjectRepository(Creator)
    private readonly creatorRepository: Repository<Creator>,
  ) {}

  async findAll(): Promise<Creator[]> {
    return this.creatorRepository.find();
  }

  async findOne(id: number): Promise<Creator> {
    return this.creatorRepository.findOne(id);
  }

  async create(creator: Creator): Promise<Creator> {
    return this.creatorRepository.save(creator);
  }

  async update(id: number, creator: Creator): Promise<Creator> {
    const existingCreator = await this.findOne(id);
    if (!existingCreator) {
      throw new Error('Creator not found');
    }
    creator.id = id;
    return this.creatorRepository.save(creator);
  }

  async delete(id: number): Promise<void> {
    await this.creatorRepository.delete(id);
  }
}
