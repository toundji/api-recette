/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReditonUemo } from 'src/entities/rediton-uemo.entity';
import { ReditonUemoService } from 'src/services/rediton-uemo.service';
import { ReditonUemoDto } from './../create-dto/rediton-uemo.dto';

@ApiTags("Rediton Uemo")
@Controller('rediton-uemo')
export class ReditonUemoController {
  constructor(private readonly rolesService: ReditonUemoService) {}

  @Post()
  create(@Body() reditonUemo: ReditonUemoDto) {
    return this.rolesService.create(reditonUemo);
  }


  @Post("/all")
  createAll(@Body() reditonUemo: ReditonUemoDto[]) {
    return this.rolesService.createAll(reditonUemo);
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
  update(@Param('id') id: string, @Body() reditonUemo: ReditonUemoDto) {
    return this.rolesService.update(+id, reditonUemo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
