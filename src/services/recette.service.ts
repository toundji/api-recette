/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Recette } from 'src/entities/recette.entity';
import { RecetteDto } from './../create-dto/recette.dto';

@Injectable()
export class RecetteService {
  constructor(  @InjectRepository(Recette)  private RecetteRepository: Repository<Recette>){}
  create(recette: Recette |RecetteDto)  {
    return this.RecetteRepository.save(recette);
  }

  createAll(recette: Recette[]|RecetteDto[]) {
    try {
      return this.RecetteRepository.save(recette);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.RecetteRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.RecetteRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.RecetteRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Recette> {
    try{return this.RecetteRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, recette: Recette|RecetteDto) {
    return this.RecetteRepository.update(id, recette);
  }

  remove(id: number) {
    return this.RecetteRepository.delete(id);
  }

}
