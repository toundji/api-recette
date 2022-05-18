/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { SurchageUemoi } from 'src/entities/surchage-uemoi.entity';
import { SurchageUemoiDto } from './../create-dto/surchage-uemoi.dto';
import { Logger } from 'winston';


@Injectable()
export class SurchageUemoiService {
  constructor(  @InjectRepository(SurchageUemoi)  private SurchageUemoiRepository: Repository<SurchageUemoi>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(surchageUemoi: SurchageUemoi|SurchageUemoiDto) {

      return this.SurchageUemoiRepository.save(surchageUemoi). catch ((error)=> {
      this.logger.error("Erreur de création d'une surchage uemoi", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(surchageUemoi: SurchageUemoi[]|SurchageUemoiDto[]) {
    try {
      return this.SurchageUemoiRepository.save(surchageUemoi);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.SurchageUemoiRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.SurchageUemoiRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.SurchageUemoiRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error(" LA surchage uemoi  " +id+ " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<SurchageUemoi> {
    try{return this.SurchageUemoiRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, surchageUemoi: SurchageUemoi|SurchageUemoiDto) {
    return this.SurchageUemoiRepository.update(id, surchageUemoi);
  }

  remove(id: number) {
    return this.SurchageUemoiRepository.delete(id);
  }

}
