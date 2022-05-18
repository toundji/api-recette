/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogsDto } from 'src/create-dto/logs.dto';
import { LogsService } from 'src/services/logs.service';

@ApiTags("Logs")
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  create(@Body() logs: LogsDto) {
    return this.logsService.create(logs);
  }


  @Post("/all")
  createAll(@Body() logs: LogsDto[]) {
    return this.logsService.createAll(logs);
  }

  @Get()
  findAll() {
    return this.logsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.logsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() logs: LogsDto) {
    return this.logsService.update(+id, logs);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logsService.remove(+id);
  }
}
