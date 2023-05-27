import { Module } from '@nestjs/common';
import { AccessGroupCredentialService } from './access-group-credential.service';
import { AccessGroupCredentialController } from './access-group-credential.controller';

@Module({
  controllers: [AccessGroupCredentialController],
  providers: [AccessGroupCredentialService]
})
export class AccessGroupCredentialModule {}
