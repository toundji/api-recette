/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Surchage } from 'src/entities/surchage.entity';
import { SurchageDto } from './../create-dto/surchage.dto';

@Injectable()
export class SurchageService {
  constructor(  @InjectRepository(Surchage)  private SurchageRepository: Repository<Surchage>){}
  create(surchage: Surchage|SurchageDto) {
    return this.SurchageRepository.save(surchage);
  }

  createAll(surchage: Surchage[]|SurchageDto[]) {
    try {
      return this.SurchageRepository.save(surchage);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.SurchageRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.SurchageRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.SurchageRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Surchage> {
    try{return this.SurchageRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, surchage: Surchage|SurchageDto) {
    return this.SurchageRepository.update(id, surchage);
  }

  remove(id: number) {
    return this.SurchageRepository.delete(id);
  }

}
