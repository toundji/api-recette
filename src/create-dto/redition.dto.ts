/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class ReditionDto {

 
  @ApiProperty({required:true})
  site: string;

  @ApiProperty({required:true})
  percepteur: string;

  @ApiProperty({required:true})
  voie: string;

  @ApiProperty({required:true})
  temps_presence: string;

  @ApiProperty({required:true})
  debut_de_vacation: Date;

  @ApiProperty({required:true})
  fin_de_vacation: Date;

  @ApiProperty({required:true})
  superviseur: string;

  @ApiProperty({required:true})
  controleur: string;

  @ApiProperty({required:true})
  administrateur: string;

  @ApiProperty({required:true})
  nbre_vehicule: string;

  @ApiProperty({required:true})
  manquant: string;

  @ApiProperty({required:true})
  suplus: string;

  @ApiProperty({required:true})
  nbre_violation: string;

  @ApiProperty({required:true})
  nbre_exempte: string;

  @ApiProperty({required:true})
  declaration_billetaire: string;

  @ApiProperty({required:true})
  declaration_ticket_manuel: string;

  @ApiProperty({required:true})
  penalite_rejetter: string;

  @ApiProperty({required:true})
  penalite_valider_local: string;

  @ApiProperty({required:true})
  penalite_valider_ext: string;

  @ApiProperty({required:true})
  somme_declarer_caisse: string;

  @ApiProperty({required:true})
  resultat_compte: string;

  @ApiProperty({required:true})
  somme_gate: string;

  @ApiProperty({required:true})
  passage_gate_24: string;

  @ApiProperty({required:true})
  remarque: string;

  @ApiProperty({required:true})
  nbre_passage: string;

  @ApiProperty({required:true})
  montant_coupant: string;

  @ApiProperty({required:true})
  somme_totale_informatise: string;

  @ApiProperty({required:true})
  somme_informatise_sans_gate_24: string;

}
