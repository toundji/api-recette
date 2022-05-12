/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Hydrocarbure } from 'src/entities/hydrocarbure.entity';
import { HydrocarbureDto } from './../create-dto/hydrocarbure.dto';

@Injectable()
export class HydrocarbureService {
  constructor(  @InjectRepository(Hydrocarbure)  private HydrocarbureRepository: Repository<Hydrocarbure>){}
  create(hydrocarbure: Hydrocarbure |HydrocarbureDto) {
    return this.HydrocarbureRepository.save(hydrocarbure);
  }

  createAll(hydrocarbure: Hydrocarbure[]|HydrocarbureDto[]) {
    try {
      return this.HydrocarbureRepository.save(hydrocarbure);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.HydrocarbureRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.HydrocarbureRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.HydrocarbureRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Hydrocarbure> {
    try{return this.HydrocarbureRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, hydrocarbure: Hydrocarbure|HydrocarbureDto) {
    return this.HydrocarbureRepository.update(id, hydrocarbure);
  }

  remove(id: number) {
    return this.HydrocarbureRepository.delete(id);
  }

}
