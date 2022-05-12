/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { DemandeCarte } from 'src/entities/demande-carte.entity';
import { DemandeCarteDto } from 'src/create-dto/demande-carte.dto';

@Injectable()
export class DemandeCarteService {
  constructor(  @InjectRepository(DemandeCarte)  private DemandeCarteRepository: Repository<DemandeCarte>){}
  create(demandeCarte: DemandeCarte |DemandeCarteDto) {
    return this.DemandeCarteRepository.save(demandeCarte);
  }

  createAll(demandeCarte: DemandeCarte[]  |DemandeCarteDto[]) {
    try {
      return this.DemandeCarteRepository.save(demandeCarte);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.DemandeCarteRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.DemandeCarteRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.DemandeCarteRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<DemandeCarte> {
    try{return this.DemandeCarteRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, demandeCarte: DemandeCarte |DemandeCarteDto) {
    return this.DemandeCarteRepository.update(id, demandeCarte);
  }

  remove(id: number) {
    return this.DemandeCarteRepository.delete(id);
  }

}
