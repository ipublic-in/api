import { PartialType } from '@nestjs/swagger';
import { CreateUserAccessGroupDto } from './create-user-access-group.dto';

export class UpdateUserAccessGroupDto extends PartialType(CreateUserAccessGroupDto) {}
