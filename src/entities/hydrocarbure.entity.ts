/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('hydrocarbure')
export class Hydrocarbure extends Audit {

    @Column({nullable:true})
    percepteur: string;

    @Column({nullable:true})
    date: Date;

    @Column({nullable:true})
    prix: string;

    @Column({nullable:true})
    site: string;

    @Column({nullable:true})
    cabine: string;

    @Column({nullable:true})
    sens: string;

    @Column({nullable:true})
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

    @Column({nullable:true})
    provenance: string;

    @Column({nullable:true})
    plaque: string;
}
