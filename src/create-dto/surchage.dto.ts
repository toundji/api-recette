/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class SurchageDto {
  @ApiProperty({ required: true })
  immatriculation: string;

  @ApiProperty({ required: true })
  poid_rouland: string;

  @ApiProperty({ required: true })
  surcharge: string;

  @ApiProperty({ required: true })
  montant_surcharge: string;

  @ApiProperty({ required: true })
  type_surcharge: string;

  @ApiProperty({ required: true })
  date_recette: string;

  @ApiProperty({ required: true })
  heure_recette: string;

  @ApiProperty({ required: true })
  essieu: string;

  @ApiProperty({ required: true })
  poids_roulant: string;

  @ApiProperty({ required: true })
  poid_autorise: string;

  @ApiProperty({ required: true })
  excedent: string;

  @ApiProperty({ required: true })
  montant_apayer: string;

  @ApiProperty({ required: true })
  montant_payer: string;

  @ApiProperty({ required: true })
  percepteur: string;

  @ApiProperty({ required: true })
  type_vacation: Date;

  @ApiProperty({ required: true })
  redition_id: number;

  @ApiProperty({ required: true })
  site: string;

  @ApiProperty({ required: true })
  voie: string;
}
