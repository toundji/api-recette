/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('fiche_techniques')
export class FicheTechnique extends Audit {

  @Column({nullable:false})
  nbre_de_panne: string;

  @Column({nullable:false})
  nbre_coupure_electrique: string;

  @Column({nullable:false})
  disfonctionement: string;
}
