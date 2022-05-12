/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { UserDto } from './../create-dto/user.dto';

@ApiTags("User")
@Controller('users')
export class UserController {
  constructor(private readonly rolesService: UserService) {}

  @Post()
  create(@Body() user: UserDto) {
    return this.rolesService.create(user);
  }


  @Post("/all")
  createAll(@Body() user: UserDto[]) {
    return this.rolesService.createAll(user);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UserDto) {
    return this.rolesService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
