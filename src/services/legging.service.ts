/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Legging } from 'src/entities/legging.entity';
import { LeggingDto } from './../create-dto/legging.dto';
import { Logger } from 'winston';


@Injectable()
export class LeggingService {
  constructor(  @InjectRepository(Legging)  private LeggingRepository: Repository<Legging>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(legging: Legging|LeggingDto) {
      return this.LeggingRepository.save(legging). catch ((error)=> {
      this.logger.error("Erreur de création d'un cash flow", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(legging: Legging[]|LeggingDto[]) {
    try {
      return this.LeggingRepository.save(legging);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    }
  }

  findAll() {
    return this.LeggingRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.LeggingRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.LeggingRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error("  Le lgging " +id+ " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Legging> {
    try{return this.LeggingRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, legging: Legging | LeggingDto) {
    return this.LeggingRepository.update(id, legging);
  }

  remove(id: number) {
    return this.LeggingRepository.delete(id);
  }

}
