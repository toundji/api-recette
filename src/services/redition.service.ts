/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Redition } from 'src/entities/redition.entity';
import { ReditionDto } from './../create-dto/redition.dto';

@Injectable()
export class ReditionService {
  constructor(  @InjectRepository(Redition)  private reditionRepository: Repository<Redition>){}
  create(redition: Redition|ReditionDto) {
    return this.reditionRepository.save(redition);
  }

  createAll(redition: Redition[]|ReditionDto[]) {
    try {
      throw new BadRequestException("Cette action n'est pas possible. ");
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    }
  }

  findAll() {
    return this.reditionRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.reditionRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.reditionRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Redition> {
    try{return this.reditionRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, redition: Redition|ReditionDto) {
    return this.reditionRepository.update(id, redition);
  }

  remove(id: number) {
    return this.reditionRepository.delete(id);
  }

}
