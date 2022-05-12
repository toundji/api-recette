/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('surchages_manuels')
export class SurchageManuel extends Audit {

  @Column({nullable:false})
  immatriculation: string;

  @Column({nullable:true})
  montant_surcharge: string;
  

  @Column({nullable:false})
  type_surcharge: string;

  @Column({nullable:false})
  date_passage: Date;

  @Column({nullable:false})
  heure_passage: string;

  @Column({nullable:false})
  essieu: string;

  @Column({nullable:false})
  poids_roulant: number;

  @Column({nullable:false})
  poid_autorise: number;

  @Column({nullable:false})
  excedent: number;

  @Column({nullable:false})
  montant_apayer: number;

  @Column({nullable:false})
  montant_payer: number;

  @Column({nullable:false})
  observation: string;

  @Column({nullable:false})
  voies_id: number;

  @Column({nullable:false})
  type: string;

  @Column({nullable:false})
  sites_id: number;
  

}
