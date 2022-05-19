/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Comptage } from 'src/entities/comptage.entity';
import { ComptageService } from 'src/services/comptage.service';
import { ComptageDto } from '../create-dto/comptage.dto';

@ApiTags("Comptage")
@Controller('comptage')
export class ComptageController {
  constructor(private readonly rolesService: ComptageService) {}

  @Post()
  create(@Body() compagne: ComptageDto) {
    return this.rolesService.create(compagne);
  }


  @Post("/all")
  createAll(@Body() compagne: ComptageDto[]) {
    return this.rolesService.createAll(compagne);
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
  update(@Param('id') id: string, @Body() compagne: ComptageDto) {
    return this.rolesService.update(+id, compagne);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
