import { Module } from '@nestjs/common';
import { AccessGroupService } from './access-group.service';
import { AccessGroupController } from './access-group.controller';

@Module({
  controllers: [AccessGroupController],
  providers: [AccessGroupService]
})
export class AccessGroupModule {}
