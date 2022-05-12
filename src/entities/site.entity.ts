/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('sites')
export class Site extends Audit {

    @Column({nullable:false})
    nom: string;

    @Column({nullable:false})
    tarif: number;

}
