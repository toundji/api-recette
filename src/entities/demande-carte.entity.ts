/* eslint-disable prettier/prettier */
import { Column } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity"
import { Audit } from './audit';


@Entity("demande_cartes")
export class DemandeCarte extends Audit{
  @Column({nullable:true})
  nom: string;
  
  @Column({nullable:false})
  prenom: string;

  @Column({nullable:false})
  tel: string;

  @Column({nullable:true})
  montant_recharge: string;

  @Column({nullable:false})
  kindiddocument: string;

  @Column({nullable:false})
  iddocument: string;

  @Column({nullable:false, default: 'EN ATTENTE'})
  statut: string;

  @Column({nullable:true})
  type_recharge: string;

  @Column({nullable:true})
  refer_recharge: string;
}