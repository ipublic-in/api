import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessGroupService } from './access-group.service';
import { CreateAccessGroupDto } from './dto/create-access-group.dto';
import { UpdateAccessGroupDto } from './dto/update-access-group.dto';

@Controller('access-group')
export class AccessGroupController {
  constructor(private readonly accessGroupService: AccessGroupService) {}

  @Post()
  create(@Body() createAccessGroupDto: CreateAccessGroupDto) {
    return this.accessGroupService.create(createAccessGroupDto);
  }

  @Get()
  findAll() {
    return this.accessGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessGroupDto: UpdateAccessGroupDto) {
    return this.accessGroupService.update(+id, updateAccessGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessGroupService.remove(+id);
  }
}
