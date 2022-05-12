/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Site } from 'src/entities/site.entity';
import { SiteDto } from './../create-dto/site.dto';

@Injectable()
export class SiteService {
  constructor(  @InjectRepository(Site)  private SiteRepository: Repository<Site>){}
  create(site: Site|SiteDto) {
    return this.SiteRepository.save(site);
  }

  createAll(site: Site[]|SiteDto[]) {
    try {
      return this.SiteRepository.save(site);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.SiteRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.SiteRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.SiteRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<Site> {
    try{return this.SiteRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, site: Site|SiteDto) {
    return this.SiteRepository.update(id, site);
  }

  remove(id: number) {
    return this.SiteRepository.delete(id);
  }

}
