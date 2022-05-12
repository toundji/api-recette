/* eslint-disable prettier/prettier */
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('recettes')
export class Recette extends Audit {
    
  @Column()
    date_recettes:Date;
    @Column()
    heure_debut:string;
    @Column()
    heure_fin:string;
    @Column()
    nombre_vehicule:string;
    @Column()
    nombre_violation:string;
    @Column()
    nombre_exemptes:string;
    @Column()
    montant_coupant:string;
    @Column()
    montant_percepteur:string;

    @Column({nullable:true})
    montant_ecart:string;

    @Column({nullable:false})
    montant_informatise:string;

    @Column({nullable:false})
    observation:string;

    @Column({nullable:false})
    sites_id:number;

    @Column({nullable:false})
    voies_id:number;

    @Column({nullable:false})
    percepteurs_id:number;

    @Column({nullable:false})
    vacations_id:number;

    @Column({nullable:false})
    user_id:number;

    @Column({nullable:false})
    is_surchages:boolean;
}