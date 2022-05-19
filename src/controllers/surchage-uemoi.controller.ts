/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SurchageUemoi } from 'src/entities/surchage-uemoi.entity';
import { SurchageUemoiService } from 'src/services/surchage-uemoi.service';
import { SurchageUemoiDto } from './../create-dto/surchage-uemoi.dto';

@ApiTags("Surchage Uemoi")
@Controller('surchageUemoi')
export class SurchageUemoiController {
  constructor(private readonly rolesService: SurchageUemoiService) {}

  @Post()
  create(@Body() surchageUemoi: SurchageUemoiDto) {
    return this.rolesService.create(surchageUemoi);
  }


  @Post("/all")
  createAll(@Body() surchageUemoi: SurchageUemoiDto[]) {
    return this.rolesService.createAll(surchageUemoi);
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
  update(@Param('id') id: string, @Body() surchageUemoi: SurchageUemoiDto) {
    return this.rolesService.update(+id, surchageUemoi);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
