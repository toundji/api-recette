/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DemandeCarte } from 'src/entities/demande-carte.entity';
import { DemandeCarteService } from 'src/services/demande-carte.service';
import { DemandeCarteDto } from './../create-dto/demande-carte.dto';

@ApiTags("Demande carte")
@Controller('demande-carte')
export class DemandeCarteController {
  constructor(private readonly rolesService: DemandeCarteService) {}

  @Post()
  create(@Body() demandeCarte: DemandeCarteDto) {
    return this.rolesService.create(demandeCarte);
  }


  @Post("/all")
  createAll(@Body() demandeCarte: DemandeCarteDto[]) {
    return this.rolesService.createAll(demandeCarte);
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
  update(@Param('id') id: string, @Body() demandeCarte: DemandeCarteDto) {
    return this.rolesService.update(+id, demandeCarte);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
