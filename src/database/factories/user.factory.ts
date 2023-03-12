import { define } from 'typeorm-seeding';
import { User } from '../../modules/user/entities/user.entity';
import { hashSync } from 'bcrypt';

define(User, (faker) => {
  const user = new User();
  user.name = faker.name.firstName() + ' ' + faker.name.lastName();
  user.email = faker.internet.email();
  user.password = hashSync('123456', 10);
  return user;
});
