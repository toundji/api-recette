/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserDto } from 'src/create-dto/user.dto';

@Injectable()
export class UserService {
  constructor(  @InjectRepository(User)  private UserRepository: Repository<User>){}
  create(user: User|UserDto) {
    return this.UserRepository.save(user);
  }

  createAll(user: User[]|UserDto[]) {
    try {
      return this.UserRepository.save(user);

    } catch (error) {
      console.log(error);
      throw new BadRequestException("Les données que nous avons réçues ne sont celles que  nous espérons");
    
    }
  }

  findAll() {
    return this.UserRepository.find();
  }

  findAllByIds(ids:number[]) {
    return this.UserRepository.findByIds(ids);
  }

  findOne(id: number) {
    return this.UserRepository.findOneOrFail(id).catch((e)=>{
        console.log(e);
      throw new NotFoundException("La donnée spécifiée n'existe pas");
    });
  }

 

  findOneByName(name: string):Promise<User> {
    try{return this.UserRepository.findOne({where:{
      nom: name.toUpperCase()
    }});}catch(e){
        console.log(e);

      throw new NotFoundException("Recupération d'un element", e.message);
    }
  }

  update(id: number, user: User|UserDto) {
    return this.UserRepository.update(id, user);
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }

}
