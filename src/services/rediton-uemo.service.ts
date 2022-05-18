/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ReditonUemo } from 'src/entities/rediton-uemo.entity';
import { ReditonUemoDto } from './../create-dto/rediton-uemo.dto';
import { Logger } from 'winston';


@Injectable()
export class ReditonUemoService {
  constructor(  @InjectRepository(ReditonUemo)  private ReditonUemoRepository: Repository<ReditonUemo>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(reditonUemo: ReditonUemo|ReditonUemoDto) {
   
      return this.ReditonUemoRepository.save(reditonUemo). catch ((error)=> {
      this.logger.error("Erreur de création d'une rédition uemoi", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(reditonUemo: ReditonUemo[]|ReditonUemoDto[]) {
    try {
      return this.ReditonUemoRepository.save(reditonUemo);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.ReditonUemoRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.ReditonUemoRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.ReditonUemoRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error(" La retition uemoi  " +id+ " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<ReditonUemo> {
    try{return this.ReditonUemoRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, reditonUemo: ReditonUemo|ReditonUemoDto) {
    return this.ReditonUemoRepository.update(id, reditonUemo);
  }

  remove(id: number) {
    return this.ReditonUemoRepository.delete(id);
  }

}
