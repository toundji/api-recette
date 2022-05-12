/* eslint-disable prettier/prettier */
import { Column } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity"
import { Audit } from './audit';


@Entity("demande-carte")
export class DemandeCarte extends Audit{
  @Column({nullable:true})
  nom: string;
  
  @Column({nullable:true})
  prenom: string;

  @Column({nullable:true})
  tel: string;

  @Column({nullable:true})
  montant_recharge: string;

  @Column({nullable:true})
  kindiddocument: string;

  @Column({nullable:true})
  iddocument: string;

  @Column({nullable:true})
  statut: string;

  @Column({nullable:true})
  type_recharge: string;

  @Column({nullable:true})
  refer_recharge: string;
}