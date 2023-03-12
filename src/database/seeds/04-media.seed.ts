import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Media } from '../../modules/media/entities/media.entity';
import { Category } from '../../modules/category/entities/category.entity';
import { Creator } from '../../modules/creator/entities/creator.entity';

export default class CreateMedia implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.createQueryBuilder().delete().from(Media).execute();

    const categories = await connection.getRepository(Category).find();
    const creators = await connection.getRepository(Creator).find();

    for (const category of categories) {
      await factory(Media)({
        categories: categories,
        creators: creators,
      }).createMany(10);
    }
  }
}
