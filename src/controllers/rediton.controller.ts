/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Rediton } from 'src/entities/rediton.entity';
import { ReditonService } from 'src/services/rediton.service';
import { ReditonDto } from './../create-dto/rediton.dto';

@ApiTags("Rediton")
@Controller('rediton')
export class ReditonController {
  constructor(private readonly rolesService: ReditonService) {}

  @Post()
  create(@Body() rediton: ReditonDto) {
    return this.rolesService.create(rediton);
  }


  @Post("/all")
  createAll(@Body() rediton: ReditonDto[]) {
    return this.rolesService.createAll(rediton);
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
  update(@Param('id') id: string, @Body() rediton: ReditonDto) {
    return this.rolesService.update(+id, rediton);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
