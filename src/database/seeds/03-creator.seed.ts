import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Creator } from '../../modules/creator/entities/creator.entity';
import { User } from '../../modules/user/entities/user.entity';

export default class CreateCreator implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.createQueryBuilder().delete().from(Creator).execute();

    const users = await connection.getRepository(User).find();
    console.log('creator seed users', users);

    await factory(Creator)({
      users: users,
    }).createMany(2);
  }
}
