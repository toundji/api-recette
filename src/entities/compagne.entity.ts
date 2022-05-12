/* eslint-disable prettier/prettier */
import { Column, Entity } from "typeorm";
import { Audit } from "./audit";

@Entity("compagnes")
export class Compagne extends Audit{

  @Column({nullable:true})
  percepteur: string;
  
  @Column({nullable:true})
  voie: string;

  @Column({nullable:true})
  site: string;

  @Column({nullable:true})
  montant_passage: number;

  @Column({nullable:true})
  montant: number;

  @Column({nullable:true})
  nbres_camion: string;
  
  @Column({nullable:true})
  heure_debut: Date;
  
  @Column({nullable:true})
  heure_fin: Date;
}