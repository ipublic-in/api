import { Test, TestingModule } from '@nestjs/testing';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { Media } from '../media/entities/media.entity';
import { User } from '../user/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ReviewController', () => {
  let controller: ReviewController;
  let service: ReviewService;
  let mediaRepository: Repository<Media>;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [
        ReviewService,
        {
          provide: 'ReviewService',
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Review),
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

    controller = module.get<ReviewController>(ReviewController);
    service = module.get<ReviewService>('ReviewService');
    mediaRepository = module.get<Repository<Media>>(getRepositoryToken(Media));
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('findAll', () => {
    it('should return an array of reviews', async () => {
      const user1 = await userRepository.create({ name: 'John Doe' }).save();
      const user2 = await userRepository.create({ name: 'Jane Doe' }).save();

      const media1 = await mediaRepository
        .create({
          title: 'Media 1',
          description: 'Description 1',
        })
        .save();
      const media2 = await mediaRepository
        .create({
          title: 'Media 2',
          description: 'Description 2',
        })
        .save();

      const expectedReviews: Review[] = [new Review(), new Review()];

      expectedReviews[0].id = 1;
      expectedReviews[0].content = 'Review 1';
      expectedReviews[0].media = media1;
      expectedReviews[0].user = user1;

      expectedReviews[1].id = 2;
      expectedReviews[1].content = 'Review 2';
      expectedReviews[1].media = media2;
      expectedReviews[1].user = user2;

      // jest.spyOn(service, 'findAll').mockResolvedValue(expectedReviews);
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(expectedReviews));

      const actualReviews = await controller.findAll();

      expect(actualReviews).toEqual(expectedReviews);
    });
  });
});
