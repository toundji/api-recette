/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
} from 'typeorm';
import { Audit } from './audit';

@Entity('rediton2')
export class Rediton extends Audit {
  static entityName = 'rediton2';


  @Column({nullable:false})
  percepteur: string;

  @Column({nullable:false})
  date: Date;

  @Column({nullable:false})
  prix: number;

  @Column({nullable:true})
  site: string;

  @Column({nullable:false})
  cabine: string;

  @Column({nullable:false})
  sens: string;

  @Column({nullable:false})
  type: string;

  @Column({nullable:true})
  ptrac: string;

  @Column({nullable:true})
  cmaes: string;

  @Column({nullable:true})
  es: string;

  @Column({nullable:true})
  ptt: string;

  @Column({nullable:true})
  over: string;

  @Column({nullable:false})
  caisse: string;

  @Column({nullable:true})
  plaque: string;

  @Column({nullable:false})
  date_api: Date;

  @Column({nullable:false})
  refer: string;

  @Column({nullable:true})
  visa: string;

  @Column({nullable:false})
  heure: string;

  @Column({default:true})
  isSent:boolean;
}
