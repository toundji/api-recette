/* eslint-disable prettier/prettier */
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';
import { Column } from 'typeorm';

@Entity('users')
export class User extends Audit {

    @Column({nullable:false})
    name : string;
    @Column({unique:false})
    email : string;

    @Column({nullable:true})
    email_verified_at : string;

    @Column({nullable:false})
    password : string;

    @Column({nullable:false})
    role : string;

    @Column({nullable:true})
    site_id : number;

    @Column({nullable:true})
    remember_token : string;
    
}
