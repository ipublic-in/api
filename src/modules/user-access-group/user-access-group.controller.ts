import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAccessGroupService } from './user-access-group.service';
import { CreateUserAccessGroupDto } from './dto/create-user-access-group.dto';
import { UpdateUserAccessGroupDto } from './dto/update-user-access-group.dto';

@Controller('user-access-group')
export class UserAccessGroupController {
  constructor(private readonly userAccessGroupService: UserAccessGroupService) {}

  @Post()
  create(@Body() createUserAccessGroupDto: CreateUserAccessGroupDto) {
    return this.userAccessGroupService.create(createUserAccessGroupDto);
  }

  @Get()
  findAll() {
    return this.userAccessGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAccessGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAccessGroupDto: UpdateUserAccessGroupDto) {
    return this.userAccessGroupService.update(+id, updateUserAccessGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAccessGroupService.remove(+id);
  }
}
