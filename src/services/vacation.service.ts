/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Vacation } from 'src/entities/vacation.entity';
import { VacationDto } from './../create-dto/vacation.dto';

@Injectable()
export class VacationService {
  constructor(  @InjectRepository(Vacation)  private VacationRepository: Repository<Vacation>){}
  create(vacation: Vacation|VacationDto) {
    return this.VacationRepository.save(vacation);
  }

  createAll(vacation: Vacation[]|VacationDto[]) {
    try {
      return this.VacationRepository.save(vacation);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.VacationRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.VacationRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.VacationRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Vacation> {
    try{return this.VacationRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, vacation: Vacation|VacationDto) {
    return this.VacationRepository.update(id, vacation);
  }

  remove(id: number) {
    return this.VacationRepository.delete(id);
  }

}
