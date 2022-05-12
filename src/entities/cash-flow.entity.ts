/* eslint-disable prettier/prettier */
import {
    
    Column,
    Entity,
   
  } from 'typeorm';import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { Audit } from './audit';

@Entity('cash_flows')
export class CashFlow extends Audit {
  
  @Column({nullable:true})
  percepteur: string;

  @Column({nullable:true})
  recette_gate: string;

  @Column({nullable:true})
  voie: string;

  @Column({nullable:true})
  site: string;

  @Column({nullable:true})
  date: Date;

  @Column({nullable:true})
  date_debut: Date;

  @Column({nullable:true})
  fin: string;

  @Column({nullable:true})
  debut: string;

  @Column({nullable:true})
  superviseur: string;

  @Column({nullable:true})
  controleur: string;

  @Column({nullable:true})
  recette_declaree: string;

  @Column({nullable:true})
  recette_informatise: string;

  @Column({nullable:true})
  nbre_passage: string;

  @Column({nullable:true})
  nbre_gate: string;

  @Column({nullable:true})
  nbre_penalite: string;

  @Column({nullable:true})
  nbre_ticket: string;

  @Column({nullable:true})
  somme_penalite: string;

  @Column({nullable:true})
  violation: string;

  @Column({nullable:true})
  nbre_exempte: string;

  @Column({nullable:true})
  observation: string;

  @Column({nullable:true})
  recette_ticket: string;

  @Column({nullable:true})
  poids_penalite: string;

  @Column({nullable:true})
  penalite_annulee: string;

  @Column({nullable:true})
  surplus: string;

  @Column({nullable:true})
  manquant: string;
  
  @Column({nullable:true})
  montant_coupon: string;
 
}
