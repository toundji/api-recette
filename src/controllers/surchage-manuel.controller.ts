/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SurchageManuel } from 'src/entities/surchage-manuel.entity';
import { SurchageManuelService } from 'src/services/surchage-manuel.service';
import { SurchageManuelDto } from './../create-dto/surchage-manuel.dto';

@ApiTags("Surchage Manuel")
@Controller('surchage-manuel')
export class SurchageManuelController {
  constructor(private readonly rolesService: SurchageManuelService) {}

  @Post()
  create(@Body() surchageManuel: SurchageManuelDto) {
    return this.rolesService.create(surchageManuel);
  }


  @Post("/all")
  createAll(@Body() surchageManuel: SurchageManuelDto[]) {
    return this.rolesService.createAll(surchageManuel);
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
  update(@Param('id') id: string, @Body() surchageManuel: SurchageManuelDto) {
    return this.rolesService.update(+id, surchageManuel);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
