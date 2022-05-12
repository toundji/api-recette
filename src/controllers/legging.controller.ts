/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Legging } from 'src/entities/legging.entity';
import { LeggingService } from 'src/services/legging.service';
import { LeggingDto } from './../create-dto/legging.dto';

@ApiTags("Legging")
@Controller('legging')
export class LeggingController {
  constructor(private readonly rolesService: LeggingService) {}

  @Post()
  create(@Body() legging: LeggingDto) {
    return this.rolesService.create(legging);
  }


  @Post("/all")
  createAll(@Body() legging: LeggingDto[]) {
    return this.rolesService.createAll(legging);
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
  update(@Param('id') id: string, @Body() legging: LeggingDto) {
    return this.rolesService.update(+id, legging);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
