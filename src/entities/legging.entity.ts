/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('leggings')
export class Legging extends Audit {

    @Column({nullable:true})
    date:Date;

    @Column({nullable:true})
    heure:string;

    @Column({nullable:true})
    old_caisse:string;

    @Column({nullable:true})
    voie:string;

    @Column({nullable:true})
    new_caisse:string;

    @Column({nullable:true})
    old_vehicule:string;

    @Column({nullable:true})
    old_compte:string;

    @Column({nullable:true})
    admin:string;

    @Column({nullable:true})
    statut:string;

    @Column({nullable:true})
    site:string;
    
}
