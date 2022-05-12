/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { CashFlow } from 'src/entities/cash-flow.entity';
import { CashFlowDto } from './../create-dto/cash-flow.dto';

@Injectable()
export class CashFlowService {
  constructor(@InjectRepository(CashFlow)  private CashFlowRepository: Repository<CashFlow>){}
  create(cashFlow: CashFlow | CashFlowDto) {
    return this.CashFlowRepository.save(cashFlow);
  }

  createAll(cashFlow: CashFlow[] | CashFlowDto[]) {
    try {
      return this.CashFlowRepository.save(cashFlow);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.CashFlowRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.CashFlowRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.CashFlowRepository.findOneOrFail(id).catch((e)=>{
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<CashFlow> {
    try{return this.CashFlowRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, cashFlow: CashFlow | CashFlowDto) {
    return this.CashFlowRepository.update(id, cashFlow);
  }

  remove(id: number) {
    return this.CashFlowRepository.delete(id);
  }

}
