import { Test, TestingModule } from '@nestjs/testing';
import { UserAccessGroupController } from './user-access-group.controller';
import { UserAccessGroupService } from './user-access-group.service';

describe('UserAccessGroupController', () => {
  let controller: UserAccessGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAccessGroupController],
      providers: [UserAccessGroupService],
    }).compile();

    controller = module.get<UserAccessGroupController>(UserAccessGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
