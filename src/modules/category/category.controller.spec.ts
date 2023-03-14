import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

describe('CategoryController', () => {
  let controller: CategoryController;
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(Category),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    service = module.get<CategoryService>(CategoryService);
  });

  describe('findAll', () => {
    it('should return all categories from the database', async () => {
      const expectedCategories = [
        { name: 'Category 1' },
        { name: 'Category 2' },
      ];

      // Mock the CategoryService findAll method to return expectedCategories
      jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(expectedCategories as Category[]);

      // Get all categories using the CategoryController
      const actualCategories = await controller.findAll();

      // Compare the expected and actual categories
      expect(actualCategories).toEqual(expectedCategories);
    });
  });
});
