import { Test, TestingModule } from '@nestjs/testing';
import { AccessGroupCredentialController } from './access-group-credential.controller';
import { AccessGroupCredentialService } from './access-group-credential.service';

describe('AccessGroupCredentialController', () => {
  let controller: AccessGroupCredentialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessGroupCredentialController],
      providers: [AccessGroupCredentialService],
    }).compile();

    controller = module.get<AccessGroupCredentialController>(AccessGroupCredentialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
