/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('percepteurs')
export class Percepteur extends Audit {
    @Column()
    nom:string;

    @Column()
    prenom:string;

}
