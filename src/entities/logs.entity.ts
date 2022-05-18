/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('logs')
export class Logs extends Audit {
  
    @Column({nullable:false})
  percepteur: string;
  
  @Column({nullable:false})
  date: Date;
  
  @Column({nullable:false})
  heure: string;
  
  @Column({nullable:false})
  cabine: string;
  
  @Column({nullable:false})
  site: string;
  
  @Column({nullable:false})
  old_percepteur: string;
  
  @Column({nullable:false})
  agent_homintec: string;
  
  @Column({nullable:false, default:false})
  is_sent: string;
  
  @Column({nullable:false})
  refer: string;
  
  @Column({nullable:false})
  statut: string;
 

}
