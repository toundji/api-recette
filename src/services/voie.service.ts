/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Voie } from 'src/entities/voie.entity';
import { VoieDto } from './../create-dto/voie.dto';
import { Logger } from 'winston';


@Injectable()
export class VoieService {
  constructor(  @InjectRepository(Voie)  private VoieRepository: Repository<Voie>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(voie: Voie|VoieDto) {
    
      return this.VoieRepository.save(voie). catch ((error)=> {
      this.logger.error("Erreur de création d'une voie", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(voie: Voie[]|VoieDto[]) {
    try {
      return this.VoieRepository.save(voie);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.VoieRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.VoieRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.VoieRepository.findOneOrFail(id).catch((e)=>{
      this.logger.error("La voie " + id + " n'existe pas",e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

  findOneByName(name: string):Promise<Voie> {
    try{return this.VoieRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, voie: Voie|VoieDto) {
    return this.VoieRepository.update(id, voie);
  }

  remove(id: number) {
    return this.VoieRepository.delete(id);
  }

}
