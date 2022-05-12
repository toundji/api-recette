/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Compagne } from 'src/entities/compagne.entity';
import { CompagneService } from 'src/services/compagne.service';
import { CompagneDto } from './../create-dto/compagne.dto';

@ApiTags("Compagne")
@Controller('Compagne')
export class CompagneController {
  constructor(private readonly rolesService: CompagneService) {}

  @Post()
  create(@Body() compagne: CompagneDto) {
    return this.rolesService.create(compagne);
  }


  @Post("/all")
  createAll(@Body() compagne: CompagneDto[]) {
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
  update(@Param('id') id: string, @Body() compagne: CompagneDto) {
    return this.rolesService.update(+id, compagne);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
