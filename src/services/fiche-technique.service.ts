/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { FicheTechnique } from 'src/entities/fiche-technique.entity';
import { FicheTechniqueDto } from 'src/create-dto/fiche-technique.dto';

@Injectable()
export class FicheTechniqueService {
  constructor(  @InjectRepository(FicheTechnique)  private FicheTechniqueRepository: Repository<FicheTechnique>){}
  create(ficheTechnique: FicheTechnique | FicheTechniqueDto) {
    return this.FicheTechniqueRepository.save(ficheTechnique);
  }

  createAll(ficheTechnique: FicheTechnique[] | FicheTechniqueDto[]) {
    try {
      return this.FicheTechniqueRepository.save(ficheTechnique);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.FicheTechniqueRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.FicheTechniqueRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.FicheTechniqueRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<FicheTechnique> {
    try{return this.FicheTechniqueRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, ficheTechnique: FicheTechnique|FicheTechniqueDto) {
    return this.FicheTechniqueRepository.update(id, ficheTechnique);
  }

  remove(id: number) {
    return this.FicheTechniqueRepository.delete(id);
  }

}
