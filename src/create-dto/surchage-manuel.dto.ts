/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class SurchageManuelDto {
  @ApiProperty({ required: true })
  immatriculation: string;

  @ApiProperty({ required: true })
  montant_surcharge: string;

  @ApiProperty({ required: true })
  type_surcharge: string;

  @ApiProperty({ required: true })
  date_passage: Date;

  @ApiProperty({ required: true })
  heure_passage: string;

  @ApiProperty({ required: true })
  essieu: string;

  @ApiProperty({ required: true })
  poids_roulant: number;

  @ApiProperty({ required: true })
  poid_autorise: number;

  @ApiProperty({ required: true })
  excedent: number;

  @ApiProperty({ required: true })
  montant_apayer: number;

  @ApiProperty({ required: true })
  montant_payer: number;

  @ApiProperty({ required: true })
  observation: string;

  @ApiProperty({ required: true })
  voies_id: number;

  @ApiProperty({ required: true })
  type: string;

  @ApiProperty({ required: true })
  sites_id: number;
}
