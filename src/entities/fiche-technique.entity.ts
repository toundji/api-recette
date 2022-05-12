/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('fiche_techniques')
export class FicheTechnique extends Audit {

  @Column({nullable:true})
  nbre_de_panne: string;

  @Column({nullable:true})
  nbre_coupure_electrique: string;

  @Column({nullable:true})
  disfonctionement: string;
}
