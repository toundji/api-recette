/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Site } from 'src/entities/site.entity';
import { SiteDto } from './../create-dto/site.dto';
import { Logger } from 'winston';


@Injectable()
export class SiteService {
  constructor(  @InjectRepository(Site)  private SiteRepository: Repository<Site>,
  @Inject('winston')
  private readonly logger: Logger,){}
  create(site: Site|SiteDto) {
      return this.SiteRepository.save(site). catch ((error)=> {
      this.logger.error("Erreur de création d'un site", error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    });
  }

  createAll(site: Site[]|SiteDto[]) {
    try {
      return this.SiteRepository.save(site);

    } catch (error) {
      this.logger.error("Erreur de création des sites", error);
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
      this.logger.error(" Le site  " +id+ " n'existe pas",e);
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
