/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Hydrocarbure } from 'src/entities/hydrocarbure.entity';
import { HydrocarbureService } from 'src/services/hydrocarbure.service';
import { HydrocarbureDto } from './../create-dto/hydrocarbure.dto';

@ApiTags("Hydrocarbure")
@Controller('hydrocarbure')
export class HydrocarbureController {
  constructor(private readonly rolesService: HydrocarbureService) {}

  @Post()
  create(@Body() hydrocarbure: HydrocarbureDto) {
    return this.rolesService.create(hydrocarbure);
  }


  @Post("/all")
  createAll(@Body() hydrocarbure: HydrocarbureDto[]) {
    return this.rolesService.createAll(hydrocarbure);
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
  update(@Param('id') id: string, @Body() hydrocarbure: HydrocarbureDto) {
    return this.rolesService.update(+id, hydrocarbure);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
