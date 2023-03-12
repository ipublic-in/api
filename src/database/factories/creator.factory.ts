import { define } from 'typeorm-seeding';
import * as faker from 'faker';
import { Creator } from '../../modules/creator/entities/creator.entity';
import { User } from '../../modules/user/entities/user.entity';

define(
  Creator,
  (faker: typeof import('faker'), { users }: { users: User[] }) => {
    console.log('got users array as ', users);
    const creator = new Creator();
    creator.name = faker.name.findName();
    creator.bio = faker.name.jobDescriptor();
    creator.donation_link = faker.finance.accountName();
    creator.twitter = '@' + faker.name.lastName();
    creator.insta = creator.twitter;
    creator.email = faker.internet.email();
    creator.phone = faker.phone.phoneNumber();
    creator.user = faker.random.arrayElement(users);
    return creator;
  },
);
