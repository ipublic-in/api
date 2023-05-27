import { Test, TestingModule } from '@nestjs/testing';
import { AccessGroupController } from './access-group.controller';
import { AccessGroupService } from './access-group.service';

describe('AccessGroupController', () => {
  let controller: AccessGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessGroupController],
      providers: [AccessGroupService],
    }).compile();

    controller = module.get<AccessGroupController>(AccessGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
