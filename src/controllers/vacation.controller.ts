/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {  Vacation } from 'src/entities/vacation.entity';
import { VacationService } from 'src/services/vacation.service';
import { VacationDto } from './../create-dto/vacation.dto';

@ApiTags("Vacation")
@Controller('vacations')
export class VacationController {
  constructor(private readonly rolesService: VacationService) {}

  @Post()
  create(@Body() vocation: VacationDto) {
    return this.rolesService.create(vocation);
  }


  @Post("/all")
  createAll(@Body() vocation: VacationDto[]) {
    return this.rolesService.createAll(vocation);
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
  update(@Param('id') id: string, @Body() vocation: VacationDto) {
    return this.rolesService.update(+id, vocation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
