/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('surcharge_uemoi')
export class SurchageUemoi extends Audit {

  @Column({nullable:false})
  immatriculation : string;

  @Column({nullable:false})
  poid_rouland : string;

  @Column({nullable:false})
  surcharge : string;

  @Column({nullable:false})
  montant_surcharge : string;

  @Column({nullable:false})
  type_surcharge : string;

  @Column({nullable:false})
  date_recette : string;

  @Column({nullable:false})
  essieu : string;

  @Column({nullable:false})
  poids_roulant : string;

  @Column({nullable:false})
  poid_autorise : string;

  @Column({nullable:false})
  excedent : string;

  @Column({nullable:false})
  montant_apayer : string;

  @Column({nullable:false})
  montant_payer : string;

  @Column({nullable:false})
  percepteur : string;

  @Column({nullable:false})
  site : string;

  @Column({nullable:false})
  cabine : string;

  @Column({nullable:false})
  sens : string;
  

}
