/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Percepteur } from 'src/entities/percepteur.entity';
import { PercepteurService } from 'src/services/percepteur.service';
import { PercepteurDto } from './../create-dto/percepteur.dto';

@ApiTags("Percepteur")
@Controller('percepteurs')
export class PercepteurController {
  constructor(private readonly rolesService: PercepteurService) {}

  @Post()
  create(@Body() percepteur: PercepteurDto) {
    return this.rolesService.create(percepteur);
  }


  @Post("/all")
  createAll(@Body() percepteur: PercepteurDto[]) {
    return this.rolesService.createAll(percepteur);
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
  update(@Param('id') id: string, @Body() percepteur: PercepteurDto) {
    return this.rolesService.update(+id, percepteur);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
