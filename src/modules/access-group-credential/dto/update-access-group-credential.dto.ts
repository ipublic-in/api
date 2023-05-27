import { PartialType } from '@nestjs/swagger';
import { CreateAccessGroupCredentialDto } from './create-access-group-credential.dto';

export class UpdateAccessGroupCredentialDto extends PartialType(CreateAccessGroupCredentialDto) {}
