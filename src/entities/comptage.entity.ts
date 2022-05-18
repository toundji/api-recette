/* eslint-disable prettier/prettier */
import { Column, Entity } from "typeorm";
import { Audit } from "./audit";

@Entity("comptages")
export class Comptage extends Audit{

  @Column({nullable:false})
  percepteur: string;
  
  @Column({nullable:true})
  voie: string;

  @Column({nullable:false})
  site: string;

  @Column({nullable:true})
  montant_passage: number;

  @Column({nullable:true})
  montant: number;

  @Column({nullable:true})
  nbres_camion: string;
  
  @Column({nullable:false})
  heure_debut: string;
  
  @Column({nullable:false})
  heure_fin: string;
}