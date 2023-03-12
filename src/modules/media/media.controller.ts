import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Media } from './entities/media.entity';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { plainToInstance } from 'class-transformer';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  async findAll(): Promise<Media[]> {
    return this.mediaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Media> {
    return this.mediaService.findOne(id);
  }

  @Post()
  async create(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
    const media = plainToInstance(Media, createMediaDto);
    return this.mediaService.create(media);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateMediaDto: UpdateMediaDto,
  ): Promise<Media> {
    const existingMedia = await this.mediaService.findOne(id);
    if (!existingMedia) {
      throw new Error('Media not found');
    }
    const updatedMedia = plainToInstance(Media, updateMediaDto);
    updatedMedia.id = id;
    return this.mediaService.update(id, updatedMedia);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.mediaService.delete(id);
  }
}
