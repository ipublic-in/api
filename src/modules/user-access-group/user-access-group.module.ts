import { Module } from '@nestjs/common';
import { UserAccessGroupService } from './user-access-group.service';
import { UserAccessGroupController } from './user-access-group.controller';

@Module({
  controllers: [UserAccessGroupController],
  providers: [UserAccessGroupService]
})
export class UserAccessGroupModule {}
