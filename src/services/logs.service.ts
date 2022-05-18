/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Logger } from 'winston';
import { Logs } from 'src/entities/logs.entity';
import { LogsDto } from 'src/create-dto/logs.dto';


@Injectable()
export class LogsService {
  constructor(  @InjectRepository(Logs)  private LogsRepository: Repository<Logs>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(logs: Logs|LogsDto) {
      return this.LogsRepository.save(logs). catch ((error)=> {
      this.logger.error("Erreur de création d'un cash flow", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(logs: Logs[] | LogsDto[]) {
    try {
      return this.LogsRepository.save(logs);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    }
  }

  findAll() {
    return this.LogsRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.LogsRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.LogsRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error("  Le lgging " +id+ " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Logs> {
    try{return this.LogsRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, logs: Logs | LogsDto) {
    return this.LogsRepository.update(id, logs);
  }

  remove(id: number) {
    return this.LogsRepository.delete(id);
  }

}
