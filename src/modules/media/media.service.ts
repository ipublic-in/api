import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async findAll(): Promise<Media[]> {
    return this.mediaRepository.find({
      relations: ['creator', 'ratings', 'reviews', 'transactions'],
    });
  }

  async findOne(id: number): Promise<Media> {
    return this.mediaRepository.findOne(id, {
      relations: ['creator', 'ratings', 'reviews', 'transactions'],
    });
  }

  async create(media: Media): Promise<Media> {
    return this.mediaRepository.save(media);
  }

  async update(id: number, media: Media): Promise<Media> {
    const existingMedia = await this.findOne(id);
    if (!existingMedia) {
      throw new Error('Media not found');
    }
    media.id = id;
    return this.mediaRepository.save(media);
  }

  async delete(id: number): Promise<void> {
    await this.mediaRepository.delete(id);
  }
}
