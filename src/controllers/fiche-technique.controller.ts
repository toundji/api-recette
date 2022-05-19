/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FicheTechniqueDto } from 'src/create-dto/fiche-technique.dto';
import { FicheTechnique } from 'src/entities/fiche-technique.entity';
import { FicheTechniqueService } from 'src/services/fiche-technique.service';

@ApiTags("Fiches Techinique")
@Controller('fiche/techniques')
export class FicheTechniqueController {
  constructor(private readonly rolesService: FicheTechniqueService) {}

  @Post("store")
  create(@Body() ficheTechnique: FicheTechniqueDto) {
    return this.rolesService.create(ficheTechnique);
  }


  @Post("/all")
  createAll(@Body() ficheTechnique: FicheTechniqueDto[]) {
    return this.rolesService.createAll(ficheTechnique);
  }

  @Get("get")
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ficheTechnique: FicheTechniqueDto) {
    return this.rolesService.update(+id, ficheTechnique);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
