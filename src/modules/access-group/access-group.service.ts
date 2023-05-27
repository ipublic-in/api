import { Injectable } from '@nestjs/common';
import { CreateAccessGroupDto } from './dto/create-access-group.dto';
import { UpdateAccessGroupDto } from './dto/update-access-group.dto';

@Injectable()
export class AccessGroupService {
  create(createAccessGroupDto: CreateAccessGroupDto) {
    return 'This action adds a new accessGroup';
  }

  findAll() {
    return `This action returns all accessGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessGroup`;
  }

  update(id: number, updateAccessGroupDto: UpdateAccessGroupDto) {
    return `This action updates a #${id} accessGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessGroup`;
  }
}
