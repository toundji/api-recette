/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Rediton } from 'src/entities/rediton.entity';
import { ReditonDto } from './../create-dto/rediton.dto';
import { Logger } from 'winston';


@Injectable()
export class ReditonService {
  constructor(  @InjectRepository(Rediton)  private ReditonRepository: Repository<Rediton>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(rediton: Rediton|ReditonDto) {
    try {
      return this.ReditonRepository.save(rediton);
    } catch (error) {
      this.logger.error("Erreur de création d'une redition", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    }
  }

  createAll(rediton: Rediton[]|ReditonDto[]) {
      return this.ReditonRepository.save(rediton). catch ((error)=> {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  findAll() {
    return this.ReditonRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.ReditonRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.ReditonRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error(" LA retition  " +id+ " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Rediton> {
    try{return this.ReditonRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, rediton: Rediton|ReditonDto) {
    return this.ReditonRepository.update(id, rediton);
  }

  remove(id: number) {
    return this.ReditonRepository.delete(id);
  }

}
