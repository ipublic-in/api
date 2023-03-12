import { define } from 'typeorm-seeding';
import * as faker from 'faker';
import { Media } from '../../modules/media/entities/media.entity';
import { Category } from '../../modules/category/entities/category.entity';
import { Creator } from '../../modules/creator/entities/creator.entity';

define(
  Media,
  (
    faker: typeof import('faker'),
    { categories, creators }: { categories: Category[]; creators: Creator[] },
  ) => {
    const media = new Media();
    media.title = faker.lorem.words(3);
    media.description = faker.lorem.words(10);
    media.file_url = faker.image.imageUrl();
    media.thumbnail_url = faker.image.imageUrl();
    media.category = faker.random.arrayElement(categories);
    media.creator = faker.random.arrayElement(creators);
    return media;
  },
);
