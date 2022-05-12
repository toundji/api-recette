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

  @Column({nullable:false})
  site: string;

  @Column({nullable:false})
  cabine: string;

  @Column({nullable:false})
  sens: string;

  @Column({nullable:false})
  type: string;

  @Column({nullable:false})
  ptrac: string;

  @Column({nullable:false})
  cmaes: string;

  @Column({nullable:false})
  es: string;

  @Column({nullable:false})
  ptt: string;

  @Column({nullable:false})
  over: string;

  @Column({nullable:false})
  caisse: string;

  @Column({nullable:false})
  plaque: string;

  @Column({nullable:false})
  date_api: Date;

  @Column({nullable:false})
  refer: string;

  @Column({nullable:false})
  visa: string;

  @Column({nullable:false})
  heure: string;

  @Column({default:true})
  isSent:boolean;
}
