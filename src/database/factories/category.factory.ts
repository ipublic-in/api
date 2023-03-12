import { define } from 'typeorm-seeding';
import { Category } from '../../modules/category/entities/category.entity';
import * as faker from 'faker';

define(Category, (faker: typeof import('faker')) => {
  const category = new Category();
  category.name = faker.commerce.department();
  return category;
});
