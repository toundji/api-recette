/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Voie } from 'src/entities/voie.entity';
import { VoieService } from 'src/services/voie.service';
import { VoieDto } from './../create-dto/voie.dto';

@ApiTags("Voies")
@Controller('voies')
export class VoieController {
  constructor(private readonly rolesService: VoieService) {}

  @Post()
  create(@Body() voie: VoieDto) {
    return this.rolesService.create(voie);
  }


  @Post("/all")
  createAll(@Body() voie: VoieDto[]) {
    return this.rolesService.createAll(voie);
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
  update(@Param('id') id: string, @Body() voie: VoieDto) {
    return this.rolesService.update(+id, voie);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
