/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { SurchageManuel } from 'src/entities/surchage-manuel.entity';
import { SurchageManuelDto } from './../create-dto/surchage-manuel.dto';
import { Logger } from 'winston';


@Injectable()
export class SurchageManuelService {
  constructor(  @InjectRepository(SurchageManuel)  private SurchageManuelRepository: Repository<SurchageManuel>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(surchageManuel: SurchageManuel|SurchageManuelDto) {
   
      return this.SurchageManuelRepository.save(surchageManuel). catch ((error)=> {
      this.logger.error("Erreur de création d'une surchage manuelle", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(surchageManuel: SurchageManuel[]|SurchageManuelDto[]) {
    try {
      return this.SurchageManuelRepository.save(surchageManuel);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.SurchageManuelRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.SurchageManuelRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.SurchageManuelRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error(" La surchage manuelle  " +id+ " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<SurchageManuel> {
    try{return this.SurchageManuelRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, surchageManuel: SurchageManuel|SurchageManuelDto) {
    return this.SurchageManuelRepository.update(id, surchageManuel);
  }

  remove(id: number) {
    return this.SurchageManuelRepository.delete(id);
  }

}
