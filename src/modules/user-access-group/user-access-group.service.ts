import { Injectable } from '@nestjs/common';
import { CreateUserAccessGroupDto } from './dto/create-user-access-group.dto';
import { UpdateUserAccessGroupDto } from './dto/update-user-access-group.dto';

@Injectable()
export class UserAccessGroupService {
  create(createUserAccessGroupDto: CreateUserAccessGroupDto) {
    return 'This action adds a new userAccessGroup';
  }

  findAll() {
    return `This action returns all userAccessGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAccessGroup`;
  }

  update(id: number, updateUserAccessGroupDto: UpdateUserAccessGroupDto) {
    return `This action updates a #${id} userAccessGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAccessGroup`;
  }
}
