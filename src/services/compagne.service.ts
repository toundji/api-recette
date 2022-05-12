/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Compagne } from 'src/entities/compagne.entity';
import { CompagneDto } from 'src/create-dto/compagne.dto';

@Injectable()
export class CompagneService {
  constructor(  @InjectRepository(Compagne)  private CompagneRepository: Repository<Compagne>){}
  create(compagne: Compagne | CompagneDto) {
    return this.CompagneRepository.save(compagne);
  }

  createAll(compagne: Compagne[]  | CompagneDto[]) {
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
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Compagne> {
    try{return this.CompagneRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, compagne: Compagne | CompagneDto) {
    return this.CompagneRepository.update(id, compagne);
  }

  remove(id: number) {
    return this.CompagneRepository.delete(id);
  }

}
