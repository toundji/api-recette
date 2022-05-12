/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Percepteur } from 'src/entities/percepteur.entity';
import { PercepteurDto } from './../create-dto/percepteur.dto';

@Injectable()
export class PercepteurService {
  constructor(  @InjectRepository(Percepteur)  private PercepteurRepository: Repository<Percepteur>){}
  create(percepteur: Percepteur |PercepteurDto) {
    return this.PercepteurRepository.save(percepteur);
  }

  createAll(percepteur: Percepteur[] |PercepteurDto[]) {
    try {
      return this.PercepteurRepository.save(percepteur);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.PercepteurRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.PercepteurRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.PercepteurRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Percepteur> {
    try{return this.PercepteurRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, percepteur: Percepteur |PercepteurDto) {
    return this.PercepteurRepository.update(id, percepteur);
  }

  remove(id: number) {
    return this.PercepteurRepository.delete(id);
  }

}
