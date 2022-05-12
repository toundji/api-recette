/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CashFlowDto {
  @ApiProperty({ required: true })
  percepteur: string;

  @ApiProperty({ required: true })
  recette_gate: string;

  @ApiProperty({ required: true })
  voie: string;

  @ApiProperty({ required: true })
  site: string;
  
  @ApiProperty({ required: true })
  date: Date;
  
  @ApiProperty({ required: true })
  date_debut: Date;
  
  @ApiProperty({ required: true })
  fin: string;
  
  @ApiProperty({ required: true })
  debut: string;
  
  @ApiProperty({ required: true })
  superviseur: string;
  
  @ApiProperty({ required: true })
  controleur: string;
  
  @ApiProperty({ required: true })
  recette_declaree: string;
  
  @ApiProperty({ required: true })
  recette_informatise: string;
  
  @ApiProperty({ required: true })
  nbre_passage: string;
  
  @ApiProperty({ required: true })
  nbre_gate: string;
  
  @ApiProperty({ required: true })
  nbre_penalite: string;
  
  @ApiProperty({ required: true })
  nbre_ticket: string;
  
  @ApiProperty({ required: true })
  somme_penalite: string;
  
  @ApiProperty({ required: true })
  violation: string;
  
  @ApiProperty({ required: true })
  nbre_exempte: string;
  
  @ApiProperty({ required: true })
  observation: string;
  
  @ApiProperty({ required: true })
  recette_ticket: string;
  
  @ApiProperty({ required: true })
  poids_penalite: string;
  
  @ApiProperty({ required: true })
  penalite_annulee: string;
  
  @ApiProperty({ required: true })
  surplus: string;
  
  @ApiProperty({ required: true })
  manquant: string;
  
  @ApiProperty({ required: true })
  montant_coupon: string;
}
