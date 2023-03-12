import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreatorService } from './creator.service';
import { Creator } from './entities/creator.entity';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { plainToClass } from 'class-transformer';

@Controller('creator')
export class CreatorController {
  constructor(private readonly creatorService: CreatorService) {}

  @Get()
  async findAll(): Promise<Creator[]> {
    return this.creatorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Creator> {
    return this.creatorService.findOne(id);
  }

  @Post()
  async create(@Body() createCreatorDto: CreateCreatorDto): Promise<Creator> {
    const creator = plainToClass(Creator, createCreatorDto);
    return this.creatorService.create(creator);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCreatorDto: UpdateCreatorDto,
  ): Promise<Creator> {
    const existingCreator = await this.creatorService.findOne(id);
    if (!existingCreator) {
      throw new Error('Creator not found');
    }
    const updatedCreator = plainToClass(Creator, updateCreatorDto);
    updatedCreator.id = id;
    return this.creatorService.update(id, updatedCreator);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.creatorService.delete(id);
  }
}
