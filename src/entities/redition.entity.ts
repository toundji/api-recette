/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('redition')
export class Redition extends Audit {
  

  @Column({nullable:false})
  site: string;

  @Column({nullable:false})
  percepteur: string;

  @Column({nullable:false})
  voie: string;

  @Column({nullable:false})
  temps_presence: string;

  @Column({nullable:false})
  debut_de_vacation: Date;

  @Column({nullable:false})
  fin_de_vacation: Date;

  @Column({nullable:false})
  superviseur: string;

  @Column({nullable:false})
  controleur: string;

  @Column({nullable:false})
  administrateur: string;

  @Column({nullable:false})
  nbre_vehicule: string;

  @Column({nullable:false})
  manquant: string;

  @Column({nullable:false})
  suplus: string;

  @Column({nullable:false})
  nbre_violation: string;

  @Column({nullable:false})
  nbre_exempte: string;

  @Column({nullable:false})
  declaration_billetaire: string;

  @Column({nullable:false})
  declaration_ticket_manuel: string;

  @Column({nullable:false})
  penalite_rejetter: string;

  @Column({nullable:false})
  penalite_valider_local: string;

  @Column({nullable:false})
  penalite_valider_ext: string;

  @Column({nullable:false})
  somme_declarer_caisse: string;

  @Column({nullable:true})
  resultat_compte: string;

  @Column({nullable:true})
  somme_gate: string;

  @Column({nullable:true})
  passage_gate_24: string;

  @Column({nullable:true})
  remarque: string;

  @Column({nullable:true})
  nbre_passage: string;

  @Column({nullable:true})
  montant_coupant: string;

  @Column({nullable:true})
  somme_totale_informatise: string;

  @Column({nullable:true})
  somme_informatise_sans_gate_24: string;
}
