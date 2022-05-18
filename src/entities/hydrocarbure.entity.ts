/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('hydrocarbure')
export class Hydrocarbure extends Audit {

    @Column({nullable:false})
    percepteur: string;

    @Column({nullable:false})
    date: Date;

    @Column({nullable:false})
    prix: string;

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
    destination: string;

    @Column({nullable:true})
    es: string;

    @Column({nullable:true})
    ptt: string;

    @Column({nullable:true})
    conducteur: string;

    @Column({nullable:false})
    provenance: string;

    @Column({nullable:true})
    plaque: string;
}
