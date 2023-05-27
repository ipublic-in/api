import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessGroupCredentialService } from './access-group-credential.service';
import { CreateAccessGroupCredentialDto } from './dto/create-access-group-credential.dto';
import { UpdateAccessGroupCredentialDto } from './dto/update-access-group-credential.dto';

@Controller('access-group-credential')
export class AccessGroupCredentialController {
  constructor(private readonly accessGroupCredentialService: AccessGroupCredentialService) {}

  @Post()
  create(@Body() createAccessGroupCredentialDto: CreateAccessGroupCredentialDto) {
    return this.accessGroupCredentialService.create(createAccessGroupCredentialDto);
  }

  @Get()
  findAll() {
    return this.accessGroupCredentialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessGroupCredentialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessGroupCredentialDto: UpdateAccessGroupCredentialDto) {
    return this.accessGroupCredentialService.update(+id, updateAccessGroupCredentialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessGroupCredentialService.remove(+id);
  }
}
