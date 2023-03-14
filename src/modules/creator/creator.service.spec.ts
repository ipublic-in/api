import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from '../media/entities/media.entity';
import { User } from '../user/entities/user.entity';
import { CreatorService } from './creator.service';
import { Creator } from './entities/creator.entity';

describe('CreatorService', () => {
  let service: CreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatorService,
        {
          provide: getRepositoryToken(Creator),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Media),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CreatorService>(CreatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
