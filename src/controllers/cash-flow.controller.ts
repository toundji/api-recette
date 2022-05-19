/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CashFlowDto } from 'src/create-dto/cash-flow.dto';
import { CashFlowService } from 'src/services/cash-flow.service';

@ApiTags("Cash Flow")
@Controller('cashFlow')
export class CashFlowController {
  constructor(private readonly rolesService: CashFlowService) {}

  @Post()
  create(@Body() cashFlow: CashFlowDto) {
    return this.rolesService.create(cashFlow);
  }


  @Post("/all")
  createAll(@Body() cashFlow: CashFlowDto[]) {
    return this.rolesService.createAll(cashFlow);
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
  update(@Param('id') id: string, @Body() cashFlow: CashFlowDto) {
    return this.rolesService.update(+id, cashFlow);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
