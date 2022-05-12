/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Redition } from 'src/entities/redition.entity';
import { ReditionService } from 'src/services/redition.service';
import { ReditionDto } from './../create-dto/redition.dto';

@ApiTags("redition")
@Controller('reditions')
export class ReditionController {
  constructor(private readonly rolesService: ReditionService) {}

  @Post()
  create(@Body() redition: ReditionDto) {
    return this.rolesService.create(redition);
  }


  @Post("/all")
  createAll(@Body() redition: ReditionDto[]) {
    return this.rolesService.createAll(redition);
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
  update(@Param('id') id: string, @Body() redition: ReditionDto) {
    return this.rolesService.update(+id, redition);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
