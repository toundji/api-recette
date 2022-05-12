/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Rediton } from 'src/entities/rediton.entity';
import { ReditonDto } from './../create-dto/rediton.dto';

@Injectable()
export class ReditonService {
  constructor(  @InjectRepository(Rediton)  private ReditonRepository: Repository<Rediton>){}
  create(rediton: Rediton|ReditonDto) {
    return this.ReditonRepository.save(rediton);
  }

  createAll(rediton: Rediton[]|ReditonDto[]) {
    try {
      return this.ReditonRepository.save(rediton);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.ReditonRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.ReditonRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.ReditonRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
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
