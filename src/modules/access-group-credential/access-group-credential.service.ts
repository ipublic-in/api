import { Injectable } from '@nestjs/common';
import { CreateAccessGroupCredentialDto } from './dto/create-access-group-credential.dto';
import { UpdateAccessGroupCredentialDto } from './dto/update-access-group-credential.dto';

@Injectable()
export class AccessGroupCredentialService {
  create(createAccessGroupCredentialDto: CreateAccessGroupCredentialDto) {
    return 'This action adds a new accessGroupCredential';
  }

  findAll() {
    return `This action returns all accessGroupCredential`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessGroupCredential`;
  }

  update(id: number, updateAccessGroupCredentialDto: UpdateAccessGroupCredentialDto) {
    return `This action updates a #${id} accessGroupCredential`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessGroupCredential`;
  }
}
