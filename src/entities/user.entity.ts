/* eslint-disable prettier/prettier */
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';
import { Column } from 'typeorm';

@Entity('users')
export class User extends Audit {

    @Column({nullable:false})
    name : string;
    @Column({unique:true})
    email : string;

    @Column({nullable:false})
    email_verified_at : string;

    @Column({nullable:false})
    password : string;

    @Column({nullable:false})
    role : string;

    @Column({nullable:false})
    site_id : number;

    @Column({nullable:false})
    remember_token : string;
    
}
