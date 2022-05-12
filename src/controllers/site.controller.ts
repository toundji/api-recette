/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Site } from 'src/entities/site.entity';
import { SiteService } from 'src/services/site.service';
import { SiteDto } from './../create-dto/site.dto';

@ApiTags("Site")
@Controller('sties')
export class SiteController {
  constructor(private readonly rolesService: SiteService) {}

  @Post()
  create(@Body() site: SiteDto) {
    return this.rolesService.create(site);
  }


  @Post("/all")
  createAll(@Body() site: SiteDto[]) {
    return this.rolesService.createAll(site);
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
  update(@Param('id') id: string, @Body() site: SiteDto) {
    return this.rolesService.update(+id, site);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
