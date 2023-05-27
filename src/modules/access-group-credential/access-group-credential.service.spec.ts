import { Test, TestingModule } from '@nestjs/testing';
import { AccessGroupCredentialService } from './access-group-credential.service';

describe('AccessGroupCredentialService', () => {
  let service: AccessGroupCredentialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessGroupCredentialService],
    }).compile();

    service = module.get<AccessGroupCredentialService>(AccessGroupCredentialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
