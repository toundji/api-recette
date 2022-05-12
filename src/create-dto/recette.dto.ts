/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class RecetteDto {
  @ApiProperty({ required: true })
  date_recettes: Date;

  @ApiProperty({ required: true })
  heure_debut: string;

  @ApiProperty({ required: true })
  heure_fin: string;

  @ApiProperty({ required: true })
  nombre_vehicule: string;

  @ApiProperty({ required: true })
  nombre_violation: string;

  @ApiProperty({ required: true })
  nombre_exemptes: string;

  @ApiProperty({ required: true })
  montant_coupant: string;

  @ApiProperty({ required: true })
  montant_percepteur: string;

  @ApiProperty({ required: true })
  montant_ecart: string;

  @ApiProperty({ required: true })
  montant_informatise: string;

  @ApiProperty({ required: true })
  observation: string;

  @ApiProperty({ required: true })
  sites_id: number;

  @ApiProperty({ required: true })
  voies_id: number;

  @ApiProperty({ required: true })
  percepteurs_id: number;

  @ApiProperty({ required: true })
  vacations_id: number;

  @ApiProperty({ required: true })
  user_id: number;

  @ApiProperty({ required: true })
  is_surchages: boolean;
}
