/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Recette } from 'src/entities/recette.entity';
import { RecetteService } from 'src/services/recette.service';
import { RecetteDto } from './../create-dto/recette.dto';

@ApiTags("Recette")
@Controller('recettes')
export class RecetteController {
  constructor(private readonly rolesService: RecetteService) {}

  @Post()
  create(@Body() recette: RecetteDto) {
    return this.rolesService.create(recette);
  }


  @Post("/all")
  createAll(@Body() recette: RecetteDto[]) {
    return this.rolesService.createAll(recette);
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
  update(@Param('id') id: string, @Body() recette: RecetteDto) {
    return this.rolesService.update(+id, recette);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
