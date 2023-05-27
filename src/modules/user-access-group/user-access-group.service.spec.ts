import { Test, TestingModule } from '@nestjs/testing';
import { UserAccessGroupService } from './user-access-group.service';

describe('UserAccessGroupService', () => {
  let service: UserAccessGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAccessGroupService],
    }).compile();

    service = module.get<UserAccessGroupService>(UserAccessGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
