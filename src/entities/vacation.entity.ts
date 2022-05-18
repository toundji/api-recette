/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('vacations')
export class Vacation extends Audit {

    @Column({nullable:false})
    type : string;

    @Column({nullable:true})
    site_id : number;

}
