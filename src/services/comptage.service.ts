/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Comptage } from 'src/entities/comptage.entity';
import { ComptageDto } from 'src/create-dto/comptage.dto';
import { Logger } from 'winston';


@Injectable()
export class ComptageService {
  constructor(  @InjectRepository(Comptage)  private CompagneRepository: Repository<Comptage>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(compagne: Comptage | ComptageDto) {
    
      return this.CompagneRepository.save(compagne). catch ((error)=> {
      this.logger.error("Erreur de création d'un cash flow", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons")
      });
    
    
  }

  createAll(compagne: Comptage[]  | ComptageDto[]) {
    try {
      return this.CompagneRepository.save(compagne);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    }
  }

  findAll() {
    return this.CompagneRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.CompagneRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.CompagneRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error("La compagne" +id+ " introuvable",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Comptage> {
    try{return this.CompagneRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, compagne: Comptage | ComptageDto) {
    return this.CompagneRepository.update(id, compagne);
  }

  remove(id: number) {
    return this.CompagneRepository.delete(id);
  }

}
