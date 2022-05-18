/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('leggings')
export class Legging extends Audit {

    @Column({nullable:false})
    date:Date;

    @Column({nullable:false})
    heure:string;

    @Column({nullable:false})
    old_caisse:string;

    @Column({nullable:false})
    voie:string;

    @Column({nullable:false})
    new_caisse:string;

    @Column({nullable:false})
    old_vehicule:string;

    @Column({nullable:false})
    old_compte:string;

    @Column({nullable:false})
    admin:string;

    @Column({nullable:false})
    statut:string;

    @Column({nullable:false})
    site:string;
}
