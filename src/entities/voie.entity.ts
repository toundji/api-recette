/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('voies')
export class Voie extends Audit {

    @Column({nullable:false})
    nom : string;

    @Column({nullable:true})
    sens : string;

    @Column({nullable:false})
    site_id : number;

}
